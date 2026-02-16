// Mock// In production, replace with Database
 MongoDB, PostgreSQL, or similar

// Users Collection
export const users = [
  {
    id: 'user_1',
    name: 'John Resident',
    email: 'john@example.com',
    phone: '1234567890',
    password: '$2a$10$xGJ9Q7K5X8M9N0P1Q2R3S4T5U6V7W8X9Y0Z1A2B3C4D5E6F7G8H9I0J1', // hashed 'password123'
    unit: '304',
    block: 'A',
    vehicle: 'KA-01-AB-1234',
    intercom: '1304',
    members: ['John Resident', 'Jane Resident', 'Baby Resident'],
    role: 'resident',
    createdAt: new Date().toISOString()
  }
];

// Visitors Collection
export const visitors = [
  { id: 'vis_1', userId: 'user_1', name: 'John Doe', type: 'Guest', phone: '9876543210', status: 'Checked In', date: new Date().toISOString().split('T')[0], time: '10:30 AM', purpose: 'Family Visit' },
  { id: 'vis_2', userId: 'user_1', name: 'Pizza Delivery', type: 'Delivery', phone: '', status: 'Left', date: '2024-01-15', time: '08:15 PM', purpose: 'Food Delivery' },
  { id: 'vis_3', userId: 'user_1', name: 'Jane Smith', type: 'Family', phone: '5551234567', status: 'Checked In', date: '2024-01-14', time: '02:00 PM', purpose: 'Family Visit' },
];

// Services Collection
export const services = [
  { id: 'srv_1', name: 'Plumbing', provider: 'QuickFix', rating: 4.8, available: true, phone: '1800-123-456', price: 500 },
  { id: 'srv_2', name: 'Electrical', provider: "Sparky's", rating: 4.5, available: true, phone: '1800-123-457', price: 400 },
  { id: 'srv_3', name: 'Cleaning', provider: 'Spotless', rating: 4.9, available: false, phone: '1800-123-458', price: 300 },
  { id: 'srv_4', name: 'Pest Control', provider: 'NoBugs', rating: 4.7, available: true, phone: '1800-123-459', price: 600 },
];

// Payments Collection
export const payments = [
  { id: 'pay_1', userId: 'user_1', title: 'Maintenance Fee', amount: 150.00, date: '2024-01-01', status: 'Paid', method: 'Auto Debit' },
  { id: 'pay_2', userId: 'user_1', title: 'Water Bill', amount: 45.50, date: '2024-01-15', status: 'Paid', method: 'UPI' },
  { id: 'pay_3', userId: 'user_1', title: 'Event Fund', amount: 20.00, date: '2024-01-10', status: 'Paid', method: 'Cash' },
];

// Notifications Collection
export const notifications = [
  { id: 'notif_1', userId: 'user_1', title: 'Pool Maintenance', message: 'Pool closed for cleaning tomorrow.', date: new Date().toISOString(), urgent: false, read: false },
  { id: 'notif_2', userId: 'user_1', title: 'Fire Drill', message: 'Scheduled fire drill at 10 AM on Sunday.', date: new Date(Date.now() - 86400000).toISOString(), urgent: true, read: false },
  { id: 'notif_3', userId: 'user_1', title: 'Package Arrived', message: 'Package at front desk for Unit 304.', date: new Date(Date.now() - 172800000).toISOString(), urgent: false, read: true },
];

// Activity Records Collection
export const records = [
  { id: 'rec_1', userId: 'user_1', activity: 'Gym Access', time: '06:00 AM', date: new Date().toISOString().split('T')[0], location: 'Community Gym' },
  { id: 'rec_2', userId: 'user_1', activity: 'Main Gate Entry', time: '05:45 PM', date: '2024-01-15', location: 'Main Gate' },
  { id: 'rec_3', userId: 'user_1', activity: 'Clubhouse Booking', time: '02:00 PM', date: '2024-01-14', location: 'Clubhouse' },
];

// Emergency Contacts
export const emergencyContacts = [
  { id: 'emg_1', name: 'Security Office', phone: '1800-999-1000', type: 'Security' },
  { id: 'emg_2', name: 'Ambulance', phone: '102', type: 'Medical' },
  { id: 'emg_3', name: 'Fire Brigade', phone: '101', type: 'Fire' },
  { id: 'emg_4', name: 'Police', phone: '100', type: 'Police' },
];
