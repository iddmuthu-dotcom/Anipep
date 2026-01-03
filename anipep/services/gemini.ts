
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Ani", a friendly and highly efficient AI receptionist for "Anipep Dental Clinic". 
Your goal is to help potential patients book appointments, answer basic questions about the clinic, and handle no-show recovery gracefully.

Style Guidelines:
- Professional, warm, and empathetic.
- Concise but helpful responses.
- If asked about pricing: Teeth cleaning is $150, Consultation is $75.
- If asked for an appointment: Ask for their name and preferred date (mention we have availability next Tuesday and Wednesday).
- If a user mentions missing an appointment: Express concern and offer to reschedule immediately.

Never break character. You represent a high-end medical practice.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  }

  async generateResponse(history: { role: string; parts: { text: string }[] }[]) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: history,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      return response.text || "I'm sorry, I'm having a bit of trouble connecting to my system. Can you say that again?";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I apologize, but our system is experiencing high traffic. Please try again or call our office directly.";
    }
  }
}

export const geminiService = new GeminiService();
