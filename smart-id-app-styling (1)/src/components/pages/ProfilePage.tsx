import { profile } from '../../data/mockData';
import { User, Users, MapPin, Car, PhoneCall, Edit } from 'lucide-react';

export function ProfilePage() {
  const name = localStorage.getItem('user_name') || 'User';

  return (
    <div className="space-y-4">
      <div className="bg-[#3E4C59] p-6 rounded-2xl text-center text-white relative shadow-lg">
        <button className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
          <Edit className="w-4 h-4 text-white" />
        </button>
        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center mb-3">
          <User className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-white/70 text-sm">Community Resident</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
          <MapPin className="w-6 h-6 text-[#FF8C69] mb-2" />
          <span className="text-xs text-gray-500">Unit</span>
          <span className="font-bold text-[#3E4C59]">{profile.unit} - {profile.block}</span>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
          <PhoneCall className="w-6 h-6 text-[#FF8C69] mb-2" />
          <span className="text-xs text-gray-500">Intercom</span>
          <span className="font-bold text-[#3E4C59]">{profile.intercom}</span>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h4 className="text-sm font-bold text-[#3E4C59] mb-3 flex items-center gap-2">
          <Car className="w-4 h-4 text-[#FF8C69]" /> Vehicle Info
        </h4>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-600">Toyota Camry</span>
          <span className="text-sm font-mono bg-white px-2 py-1 rounded border border-gray-200 text-[#3E4C59]">{profile.vehicle}</span>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h4 className="text-sm font-bold text-[#3E4C59] mb-3 flex items-center gap-2">
          <Users className="w-4 h-4 text-[#FF8C69]" /> Family Members
        </h4>
        <div className="flex flex-wrap gap-2">
          {profile.members.map((member, idx) => (
            <span key={idx} className="text-xs bg-[#F9F7F2] px-3 py-1.5 rounded-full text-[#3E4C59] border border-[#E6DDD0]">
              {member}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
