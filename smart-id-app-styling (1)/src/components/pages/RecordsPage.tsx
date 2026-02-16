import { records } from '../../data/mockData';
import { Clock, Activity, Calendar } from 'lucide-react';

export function RecordsPage() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-[#3E4C59] px-2 flex items-center justify-between">
        Activity Records
        <button className="text-xs text-[#6B705C] hover:text-[#3E4C59] transition-colors flex items-center gap-1">
          <Calendar className="w-4 h-4" /> Filter
        </button>
      </h3>
      
      {records.map((record) => (
        <div key={record.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gray-50 text-gray-600 rounded-full">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-[#3E4C59] text-sm">{record.activity}</p>
              <p className="text-xs text-gray-400">{record.date}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-xs text-gray-500 justify-end font-mono">
              <Clock className="w-3 h-3 text-[#6B705C]" /> {record.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
