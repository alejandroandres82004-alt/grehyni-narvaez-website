import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory px-6">
      <div className="text-center">
        <p className="font-serif text-8xl font-light text-dark mb-4">404</p>
        <p className="text-muted text-sm uppercase tracking-[0.2em] mb-8">
          Página no encontrada
        </p>
        <Link
          href="/"
          className="px-8 py-3.5 bg-dark text-white text-[11px] uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-500"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
