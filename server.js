import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.warn('MONGO_URI is not set. Please add it to your .env file.');
}

app.use(cors());
app.use(express.json());

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model('Contact', contactSchema);

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
  });
};

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    if (!MONGO_URI) {
      return res.status(500).json({ message: 'MongoDB connection string is not configured.' });
    }

    await connectToDatabase();

    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ message: 'Message saved successfully.', contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save message.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
