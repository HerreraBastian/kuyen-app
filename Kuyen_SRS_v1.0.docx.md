

|  | ESPECIFICACIÓN DE REQUISITOS DE SOFTWARE *Software Requirements Specification  —  SRS v1.0* |
| :---- | :---- |

| KÜYEN *Küyen  —  Luna en mapudungun* Visualizador de Fases Lunares y Cosmovisión Mapuche del Wallmapu |
| :---: |

| Versión | 1.0.0  —  Versión Inicial |
| :---- | :---- |
| **Fecha** | Marzo 2026 |
| **Tipo de Proyecto** | Nivel 1  —  Frontend sin backend |
| **Idiomas** | Español  /  Mapudungun (toggle) |
| **Territorio** | Wallmapu (Chile y Argentina) |
| **Público** | General, Comunidades Mapuche, Profesores, Estudiantes |
| **Stack** | Next.js 14  |  TailwindCSS  |  shadcn/ui  |  SunCalc.js |
| **Estado** | **APROBADO PARA DESARROLLO** |

*Proyecto Vibe Coding  —  Powered by Antigravity*

# **1\. Introducción**

## **1.1  Propósito del Documento**

Este SRS define los requisitos completos para **Küyen**, una aplicación web que combina la visualización astronómica de las fases lunares con la **cosmovisión mapuche de la luna** y su relación con el territorio del Wallmapu. El documento está diseñado para ser consumido directamente por el agente de Antigravity como fuente de verdad del proyecto.

## **1.2  Visión del Producto**

**Küyen** es una aplicación web educativa, cultural y visualmente impactante que permite a cualquier persona — desde estudiantes escolares hasta comunidades mapuche — explorar las fases de la luna tal como las comprende tanto la astronomía occidental como la cosmovisión mapuche. El nombre es el término en mapudungun para la luna, entidad femenina central en la espiritualidad y el calendario mapuche.

## **1.3  Alcance**

* Visualización en tiempo real de la fase lunar actual con representación visual.

* Calendario lunar mensual navegable con las 8 fases marcadas.

* Panel de cosmovisión mapuche: nombre en mapudungun, significado cultural, relación con el Wallmapu y actividades tradicionales asociadas a cada fase.

* Toggle de idioma español / mapudungun en toda la interfaz.

* Sección de contexto territorial: mapa o descripción del Wallmapu (Chile y Argentina).

* Diseño responsivo mobile-first, sin backend ni base de datos.

Quedan **excluidos de v1.0**: autenticación de usuarios, gamificación, notificaciones push, y cálculos de rituales o ceremonias específicas.

## **1.4  Stack Tecnológico — Decisiones Cerradas**

| Stack — sin modificaciones Framework:     Next.js 14 App Router \+ TypeScript Estilos:       TailwindCSS \+ shadcn/ui Cálculo lunar: SunCalc.js (librería JS de astronomía, sin API externa) Fechas:        date-fns Iconos:        Lucide React Sin backend:   No Supabase, no base de datos, no autenticación Hosting:       Vercel (deploy gratuito desde GitHub) |
| :---- |

# **2\. Contenido Cultural — Cosmovisión Mapuche de Küyen**

Esta sección es la **fuente de verdad del contenido cultural** del proyecto. El agente debe usar exactamente estos textos, nombres y descripciones. No inferir ni inventar contenido sobre cosmovisión mapuche.

## **2.1  Küyen — La Luna en la Cosmología Mapuche**

Küyen (también escrito Küyén) es la deidad lunar en la espiritualidad mapuche. Es una entidad femenina que rige los ciclos de la naturaleza, la fertilidad, el tiempo y las mareas. Küyen acompaña a Antü (el sol) en el equilibrio cósmico. Su ciclo mensual estructura el calendario agrícola y ceremonial mapuche, conocido como el Az Mapu (orden natural del mundo).

El ciclo de Küyen es observado con profunda atención por el pueblo mapuche, especialmente por las machi (autoridades espirituales) y los lonko (autoridades comunitarias). Cada fase tiene un nombre, un significado y una guía de actividades para la comunidad.

## **2.2  Las 8 Fases de Küyen con Nombres y Significados**

