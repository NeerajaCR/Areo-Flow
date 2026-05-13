'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useStore, selectGridMetrics } from '@/store';
import { SIMULATION_TICK_MS } from '@/constants/simulation';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';

export function SimulationEngine({ children }: { children: React.ReactNode }) {
  useKeyboardShortcuts();
  const isPaused = useStore((state) => state.isPaused);
  const tickTurbines = useStore((state) => state.tickTurbines);
  const addTelemetry = useStore((state) => state.addTelemetry);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const runTick = useCallback(() => {
    if (isPaused) return;

    // Simulate small random wind fluctuations for each tick
    const windFluctuation = (Math.random() - 0.5) * 0.5;
    tickTurbines(windFluctuation);

    // Capture telemetry for the chart
    const state = useStore.getState();
    const metrics = selectGridMetrics(state);
    
    addTelemetry({
      timestamp: Date.now(),
      totalPower: metrics.totalMegawatts,
      stability: metrics.gridStability,
    });
  }, [isPaused, tickTurbines, addTelemetry]);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(runTick, SIMULATION_TICK_MS);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, runTick]);

  return <>{children}</>;
}
