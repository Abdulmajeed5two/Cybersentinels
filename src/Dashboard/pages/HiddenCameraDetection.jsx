import React, { useEffect, useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

const HiddenCameraDetection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [hiddenCameraDetected, setHiddenCameraDetected] = useState(false);
  const beepAudio = new Audio("/beep.mp3");

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();
    detectObjects();
  }, []);

  const detectObjects = async () => {
    const model = await cocoSsd.load();
    setInterval(async () => {
      if (!videoRef.current || !canvasRef.current) return;

      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const predictions = await model.detect(video);

      let foundHiddenCamera = false;

      predictions.forEach((prediction) => {
        if (["camera", "cell phone"].includes(prediction.class)) {
          ctx.strokeStyle = "green";
          ctx.lineWidth = 4;
          ctx.strokeRect(
            prediction.bbox[0],
            prediction.bbox[1],
            prediction.bbox[2],
            prediction.bbox[3]
          );

          ctx.fillStyle = "green";
          ctx.fillText(
            prediction.class,
            prediction.bbox[0],
            prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10
          );

          if (prediction.class === "camera") {
            foundHiddenCamera = true;
          }
        }
      });

      if (foundHiddenCamera && !hiddenCameraDetected) {
        setHiddenCameraDetected(true);
        beepAudio.play();
      }
    }, 1000);
  };

  return (
    <div>
      <h2>Hidden Camera Detection</h2>
      <video ref={videoRef} autoPlay playsInline muted style={{ width: "100%", height: "auto" }} />
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
      {hiddenCameraDetected && <p style={{ color: "red", fontWeight: "bold" }}>Hidden Camera Detected!</p>}
    </div>
  );
};

export default HiddenCameraDetection;
