import express from 'express';
import jwt from 'jsonwebtoken';
import { visitors } from '../data/store.js';

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

// Get all visitors for user
router.get('/', authenticate, (req, res) => {
  const userVisitors = visitors.filter(v => v.userId === req.userId);
  res.json(userVisitors);
});

// Get active visitors (Checked In)
router.get('/active', authenticate, (req, res) => {
  const activeVisitors = visitors.filter(v => v.userId === req.userId && v.status === 'Checked In');
  res.json(activeVisitors);
});

// Pre-approve new visitor
router.post('/', authenticate, (req, res) => {
  const { name, phone, type, purpose } = req.body;
  
  const newVisitor = {
    id: `vis_${Date.now()}`,
    userId: req.userId,
    name,
    type,
    phone,
    status: 'Pending',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    purpose
  };

  visitors.push(newVisitor);
  res.status(201).json({ message: 'Visitor pre-approved', visitor: newVisitor });
});

// Update visitor status (Check In / Check Out)
router.put('/:id/status', authenticate, (req, res) => {
  const { status } = req.body;
  const visitor = visitors.find(v => v.id === req.params.id && v.userId === req.userId);
  
  if (!visitor) return res.status(404).json({ message: 'Visitor not found' });

  visitor.status = status;
  res.json({ message: `Visitor ${status.toLowerCase()} successfully`, visitor });
});

// Delete visitor record
router.delete('/:id', authenticate, (req, res) => {
  const index = visitors.findIndex(v => v.id === req.params.id && v.userId === req.userId);
  
  if (index === -1) return res.status(404).json({ message: 'Visitor not found' });

  visitors.splice(index, 1);
  res.json({ message: 'Visitor record deleted' });
});

export default router;
