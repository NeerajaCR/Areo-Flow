'use client';

import { useEffect } from 'react';
import { useStore } from '@/store';

export function useKeyboardShortcuts() {
  const togglePause = useStore((state) => state.togglePause);
  const resetGrid = useStore((state) => state.resetTurbines);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Space to toggle pause
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        togglePause();
      }
      
      // R to reset
      if (e.code === 'KeyR' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        resetGrid();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePause, resetGrid]);
}
