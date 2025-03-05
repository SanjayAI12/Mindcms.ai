import express from 'express';
import { generateContent } from '../services/contentService.js';

const router = express.Router();

router.post('/generate', async (req, res) => {
  const { topic, category } = req.body;
  if (!topic) return res.status(400).json({ error: 'Topic is required' });

  try {
    const content = await generateContent(topic, category);
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;