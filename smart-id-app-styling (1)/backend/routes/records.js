import express from 'express';
import jwt from 'jsonwebtoken';
import { records } from '../data/store.js';

const router = express.Router();

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  try {
    const decoded = jwt.verify(token, 'community_smart_id_secret_key_2024');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Get activity records
router.get('/', authenticate, (req, res) => {
  const userRecords = records.filter(r => r.userId === req.userId);
  res.json(userRecords);
});

// Filter records by date range
router.get('/filter', authenticate, (req, res) => {
  const { startDate, endDate } = req.query;
  let userRecords = records.filter(r => r.userId === req.userId);

  if (startDate) {
    userRecords = userRecords.filter(r => r.date >= startDate);
  }
  if (endDate) {
    userRecords = userRecords.filter(r => r.date <= endDate);
  }

  res.json(userRecords);
});

export default router;
