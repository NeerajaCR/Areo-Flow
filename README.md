# AeroFlow Smart Grid Dashboard

AeroFlow is a high-performance, industrial-grade wind farm power grid simulation built with React 19 and Next.js 15. It features a real-time physics engine, predictive stability calculations, and a futuristic control center interface.

## Tech Stack
- **Framework**: Next.js 15 (App Router), React 19
- **State Management**: Zustand + Immer
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Utilities**: date-fns, clsx, tailwind-merge

## Key Features
- **Real-time Engine**: Updates every 500ms with physics-based turbine simulation.
- **Dynamic Turbines**: 6 unique units with individual health, stress, and power metrics.
- **Predictive Stability**: Global grid stability calculated based on fleet-wide health and distribution.
- **Manual Overrides**: Individual controls for wind speed, blade angle, and maintenance mode.
- **Environmental Presets**: Quickly simulate Calm, Storm, or Peak load conditions.
- **Telemetry Charting**: Live 60-second rolling window of aggregate power output.
- **Responsive Industrial UI**: Dark-mode optimized, futuristic dashboard with glowing indicators.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open the Dashboard**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Performance Optimizations
- **Isolated State Slices**: Prevented unnecessary re-renders by splitting the store.
- **Memoized Selectors**: Aggregated metrics are calculated only when relevant state changes.
- **Optimized Rendering**: used `useMemo` and `useCallback` strategically across the component tree.
- **Low-Latency Updates**: The simulation engine uses optimized intervals and shallow state comparison.

## Folder Structure
- `src/app`: Next.js pages and layouts.
- `src/components`: UI, dashboard, and turbine-specific components.
- `src/store`: Zustand state management and slices.
- `src/engine`: Simulation tick logic.
- `src/types`: TypeScript interfaces and types.
- `src/constants`: Simulation parameters and initial state.
- `src/styles`: Global CSS and Tailwind theme.
