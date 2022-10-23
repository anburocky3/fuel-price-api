import { Router } from 'express';
import axios from 'axios';

const router = Router();

router.get('/', async (_req, res) => {
  res
    .status(200)
    .json({ message: 'Welcome to Fuel-Price-API. Happy Hacking.' });
});

router.get('/ip', async (req, res) => {
  const json = await axios.get('https://api.ipify.org?format=json');
  res.json(json.data);
});

export default router;
