import { visitors } from '../../data/mockData';
import { UserCheck, Clock, UserX } from 'lucide-react';

export function VisitorPage() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-[#3E4C59] px-2">Visitor Management</h3>
      
      {visitors.map((visitor) => (
        <div key={visitor.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-full ${visitor.status === 'Checked In' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
              {visitor.status === 'Checked In' ? <UserCheck className="w-5 h-5" /> : <UserX className="w-5 h-5" />}
            </div>
            <div>
              <p className="font-semibold text-[#3E4C59]">{visitor.name}</p>
              <p className="text-xs text-gray-500">{visitor.type} • {visitor.date}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-xs text-gray-400 justify-end">
              <Clock className="w-3 h-3" /> {visitor.time}
            </div>
            <span className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${visitor.status === 'Checked In' ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-600'}`}>
              {visitor.status}
            </span>
          </div>
        </div>
      ))}

      <button className="w-full py-3 bg-[#FF8C69] text-white rounded-xl shadow-md mt-4 hover:bg-[#E27D60] transition-colors">
        Pre-Approve New Visitor
      </button>
    </div>
  );
}
