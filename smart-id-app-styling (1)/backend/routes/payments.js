import express from 'express';
import jwt from 'jsonwebtoken';
import { payments } from '../data/store.js';

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

// Get payment history
router.get('/', authenticate, (req, res) => {
  const userPayments = payments.filter(p => p.userId === req.userId);
  res.json(userPayments);
});

// Get outstanding balance
router.get('/balance', authenticate, (req, res) => {
  const unpaid = payments.filter(p => p.userId === req.userId && p.status === 'Unpaid');
  const totalOutstanding = unpaid.reduce((sum, p) => sum + p.amount, 0);
  res.json({ total: totalOutstanding, count: unpaid.length });
});

// Make a payment
router.post('/pay', authenticate, (req, res) => {
  const { paymentId, method } = req.body;
  const paymentIndex = payments.findIndex(p => p.id === paymentId && p.userId === req.userId);
  
  if (paymentIndex === -1) return res.status(404).json({ message: 'Payment not found' });

  payments[paymentIndex].status = 'Paid';
  payments[paymentIndex].method = method;
  payments[paymentIndex].paidDate = new Date().toISOString();

  res.json({ message: 'Payment successful', payment: payments[paymentIndex] });
});

export default router;
