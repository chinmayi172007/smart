import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import visitorRoutes from './routes/visitors.js';
import serviceRoutes from './routes/services.js';
import paymentRoutes from './routes/payments.js';
import notificationRoutes from './routes/notifications.js';
import recordRoutes from './routes/records.js';
import emergencyRoutes from './routes/emergency.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/visitors', visitorRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/records', recordRoutes);
app.use('/api/emergency', emergencyRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Community Smart ID API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