| Fase | Nombre Mapudungun | Nombre Español | Significado y Actividades Tradicionales |
| ----- | ----- | ----- | ----- |
| 🌑 | **Küyen Wenu Kütrü** | Luna Nueva | Inicio del ciclo. Tiempo de descanso, introspección y planificación. La machi realiza rogativas para el nuevo ciclo. No se siembra ni se cosecha. Es momento de pedir y reflexionar. |
| 🌒 | **Küyen Rupan** | Luna Creciente Iluminante | Küyen comienza a mostrarse. Energía de inicio y crecimiento. Momento propicio para sembrar semillas, comenzar proyectos y realizar viajes. La tierra recibe fuerza. |
| 🌓 | **Epu Küyen** | Cuarto Creciente | Mitad del camino de crecimiento. Tiempo de acción y trabajo intenso. Se realizan trueques y reuniones comunitarias. Las plantas crecen con fuerza bajo esta fase. |
| 🌔 | **Küyen Ragi** | Luna Gibosa Creciente | Küyen está casi llena. Gran energía acumulada. Momento de recolección de plantas medicinales, lawen (medicina). Las machi aprovechan esta fase para preparar remedios. |
| 🌕 | **Pura Küyen** | Luna Llena | Küyen en su máxima expresión. Fase sagrada. Se realizan el Ngillatun (ceremonia colectiva de rogativa), el Palin (juego ritual) y reuniones del We Tripantu (año nuevo mapuche). Mayor fertilidad y abundancia. |
| 🌖 | **Küyen Nagi** | Luna Gibosa Menguante | Küyen comienza a retirarse. Tiempo de cosecha y almacenamiento. Se recogen frutos maduros y se preparan alimentos para el invierno. Energía de completitud. |
| 🌗 | **Küla Küyen** | Cuarto Menguante | La mitad de Küyen se retira. Tiempo de limpieza y orden. Se realizan trabajos de mantención del hogar y del campo. Momento de soltar lo que ya no sirve. |
| 🌘 | **Küyen Müten** | Luna Creciente Menguante | Küyen casi desaparece. Tiempo de cierre del ciclo. Preparación para el descanso. Reflexión sobre lo vivido en el ciclo. La tierra descansa antes de un nuevo comienzo. |

## **2.3  El Wallmapu — Territorio de Küyen**

El Wallmapu es el territorio ancestral del pueblo mapuche, que se extiende a ambos lados de la Cordillera de los Andes, abarcando lo que hoy es el sur de Chile y el sur de Argentina. En Chile comprende principalmente las regiones de La Araucanía, Los Ríos y Los Lagos. En Argentina incluye las provincias de Neuquén, Río Negro y parte de Chubut.

El término **Walli Mapu** significa *"toda la tierra"* o *"la tierra de los cuatro puntos cardinales"*. Para el pueblo mapuche, el Wallmapu no es solo un territorio geográfico sino un espacio espiritual y relacional donde todo ser vivo está conectado — incluida Küyen, que ilumina y guía a su pueblo desde el cielo.

## **2.4  Txipantu — El Año Nuevo Mapuche**

El Txipantu (también We Tripantu) es el año nuevo mapuche, celebrado durante el solsticio de invierno del hemisferio sur (entre el 21 y 24 de junio). Küyen juega un papel central: la noche del solsticio, las familias se reúnen a orillas de ríos y lagos para recibir las primeras aguas del año nuevo bajo la luna, dando gracias a Küyen y a Ngünechen (el creador). La app debe destacar especialmente las fases lunares cercanas al 21 de junio.

# **3\. Requisitos Funcionales**

## **3.1  Módulo Principal — Estado Lunar Actual**

| ID | Requisito | Prioridad | Implementación |
| ----- | ----- | ----- | ----- |
| RF-01 | La pantalla principal debe mostrar la fase lunar actual calculada en tiempo real para la fecha y hora del dispositivo del usuario. | Alta | SunCalc.js getMoonIllumination(now) |
| RF-02 | La fase lunar debe representarse visualmente mediante una ilustración SVG animada que muestre la porción iluminada real de la luna. | Alta | Componente SVG con cálculo de fase (0–1). |
| RF-03 | Debe mostrarse el porcentaje de iluminación actual de la luna (0%–100%). | Alta | SunCalc illumination.fraction \* 100 |
| RF-04 | Debe mostrarse el nombre de la fase en español y en mapudungun según el toggle activo. | Alta | Objeto de i18n con las 8 fases (sección 2.2). |
| RF-05 | Debe mostrarse el significado cultural mapuche de la fase actual (texto de sección 2.2). | Alta | Contenido estático en constantes del proyecto. |
| RF-06 | Debe indicarse cuántos días faltan para la próxima luna llena (Pura Küyen). | Media | Cálculo con SunCalc getMoonTimes(). |

