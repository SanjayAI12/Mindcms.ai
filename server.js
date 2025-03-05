// server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware: parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// Test route to verify backend is running
app.get('/api', (req, res) => {
  res.json({ message: "Hello from Backend!" });
});
app.get("/api/assistant/generate", (req, res) => {
  res.json({ message: "API is working!" });
});

// Example route: Generate AI-powered content (dummy implementation)
app.post('/api/content/generate', (req, res) => {
  const { topic, category } = req.body;

  // In a real implementation, you would call your AI generation logic here.
  // For this example, we'll return a dummy article and SEO data.
  const article = `This is a detailed article about ${topic} in the ${category} category.`;
  const seo = {
    title: `Article about ${topic}`,
    metaDescription: `A comprehensive article on ${topic} within the ${category} category.`,
    keywords: topic.split(' ')
  };

  res.json({ article, seo });
});

// Define the port from the environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
});