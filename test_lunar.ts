import { getLunarPhase, getDaysUntilNextFullMoon } from './src/lib/lunar';

const today = new Date();
const lunarPhase = getLunarPhase(today);
const daysUntilFullMoon = getDaysUntilNextFullMoon(today);

console.log('--- Küyen Lunar Info ---');
console.log('Date:', today.toISOString());
console.log('Fraction:', lunarPhase.fraction);
console.log('Raw Phase:', lunarPhase.rawPhase);
console.log('Phase ID:', lunarPhase.phase.id);
console.log('Phase Name (es):', lunarPhase.phase.es.name);
console.log('Phase Emoji:', lunarPhase.phase.emoji);
console.log('Is Full Moon (threshold > 0.95):', lunarPhase.isFullMoon);
console.log('Days until next peak Full Moon:', daysUntilFullMoon);
