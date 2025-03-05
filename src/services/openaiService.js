import OpenAI from 'openai';
import 'dotenv/config';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateText(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error("OpenAI API Error:", error);
  }
}

generateText("Write a blog about AI content creation.");
    