## **3.2  Módulo de Calendario Lunar**

| ID | Requisito | Prioridad | Implementación |
| ----- | ----- | ----- | ----- |
| RF-10 | El calendario debe mostrar el mes actual con un indicador visual de fase lunar para cada día. | Alta | Grid mensual con SunCalc por cada día del mes. |
| RF-11 | El usuario debe poder navegar al mes anterior y al mes siguiente. | Alta | Estado de mes en React; recalcular fases. |
| RF-12 | Al hacer clic en un día del calendario, el panel de cosmovisión debe actualizarse con la fase y el significado de ese día. | Alta | Estado selectedDate en Zustand o useState. |
| RF-13 | Los días de luna llena (Pura Küyen) deben destacarse visualmente con un indicador dorado. | Alta | Comparar fase calculada con umbral de luna llena (illumination \> 0.95). |
| RF-14 | El calendario debe marcar el 21 de junio como Txipantu con un indicador especial y su descripción (sección 2.4). | Media | Hardcoded para el 21 de junio de cada año. |

## **3.3  Módulo de Cosmovisión Mapuche**

| ID | Requisito | Prioridad | Implementación |
| ----- | ----- | ----- | ----- |
| RF-20 | El panel de cosmovisión debe mostrar: nombre mapudungun de la fase, nombre en español, emoji/ícono de la fase, significado cultural completo y actividades tradicionales. | Alta | Datos de sección 2.2 como constante en lib/constants/kuyen.ts. |
| RF-21 | Debe existir una sección dedicada al Wallmapu con descripción textual del territorio (sección 2.3) y los nombres de las regiones en Chile y Argentina. | Alta | Página o sección /wallmapu con contenido estático. |
| RF-22 | Debe existir una sección sobre el Txipantu (año nuevo mapuche) con su descripción completa (sección 2.4). | Media | Sección /txipantu o modal desde el calendario. |
| RF-23 | Todos los textos de cosmovisión deben provenir exactamente de la sección 2 de este SRS, sin modificaciones ni inferencias. | Alta | Constante KUYEN\_DATA en lib/constants/kuyen.ts. |

## **3.4  Módulo de Idioma**

| ID | Requisito | Prioridad | Implementación |
| ----- | ----- | ----- | ----- |
| RF-30 | Debe existir un toggle visible y accesible para cambiar entre español y mapudungun. | Alta | useState('es') | ('mpu'); persistir en localStorage. |
| RF-31 | El toggle debe mostrar los textos: 'Español' y 'Mapudungun' (no abreviaciones). | Alta | Botón segmentado en el header. |
| RF-32 | Al cambiar de idioma, TODOS los textos de la interfaz deben cambiar instantáneamente sin recargar la página. | Alta | Contexto de idioma \+ objeto de traducciones i18n. |
| RF-33 | Los nombres de las fases, el contenido de cosmovisión y los títulos de sección deben estar disponibles en ambos idiomas. | Alta | Archivo lib/constants/i18n/es.ts y lib/constants/i18n/mpu.ts. |

# **4\. Criterios de Aceptación por Requisito**

## **4.1  RF-01 y RF-04 — Fase actual en tiempo real**

| Escenario: Usuario abre la app y ve la fase actual Dado que el usuario abre la app en cualquier dispositivo Cuando la página principal carga Entonces el componente lunar SVG muestra la fase correspondiente a la fecha y hora actual Y el nombre de la fase aparece en el idioma activo (español o mapudungun) Y el porcentaje de iluminación se muestra como número entre 0 y 100 Y el significado cultural mapuche de esa fase es visible en el panel lateral |
| :---- |

## **4.2  RF-10 a RF-12 — Calendario lunar**

