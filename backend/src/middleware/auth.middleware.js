import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: no token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: 'Unauthorized: invalid token' });
        }
        req.userId = decoded.userId;
        next();

    } catch (err) {
        console.error("Error in auth middleware: ", err);
        res.status(500).json({ message: 'Internal server error' });
    }
};