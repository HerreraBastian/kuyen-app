'use client';

import React, { useState } from 'react';
import { isToday } from 'date-fns';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageToggle } from '@/components/LanguageToggle';
import { KuyenSVG } from '@/components/KuyenSVG';
import { CosmovisionPanel } from '@/components/CosmovisionPanel';
import { LunarCalendar } from '@/components/LunarCalendar';
import { useLunarPhase } from '@/hooks/useLunarPhase';

export default function Home() {
  const { language, setLanguage, isMounted } = useLanguage();
  
  // Date and Phase tracking
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  // Usar hook precalculado de manera asíncrona segura
  const lunarData = useLunarPhase(selectedDate);

  // Evitar hydration mismatch (el localeStorage tarda en resolverse en cliente)
  if (!isMounted) {
    return <div className="min-h-screen bg-[#0A0D1F] flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-4 border-[#F0C040] border-t-transparent animate-spin"></div>
    </div>;
  }

  // Si lunarData no está disponible de algún modo, previene caídas
  if (!lunarData) return null;

  const isCurrentDay = isToday(selectedDate);

  return (
    <main className="min-h-screen relative flex flex-col items-center py-10 px-4 max-w-7xl mx-auto font-sans">
      
      {/* Cabecera / Header */}
      <header className="w-full flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#F0C040] tracking-wider mb-2 drop-shadow-[0_0_10px_rgba(240,192,64,0.3)]">
            KÜYEN
          </h1>
          <p className="text-sm md:text-base text-gray-300 font-medium tracking-wide">
            {language === 'es' ? 'Fases Lunares y Cosmovisión del Wallmapu' : 'Kimün Küyen Wallmapu mew'}
          </p>
        </div>
        
        {/* Toggle de idioma */}
        <LanguageToggle language={language} onChange={setLanguage} />
      </header>

      {/* Grid Principal */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Columna Izquierda: Visualizador + Panel Cultural */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-8">
          
          {/* Visualizador Hero */}
          <section className="flex flex-col items-center justify-center p-8 rounded-3xl bg-[#1B1F3B]/50 border border-[#7B5E3A]/20 backdrop-blur shadow-2xl relative">
            <KuyenSVG 
              phase={lunarData.rawPhase} 
              width={200} 
              height={200}
              className="drop-shadow-[0_0_30px_rgba(240,192,64,0.4)] transition-all duration-1000 ease-in-out" 
            />
            
            <div className="mt-8 text-center flex flex-col items-center">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
                {(lunarData.fraction * 100).toFixed(1)}%
              </div>
              
              <div className="flex items-center gap-3 mt-2">
                <div className="text-xs tracking-widest text-[#F0C040] uppercase opacity-80">
                  {language === 'es' ? 'Iluminación' : 'Pelön'}
                </div>

                {isCurrentDay && (
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#2D6A4F]/20 text-[#2D6A4F] border border-[#2D6A4F]/40" title="Fase Actual en Tiempo Real">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F] animate-pulse"></span>
                     <span className="text-[10px] uppercase font-bold tracking-wider">{language === 'es' ? 'En Vivo' : 'Mogelei'}</span>
                  </span>
                )}
              </div>

              {!isCurrentDay && (
                <button 
                  onClick={() => setSelectedDate(new Date())}
                  className="mt-5 px-5 py-2 rounded-full border border-[#7B5E3A] text-xs font-semibold tracking-wide text-[#F0C040] hover:bg-[#7B5E3A]/20 hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                  {language === 'es' ? 'Volver a Hoy' : 'Wiñotun Fachantü'}
                </button>
              )}
            </div>
          </section>

          {/* Panel de Cosmovisión */}
          <CosmovisionPanel 
            phaseData={lunarData.phase} 
            language={language}
            className="flex-1"
          />

        </div>

        {/* Columna Derecha: Calendario Lunar */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
          <section className="w-full h-full">
            {/* Header del Calendario, titulo pequeño */}
            <h3 className="text-lg font-semibold text-gray-300 mb-4 pl-2 border-l-4 border-[#2D6A4F]">
              {language === 'es' ? 'Calendario Lunar' : 'Küyen Raj'}
            </h3>
            
            <LunarCalendar 
              onDateSelect={setSelectedDate}
              selectedDate={selectedDate}
              language={language}
              className="h-full"
            />
          </section>
        </div>
        
      </div>
      
    </main>
  );
}
