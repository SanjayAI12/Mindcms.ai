import { OpenAI } from 'openai';
import Content from '../models/Content.js';
import client from '../config/redis.js';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateContent = async (topic, category) => {
  const cacheKey = `content:${topic}:${category}`;
  const cachedData = await client.get(cacheKey);

  if (cachedData) return JSON.parse(cachedData);

  const prompt = `Write a detailed article about "${topic}" in the category "${category}". Include SEO-friendly title, meta description, and keywords.`;

  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4',
  });

  const content = response.choices[0].message.content;
  const [title, metaDescription, ...articleParts] = content.split('\n');
  const article = articleParts.join('\n');

  const newContent = await Content.create({
    topic,
    category,
    article,
    seo: { title, metaDescription, keywords: topic.split(' ') },
  });

  client.setex(cacheKey, 3600, JSON.stringify(newContent));

  return newContent;
};