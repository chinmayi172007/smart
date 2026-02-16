import { useState, useEffect } from 'react';
import { AuthScreen } from './components/auth/AuthScreen';
import { MainLayout } from './components/layout/MainLayout';

export function App() {
  const [user, setUser] = useState<{ name: string; contact: string } | null>(null);

  // No auto-login on refresh, starts at AuthScreen always as per prototype behavior
  useEffect(() => {
  }, []);

  const handleLogin = (userData: { name: string; contact: string }) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    // Optional: clear specific storage if needed, but we keep user data for next login
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#E6DDD0] font-sans">
      <div className="w-[375px] h-[720px] bg-[#F9F7F2] rounded-[35px] shadow-2xl overflow-hidden relative border-8 border-[#E6DDD0]">
        {user ? (
          <MainLayout onLogout={handleLogout} />
        ) : (
          <AuthScreen onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
}
