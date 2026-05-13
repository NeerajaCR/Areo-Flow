'use client';

import { useStore, selectTurbines } from '@/store';
import { TurbineCard } from './TurbineCard';
import { useState } from 'react';
import { TurbineControlsModal } from '../controls/TurbineControlsModal';

export function TurbineGrid() {
  const turbines = useStore(selectTurbines);
  const [selectedTurbineId, setSelectedTurbineId] = useState<string | null>(null);

  const selectedTurbine = turbines.find(t => t.id === selectedTurbineId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight">Active Wind Farm</h2>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            OPERATIONAL
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {turbines.map((turbine) => (
          <TurbineCard 
            key={turbine.id} 
            turbine={turbine} 
            onOpenControls={(id) => setSelectedTurbineId(id)}
          />
        ))}
      </div>

      {selectedTurbine && (
        <TurbineControlsModal 
          turbine={selectedTurbine} 
          isOpen={!!selectedTurbineId} 
          onClose={() => setSelectedTurbineId(null)} 
        />
      )}
    </div>
  );
}
