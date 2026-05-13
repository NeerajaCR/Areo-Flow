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
    <Card className="border-border/50 bg-card/50">
      <CardContent className="flex flex-wrap items-center justify-between gap-6 p-6">
        <div className="flex items-center gap-4">
          <Button 
            variant={isPaused ? "default" : "outline"} 
            size="lg" 
            onClick={togglePause}
            className="w-40 gap-2 font-bold"
          >
            {isPaused ? <Play className="h-5 w-5 fill-current" /> : <Pause className="h-5 w-5 fill-current" />}
            {isPaused ? "RESUME" : "PAUSE"}
          </Button>
          <Button variant="outline" size="lg" onClick={handleReset} className="gap-2">
            <RotateCcw className="h-5 w-5" /> RESET GRID
          </Button>
        </div>

        <div className="h-10 w-px bg-border hidden md:block" />

        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Environmental Presets</span>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="gap-2" onClick={() => applyPreset('calm')}>
              <CloudRain className="h-4 w-4" /> CALM DAY
            </Button>
            <Button variant="secondary" size="sm" className="gap-2" onClick={() => applyPreset('storm')}>
              <Wind className="h-4 w-4" /> STORM WARNING
            </Button>
            <Button variant="secondary" size="sm" className="gap-2" onClick={() => applyPreset('peak')}>
              <Zap className="h-4 w-4" /> GRID PEAK
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
