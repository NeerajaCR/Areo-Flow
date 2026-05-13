import { create } from 'zustand';
import { createTurbineSlice, TurbineSlice } from './slices/turbineSlice';
import { createSimulationSlice, SimulationSlice } from './slices/simulationSlice';
import { createTelemetrySlice, TelemetrySlice } from './slices/telemetrySlice';
import { GridMetrics } from '@/types/turbine';

import { persist } from 'zustand/middleware';

export type RootState = TurbineSlice & SimulationSlice & TelemetrySlice;

export const useStore = create<RootState>()(
  persist(
    (...a) => ({
      ...createTurbineSlice(...a),
      ...createSimulationSlice(...a),
      ...createTelemetrySlice(...a),
    }),
    {
      name: 'aeroflow-storage',
      partialize: (state) => ({
        isPaused: state.isPaused,
        // We don't persist turbines or history to avoid large localStorage usage
        // unless requested, but usually settings are better.
      }),
    }
  )
);

// Memoized selectors
export const selectGridMetrics = (state: RootState): GridMetrics => {
  const activeTurbines = state.turbines.filter(t => !t.maintenanceMode && t.health > 0).length;
  const failedTurbines = state.turbines.filter(t => t.health <= 0 || t.mechanicalStress >= 90).length;
  const totalMegawatts = state.turbines.reduce((acc, t) => acc + t.powerOutput, 0);
  const averageWindSpeed = state.turbines.reduce((acc, t) => acc + t.windSpeed, 0) / state.turbines.length;
  
  // Grid stability logic
  const averageHealth = state.turbines.reduce((acc, t) => acc + t.health, 0) / state.turbines.length;
  const averageStress = state.turbines.reduce((acc, t) => acc + t.mechanicalStress, 0) / state.turbines.length;
  const gridStability = Math.max(0, Math.min(100, (averageHealth * 0.7) - (averageStress * 0.3) + (activeTurbines * 5)));

  return {
    totalMegawatts,
    gridStability,
    averageWindSpeed,
    activeTurbines,
    failedTurbines,
  };
};

export const selectTurbines = (state: RootState) => state.turbines;
export const selectIsPaused = (state: RootState) => state.isPaused;
export const selectHistory = (state: RootState) => state.history;
