import axios from 'axios';

// 1. Set the base URL for your API
//    If your backend is running at http://localhost:5000, then:
const API_BASE_URL = 'http://localhost:5000/api';

// 2. Create an Axios instance with default settings
const api = axios.create({
  baseURL: API_BASE_URL,
  // You can add more defaults here, e.g., headers or timeouts
});

// 3. Example function: Generate AI content
export const generateContent = async (topic, category) => {
  try {
    // POST request to /api/content/generate
    const response = await api.post('/content/generate', { topic, category });
    return response.data; // The generated article, SEO data, etc.
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
};

// 4. Example function: Get all generated articles
export const getAllContents = async () => {
  try {
    // GET request to /api/content
    const response = await api.get('/content');
    return response.data; // Array of articles
  } catch (error) {
    console.error('Error fetching all contents:', error);
    throw error;
  }
};

// 5. Example function: Publish content to social media
export const publishToTwitter = async (text) => {
  try {
    // POST request to /api/social/twitter
    const response = await api.post('/social/twitter', { text });
    return response.data;
  } catch (error) {
    console.error('Error publishing to Twitter:', error);
    throw error;
  }
};

// Add more API calls (publishToFacebook, publishToLinkedIn, generateVideo, etc.) as needed