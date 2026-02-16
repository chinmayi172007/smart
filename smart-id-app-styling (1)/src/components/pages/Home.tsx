import { useEffect, useState } from 'react';
import { visitors, payments, notifications } from '../../data/mockData';
import { User, Bell, CreditCard } from 'lucide-react';

export function Home() {
  const [name, setName] = useState('User');

  useEffect(() => {
    const storedName = localStorage.getItem('user_name');
    if (storedName) setName(storedName);
  }, []);

  const activeVisitors = visitors.filter(v => v.status === 'Checked In').length;
  const unreadNotifs = notifications.length; // Assuming all unread for demo
  const unpaid = payments.filter(p => p.status === 'Unpaid').length; // Mock data has all paid, but good for structure

  return (
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-[#3E4C59]">Welcome, <span className="text-[#6B705C]">{name}</span></h3>
        <p className="mt-1 text-sm text-gray-500">Your community dashboard is ready.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <div className="bg-blue-50 p-3 rounded-full text-blue-600 mb-2">
            <User className="w-5 h-5" />
          </div>
          <span className="text-2xl font-bold text-[#3E4C59]">{activeVisitors}</span>
          <span className="text-xs text-gray-500">Active Visitors</span>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <div className="bg-orange-50 p-3 rounded-full text-orange-600 mb-2">
            <Bell className="w-5 h-5" />
          </div>
          <span className="text-2xl font-bold text-[#3E4C59]">{unreadNotifs}</span>
          <span className="text-xs text-gray-500">Notifications</span>
        </div>
      </div>
      
      <div className="bg-[#3E4C59] p-5 rounded-2xl text-white shadow-lg flex items-center justify-between">
        <div>
          <p className="text-sm opacity-80">Maintenance Status</p>
          <h4 className="text-lg font-bold">{unpaid === 0 ? 'All Clear' : `${unpaid} Pending`}</h4>
        </div>
        <CreditCard className="w-8 h-8 opacity-50" />
      </div>
    </div>
  );
}
