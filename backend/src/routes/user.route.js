import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import { authMiddleware } from '../middleware/auth.middleware.js';

const userRouter = express.Router();

userRouter.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
        res.status(201).json({ message: 'User created', token });
    } catch (err) {
        console.error("Internal server error: ", err);
        res.status(500).json({ message: 'Internal server error' });
    }
})

userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ message: 'User signed in', token });
    } catch (err) {
        console.error("Internal server error: ", err);
        res.status(500).json({ message: 'Internal server error' });
    }
})

userRouter.get('/home', authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ username: user.username, email: user.email });
    } catch (err) {
        console.error("Internal server error: ", err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default userRouter;
