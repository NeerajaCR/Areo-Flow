'use client';

import { useStore, selectHistory } from '@/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useMemo } from 'react';
import { format } from 'date-fns';

export function PowerChart() {
  const history = useStore(selectHistory);

  const chartData = useMemo(() => {
    return history.map(item => ({
      ...item,
      time: format(item.timestamp, 'HH:mm:ss'),
      power: parseFloat(item.totalPower.toFixed(2)),
      stability: parseFloat(item.stability.toFixed(2)),
    }));
  }, [history]);

  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle className="text-lg font-bold">Live Power Grid Telemetry</CardTitle>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Real-time aggregate output (60s window)</p>
        </div>
      </CardHeader>
      <CardContent className="h-[300px] pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorPower" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="time" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={10}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
              minTickGap={30}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}MW`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
              itemStyle={{ color: 'hsl(var(--primary))', fontSize: '12px' }}
              labelStyle={{ color: 'hsl(var(--muted-foreground))', fontSize: '10px', marginBottom: '4px' }}
            />
            <Area 
              type="monotone" 
              dataKey="power" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorPower)" 
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
