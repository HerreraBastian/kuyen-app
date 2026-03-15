import SunCalc from 'suncalc';
import { KUYEN_DATA, PhaseData } from './constants/kuyen';

export interface LunarPhaseResult {
  phase: PhaseData;
  fraction: number;
  rawPhase: number;
  isFullMoon: boolean;
}

export function getLunarPhase(date: Date): LunarPhaseResult {
  const illumination = SunCalc.getMoonIllumination(date);
  
  // phase varies from 0.0 to 1.0
  const phaseValue = illumination.phase;
  const fractionValue = illumination.fraction;
  
  let matchedPhase: PhaseData = KUYEN_DATA.phases[0]; // fallback a nueva
  
  for (const phase of KUYEN_DATA.phases) {
    const [min, max] = phase.phaseRange;
    if (phaseValue >= min && phaseValue <= max) {
      matchedPhase = phase;
      break;
    }
  }

  // Manejo especial para la Luna Nueva que cruza el 0/1 final
  if (phaseValue >= 0.97 && phaseValue <= 1.0) {
    matchedPhase = KUYEN_DATA.phases.find(p => p.id === 'nueva') || KUYEN_DATA.phases[0];
  }

  return {
    phase: matchedPhase,
    fraction: fractionValue,
    rawPhase: phaseValue,
    isFullMoon: fractionValue > 0.95
  };
}

export function getDaysUntilNextFullMoon(date: Date): number {
  let maxFraction = 0;
  let daysToMax = 0;
  
  // Replicar el cálculo mirando los próximos 30 días para buscar el peak de iluminación
  for (let i = 1; i <= 30; i++) {
    const nextDate = new Date(date.getTime() + i * 24 * 60 * 60 * 1000);
    const ill = SunCalc.getMoonIllumination(nextDate);
    
    if (ill.fraction > maxFraction) {
      maxFraction = ill.fraction;
      daysToMax = i;
    } else if (maxFraction > 0.98 && ill.fraction < maxFraction) {
      // El peak de iluminación (Luna Llena) ha pasado localmente
      break;
    }
  }
  
  return daysToMax;
}
