'use client';

import { Turbine } from '@/types/turbine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Settings, Wind, Zap, Activity, AlertTriangle, Hammer, PowerOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatNumber, cn } from '@/lib/utils';
import { useStore } from '@/store';

interface TurbineCardProps {
  turbine: Turbine;
  onOpenControls: (id: string) => void;
}

export function TurbineCard({ turbine, onOpenControls }: TurbineCardProps) {
  const isOptimal = turbine.status === 'optimal';
  const isWarning = turbine.status === 'warning';
  const isCritical = turbine.status === 'critical';
  const isOffline = turbine.status === 'offline' || turbine.maintenanceMode;

  // Blade rotation speed based on wind speed (0-20 m/s mapped to 0.5-5s duration)
  const rotationDuration = Math.max(0.2, 5 - (turbine.windSpeed * 0.3));

  return (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-500",
      isOptimal && "border-emerald-500/30 bg-emerald-500/5",
      isWarning && "border-amber-500/30 bg-amber-500/5",
      isCritical && "border-red-500/30 bg-red-500/5",
      isOffline && "border-gray-500/30 bg-gray-500/5"
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex flex-col gap-1">
          <CardTitle className="text-lg font-bold">{turbine.name}</CardTitle>
          <Badge variant={turbine.status} className="w-fit">
            {turbine.maintenanceMode ? "MAINTENANCE" : turbine.status.toUpperCase()}
          </Badge>
        </div>
        <button 
          onClick={() => onOpenControls(turbine.id)}
          className="p-2 hover:bg-accent rounded-md transition-colors"
        >
          <Settings className="h-5 w-5 text-muted-foreground" />
        </button>
      </CardHeader>
      
      <CardContent className="space-y-4 pt-4">
        {/* Visualization area */}
        <div className="relative flex justify-center py-6 h-40">
          {/* Animated Energy Flow */}
          <AnimatePresence>
            {!isOffline && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className={cn(
                  "absolute h-32 w-32 rounded-full blur-3xl opacity-20 animate-pulse-glow",
                  isOptimal ? "bg-emerald-500" : isWarning ? "bg-amber-500" : "bg-red-500"
                )} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Turbine SVG */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Blades */}
            <motion.div
              animate={isOffline ? { rotate: 45 } : { rotate: 360 }}
              transition={isOffline ? { duration: 1 } : { duration: rotationDuration, repeat: Infinity, ease: "linear" }}
              className="turbine-blade"
            >
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="4" fill="currentColor" />
                <path d="M50 50L50 10L55 50Z" fill="currentColor" opacity="0.8" />
                <path d="M50 50L84.6 70L50 55Z" fill="currentColor" opacity="0.8" />
                <path d="M50 50L15.4 70L50 55Z" fill="currentColor" opacity="0.8" />
              </svg>
            </motion.div>
            {/* Tower */}
            <div className="w-2 h-16 bg-muted mt-[-5px] rounded-t-full" />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
              <Wind className="h-3 w-3" /> WIND
            </div>
            <p className="text-sm font-bold">{formatNumber(turbine.windSpeed)} m/s</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
              <Zap className="h-3 w-3" /> POWER
            </div>
            <p className={cn("text-sm font-bold", isOffline ? "text-muted-foreground" : "text-primary")}>
              {formatNumber(turbine.powerOutput)} MW
            </p>
          </div>
        </div>

        {/* Progress bars */}
        <div className="space-y-3">
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              <span>Mechanical Stress</span>
              <span className={cn(
                turbine.mechanicalStress > 75 ? "text-red-500" : turbine.mechanicalStress > 50 ? "text-amber-500" : "text-emerald-500"
              )}>
                {Math.round(turbine.mechanicalStress)}%
              </span>
            </div>
            <Progress 
              value={turbine.mechanicalStress} 
              className="h-1" 
              indicatorClassName={cn(
                turbine.mechanicalStress > 75 ? "bg-red-500" : turbine.mechanicalStress > 50 ? "bg-amber-500" : "bg-emerald-500"
              )}
            />
          </div>
          
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              <span>Component Health</span>
              <span className={cn(
                turbine.health < 40 ? "text-red-500" : turbine.health < 70 ? "text-amber-500" : "text-emerald-500"
              )}>
                {Math.round(turbine.health)}%
              </span>
            </div>
            <Progress 
              value={turbine.health} 
              className="h-1" 
              indicatorClassName={cn(
                turbine.health < 40 ? "bg-red-500" : turbine.health < 70 ? "bg-amber-500" : "bg-emerald-500"
              )}
            />
          </div>
        </div>

        {/* Action Indicators */}
        <div className="flex gap-2 pt-2">
          {turbine.maintenanceMode && (
            <div className="flex items-center gap-1 text-[10px] font-bold text-amber-500 uppercase">
              <Hammer className="h-3 w-3" /> Repairing...
            </div>
          )}
          {turbine.status === 'critical' && !turbine.maintenanceMode && (
            <div className="flex items-center gap-1 text-[10px] font-bold text-red-500 uppercase">
              <AlertTriangle className="h-3 w-3" /> Critical Failure Risk
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
