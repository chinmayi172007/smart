import { Menu, LogOut } from 'lucide-react';

interface HeaderProps {
  onToggleMenu: () => void;
  onLogout: () => void;
  title?: string;
}

export function Header({ onToggleMenu, onLogout, title = 'Community Smart ID' }: HeaderProps) {
  return (
    <div className="w-full h-[60px] bg-[#3E4C59] text-white flex items-center justify-between px-4 z-30 shadow-md shrink-0 relative">
      <button 
        onClick={onToggleMenu}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>
      
      <h1 className="text-lg font-semibold tracking-wide truncate max-w-[200px]">
        {title}
      </h1>
      
      <button 
        onClick={onLogout}
        className="p-2 hover:bg-white/10 rounded-full transition-colors text-red-200 hover:text-red-100"
      >
        <LogOut className="w-5 h-5" />
      </button>
    </div>
  );
}
