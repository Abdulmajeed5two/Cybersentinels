import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBm5zWFVNgqemqrZcU7VNgSLLrVALM0h9M");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const ContentFilter = () => {
  const [text, setText] = useState("");
  const [filteredText, setFilteredText] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeContent = async (inputText) => {
    setLoading(true);
    try {
      const chatSession = model.startChat();
      const response = await chatSession.sendMessage(`Analyze this text for privacy risks: ${inputText}`);
      const aiResponse = response.response.text();
      if (aiResponse.includes("privacy risk") || aiResponse.includes("sensitive")) {
        setFilteredText("⚠️ Content Removed for Privacy ⚠️");
      } else {
        setFilteredText(inputText);
      }
    } catch (error) {
      console.error("AI Analysis Error:", error);
      setFilteredText("❌ Error analyzing content.");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px", textAlign: "center" }}>
      <h2>🔒 AI Privacy Protection</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        rows={4}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button
        onClick={() => analyzeContent(text)}
        disabled={loading}
        style={{
          padding: "10px 15px",
          background: loading ? "#ccc" : "#007bff",
          color: "#fff",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          marginBottom: "10px"
        }}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      <p><strong>Filtered Output:</strong> {filteredText}</p>
    </div>
  );
};

export default ContentFilter;
