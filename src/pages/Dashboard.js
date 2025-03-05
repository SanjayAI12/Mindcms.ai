import React, { useState } from 'react';
import { generateContent } from '../services/api'; // adjust path as needed

function Dashboard() {
  const [topic, setTopic] = useState('');
  const [category, setCategory] = useState('');
  const [article, setArticle] = useState(null);

  const handleGenerate = async () => {
    try {
      const data = await generateContent(topic, category);
      setArticle(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>MindCMS.ai - AI Content Generator</h1>
      <input
        type="text"
        placeholder="Enter Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate</button>

      {article && (
        <div>
          <h2>{article.seo?.title}</h2>
          <p>{article.seo?.metaDescription}</p>
          <div>{article.article}</div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;