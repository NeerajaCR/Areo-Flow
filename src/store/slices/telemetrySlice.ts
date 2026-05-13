import { StateCreator } from 'zustand';
import { TelemetryData } from '@/types/turbine';
import { MAX_HISTORY_LENGTH } from '@/constants/simulation';
import { produce } from 'immer';

export interface TelemetrySlice {
  history: TelemetryData[];
  addTelemetry: (data: TelemetryData) => void;
  clearHistory: () => void;
}

export const createTelemetrySlice: StateCreator<TelemetrySlice> = (set) => ({
  history: [],
  addTelemetry: (data) =>
    set(
      produce((state: TelemetrySlice) => {
        state.history.push(data);
        if (state.history.length > MAX_HISTORY_LENGTH) {
          state.history.shift();
        }
      })
    ),
  clearHistory: () => set({ history: [] }),
});
