import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const PROFILE = {
  email: 'abawandjovunicaise@gmail.com',
  name: 'Aba Nicaisse',
  stack: 'Node.js/Express/TypeScript',
} as const;

const CAT_FACT_API = 'https://catfact.ninja/fact';
const FALLBACK_FACT = 'Cats are amazing creatures!';

interface ApiResponse {
  status: 'success';
  user: typeof PROFILE;
  timestamp: string;
  fact: string;
}

const fetchCatFact = async (): Promise<string> => {
  try {
    const { data } = await axios.get(CAT_FACT_API, { timeout: 5000 });
    return data.fact || FALLBACK_FACT;
  } catch {
    return FALLBACK_FACT;
  }
};

const createResponse = (fact: string): ApiResponse => ({
  status: 'success',
  user: PROFILE,
  timestamp: new Date().toISOString(),
  fact,
});

app.get('/me', async (_, res) => {
  const fact = await fetchCatFact();
  res.json(createResponse(fact));
});

app.get('/', (_, res) => {
  res.send('Stage-0 task API running');
});

// 404 handler
app.use((_, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Endpoint not found',
    availableEndpoints: ['/me', '/'],
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;
