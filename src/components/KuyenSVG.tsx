'use client';

interface KuyenSVGProps {
  /**
   * Valor de 0 a 1 indicando la fase.
   * 0 = Luna Nueva
   * 0.5 = Luna Llena
   * 1 = Luna Nueva (siguiente ciclo)
   */
  phase: number;
  width?: number;
  height?: number;
  className?: string;
}

export function KuyenSVG({ phase, width = 120, height = 120, className = '' }: KuyenSVGProps) {
  // Aseguramos que phase esté entre 0 y 1
  const normalizedPhase = Math.max(0, Math.min(1, phase));
  
  // Dibujar la luna usando dos semicírculos (paths)
  // El fondo de la luna (parte oscura) será color base del cielo o un gris oscuro
  // La parte iluminada será dorada (#F0C040)
  
  // Convertimos fase (0-1) a un sweep horizontal.
  // En fase 0: totalmente oscura.
  // En fase 0.25 (cuarto creciente): mitad iluminada (arco central recto).
  // En fase 0.5 (llena): totalmente dorada.
  // En fase 0.75 (cuarto menguante): mitad iluminada por la izquierda.
  
  // Usamos una proyección ortográfica simple.
  // Radio arbitrario de 50 para el viewBox.
  const r = 50;
  
  const renderMoon = () => {
    // En el Hemisferio Sur:
    // Creciente: Se ilumina desde la izquierda hacia la derecha.
    // Menguante: Se oscurece desde la izquierda hacia la derecha.
    
    // Phase 0.0 -> Totalmente oscura
    // Phase 0.25 -> Cuarto creciente (mitad izquierda iluminada)
    // Phase 0.5 -> Totalmente iluminada
    // Phase 0.75 -> Cuarto menguante (mitad derecha iluminada)
    // Phase 1.0 -> Totalmente oscura

    // rx determina qué tan cóncava/convexa es la sombra
    // Va de r a 0 y de 0 a r.
    let rx = r;
    
    // paths
    let illuminatedPath = "";
    
    if (normalizedPhase <= 0.25) {
      // 0 a 0.25: Creciente cóncava (forma de cuerno a la izquierda)
      // Mapeamos de 0 a 0.25 hacia rx de r a 0
      rx = r - (normalizedPhase / 0.25) * r;
      illuminatedPath = `
        M 50,0
        A 50,50 0 0,0 50,100
        A ${rx},50 0 0,1 50,0
      `;
    } else if (normalizedPhase <= 0.5) {
      // 0.25 a 0.5: Creciente convexa (gibosa)
      // Mapeamos de 0.25 a 0.5 hacia rx de 0 a r
      rx = ((normalizedPhase - 0.25) / 0.25) * r;
      illuminatedPath = `
        M 50,0
        A 50,50 0 0,0 50,100
        A ${rx},50 0 0,0 50,0
      `;
    } else if (normalizedPhase <= 0.75) {
      // 0.5 a 0.75: Menguante convexa (gibosa, se oscurece desde la izquierda)
      // La parte derecha está iluminada. Mapeamos de 0.5 a 0.75 hacia rx de r a 0
      rx = r - ((normalizedPhase - 0.5) / 0.25) * r;
      illuminatedPath = `
        M 50,0
        A 50,50 0 0,1 50,100
        A ${rx},50 0 0,1 50,0
      `;
    } else {
      // 0.75 a 1.0: Menguante cóncava (cuerno a la derecha)
      // Mapeamos de 0.75 a 1 hacia rx de 0 a r
      rx = ((normalizedPhase - 0.75) / 0.25) * r;
      illuminatedPath = `
        M 50,0
        A 50,50 0 0,1 50,100
        A ${rx},50 0 0,0 50,0
      `;
    }

    return illuminatedPath;
  };

  // Construimos una estrella Guñelve (8 puntas) estéticamente
  const renderGunelve = () => {
    return (
      <g stroke="#7B5E3A" strokeWidth="0.5" fill="none" opacity="0.3">
        {/* 8 rotaciones de un diamante o línea para simular la estrella mapuche */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <path 
            key={i} 
            d="M 50,2 L 50,15 M 50,85 L 50,98" 
            transform={`rotate(${angle} 50 50)`} 
          />
        ))}
        {/* Anillo de conexión de la cosmología */}
        <circle cx="50" cy="50" r="42" strokeDasharray="2,4" />
      </g>
    );
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Guñelve giratorio decorativo */}
      <svg 
        width={width * 1.3} 
        height={height * 1.3} 
        viewBox="0 0 100 100" 
        className="absolute animate-[spin-slow_60s_linear_infinite] pointer-events-none"
      >
        {renderGunelve()}
      </svg>
      
      {/* Küyen (La Luna) */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        className="overflow-visible relative z-10 drop-shadow-[0_0_15px_rgba(240,192,64,0.1)]"
        aria-label={`Fase lunar a ${(normalizedPhase * 100).toFixed(0)}% iluminada`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="moon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Fondo nocturno / sombra de la luna */}
        <circle cx="50" cy="50" r="50" fill="#15182B" />
        
        {/* Parte iluminada (dorado lima característico) con glow condicional si se ve fase */}
        <path 
          d={renderMoon()} 
          fill="#F0C040" 
          filter={normalizedPhase > 0.05 && normalizedPhase < 0.95 ? "url(#moon-glow)" : ""}
          className="transition-all duration-1000 ease-in-out"
        />
        
        {/* Borde exterior sutil opcional para dar volumen */}
        <circle cx="50" cy="50" r="49" fill="none" stroke="#7B5E3A" strokeWidth="1" strokeOpacity="0.4" />
      </svg>
    </div>
  );
}
