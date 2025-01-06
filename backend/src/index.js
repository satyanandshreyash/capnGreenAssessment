import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/user.route.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/user', authRoutes);

async function connectDB() {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (err) {
        console.log("MongoDB connection error: ", err);
    }
}

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
    connectDB();
});