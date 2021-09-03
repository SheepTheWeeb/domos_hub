import dotenv from 'dotenv';
import express from 'express';
import Router from './router.js';
dotenv.config();
const app = express();

app.use(express.json());
app.use(Router);

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
