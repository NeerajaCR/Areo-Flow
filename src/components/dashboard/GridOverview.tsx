'use client';

import { useStore, selectGridMetrics } from '@/store';
import { useShallow } from 'zustand/react/shallow';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Zap, Activity, Wind, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatNumber } from '@/lib/utils';

export function GridOverview() {
  const metrics = useStore(useShallow(selectGridMetrics));

  const cards = [
    {
      title: "Total Power Output",
      value: `${formatNumber(metrics.totalMegawatts)} MW`,
      icon: Zap,
      color: "text-primary",
      glow: "glow-primary",
    },
    {
      title: "Grid Stability",
      value: `${Math.round(metrics.gridStability)}%`,
      icon: Activity,
      color: metrics.gridStability > 70 ? "text-emerald-500" : "text-amber-500",
      glow: metrics.gridStability > 70 ? "glow-success" : "glow-warning",
      progress: metrics.gridStability,
    },
    {
      title: "Active Turbines",
      value: `${metrics.activeTurbines} / 6`,
      icon: Wind,
      color: "text-blue-500",
      glow: "glow-primary",
    },
    {
      title: "Failed Units",
      value: metrics.failedTurbines.toString(),
      icon: AlertCircle,
      color: metrics.failedTurbines > 0 ? "text-red-500" : "text-emerald-500",
      glow: metrics.failedTurbines > 0 ? "glow-danger" : "glow-success",
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Card className="overflow-hidden border-border/50 bg-card/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{card.title}</p>
                  <h3 className={`mt-2 text-3xl font-bold ${card.color}`}>{card.value}</h3>
                </div>
                <div className={`p-3 rounded-xl bg-background/50 ${card.color} ${card.glow}`}>
                  <card.icon className="h-6 w-6" />
                </div>
              </div>
              {card.progress !== undefined && (
                <div className="mt-4">
                  <Progress 
                    value={card.progress} 
                    className="h-1.5" 
                    indicatorClassName={metrics.gridStability > 70 ? "bg-emerald-500" : "bg-amber-500"}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
