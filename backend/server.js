import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jobRoutes from './routes/job.routes.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import adminRoutes from './routes/admin.routes.js'

dotenv.config();
await connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173/',
    credentials: true
}));

app.use('/api/jobs', jobRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
    res.send(`API Running`)
});

// app.listen(process.env.PORT || 3000, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });