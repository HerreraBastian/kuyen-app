// Se ajusta el PhaseData para caer en gracia con una mejor experiencia.
// Si no hay mapudungun escrito, en el frontend vamos a mostrar el español como fallback de lectura fluida
// más un disclaimer estético de que aún está "Pendiente de revisión tradicional".
export type PhaseId =
  | 'nueva'
  | 'c_iluminante'
  | 'cuarto_c'
  | 'g_creciente'
  | 'llena'
  | 'g_menguante'
  | 'cuarto_m'
  | 'c_menguante';

export interface PhaseData {
  id: PhaseId;
  phaseRange: [number, number]; // Utilizará el valor "phase" de SunCalc (0 a 1)
  emoji: string;
  es: {
    name: string;
    meaning: string;
    activities: string[];
  };
  mpu: {
    name: string;
    meaning: string; // lo dejaremos igual que el español por ahora
    activities: string[];
    isPending?: boolean; // flag para la UI
  };
}

export const KUYEN_DATA: { phases: PhaseData[] } = {
  phases: [
    {
      id: 'nueva',
      phaseRange: [0, 0.03], // también se considera de 0.97 a 1.0
      emoji: '🌑',
      es: {
        name: 'Luna Nueva',
        meaning: 'Inicio del ciclo. Tiempo de descanso, introspección y planificación. La machi realiza rogativas para el nuevo ciclo. No se siembra ni se cosecha. Es momento de pedir y reflexionar.',
        activities: ['Descanso', 'Introspección', 'Planificación', 'Rogativas (machi)', 'Reflexión']
      },
      mpu: {
        name: 'Küyen Wenu Kütrü',
        meaning: 'Inicio del ciclo. Tiempo de descanso, introspección y planificación. La machi realiza rogativas para el nuevo ciclo. No se siembra ni se cosecha. Es momento de pedir y reflexionar.',
        activities: ['Descanso', 'Introspección', 'Planificación', 'Rogativas (machi)', 'Reflexión'],
        isPending: true
      }
    },
    {
      id: 'c_iluminante',
      phaseRange: [0.03, 0.22],
      emoji: '🌒',
      es: {
        name: 'Luna Creciente Iluminante',
        meaning: 'Küyen comienza a mostrarse. Energía de inicio y crecimiento. Momento propicio para sembrar semillas, comenzar proyectos y realizar viajes. La tierra recibe fuerza.',
        activities: ['Sembrar semillas', 'Comenzar proyectos', 'Realizar viajes']
      },
      mpu: {
        name: 'Küyen Rupan',
        meaning: 'Küyen comienza a mostrarse. Energía de inicio y crecimiento. Momento propicio para sembrar semillas, comenzar proyectos y realizar viajes. La tierra recibe fuerza.',
        activities: ['Sembrar semillas', 'Comenzar proyectos', 'Realizar viajes'],
        isPending: true
      }
    },
    {
      id: 'cuarto_c',
      phaseRange: [0.22, 0.28],
      emoji: '🌓',
      es: {
        name: 'Cuarto Creciente',
        meaning: 'Mitad del camino de crecimiento. Tiempo de acción y trabajo intenso. Se realizan trueques y reuniones comunitarias. Las plantas crecen con fuerza bajo esta fase.',
        activities: ['Trabajo intenso', 'Trueques', 'Reuniones comunitarias']
      },
      mpu: {
        name: 'Epu Küyen',
        meaning: 'Mitad del camino de crecimiento. Tiempo de acción y trabajo intenso. Se realizan trueques y reuniones comunitarias. Las plantas crecen con fuerza bajo esta fase.',
        activities: ['Trabajo intenso', 'Trueques', 'Reuniones comunitarias'],
        isPending: true
      }
    },
    {
      id: 'g_creciente',
      phaseRange: [0.28, 0.47],
      emoji: '🌔',
      es: {
        name: 'Luna Gibosa Creciente',
        meaning: 'Küyen está casi llena. Gran energía acumulada. Momento de recolección de plantas medicinales, lawen (medicina). Las machi aprovechan esta fase para preparar remedios.',
        activities: ['Recolección de plantas medicinales (lawen)', 'Preparación de remedios (machi)']
      },
      mpu: {
        name: 'Küyen Ragi',
        meaning: 'Küyen está casi llena. Gran energía acumulada. Momento de recolección de plantas medicinales, lawen (medicina). Las machi aprovechan esta fase para preparar remedios.',
        activities: ['Recolección de plantas medicinales (lawen)', 'Preparación de remedios (machi)'],
        isPending: true
      }
    },
    {
      id: 'llena',
      phaseRange: [0.47, 0.53],
      emoji: '🌕',
      es: {
        name: 'Luna Llena',
        meaning: 'Küyen en su máxima expresión. Fase sagrada. Se realizan el Ngillatun (ceremonia colectiva de rogativa), el Palin (juego ritual) y reuniones del We Tripantu (año nuevo mapuche). Mayor fertilidad y abundancia.',
        activities: ['Ngillatun (ceremonia de rogativa)', 'Palin (juego ritual)', 'Reuniones del We Tripantu']
      },
      mpu: {
        name: 'Pura Küyen',
        meaning: 'Küyen en su máxima expresión. Fase sagrada. Se realizan el Ngillatun (ceremonia colectiva de rogativa), el Palin (juego ritual) y reuniones del We Tripantu (año nuevo mapuche). Mayor fertilidad y abundancia.',
        activities: ['Ngillatun (ceremonia de rogativa)', 'Palin (juego ritual)', 'Reuniones del We Tripantu'],
        isPending: true
      }
    },
    {
      id: 'g_menguante',
      phaseRange: [0.53, 0.72],
      emoji: '🌖',
      es: {
        name: 'Luna Gibosa Menguante',
        meaning: 'Küyen comienza a retirarse. Tiempo de cosecha y almacenamiento. Se recogen frutos maduros y se preparan alimentos para el invierno. Energía de completitud.',
        activities: ['Cosecha', 'Almacenamiento', 'Recolección de frutos maduros', 'Preparación de alimentos']
      },
      mpu: {
        name: 'Küyen Nagi',
        meaning: 'Küyen comienza a retirarse. Tiempo de cosecha y almacenamiento. Se recogen frutos maduros y se preparan alimentos para el invierno. Energía de completitud.',
        activities: ['Cosecha', 'Almacenamiento', 'Recolección de frutos maduros', 'Preparación de alimentos'],
        isPending: true
      }
    },
    {
      id: 'cuarto_m',
      phaseRange: [0.72, 0.78],
      emoji: '🌗',
      es: {
        name: 'Cuarto Menguante',
        meaning: 'La mitad de Küyen se retira. Tiempo de limpieza y orden. Se realizan trabajos de mantención del hogar y del campo. Momento de soltar lo que ya no sirve.',
        activities: ['Limpieza y orden', 'Mantención del hogar', 'Mantención del campo', 'Soltar']
      },
      mpu: {
        name: 'Küla Küyen',
        meaning: 'La mitad de Küyen se retira. Tiempo de limpieza y orden. Se realizan trabajos de mantención del hogar y del campo. Momento de soltar lo que ya no sirve.',
        activities: ['Limpieza y orden', 'Mantención del hogar', 'Mantención del campo', 'Soltar'],
        isPending: true
      }
    },
    {
      id: 'c_menguante',
      phaseRange: [0.78, 0.97],
      emoji: '🌘',
      es: {
        name: 'Luna Creciente Menguante',
        meaning: 'Küyen casi desaparece. Tiempo de cierre del ciclo. Preparación para el descanso. Reflexión sobre lo vivido en el ciclo. La tierra descansa antes de un nuevo comienzo.',
        activities: ['Cierre del ciclo', 'Preparación para el descanso', 'Reflexión']
      },
      mpu: {
        name: 'Küyen Müten',
        meaning: 'Küyen casi desaparece. Tiempo de cierre del ciclo. Preparación para el descanso. Reflexión sobre lo vivido en el ciclo. La tierra descansa antes de un nuevo comienzo.',
        activities: ['Cierre del ciclo', 'Preparación para el descanso', 'Reflexión'],
        isPending: true
      }
    }
  ]
};
