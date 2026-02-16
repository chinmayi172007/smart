import express from 'express';
import jwt from 'jsonwebtoken';
import { emergencyContacts } from '../data/store.js';

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

// Get emergency contacts
router.get('/contacts', authenticate, (req, res) => {
  res.json(emergencyContacts);
});

// Send SOS alert
router.post('/sos', authenticate, (req, res) => {
  // In production, integrate with SMS/Email services and connect to security system
  const sosAlert = {
    id: `sos_${Date.now()}`,
    userId: req.userId,
    type: 'SOS',
    location: 'Community Premises - Block A, Unit 304',
    timestamp: new Date().toISOString(),
    status: 'Dispatched'
  };

  console.log('SOS ALERT TRIGGERED:', sosAlert);

  // Simulate alerting security
  res.status(200).json({ 
    message: 'SOS alert sent successfully', 
    alert: sosAlert,
    nextSteps: 'Security team has been notified and will arrive at your location shortly.'
  });
});

export default router;
