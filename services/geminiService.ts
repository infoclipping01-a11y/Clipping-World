import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getServiceRecommendation = async (userQuery: string, servicesList: string[]): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are a helpful sales consultant for 'Clipping World LLC'.
      We specialize in content creation and offer the following services: ${servicesList.join(', ')}.
      
      Our CEO is Muhammad Suleman Hussain.
      
      The user is asking: "${userQuery}"
      
      Based on their query, recommend ONE specific service from our list and explain briefly why (1-2 sentences). 
      Maintain a professional, encouraging tone suitable for a media and content agency.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "We couldn't generate a specific recommendation at this time. Please contact support.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI consultant is currently offline. Please browse our services manually.";
  }
};