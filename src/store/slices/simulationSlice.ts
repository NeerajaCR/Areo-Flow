import { StateCreator } from 'zustand';

export interface SimulationSlice {
  isPaused: boolean;
  simulationSpeed: number;
  togglePause: () => void;
  setPaused: (paused: boolean) => void;
  setSimulationSpeed: (speed: number) => void;
}

export const createSimulationSlice: StateCreator<SimulationSlice> = (set) => ({
  isPaused: false,
  simulationSpeed: 1,
  togglePause: () => set((state) => ({ isPaused: !state.isPaused })),
  setPaused: (paused) => set({ isPaused: paused }),
  setSimulationSpeed: (speed) => set({ simulationSpeed: speed }),
});
