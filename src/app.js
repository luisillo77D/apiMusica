import express from 'express';
import routes from './routes/index.js';
import morgan from 'morgan';
import authRoutes from './routes/auth.js';
import { config } from 'dotenv';

const app = express();
config();
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/auth', authRoutes);
app.use('/api', routes);

export default app;