| Escenario: Usuario navega el calendario y selecciona un día Dado que el usuario está en la vista de calendario del mes actual Cuando hace clic en cualquier día del mes Entonces el panel de cosmovisión actualiza su contenido con la fase de ese día Y el nombre mapudungun y español de la fase se actualizan Y el SVG lunar refleja la fase del día seleccionado Y el día seleccionado queda visualmente destacado en el calendario |
| :---- |

| Escenario: Usuario navega al mes siguiente Dado que el usuario está viendo el mes actual Cuando hace clic en el botón siguiente (\>) Entonces el calendario muestra el mes siguiente Y las fases de cada día se recalculan correctamente para ese mes Y el botón anterior (\<) regresa al mes original |
| :---- |

## **4.3  RF-30 a RF-32 — Toggle de idioma**

| Escenario: Usuario cambia de español a mapudungun Dado que el idioma activo es español Cuando el usuario hace clic en el toggle 'Mapudungun' Entonces todos los textos de la interfaz cambian a mapudungun instantáneamente Y el nombre de la fase luna llena muestra 'Pura Küyen' en lugar de 'Luna Llena' Y los títulos de sección, botones y etiquetas cambian de idioma Y la preferencia se guarda en localStorage para la próxima visita |
| :---- |

## **4.4  RF-13 — Luna llena destacada**

| Escenario: Luna llena visible en el calendario Dado que el calendario muestra un mes que contiene una luna llena Cuando el usuario observa el calendario Entonces el día de luna llena tiene un indicador dorado (color accent del diseño) Y al hacer hover sobre ese día aparece el texto 'Pura Küyen — Luna Llena' Y el porcentaje de iluminación para ese día es mayor a 95% |
| :---- |

# **5\. Requisitos No Funcionales**

## **5.1  Rendimiento**

* La app debe cargar completamente en menos de 3 segundos en conexión 4G (Lighthouse Performance \> 85).

* El cálculo de fases para un mes completo no debe tardar más de 100ms (SunCalc corre en el cliente).

* No hay llamadas a APIs externas — todo el cálculo astronómico es local.

## **5.2  Diseño y Experiencia de Usuario**

