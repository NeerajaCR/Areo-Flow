import { Header } from "@/components/dashboard/Header";
import { GridOverview } from "@/components/dashboard/GridOverview";
import { GlobalControls } from "@/components/controls/GlobalControls";
import { TurbineGrid } from "@/components/turbines/TurbineGrid";
import { PowerChart } from "@/components/charts/PowerChart";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto max-w-7xl p-6 space-y-8">
        {/* Top Section: Metrics Overview */}
        <GridOverview />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Simulation Controls & Real-time Chart */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight">Grid Controls</h2>
              <GlobalControls />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight">Performance Analytics</h2>
              <PowerChart />
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-4">
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest">System Intelligence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The AeroFlow Predictive Engine is monitoring grid stability. Currently analyzing blade pitch efficiency across all active nodes.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-primary/60">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                AI-OPTIMIZATION ACTIVE
              </div>
            </div>
          </div>

          {/* Right Column: Turbine Fleet Grid */}
          <div className="lg:col-span-2">
            <TurbineGrid />
          </div>
        </div>
      </main>

      <footer className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © 2026 AeroFlow Industrial Systems. All telemetry data is simulated for demonstration purposes.
      </footer>
    </div>
  );
}
