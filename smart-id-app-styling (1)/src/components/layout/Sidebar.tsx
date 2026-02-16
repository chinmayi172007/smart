import { motion } from 'framer-motion';
import { 
  Home, 
  CreditCard, 
  Bell, 
  Shield, 
  User, 
  Users, 
  Building2, 
  Clock, 
  FileText, 
  AlertTriangle 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (pageId: string) => void;
  currentPage: string;
}

const menuItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'id', icon: FileText, label: 'Digital ID' },
  { id: 'visitor', icon: Users, label: 'Visitors' },
  { id: 'services', icon: Building2, label: 'Services' },
  { id: 'profile', icon: User, label: 'Profile' },
  { id: 'payments', icon: CreditCard, label: 'Payments' },
  { id: 'notifications', icon: Bell, label: 'Notifications' },
  { id: 'records', icon: Clock, label: 'Records' },
  { id: 'security', icon: Shield, label: 'Security' },
  { id: 'emergency', icon: AlertTriangle, label: 'Emergency' },
];

export function Sidebar({ isOpen, onClose, onNavigate, currentPage }: SidebarProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="absolute inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar Panel */}
      <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="absolute top-0 left-0 w-[240px] h-full bg-[#3E4C59] text-white z-50 pt-[60px] shadow-2xl flex flex-col"
      >
        <div className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                className={`w-full flex items-center px-6 py-4 transition-colors hover:bg-[#6B705C] ${isActive ? 'bg-[#FF8C69] text-white' : ''}`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-white/10 text-xs text-center text-white/50">
          v1.0.0 Community App
        </div>
      </motion.div>
    </>
  );
}
