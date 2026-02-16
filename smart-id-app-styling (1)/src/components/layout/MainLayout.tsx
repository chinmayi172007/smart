import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { ContentArea } from '../content/ContentArea';

const pageIds = [
  "home", "id", "visitor", "services", "profile",
  "payments", "notifications", "records", "security", "emergency"
];

interface MainLayoutProps {
  onLogout: () => void;
}

export function MainLayout({ onLogout }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePageId, setActivePageId] = useState('home');
  const [direction, setDirection] = useState(0);

  const handleNavigate = (pageId: string) => {
    const currentIndex = pageIds.indexOf(activePageId);
    const newIndex = pageIds.indexOf(pageId);
    
    if (newIndex > currentIndex) {
      setDirection(1);
    } else if (newIndex < currentIndex) {
      setDirection(-1);
    } else {
      setDirection(0);
    }
    
    setActivePageId(pageId);
  };

  return (
    <div className="relative w-full h-full bg-[#F9F7F2] overflow-hidden flex flex-col">
      <Header 
        onToggleMenu={() => setIsSidebarOpen(!isSidebarOpen)} 
        onLogout={onLogout}
      />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onNavigate={handleNavigate}
        currentPage={activePageId}
      />
      
      <div className="flex-1 relative mt-[60px]">
        {/* Pass navigate handler so swipes can trigger navigation */}
        <ContentArea 
          activePageId={activePageId} 
          direction={direction}
          onNavigate={handleNavigate}
        />
      </div>
    </div>
  );
}
