Updated code in "Develop" branch

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
