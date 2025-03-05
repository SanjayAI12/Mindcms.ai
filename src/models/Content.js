
import mongoose from 'mongoose';

const ContentSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  category: { type: String },
  article: { type: String, required: true },
  seo: {
    title: String,
    metaDescription: String,
    keywords: [String],
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Content', ContentSchema);