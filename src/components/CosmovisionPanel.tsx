'use client';

import React from 'react';
import { PhaseData } from '@/lib/constants/kuyen';

interface CosmovisionPanelProps {
  phaseData: PhaseData;
  language: 'es' | 'mpu';
  className?: string;
}

export function CosmovisionPanel({ phaseData, language, className = '' }: CosmovisionPanelProps) {
  const content = language === 'es' ? phaseData.es : phaseData.mpu;
  const isPending = language === 'mpu' && phaseData.mpu.isPending;

  return (
    <div className={`flex flex-col gap-4 p-6 rounded-2xl bg-[#1B1F3B]/80 border border-[#7B5E3A]/30 backdrop-blur-sm text-white shadow-xl hover:shadow-[0_0_20px_rgba(45,106,79,0.15)] transition-shadow duration-500 ${className}`}>
      
      {/* Header del panel */}
      <div className="flex items-center gap-4 border-b border-[#7B5E3A]/30 pb-4 relative">
        <span className="text-4xl filter drop-shadow-[0_0_8px_rgba(240,192,64,0.3)] animate-pulse" role="img" aria-label="emoji fase lunar">
          {phaseData.emoji}
        </span>
        <div>
          <h2 className="text-2xl font-bold tracking-wide text-[#F0C040]">
            {phaseData.mpu.name}
          </h2>
          <p className="text-sm text-gray-300 font-medium">
            {phaseData.es.name}
          </p>
        </div>

        {/* Badge Informativo si el lenguaje seleccionado es mapudungun y la traducción está pendiente */}
        {isPending && (
          <div className="absolute right-0 top-0 bg-[#7B5E3A]/20 text-[#F0C040] text-[10px] px-2 py-1 rounded-full whitespace-nowrap border border-[#F0C040]/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
            Traducción Pendiente
          </div>
        )}
      </div>

      {/* Cuerpo del significado */}
      <div className="flex flex-col gap-5 pt-2">
        <section className="group">
          <h3 className="text-xs uppercase tracking-widest text-[#2D6A4F] mb-2 font-bold font-sans group-hover:text-[#F0C040] transition-colors">
            {language === 'es' ? 'Significado Cultural' : 'Kimün'}
          </h3>
          <p className="text-base leading-relaxed text-gray-100/90 font-light">
            {content.meaning}
          </p>
        </section>

        {/* Sección de Actividades Tradicionales */}
        <section>
          <h3 className="text-xs uppercase tracking-widest text-[#2D6A4F] mb-2 font-bold font-sans">
            {language === 'es' ? 'Actividades Tradicionales' : 'Küzaw'}
          </h3>
          
          {isPending ? (
            <p className="text-sm text-gray-400 italic">{content.activities[0]}</p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {content.activities.map((activity, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-200">
                  <span className="text-[#F0C040] mt-0.5">•</span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

    </div>
  );
}
