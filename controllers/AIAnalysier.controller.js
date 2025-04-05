import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const genAI = new GoogleGenAI({ apiKey : process.env.GEMINI_API_KEY});

export async function generateAIReport(request,response) {
    try {
        const { studentData } = request.body;
        const prompt = `
          You are an AI educational advisor. Analyze the following student data and generate a detailed performance report 
          including strengths, weaknesses, and improvement suggestions.
      
          Student Data:
          ${JSON.stringify(studentData, null, 2)}
        `;

        const AIResponse = await genAI.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt,
        });
         
        return response.status(201).json({
          success: true,
          data: AIResponse,
        });      
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        success: false,
        error: "An error occurred while generating the report.",
      });
    }
  
}