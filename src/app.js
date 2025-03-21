import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authroutes from './routes/auth.routes.js';
import taskroutes from './routes/tasks.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api",authroutes);
app.use("/api",taskroutes);



export default app;

