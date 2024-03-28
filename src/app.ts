import express from 'express';
import { config } from 'dotenv';
import { router } from './routes';

config();

const app = express();

app.use(express.json());
app.use(router);

export { app };