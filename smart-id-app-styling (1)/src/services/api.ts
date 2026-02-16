const API_BASE_URL = 'http://localhost:3001/api';

const getToken = () => localStorage.getItem('auth_token');

const handleResponse = async (response: Response) => {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  return data;
};

// Auth API
export const authAPI = {
  register: async (userData: { name: string; email: string; phone: string; password: string }) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  },

  login: async (credentials: { email: string; password: string }) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
  },

  sendOTP: async (phone: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/send-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone }),
    });
    return handleResponse(response);
  },

  verify: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/auth/verify`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },
};

// Users API
export const userAPI = {
  getProfile: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },

  updateProfile: async (data: any) => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  getDigitalID: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/users/digital-id`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },
};

// Visitors API
export const visitorAPI = {
  getAll: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/visitors`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },

  getActive: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/visitors/active`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },

  preApprove: async (data: { name: string; phone: string; type: string; purpose: string }) => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/visitors`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  updateStatus: async (id: string, status: string) => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/visitors/${id}/status`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify({ status }),
    });
    return handleResponse(response);
  },
};

// Services API
export const serviceAPI = {
  getAll: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/services`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },

  book: async (data: { serviceId: string; date: string; time: string; description: string }) => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/services/book`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },
};

// Payments API
export const paymentAPI = {
  getAll: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/payments`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },

  getBalance: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/payments/balance`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },

  makePayment: async (paymentId: string, method: string) => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/payments/pay`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify({ paymentId, method }),
    });
    return handleResponse(response);
  },
};

// Notifications API
export const notificationAPI = {
  getAll: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/notifications`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },

  getUnreadCount: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/notifications/unread-count`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },

  markAsRead: async (id: string) => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/notifications/${id}/read`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },

  markAllAsRead: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/notifications/read-all`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },
};

// Records API
export const recordAPI = {
  getAll: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/records`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },

  filter: async (startDate?: string, endDate?: string) => {
    const token = getToken();
    const params = new URLSearchParams();
    if (startDate) params.append('startDate', startDate);
    if (endDate) params.append('endDate', endDate);
    
    const response = await fetch(`${API_BASE_URL}/records/filter?${params}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },
};

// Emergency API
export const emergencyAPI = {
  getContacts: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/emergency/contacts`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },

  sendSOS: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/emergency/sos`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  },
};
