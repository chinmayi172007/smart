import { AlertTriangle } from 'lucide-react';

export function Emergency() {
  const sendSOS = () => {
    alert("SOS Sent to Community Security");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex flex-col items-center">
      <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
        <AlertTriangle className="w-6 h-6" />
        Emergency
      </h3>
      
      <button 
        onClick={sendSOS}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-4 rounded-xl shadow-lg transition-transform active:scale-95 animate-pulse-slow"
      >
        SEND SOS
      </button>
      
      <p className="mt-4 text-xs text-center text-gray-500">
        Pressing this button will immediately alert the security team and emergency contacts.
      </p>
    </div>
  );
}
