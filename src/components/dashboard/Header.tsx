'use client';

import { useState, useEffect } from 'react';
import { useStore, selectGridMetrics } from '@/store';
import { useShallow } from 'zustand/react/shallow';
import { Badge } from '@/components/ui/badge';
import { Activity, Clock, ShieldCheck, ShieldAlert, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [time, setTime] = useState(new Date());
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const metrics = useStore(useShallow(selectGridMetrics));
  const isPaused = useStore((state) => state.isPaused);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-card/50 px-6 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary glow-primary">
          <Activity className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground uppercase">AeroFlow <span className="text-primary/60">Grid</span></h1>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Industrial Node Control</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-4 border-x border-border/50 px-8">
          <div className="text-right">
            <p className="text-[10px] font-bold text-muted-foreground uppercase">System Time</p>
            <p className="text-sm font-mono">{format(time, 'HH:mm:ss')}</p>
          </div>
          <div className="w-px h-8 bg-border/50 mx-2" />
          <div className="text-right">
            <p className="text-[10px] font-bold text-muted-foreground uppercase">Stability Index</p>
            <p className={cn("text-sm font-mono font-bold", metrics.gridStability > 70 ? "text-emerald-500" : "text-amber-500")}>
              {metrics.gridStability.toFixed(1)}%
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setIsMuted(!isMuted)}>
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
            {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </Button>
          <div className="flex items-center gap-2">
            <Badge variant={isPaused ? "secondary" : "success"} className="h-6 px-3">
              {isPaused ? "PAUSED" : "LIVE"}
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
}