* Paleta de colores: azul noche (\#1B1F3B), dorado luna (\#F0C040), tierra mapuche (\#7B5E3A) y verde Wallmapu (\#2D6A4F).

* Tipografía principal: Inter o similar sans-serif moderna. Títulos en display-font que evoque lo ancestral.

* El fondo principal debe evocar el cielo nocturno — gradiente oscuro con partículas o estrellas CSS.

* Mobile-first: la app debe ser completamente funcional en pantallas de 360px.

* El SVG lunar debe ser fluido y representar visualmente la fase con precisión (porción iluminada correcta).

* Modo oscuro como modo por defecto (tema que evoca la noche y las estrellas).

## **5.3  Accesibilidad**

* Contraste de texto sobre fondos oscuros: mínimo 4.5:1 (WCAG 2.1 AA).

* El SVG lunar debe tener atributo aria-label descriptivo del estado actual.

* El toggle de idioma debe ser operable por teclado.

## **5.4  Contenido Cultural — Restricciones Importantes**

| IMPORTANTE — Tratamiento del contenido cultural mapuche El agente NO debe inventar, inferir ni modificar ningún contenido sobre cosmovisión mapuche. Todos los textos culturales deben provenir EXACTAMENTE de la sección 2 de este SRS. Los nombres en mapudungun deben respetarse tal como están escritos (sin 'corregir' ortografía). No añadir información sobre rituales, ceremonias o prácticas no especificadas en este documento. Si falta contenido para alguna vista, usar placeholder indicando 'Contenido pendiente de revisión'. El contenido cultural será revisado por hablantes de mapudungun antes del lanzamiento público. |
| :---- |

# **6\. Estructura de Archivos y Componentes**

## **6.1  Estructura de Carpetas**

| Estructura requerida del proyecto src/   app/     page.tsx              ← pantalla principal (fase actual \+ calendario)     layout.tsx            ← layout con toggle de idioma en header     wallmapu/page.tsx     ← sección del territorio Wallmapu     txipantu/page.tsx     ← sección del año nuevo mapuche   components/     KuyenSVG.tsx          ← visualizador SVG de la luna (fase dinámica)     LunarCalendar.tsx     ← calendario mensual navegable     CosmovisionPanel.tsx  ← panel de significado cultural mapuche     LanguageToggle.tsx    ← toggle ES / Mapudungun     PhaseCard.tsx         ← tarjeta de fase individual   lib/     lunar.ts              ← funciones de cálculo con SunCalc.js     constants/       kuyen.ts            ← DATOS CULTURALES (sección 2 de este SRS)       i18n/         es.ts             ← textos en español         mpu.ts            ← textos en mapudungun   hooks/     useLanguage.ts        ← hook de idioma activo     useLunarPhase.ts      ← hook de fase lunar para una fecha dada |
| :---- |

## **6.2  Estructura del Archivo kuyen.ts**

| Estructura de KUYEN\_DATA en lib/constants/kuyen.ts export const KUYEN\_DATA \= {   phases: \[     {       id: 'nueva',       illuminationRange: \[0, 0.06\],  // 0% a 6% de iluminación       emoji: '🌑',       es: {         name: 'Luna Nueva',         meaning: 'Inicio del ciclo. Tiempo de descanso...',         activities: \['Rogativas', 'Planificación', 'Descanso'\]       },       mpu: {         name: 'Küyen Wenu Kütrü',         meaning: 'Küyen kimeluwi...',         activities: \['Ngillatun pewma mew', ...\]       }     },     // ... 7 fases más siguiendo la sección 2.2   \] } |
| :---- |

# **7\. Plan de Desarrollo**

## **7.1  Fases del Proyecto**

| Fase | Nombre | Tareas | Duración Est. |
| ----- | ----- | ----- | ----- |
| Fase 1 | Base y cálculo | Instalar SunCalc.js, crear lib/lunar.ts, crear KUYEN\_DATA con los 8 fases de la sección 2.2, crear el hook useLunarPhase. | 30 min |
| Fase 2 | Componentes core | Crear KuyenSVG.tsx (SVG dinámico de la luna), PhaseCard.tsx, CosmovisionPanel.tsx con los datos culturales. | 45 min |
| Fase 3 | Calendario | Crear LunarCalendar.tsx con navegación mensual, indicadores de fase por día, destacado de luna llena y Txipantu. | 30 min |
| Fase 4 | Idioma | Crear archivos i18n es.ts y mpu.ts, LanguageToggle.tsx, hook useLanguage.ts, persistencia en localStorage. | 20 min |
| Fase 5 | Páginas y diseño | Armar page.tsx principal, páginas /wallmapu y /txipantu, aplicar paleta de colores y diseño nocturno completo. | 30 min |

## **7.2  Criterios de Aceptación para Producción**

* La fase lunar mostrada coincide con la fase real del día (verificable en timeanddate.com).

* El toggle de idioma cambia todos los textos incluyendo los 8 nombres de fases en mapudungun.

* El calendario navega correctamente entre meses y las fases se calculan sin errores.

* El 21 de junio muestra el indicador de Txipantu en cualquier año.

* Lighthouse Performance \> 85, Accessibility \> 90\.

* La app es completamente funcional en móvil (360px) y escritorio (1280px).

## **7.3  Instrucción de Inicio para Antigravity**

| Pegar esto en el chat de Antigravity para comenzar Lee el SRS completo del proyecto Küyen. Este es un proyecto Nivel 1 — solo frontend, sin Supabase ni backend. Comienza por la Fase 1: 1\. Instala SunCalc.js: npm install suncalc @types/suncalc 2\. Crea src/lib/lunar.ts con funciones para calcular la fase    de la luna para cualquier fecha usando SunCalc.js 3\. Crea src/lib/constants/kuyen.ts con KUYEN\_DATA completo    usando exactamente los datos de la sección 2.2 del SRS 4\. Crea src/hooks/useLunarPhase.ts No implementes UI todavía. Solo la capa de datos y cálculo. Cuando termines la Fase 1, muéstrame el código y procedo. |
| :---- |

**KÜYEN  |  SRS v1.0  —  Proyecto Vibe Coding  |  Marzo 2026**

*"El conocimiento de Küyen pertenece a todos los pueblos — este proyecto honra ese saber"*