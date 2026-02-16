import express from 'express';
import jwt from 'jsonwebtoken';
import { notifications } from '../data/store.js';

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

// Get all notifications
router.get('/', authenticate, (req, res) => {
  const userNotifications = notifications.filter(n => n.userId === req.userId);
  res.json(userNotifications);
});

// Get unread notifications count
router.get('/unread-count', authenticate, (req, res) => {
  const unread = notifications.filter(n => n.userId === req.userId && !n.read);
  res.json({ count: unread.length });
});

// Mark notification as read
router.put('/:id/read', authenticate, (req, res) => {
  const notification = notifications.find(n => n.id === req.params.id && n.userId === req.userId);
  
  if (!notification) return res.status(404).json({ message: 'Notification not found' });

  notification.read = true;
  res.json({ message: 'Notification marked as read' });
});

// Mark all as read
router.put('/read-all', authenticate, (req, res) => {
  notifications.forEach(n => {
    if (n.userId === req.userId) n.read = true;
  });
  res.json({ message: 'All notifications marked as read' });
});

export default router;
