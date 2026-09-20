"use client";

import { useState } from "react";

export default function AdminSetup() {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className="min-h-screen bg-dark text-white pt-28 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl font-light mb-4">Panel de Administracion</h1>
        <p className="text-white/50 mb-12">
          Sistema de gestion de contenido para grehyninarvaezvenezuela.com
        </p>

        <div className="space-y-6">
          {/* Status */}
          <div className="p-6 border border-white/10">
            <h2 className="text-lg font-medium mb-3">Estado del CMS</h2>
            <p className="text-white/50 text-sm mb-4">
              {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
                ? "Sanity CMS esta conectado y funcionando."
                : "Sanity CMS no esta configurado. El sitio usa datos estaticos."}
            </p>
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ? "bg-green-500" : "bg-amber-500"
                }`}
              />
              <span className="text-sm text-white/70">
                {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ? "Conectado" : "Usando datos estaticos"}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="p-6 border border-white/10">
            <h2 className="text-lg font-medium mb-3">Acciones Rapidas</h2>
            <div className="space-y-3">
              <a
                href={
                  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
                    ? `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.sanity.studio`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-white/10 hover:border-accent transition-colors"
              >
                <p className="font-medium">Abrir Sanity Studio</p>
                <p className="text-white/40 text-sm">Agregar o editar propiedades, testimonios y contenido</p>
              </a>
              <a href="/" className="block p-4 border border-white/10 hover:border-accent transition-colors">
                <p className="font-medium">Ver Sitio Web</p>
                <p className="text-white/40 text-sm">grehyninarvaezvenezuela.com</p>
              </a>
              <a
                href="https://vercel.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-white/10 hover:border-accent transition-colors"
              >
                <p className="font-medium">Vercel Dashboard</p>
                <p className="text-white/40 text-sm">Hosting, analytics y configuracion del dominio</p>
              </a>
            </div>
          </div>

          {/* Setup Instructions */}
          <div className="p-6 border border-white/10">
            <button onClick={() => setShowInstructions(!showInstructions)} className="flex items-center justify-between w-full">
              <h2 className="text-lg font-medium">Instrucciones de Configuracion del CMS</h2>
              <svg className={`w-5 h-5 transition-transform ${showInstructions ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showInstructions && (
              <div className="mt-6 space-y-4 text-sm text-white/60">
                <div className="p-4 bg-white/5">
                  <p className="text-white font-medium mb-2">Paso 1: Crear proyecto en Sanity</p>
                  <code className="block text-accent text-xs">npx sanity@latest init --project-plan free</code>
                </div>
                <div className="p-4 bg-white/5">
                  <p className="text-white font-medium mb-2">Paso 2: Copiar el Project ID</p>
                  <p>Lo encontraras en sanity.io/manage despues de crear el proyecto</p>
                </div>
                <div className="p-4 bg-white/5">
                  <p className="text-white font-medium mb-2">Paso 3: Agregar variables de entorno en Vercel</p>
                  <code className="block text-accent text-xs">NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id</code>
                  <code className="block text-accent text-xs">NEXT_PUBLIC_SANITY_DATASET=production</code>
                </div>
                <div className="p-4 bg-white/5">
                  <p className="text-white font-medium mb-2">Paso 4: Redesplegar</p>
                  <code className="block text-accent text-xs">npx vercel --prod</code>
                </div>
                <p className="text-white/40">
                  Una vez configurado, podras agregar propiedades, testimonios y posts de Instagram desde el panel de Sanity Studio.
                  El sitio seguira funcionando con datos estaticos mientras no estes conectado al CMS.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
