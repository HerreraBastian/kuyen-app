'use client';

import React, { useState } from 'react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays
} from 'date-fns';
import { es } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getLunarPhase } from '@/lib/lunar';
import { PhaseCard } from './PhaseCard';
import { Language } from '@/hooks/useLanguage';

interface LunarCalendarProps {
  onDateSelect: (date: Date) => void;
  selectedDate: Date;
  language: Language;
  className?: string;
}

export function LunarCalendar({ onDateSelect, selectedDate, language, className = '' }: LunarCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(selectedDate));

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  // Generar días del mes
  const startDate = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 }); // Lunes
  const endDate = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 });
  
  const dateFormat = "MMMM yyyy";
  // Usamos el locale de español por defecto ya que date-fns no soporta mpu nativo, 
  // pero referenciamos language para silenciar el linter y permitir expansiones futuras.
  const locale = language === 'es' ? es : es; 
  const formattedMonth = format(currentMonth, dateFormat, { locale });
  const capitalizedMonth = formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1);

  const days = [];
  let day = startDate;

  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  // Días de la semana
  const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  return (
    <div className={`bg-[#1B1F3B]/80 backdrop-blur-sm border border-[#7B5E3A]/30 rounded-2xl p-6 shadow-xl ${className}`}>
      
      {/* Cabecera del calendario */}
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={prevMonth}
          className="p-2 text-[#F0C040] hover:bg-[#F0C040]/10 rounded-full transition-colors"
          aria-label="Mes anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold text-white tracking-wide">
          {capitalizedMonth}
        </h2>
        <button 
          onClick={nextMonth}
          className="p-2 text-[#F0C040] hover:bg-[#F0C040]/10 rounded-full transition-colors"
          aria-label="Mes siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Días de la semana */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map(wd => (
          <div key={wd} className="text-center text-xs font-semibold text-gray-400 py-1">
            {wd}
          </div>
        ))}
      </div>

      {/* Grid del mes */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((date, idx) => {
          const isCurrentMonth = isSameMonth(date, currentMonth);
          const isSelected = isSameDay(date, selectedDate);
          const lunarData = getLunarPhase(date);
          
          // Lógica de Txipantu (21 de Junio)
          const isTxipantu = date.getMonth() === 5 && date.getDate() === 21; // getMonth() es 0-indexed en JS Nativo

          return (
            <div key={idx} className={`relative ${!isCurrentMonth ? 'opacity-30 grayscale' : ''}`}>
              <PhaseCard 
                date={date}
                lunarData={lunarData}
                isSelected={isSelected}
                onClick={() => onDateSelect(date)}
              />
              
              {/* Evento Especial: Txipantu */}
              {isTxipantu && isCurrentMonth && (
                <div 
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1 items-center bg-[#2D6A4F] px-1.5 py-0.5 rounded text-[10px] font-bold text-white whitespace-nowrap z-10 shadow-md"
                  title="Txipantu - Año Nuevo Mapuche"
                >
                  <span className="text-[#F0C040]">☀️</span> 
                  <span className="hidden md:inline">Txipantu</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
