# Architecture Map: AeroFlow Smart Grid Dashboard

## State Management (Zustand + Immer)
The application uses a centralized Zustand store with modular slices for scalability and maintainability.

- **Turbine Slice**: Manages the state of all 6 turbines. Handles status updates, mechanical stress accumulation, and power output calculations.
- **Simulation Slice**: Controls global simulation parameters (paused/active, speed).
- **Telemetry Slice**: Stores historical data points for real-time charting.
- **Immer Integration**: Ensures immutable state updates while maintaining a clean, "mutable-like" syntax.

## Rendering Optimization Strategy
To handle high-frequency updates (500ms) without performance degradation:

1. **Selective Subscriptions**: Components use specific selectors (e.g., `useStore(state => state.isPaused)`) to ensure they only re-render when relevant data changes.
2. **Memoized Computed State**: Expensive calculations (like grid stability) are performed in memoized selectors outside the render cycle.
3. **Optimized Charting**: Recharts is configured with `isAnimationActive={false}` for high-frequency data points to prevent layout thrashing.
4. **React.memo**: Critical components like `TurbineCard` use shallow comparison to avoid unnecessary updates if their specific turbine data hasn't changed.

## Data Flow
1. **Simulation Engine**: A top-level client component runs a `setInterval` (500ms).
2. **Action Dispatch**: Every tick, it calls `tickTurbines()`, which applies environmental physics to all units.
3. **Telemetry Capture**: After each tick, current metrics are captured and appended to the `history` array.
4. **Reactive UI**: Components listening to the store reflect these changes instantly via Framer Motion transitions.

## Engine Lifecycle
- **Initialization**: Store starts with `INITIAL_TURBINES`.
- **Active Loop**: `SimulationEngine` effect manages the interval based on `isPaused`.
- **Cleanup**: Interval is cleared on component unmount to prevent memory leaks.

## Component Hierarchy
- `RootLayout` (SimulationEngine + Providers)
  - `DashboardPage`
    - `Header` (Global status)
    - `GridOverview` (Aggregated metrics)
    - `GlobalControls` (Presets & simulation state)
    - `PowerChart` (Real-time telemetry)
    - `TurbineGrid`
      - `TurbineCard` (Animated visualization + status)
      - `TurbineControlsModal` (Manual overrides)
