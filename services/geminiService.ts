
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getProductivityAdvice = async (userTask: string) => {
  if (!API_KEY) return "Configura tu API Key para habilitar al mentor IA.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Eres un mentor experto en productividad digital siguiendo el método de Vicente Donoso. 
      Tu objetivo es ayudar al usuario a optimizar su tarea actual: "${userTask}".
      
      Usa los principios de:
      1. Cuestionar paradigmas.
      2. Valorar el tiempo.
      3. Delegar a la tecnología.
      4. Concentrarse en el alto impacto.
      
      Propón una estrategia basada en "Higiene Digital" (Inbox Zero, gestores de contraseñas, perfiles de navegador) 
      o "IA Generativa" (ChatGPT, Gemini). Sé breve, inspirador y muy práctico.`,
    });

    return response.text || "Lo siento, no pude procesar tu solicitud.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ocurrió un error al contactar con tu mentor digital.";
  }
};
