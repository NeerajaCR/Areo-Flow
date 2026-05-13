export type TurbineStatus = 'optimal' | 'warning' | 'critical' | 'offline';

export interface Turbine {
  id: string;
  name: string;
  windSpeed: number; // m/s
  bladeAngle: number; // degrees
  maintenanceMode: boolean;
  health: number; // 0-100
  powerOutput: number; // MW
  mechanicalStress: number; // 0-100
  status: TurbineStatus;
}

export interface GridMetrics {
  totalMegawatts: number;
  gridStability: number; // 0-100
  averageWindSpeed: number;
  activeTurbines: number;
  failedTurbines: number;
}

export interface SimulationState {
  isPaused: boolean;
  lastUpdate: number;
  history: TelemetryData[];
}

export interface TelemetryData {
  timestamp: number;
  totalPower: number;
  stability: number;
}
