'use client';

import { useState, useEffect } from 'react';

export type Language = 'es' | 'mpu';

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>('es');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem('kuyen-language') as Language;
    if (stored === 'es' || stored === 'mpu') {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kuyen-language', lang);
    }
  };

  return {
    language,
    setLanguage,
    isMounted, // Para evitar hydration mismatch rindiendo solo tras el primer render en CSR
  };
}
