'use client';

import React from 'react';
import { Language } from '@/hooks/useLanguage';

interface LanguageToggleProps {
  language: Language;
  onChange: (lang: Language) => void;
}

export function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-1 bg-[#1B1F3B] p-1 rounded-full border border-[#7B5E3A]/40 shadow-inner">
      <button
        onClick={() => onChange('es')}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'es'
            ? 'bg-[#F0C040] text-[#1B1F3B] shadow-md'
            : 'text-gray-400 hover:text-white hover:bg-white/10'
        }`}
        aria-pressed={language === 'es'}
      >
        Español
      </button>
      <button
        onClick={() => onChange('mpu')}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'mpu'
            ? 'bg-[#F0C040] text-[#1B1F3B] shadow-md'
            : 'text-gray-400 hover:text-white hover:bg-white/10'
        }`}
        aria-pressed={language === 'mpu'}
      >
        Mapudungun
      </button>
    </div>
  );
}
