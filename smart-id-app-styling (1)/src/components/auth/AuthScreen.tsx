import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Lock, Phone, KeyRound, ArrowRight } from 'lucide-react';

interface AuthScreenProps {
  onLogin: (user: { name: string; contact: string }) => void;
}

export function AuthScreen({ onLogin }: AuthScreenProps) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    password: '',
    otp: ''
  });
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = () => {
    if (!formData.contact) {
      alert("Please enter contact details");
      return;
    }
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otp);
    alert(`Demo OTP: ${otp}`);
  };

  const handleRegister = () => {
    if (formData.otp === generatedOtp) {
      localStorage.setItem('user_name', formData.name);
      localStorage.setItem('user_contact', formData.contact);
      localStorage.setItem('user_password', formData.password);
      alert("Registered successfully! Please login.");
      setIsRegistering(false);
      setGeneratedOtp(null);
      setFormData({ ...formData, otp: '' });
    } else {
      alert("Invalid OTP");
    }
  };

  const handleLogin = () => {
    const storedContact = localStorage.getItem('user_contact');
    const storedPassword = localStorage.getItem('user_password');
    const storedName = localStorage.getItem('user_name');

    // For demo purposes, allow any login if nothing stored yet, or check against storage
    if ((storedContact && formData.contact === storedContact && formData.password === storedPassword) || 
        (!storedContact && formData.contact && formData.password)) { // fallback for demo if no reg
       
       const name = storedName || "Demo User";
       onLogin({ name, contact: formData.contact });
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-6 bg-[#F9F7F2] text-[#3E4C59]">
      <AnimatePresence mode="wait">
        {!isRegistering ? (
          <motion.div 
            key="login"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="w-full max-w-xs flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold text-center mb-4">Smart ID Login</h2>
            
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input 
                name="contact"
                placeholder="Email / Mobile" 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#3E4C59] bg-white"
                value={formData.contact}
                onChange={handleInputChange}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input 
                name="password"
                type="password" 
                placeholder="Password" 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#3E4C59] bg-white"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <button 
              onClick={handleLogin}
              className="w-full bg-[#FF8C69] hover:bg-[#3E4C59] text-white font-semibold py-3 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              Login <ArrowRight className="w-4 h-4" />
            </button>

            <button 
              onClick={() => setIsRegistering(true)}
              className="text-sm text-center text-[#3E4C59] underline mt-2"
            >
              Create new account
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="register"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-xs flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
            
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input 
                name="name"
                placeholder="Full Name" 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#3E4C59] bg-white"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input 
                name="contact"
                placeholder="Email / Mobile" 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#3E4C59] bg-white"
                value={formData.contact}
                onChange={handleInputChange}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input 
                name="password"
                type="password" 
                placeholder="Password" 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#3E4C59] bg-white"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex gap-2">
              <button 
                onClick={handleSendOtp}
                className="bg-[#6B705C] text-white text-xs px-3 rounded-xl whitespace-nowrap"
              >
                Send OTP
              </button>
              <div className="relative flex-1">
                <KeyRound className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input 
                  name="otp"
                  placeholder="OTP" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#3E4C59] bg-white"
                  value={formData.otp}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <button 
              onClick={handleRegister}
              className="w-full bg-[#FF8C69] hover:bg-[#3E4C59] text-white font-semibold py-3 rounded-full transition-colors"
            >
              Submit Registration
            </button>

            <button 
              onClick={() => setIsRegistering(false)}
              className="text-sm text-center text-[#3E4C59] underline mt-2"
            >
              Back to Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
