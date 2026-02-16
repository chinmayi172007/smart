import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { users } from '../data/store.js';

const router = express.Router();
const JWT_SECRET = 'community_smart_id_secret_key_2024';

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password, unit, block } = req.body;

    // Check if user exists
    const existingUser = users.find(u => u.email === email || u.phone === phone);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      id: `user_${Date.now()}`,
      name,
      email,
      phone,
      password: hashedPassword,
      unit: unit || 'N/A',
      block: block || 'N/A',
      vehicle: '',
      intercom: '',
      members: [name],
      role: 'resident',
      createdAt: new Date().toISOString()
    };

    users.push(newUser);

    // Generate token
    const token = jwt.sign({ userId: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      message: 'Registration successful',
      token,
      user: { id: newUser.id, name: newUser.name, email: newUser.email, unit: newUser.unit }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, phone, password } = req.body;

    // Find user
    const user = users.find(u => u.email === email || u.phone === phone);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      message: 'Login successful',
      token,
      user: { 
        id: user.id, 
        name: user.name, 
        email: user.email, 
        phone: user.phone,
        unit: user.unit,
        block: user.block 
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Verify Token
router.get('/verify', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = users.find(u => u.id === decoded.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ 
      user: { 
        id: user.id, 
        name: user.name, 
        email: user.email, 
        phone: user.phone,
        unit: user.unit,
        block: user.block 
      } 
    });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

// Send OTP (Simulated)
router.post('/send-otp', (req, res) => {
  const { phone } = req.body;
  // In production, integrate with SMS gateway
  const otp = Math.floor(1000 + Math.random() * 9000);
  console.log(`OTP for ${phone}: ${otp}`);
  res.json({ message: 'OTP sent successfully', otp }); // In production, don't return OTP
});

export default router;
