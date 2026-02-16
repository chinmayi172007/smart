import express from 'express';
import jwt from 'jsonwebtoken';
import { users } from '../data/store.js';

const router = express.Router();

// Middleware to authenticate token
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

// Get User Profile
router.get('/profile', authenticate, (req, res) => {
  const user = users.find(u => u.id === req.userId);
  if (!user) return res.status(404).json({ message: 'User not found' });

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    unit: user.unit,
    block: user.block,
    vehicle: user.vehicle,
    intercom: user.intercom,
    members: user.members
  });
});

// Update User Profile
router.put('/profile', authenticate, (req, res) => {
  const userIndex = users.findIndex(u => u.id === req.userId);
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  const { name, phone, unit, block, vehicle, intercom, members } = req.body;

  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    phone: phone || users[userIndex].phone,
    unit: unit || users[userIndex].unit,
    block: block || users[userIndex].block,
    vehicle: vehicle || users[userIndex].vehicle,
    intercom: intercom || users[userIndex].intercom,
    members: members || users[userIndex].members
  };

  res.json({ message: 'Profile updated successfully', user: users[userIndex] });
});

// Get Digital ID
router.get('/digital-id', authenticate, (req, res) => {
  const user = users.find(u => u.id === req.userId);
  if (!user) return res.status(404).json({ message: 'User not found' });

  // Generate a unique Digital ID based on user ID
  const digitalId = `CSID${user.id.replace('user_', '').padStart(5, '0')}`;
  
  res.json({
    id: digitalId,
    name: user.name,
    unit: `${user.block}-${user.unit}`,
    validUntil: '2025-12-31',
    status: 'Active'
  });
});

// Update Security Settings
router.put('/security', authenticate, (req, res) => {
  // In production, store these in a separate security settings collection
  res.json({ message: 'Security settings updated successfully' });
});

export default router;
