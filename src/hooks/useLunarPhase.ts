'use client';

import { useState, useEffect } from 'react';
import { getLunarPhase, getDaysUntilNextFullMoon, LunarPhaseResult } from '@/lib/lunar';

interface UseLunarPhaseReturn extends LunarPhaseResult {
  daysUntilFullMoon: number;
}

export function useLunarPhase(initialDate?: Date): UseLunarPhaseReturn {
  const [lunarData, setLunarData] = useState<LunarPhaseResult>(() => getLunarPhase(initialDate || new Date()));
  const [daysUntilFullMoon, setDaysUntilFullMoon] = useState<number>(() => getDaysUntilNextFullMoon(initialDate || new Date()));

  useEffect(() => {
    const targetDate = initialDate || new Date();
    setLunarData(getLunarPhase(targetDate));
    setDaysUntilFullMoon(getDaysUntilNextFullMoon(targetDate));
  }, [initialDate]);

  return {
    ...lunarData,
    daysUntilFullMoon,
  };
}
