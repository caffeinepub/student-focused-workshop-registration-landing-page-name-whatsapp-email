import { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import {
  initializeShuffledNames,
  loadShownNames,
  saveShownNames,
  getNextName,
  getRandomCity,
  getRandomTimeAgo,
  getRandomInterval,
  areAllNamesUsed,
} from '../utils/socialProofState';
import { SOCIAL_PROOF_CONFIG } from '../utils/socialProofConfig';

interface PopupData {
  name: string;
  city: string;
  timeAgo: string;
}

export default function SocialProofPopups() {
  const [currentPopup, setCurrentPopup] = useState<PopupData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const shuffledNamesRef = useRef<string[]>([]);
  const shownNamesRef = useRef<string[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initialize on mount
    shuffledNamesRef.current = initializeShuffledNames();
    shownNamesRef.current = loadShownNames();

    // Check if all names are already used
    if (areAllNamesUsed(shuffledNamesRef.current, shownNamesRef.current)) {
      return; // Stop if all names exhausted
    }

    // Schedule first popup
    scheduleNextPopup();

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const scheduleNextPopup = () => {
    // Check if all names used
    if (areAllNamesUsed(shuffledNamesRef.current, shownNamesRef.current)) {
      return; // Stop scheduling
    }

    const interval = getRandomInterval();
    timeoutRef.current = setTimeout(() => {
      showPopup();
    }, interval);
  };

  const showPopup = () => {
    const nextName = getNextName(shuffledNamesRef.current, shownNamesRef.current);
    
    if (!nextName) {
      return; // No more names available
    }

    // Mark name as shown
    shownNamesRef.current = [...shownNamesRef.current, nextName];
    saveShownNames(shownNamesRef.current);

    // Create popup data
    const popupData: PopupData = {
      name: nextName,
      city: getRandomCity(),
      timeAgo: getRandomTimeAgo(),
    };

    // Show popup
    setCurrentPopup(popupData);
    setIsVisible(true);

    // Auto-hide after duration
    setTimeout(() => {
      hidePopup();
    }, SOCIAL_PROOF_CONFIG.autoHideDuration);
  };

  const hidePopup = () => {
    setIsVisible(false);
    
    // Wait for fade-out animation, then schedule next
    setTimeout(() => {
      setCurrentPopup(null);
      scheduleNextPopup();
    }, 300); // Match animation duration
  };

  if (!currentPopup) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 max-w-xs transition-all duration-300 ease-out sm:bottom-6 sm:left-6 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-4 opacity-0'
      }`}
      style={{ pointerEvents: 'none' }}
    >
      <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-lg ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10">
        <div className="flex-shrink-0">
          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500" />
        </div>
        <div className="flex-1 text-sm">
          <p className="font-semibold text-gray-900 dark:text-gray-100">
            {currentPopup.name} from {currentPopup.city}
          </p>
          <p className="mt-0.5 text-gray-600 dark:text-gray-400">
            registered {currentPopup.timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
}
