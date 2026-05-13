'use client';

import { Turbine } from '@/types/turbine';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store';
import { Wind, Gauge, Hammer, Power, RefreshCw } from 'lucide-react';
import { Label } from '@/components/ui/label';

interface TurbineControlsModalProps {
  turbine: Turbine;
  isOpen: boolean;
  onClose: () => void;
}

export function TurbineControlsModal({ turbine, isOpen, onClose }: TurbineControlsModalProps) {
  const updateTurbine = useStore((state) => state.updateTurbine);

  const handleWindChange = (val: number[]) => {
    updateTurbine(turbine.id, { windSpeed: val[0] });
  };

  const handleAngleChange = (val: number[]) => {
    updateTurbine(turbine.id, { bladeAngle: val[0] });
  };

  const toggleMaintenance = (checked: boolean) => {
    updateTurbine(turbine.id, { maintenanceMode: checked });
  };

  const handleShutdown = () => {
    updateTurbine(turbine.id, { health: 0, status: 'offline' });
  };

  const handleReset = () => {
    updateTurbine(turbine.id, { health: 100, mechanicalStress: 0, status: 'optimal', maintenanceMode: false });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-card border-border/50">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Control Panel: {turbine.name}
          </DialogTitle>
          <DialogDescription>
            Manual overrides for individual turbine systems.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          {/* Wind Speed Control */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Wind className="h-4 w-4 text-primary" />
                Wind Speed Override
              </div>
              <span className="text-xs font-mono bg-secondary px-2 py-1 rounded">{turbine.windSpeed.toFixed(1)} m/s</span>
            </div>
            <Slider
              defaultValue={[turbine.windSpeed]}
              max={30}
              step={0.1}
              onValueChange={handleWindChange}
            />
          </div>

          {/* Blade Angle Control */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Gauge className="h-4 w-4 text-primary" />
                Blade Pitch Angle
              </div>
              <span className="text-xs font-mono bg-secondary px-2 py-1 rounded">{turbine.bladeAngle.toFixed(1)}°</span>
            </div>
            <Slider
              defaultValue={[turbine.bladeAngle]}
              min={-5}
              max={90}
              step={0.5}
              onValueChange={handleAngleChange}
            />
          </div>

          {/* Toggles */}
          <div className="flex items-center justify-between rounded-lg border p-4 bg-background/50">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Hammer className="h-4 w-4 text-amber-500" />
                Maintenance Mode
              </div>
              <p className="text-xs text-muted-foreground">Repairs stress over time</p>
            </div>
            <Switch
              checked={turbine.maintenanceMode}
              onCheckedChange={toggleMaintenance}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <Button variant="outline" className="gap-2" onClick={handleReset}>
              <RefreshCw className="h-4 w-4" /> Reset Unit
            </Button>
            <Button variant="destructive" className="gap-2" onClick={handleShutdown}>
              <Power className="h-4 w-4" /> Hard Shutdown
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
