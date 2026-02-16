import { notifications } from '../../data/mockData';
import { AlertCircle, Info, Check } from 'lucide-react';

export function NotificationsPage() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-[#3E4C59] px-2 flex items-center justify-between">
        Notifications 
        <button className="text-xs text-[#6B705C] hover:text-[#3E4C59] transition-colors">Mark all as read</button>
      </h3>
      
      {notifications.map((notif) => (
        <div key={notif.id} className={`p-4 rounded-xl border relative overflow-hidden transition-all duration-300 hover:shadow-md ${notif.urgent ? 'bg-red-50 border-red-100' : 'bg-white border-gray-100'}`}>
          <div className="flex gap-3">
            <div className={`p-2 rounded-full h-fit ${notif.urgent ? 'bg-red-100 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
              {notif.urgent ? <AlertCircle className="w-5 h-5" /> : <Info className="w-5 h-5" />}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className={`font-semibold text-sm ${notif.urgent ? 'text-red-700' : 'text-[#3E4C59]'}`}>{notif.title}</h4>
                <span className="text-xs text-gray-400 whitespace-nowrap">{notif.date}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{notif.message}</p>
            </div>
          </div>
          {!notif.urgent && (
            <button className="absolute bottom-2 right-2 p-1.5 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
              <Check className="w-4 h-4" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
