import express from 'express';
import jwt from 'jsonwebtoken';
import { services } from '../data/store.js';

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

// Get all available services
router.get('/', authenticate, (req, res) => {
  res.json(services);
});

// Get service by ID
router.get('/:id', authenticate, (req, res) => {
  const service = services.find(s => s.id === req.params.id);
  if (!service) return res.status(404).json({ message: 'Service not found' });
  res.json(service);
});

// Book a service
router.post('/book', authenticate, (req, res) => {
  const { serviceId, date, time, description } = req.body;
  const service = services.find(s => s.id === serviceId);
  
  if (!service) return res.status(404).json({ message: 'Service not found' });
  if (!service.available) return res.status(400).json({ message: 'Service not available' });

  // In production, save to a bookings collection
  const booking = {
    id: `bk_${Date.now()}`,
    userId: req.userId,
    serviceId,
    serviceName: service.name,
    provider: service.provider,
    date,
    time,
    description,
    status: 'Pending',
    createdAt: new Date().toISOString()
  };

  res.status(201).json({ message: 'Service booked successfully', booking });
});

export default router;
