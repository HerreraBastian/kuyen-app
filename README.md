# Küyen — Fases Lunares y Cosmovisión del Wallmapu

Küyen (*Luna* en mapudungun) es una aplicación web interactiva y cultural diseñada para explorar las fases lunares astronómicas combinadas orgánicamente con la ancestral sabiduría y observación del cielo del pueblo Mapuche.

## Características Principales

- **Astronomía en Tiempo Real:** Cálculo lunar preciso client-side garantizado por `suncalc`, mostrando siempre la fase, fracción de iluminación y forma real interactiva al momento de entrar.
- **Guñelve (Estrella Mapuche) y UI Dinámica:** Microinteracciones fluidas, destellos SVG y estrellas concéntricas rotando con CSS Puro para inmersión visual en una paleta que honra la noche (`#1B1F3B`), la luz originaria (`#F0C040`) y la tierra húmeda (`#7B5E3A`, `#2D6A4F`).
- **Navegación Bilingüe:** Un toggle persistente explora la interfaz entre Español y Mapudungun originario (Kimün / Küzaw). Cuando una traducción se encuentra bajo revisión de hablantes nativos, la UI informa respetuosamente resguardando la funcionalidad del texto en español sin interrupciones.
- **Calendario Küyen Raj:** Calendario interactivo histórico integrado con `date-fns`. Identifica dinámicamente cada fase y resalta lunas llenas junto al sagrado We Txipantu (21 de Junio).

---

## Stack Tecnológico 
- **Framework:** Next.js 14 (App Router)
- **Estilos:** TailwindCSS (100% Client Rendering y configuraciones base)
- **Lógica e Iconografía:** `date-fns`, `suncalc`, `lucide-react`
- **Lenguaje:** TypeScript

---

## 🚀 Despliegue en Vercel (Guía de Publicación Rápida)

Este proyecto está 100% listo para ser montado gratuitamente en [Vercel](https://vercel.com) directo desde tu repositorio. Sigue estos 4 pasos:

### 1. Preparar tu Repositorio (GitHub)
Este proyecto corre sin Base de Datos. Solo necesitas asegurarte de que este directorio esté subido a tu cuenta de GitHub de forma pública o privada.

```bash
git init
git add .
git commit -m "Kuyen V1.0 - Lista para Vercel"
git branch -M main
git remote add origin https://github.com/tu-usuario/kuyen-wallmapu.git
git push -u origin main
```

### 2. Importar a Vercel
1. Crea una cuenta en [Vercel](https://vercel.com/signup) usando tu cuenta de GitHub.
2. Desde tu panel principal (`Dashboard`), haz clic en el botón negro **"Add New..."** y selecciona **"Project"**.
3. En la lista desplegable de repositorios, ubica tu repositorio de `kuyen-wallmapu` y haz clic en **"Import"**.

### 3. Configuración de Construcción (Build Settings)
Vercel detectará automáticamente que esto es un proyecto de **Next.js**. 
No necesitas cambiar ninguna configuración extra ni agregar variables de entorno (ya que no utilizamos Auth ni Supabase tal como indicó el SRS Nivel 1).

Asegúrate de que Vercel haya auto-completado lo siguiente:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Install Command:** `npm install` o `yarn install`

### 4. Lanzamiento
Haz clic en el botón grande **"Deploy"**. Vercel construirá e instalará la aplicación en menos de un minuto.

¡Listo! Al finalizar verás una lluvia de confeti y se te otorgará un link público del estilo `kuyen-wallmapu.vercel.app` para que cualquier persona en cualquier celular pueda acceder y explorar la sabiduría del Wallmapu.
