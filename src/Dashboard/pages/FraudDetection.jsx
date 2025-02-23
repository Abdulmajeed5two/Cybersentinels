import React, { useState } from "react";

const FraudDetection = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeFraud = async () => {
    setLoading(true);
    const genAI = new GoogleGenerativeAI("AIzaSyBm5zWFVNgqemqrZcU7VNgSLLrVALM0h9M");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
      const response = await model.generateContent(`Analyze this message for fraud: "${inputText}"`);
      const textResponse = await response.response.text();
      setResult(textResponse);
    } catch (error) {
      console.error("Error analyzing fraud:", error);
      setResult("Error analyzing fraud. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h2>Fraud Detection AI</h2>
      <textarea
        rows="5"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter email or message text..."
      />
      <button onClick={analyzeFraud} disabled={loading}>
        {loading ? "Analyzing..." : "Check for Fraud"}
      </button>
      {result && <p><strong>Analysis:</strong> {result}</p>}
    </div>
  );
};

export default FraudDetection;
