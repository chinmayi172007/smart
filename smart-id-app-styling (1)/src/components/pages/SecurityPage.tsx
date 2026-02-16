import { useState } from 'react';
import { Shield, Lock, Eye, BellRing, Smartphone, Wifi, ToggleLeft, ToggleRight } from 'lucide-react';

export function SecurityPage() {
  const [settings, setSettings] = useState({
    biometric: true,
    notifications: true,
    location: false,
    wifi: true
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-[#3E4C59] px-2 flex items-center justify-between">
        Security & Privacy
        <Shield className="w-5 h-5 text-[#6B705C]" />
      </h3>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
        
        <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggle('biometric')}>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-[#3E4C59] text-sm">Biometric Login</p>
              <p className="text-xs text-gray-400">FaceID / TouchID</p>
            </div>
          </div>
          <button className={`text-2xl transition-colors ${settings.biometric ? 'text-green-500' : 'text-gray-300'}`}>
            {settings.biometric ? <ToggleRight /> : <ToggleLeft />}
          </button>
        </div>

        <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggle('notifications')}>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <BellRing className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-[#3E4C59] text-sm">Push Alerts</p>
              <p className="text-xs text-gray-400">Security warnings</p>
            </div>
          </div>
          <button className={`text-2xl transition-colors ${settings.notifications ? 'text-green-500' : 'text-gray-300'}`}>
            {settings.notifications ? <ToggleRight /> : <ToggleLeft />}
          </button>
        </div>

        <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggle('location')}>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-[#3E4C59] text-sm">Location Sharing</p>
              <p className="text-xs text-gray-400">Share with family</p>
            </div>
          </div>
          <button className={`text-2xl transition-colors ${settings.location ? 'text-green-500' : 'text-gray-300'}`}>
            {settings.location ? <ToggleRight /> : <ToggleLeft />}
          </button>
        </div>

         <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggle('wifi')}>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-[#3E4C59] text-sm">Guest Wi-Fi</p>
              <p className="text-xs text-gray-400">Auto-connect guests</p>
            </div>
          </div>
          <button className={`text-2xl transition-colors ${settings.wifi ? 'text-green-500' : 'text-gray-300'}`}>
            {settings.wifi ? <ToggleRight /> : <ToggleLeft />}
          </button>
        </div>

      </div>

      <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex items-center gap-3 cursor-pointer hover:bg-red-100 transition-colors">
         <div className="p-2 bg-red-100 text-red-600 rounded-lg">
            <Smartphone className="w-5 h-5" />
         </div>
         <div>
            <p className="font-bold text-red-700 text-sm">Deactivate Device</p>
            <p className="text-xs text-red-500">Unlink this phone from ID</p>
         </div>
      </div>
    </div>
  );
}
