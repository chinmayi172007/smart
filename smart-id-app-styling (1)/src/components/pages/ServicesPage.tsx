import { services } from '../../data/mockData';
import { Star, Phone, Wrench, Zap, Trash2, Bug } from 'lucide-react';

const icons = {
  Plumbing: Wrench,
  Electrical: Zap,
  Cleaning: Trash2,
  'Pest Control': Bug
};

export function ServicesPage() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-[#3E4C59] px-2">Services</h3>
      
      {services.map((service) => {
        const Icon = icons[service.name as keyof typeof icons] || Wrench;
        return (
          <div key={service.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-[#3E4C59]">{service.name}</p>
                <p className="text-xs text-gray-500">{service.provider}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-xs text-yellow-500 justify-end">
                <Star className="w-3 h-3 fill-current" /> {service.rating}
              </div>
              <button 
                className={`text-xs px-3 py-1 rounded-full mt-2 flex items-center gap-1 transition-colors ${service.available ? 'bg-[#6B705C] text-white hover:bg-[#4A5D23]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                disabled={!service.available}
              >
                <Phone className="w-3 h-3" /> Book
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
