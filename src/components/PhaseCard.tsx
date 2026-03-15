'use client';

import React from 'react';
import { LunarPhaseResult } from '@/lib/lunar';
import { KuyenSVG } from './KuyenSVG';

interface PhaseCardProps {
  date: Date;
  lunarData: LunarPhaseResult;
  isSelected?: boolean;
  onClick?: () => void;
}

export function PhaseCard({ date, lunarData, isSelected = false, onClick }: PhaseCardProps) {
  const { phase, rawPhase, isFullMoon } = lunarData;
  
  const dayNumber = date.getDate();

  return (
    <button
      onClick={onClick}
      className={`
        relative flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300
        ${isSelected 
          ? 'bg-[#1B1F3B] border border-[#F0C040] shadow-[0_0_15px_rgba(240,192,64,0.3)]' 
          : 'bg-transparent border border-transparent hover:bg-[#1B1F3B]/50 hover:border-[#7B5E3A]/50'
        }
      `}
      aria-label={`Día ${dayNumber}, ${phase.es.name}`}
    >
      {/* Indicador Día */}
      <span className={`text-sm font-medium mb-1 ${isSelected ? 'text-[#F0C040]' : 'text-gray-300'}`}>
        {dayNumber}
      </span>
      
      {/* Visualizador Miniatura */}
      <KuyenSVG phase={rawPhase} width={28} height={28} />
      
      {/* Indicador dorado si es luna llena */}
      {isFullMoon && (
        <span 
          className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#F0C040] shadow-[0_0_8px_#F0C040]" 
          title={`${phase.mpu.name} - Luna Llena`}
        />
      )}
    </button>
  );
}
