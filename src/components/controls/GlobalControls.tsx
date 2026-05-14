'use client';

import { useStore } from '@/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Pause, RotateCcw, CloudRain, Wind, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function GlobalControls() {
  const isPaused = useStore((state) => state.isPaused);
  const togglePause = useStore((state) => state.togglePause);
  const resetGrid = useStore((state) => state.resetTurbines);
  const clearHistory = useStore((state) => state.clearHistory);
  const updateTurbine = useStore((state) => state.updateTurbine);
  const turbines = useStore((state) => state.turbines);

  const handleReset = () => {
    resetGrid();
    clearHistory();
  };

  const applyPreset = (type: 'calm' | 'storm' | 'peak') => {
    turbines.forEach(t => {
      if (type === 'calm') {
        updateTurbine(t.id, { windSpeed: 5, bladeAngle: 10 });
      } else if (type === 'storm') {
        updateTurbine(t.id, { windSpeed: 25, bladeAngle: 45 });
      } else if (type === 'peak') {
        updateTurbine(t.id, { windSpeed: 15, bladeAngle: 17.5 });
      }
    });
  };

  return (
    <Card className="border-border/50 bg-card/50 overflow-hidden">
      <CardContent className="flex flex-col justify-between gap-6 p-4 md:p-2">
        <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-4">
          <Button
            variant={isPaused ? "default" : "outline"}
            size="lg"
            onClick={togglePause}
            className="flex-1 md:w-auto gap-1 font-bold text-sm md:text-base"
          >
            {isPaused ? <Play className="h-4 w-4 md:h-5 md:w-5 fill-current" /> : <Pause className="h-4 w-4 md:h-5 md:w-5 fill-current" />}
            {isPaused ? "RESUME" : "PAUSE"}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleReset}
            className="flex-1 md:w-auto gap-1 text-sm md:text-base"
          >
            <RotateCcw className="h-4 w-4 md:h-5 md:w-5" />
            <span className="hidden xs:inline">RESET GRID</span>
            <span className="xs:hidden">RESET</span>
          </Button>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Environmental Presets</span>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="secondary"
              size="sm"
              className="flex-1 md:flex-none gap-2 h-9 px-3"
              onClick={() => applyPreset('calm')}
            >
              <CloudRain className="h-4 w-4 shrink-0" />
              <span className="truncate">CALM DAY</span>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="flex-1 md:flex-none gap-2 h-9 px-3"
              onClick={() => applyPreset('storm')}
            >
              <Wind className="h-4 w-4 shrink-0" />
              <span className="truncate">STORM WARNING</span>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="flex-1 md:flex-none gap-2 h-9 px-3"
              onClick={() => applyPreset('peak')}
            >
              <Zap className="h-4 w-4 shrink-0" />
              <span className="truncate">GRID PEAK</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
