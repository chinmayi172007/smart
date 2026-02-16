# Community Smart ID Backend API

A RESTful API backend for the Community Smart ID App built with Node.js, Express, and JWT authentication.

## Features

- **Authentication**: Register, Login, OTP (simulated), Token verification
- **User Management**: Profile, Digital ID, Security settings
- **Visitor Management**: List, pre-approve, check-in/out visitors
- **Services**: Browse and book community services
- **Payments**: View history, outstanding balance, make payments
- **Notifications**: Get alerts, mark as read
- **Records**: Activity history logs
- **Emergency**: SOS alerts, emergency contacts

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Auth**: JWT (JSON Web Tokens)
- **Security**: bcryptjs (password hashing)

## Installation

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3001`

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|--------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/send-otp` | Send OTP (simulated) |
| GET | `/api/auth/verify` | Verify JWT token |

### Users

| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | `/api/users/profile` | Get user profile |
| PUT | `/api/users/profile` | Update user profile |
| GET | `/api/users/digital-id` | Get Digital ID |
| PUT | `/api/users/security` | Update security settings |

### Visitors

| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | `/api/visitors` | Get all visitors |
| GET | `/api/visitors/active` | Get active visitors |
| POST | `/api/visitors` | Pre-approve visitor |
| PUT | `/api/visitors/:id/status` | Update visitor status |
| DELETE | `/api/visitors/:id` | Delete visitor record |

### Services

| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | `/api/services` | Get all services |
| GET | `/api/services/:id` | Get service details |
| POST | `/api/services/book` | Book a service |

### Payments

| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | `/api/payments` | Get payment history |
| GET | `/api/payments/balance` | Get outstanding balance |
| POST | `/api/payments/pay` | Make a payment |

### Notifications

| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | `/api/notifications` | Get all notifications |
| GET | `/api/notifications/unread-count` | Get unread count |
| PUT | `/api/notifications/:id/read` | Mark as read |
| PUT | `/api/notifications/read-all` | Mark all as read |

### Records

| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | `/api/records` | Get activity records |
| GET | `/api/records/filter` | Filter by date |

### Emergency

| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | `/api/emergency/contacts` | Get emergency contacts |
| POST | `/api/emergency/sos` | Send SOS alert |

## Demo Credentials

- **Email**: john@example.com
- **Password**: password123

## Frontend Integration

The frontend React app is pre-configured to work with this backend. Update `src/services/api.ts` with the backend URL if needed:

```typescript
const API_BASE_URL = 'http://localhost:3001/api';
```

## Project Structure

```
backend/
├── data/
│   └── store.js          # Mock database
├── routes/
│   ├── auth.js           # Authentication routes
│   ├── users.js          # User management routes
│   ├── visitors.js       # Visitor management routes
│   ├── services.js      # Services routes
│   ├── payments.js      # Payments routes
│   ├── notifications.js  # Notifications routes
│   ├── records.js        # Activity records routes
│   └── emergency.js      # Emergency routes
├── package.json
└── server.js             # Entry point
```
