import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Küyen | Fases Lunares y Cosmovisión Mapuche',
  description: 'Visualizador de fases lunares basado en la cosmología sagrada del Wallmapu.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen bg-[#0A0D1F] text-gray-100 font-sans antialiased overflow-x-hidden">
        {/* Fondo nocturno común a toda la app */}
        <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-[#0A0D1F] via-[#1B1F3B] to-[#121526]"></div>
        {children}
      </body>
    </html>
  );
}
