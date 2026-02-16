import { motion, AnimatePresence } from 'framer-motion';
import { Home } from '../pages/Home';
import { DigitalID } from '../pages/DigitalID';
import { Emergency } from '../pages/Emergency';
import { VisitorPage } from '../pages/VisitorPage';
import { ServicesPage } from '../pages/ServicesPage';
import { ProfilePage } from '../pages/ProfilePage';
import { PaymentsPage } from '../pages/PaymentsPage';
import { NotificationsPage } from '../pages/NotificationsPage';
import { RecordsPage } from '../pages/RecordsPage';
import { SecurityPage } from '../pages/SecurityPage';
import { GenericPage } from '../pages/GenericPage';
import { useRef } from 'react';

const pageIds = [
  "home", "id", "visitor", "services", "profile",
  "payments", "notifications", "records", "security", "emergency"
];

interface ContentAreaProps {
  activePageId: string;
  direction: number;
  onNavigate: (pageId: string) => void;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 375 : -375,
    opacity: 0,
    zIndex: 0,
    position: 'absolute' as const,
    width: '100%',
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    position: 'absolute' as const,
    width: '100%',
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 375 : -375,
    opacity: 0,
    position: 'absolute' as const,
    width: '100%',
  })
};

export function ContentArea({ activePageId, direction, onNavigate }: ContentAreaProps) {
  const touchStartX = useRef<number | null>(null);
  const currentIndex = pageIds.indexOf(activePageId);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    // Swipe Threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped Left -> Next Page
        if (currentIndex < pageIds.length - 1) {
          onNavigate(pageIds[currentIndex + 1]);
        }
      } else {
        // Swiped Right -> Previous Page
        if (currentIndex > 0) {
          onNavigate(pageIds[currentIndex - 1]);
        }
      }
    }
    
    touchStartX.current = null;
  };

  const renderPage = () => {
    switch(activePageId) {
      case 'home': return <Home />;
      case 'id': return <DigitalID />;
      case 'emergency': return <Emergency />;
      case 'visitor': return <VisitorPage />;
      case 'services': return <ServicesPage />;
      case 'profile': return <ProfilePage />;
      case 'payments': return <PaymentsPage />;
      case 'notifications': return <NotificationsPage />;
      case 'records': return <RecordsPage />;
      case 'security': return <SecurityPage />;
      default: return <GenericPage title="Not Found" />;
    }
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction} mode='popLayout'>
        <motion.div
          key={activePageId}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="w-full h-full p-4 absolute top-0 left-0 overflow-y-auto"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
