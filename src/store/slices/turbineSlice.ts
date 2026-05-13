import { StateCreator } from 'zustand';
import { Turbine, TurbineStatus } from '@/types/turbine';
import { INITIAL_TURBINES, STRESS_THRESHOLD, CRITICAL_STRESS, WARNING_STRESS, POWER_COEFFICIENT } from '@/constants/simulation';
import { produce } from 'immer';

export interface TurbineSlice {
  turbines: Turbine[];
  updateTurbine: (id: string, updates: Partial<Turbine>) => void;
  resetTurbines: () => void;
  tickTurbines: (windFluctuation: number) => void;
}

export const createTurbineSlice: StateCreator<TurbineSlice> = (set) => ({
  turbines: INITIAL_TURBINES,
  updateTurbine: (id, updates) =>
    set(
      produce((state: TurbineSlice) => {
        const index = state.turbines.findIndex((t) => t.id === id);
        if (index !== -1) {
          state.turbines[index] = { ...state.turbines[index], ...updates };
        }
      })
    ),
  resetTurbines: () => set({ turbines: INITIAL_TURBINES }),
  tickTurbines: (windFluctuation) =>
    set(
      produce((state: TurbineSlice) => {
        state.turbines.forEach((t) => {
          if (t.maintenanceMode) {
            // Repair stress and health
            t.mechanicalStress = Math.max(0, t.mechanicalStress - 2);
            t.health = Math.min(100, t.health + 0.5);
            t.powerOutput = 0;
            t.status = 'offline';
            return;
          }

          if (t.health <= 0 || t.mechanicalStress >= STRESS_THRESHOLD) {
            t.status = 'critical';
            t.powerOutput = 0;
            t.health = Math.max(0, t.health - 1);
            return;
          }

          // Update environmental factors
          t.windSpeed = Math.max(0, t.windSpeed + windFluctuation);
          
          // Calculate power output
          const efficiency = (100 - t.mechanicalStress) / 100;
          t.powerOutput = t.windSpeed * POWER_COEFFICIENT * efficiency;

          // Calculate stress accumulation based on blade angle and wind speed
          // Optimal angle is 15-20. Deviation increases stress.
          const angleDeviation = Math.abs(t.bladeAngle - 17.5);
          const stressIncrease = (t.windSpeed * 0.1) + (angleDeviation * 0.2);
          t.mechanicalStress = Math.min(100, t.mechanicalStress + stressIncrease * 0.1);

          // Update health based on stress
          if (t.mechanicalStress > CRITICAL_STRESS) {
            t.health = Math.max(0, t.health - 0.2);
          }

          // Update status
          if (t.mechanicalStress >= STRESS_THRESHOLD) t.status = 'critical';
          else if (t.mechanicalStress >= CRITICAL_STRESS) t.status = 'warning';
          else if (t.mechanicalStress >= WARNING_STRESS) t.status = 'warning';
          else t.status = 'optimal';
        });
      })
    ),
});
