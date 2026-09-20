export const metadata = {
  title: "Studio | Grehyni Narvaez",
  description: "Panel de administración de contenido",
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
