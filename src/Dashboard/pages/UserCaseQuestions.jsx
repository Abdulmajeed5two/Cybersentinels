import React, { useState } from "react";
import apiService from "../../services/apiService";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBm5zWFVNgqemqrZcU7VNgSLLrVALM0h9M");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const chatSession = model.startChat();

const UserCaseQuestions = () => {
  const [caseType, setCaseType] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [summary, setSummary] = useState("");

  // Define case types
  const caseTypes = [
    "Fraud Detection",
    "Deepfake Prevention",
    "User Privacy Protection",
    "Content Removal",
  ];

  // Handle case selection
  const handleCaseSelection = async (type) => {
    setCaseType(type);
    const aiResponse = await chatSession.sendMessage(
      `Generate security-related questions for ${type}.`
    );
    setQuestions(aiResponse.response.text().split("\n"));
  };

  // Handle user responses
  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  // Submit data to backend
  const submitUsercase = async () => {
    try {
      const response = await apiService.post("/questionnaire/create", {
        caseType,
        questions,
        answers,
      });
      console.log("Submitted successfully", response);
    } catch (error) {
      console.log("Submission error", error);
    }
  };

  // Generate summary using AI
  const generateSummary = async () => {
    const summaryResponse = await chatSession.sendMessage(
      `Summarize this case study:\nCase Type: ${caseType}\nAnswers: ${answers.join(", ")}`
    );
    setSummary(summaryResponse.response.text());
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-xl font-semibold mb-4">Select a Case Type:</h2>
      <div className="relative w-64">
        <select
          className="w-full p-2 border-b-2 border-gray-400 text-center focus:outline-none"
          onChange={(e) => handleCaseSelection(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Select Type
          </option>
          {caseTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      
      {questions.length > 0 && (
        <div className="mt-6 w-full max-w-lg">
          <h3 className="text-lg font-semibold mb-4 text-center">Answer the following AI-generated questions:</h3>
          {questions.map((q, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-700 mb-2">{q}</p>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                onChange={(e) => handleAnswerChange(index, e.target.value)}
              />
            </div>
          ))}
          <div className="flex justify-center gap-4 mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={submitUsercase}>
              Submit Answers
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600" onClick={generateSummary}>
              Get Summary
            </button>
          </div>
        </div>
      )}

      {summary && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg w-full max-w-lg">
          <h3 className="text-lg font-semibold mb-2 text-center">AI Summary:</h3>
          <p className="text-gray-700">{summary}</p>
        </div>
      )}
    </div>
  );
};

export default UserCaseQuestions;