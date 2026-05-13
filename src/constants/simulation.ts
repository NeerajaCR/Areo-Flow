export const SIMULATION_TICK_MS = 500;
export const MAX_HISTORY_LENGTH = 120; // 60 seconds at 500ms intervals

export const STRESS_THRESHOLD = 90;
export const CRITICAL_STRESS = 75;
export const WARNING_STRESS = 50;

export const OPTIMAL_BLADE_ANGLE_MIN = 10;
export const OPTIMAL_BLADE_ANGLE_MAX = 25;

export const POWER_COEFFICIENT = 0.5; // multiplier for wind speed to MW

export const INITIAL_TURBINES = [
  { id: 'T-01', name: 'Alpha-01', windSpeed: 12, bladeAngle: 15, maintenanceMode: false, health: 100, powerOutput: 0, mechanicalStress: 0, status: 'optimal' as const },
  { id: 'T-02', name: 'Alpha-02', windSpeed: 12, bladeAngle: 15, maintenanceMode: false, health: 98, powerOutput: 0, mechanicalStress: 5, status: 'optimal' as const },
  { id: 'T-03', name: 'Beta-01', windSpeed: 11, bladeAngle: 18, maintenanceMode: false, health: 95, powerOutput: 0, mechanicalStress: 10, status: 'optimal' as const },
  { id: 'T-04', name: 'Beta-02', windSpeed: 13, bladeAngle: 20, maintenanceMode: false, health: 92, powerOutput: 0, mechanicalStress: 15, status: 'optimal' as const },
  { id: 'T-05', name: 'Gamma-01', windSpeed: 10, bladeAngle: 12, maintenanceMode: false, health: 88, powerOutput: 0, mechanicalStress: 25, status: 'warning' as const },
  { id: 'T-06', name: 'Gamma-02', windSpeed: 14, bladeAngle: 22, maintenanceMode: false, health: 85, powerOutput: 0, mechanicalStress: 30, status: 'warning' as const },
];
