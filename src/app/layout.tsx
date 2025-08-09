import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

// Usar fuentes del sistema para mejor compatibilidad con GitHub Pages
// Esto evita problemas con la carga de fuentes de Google en entornos estáticos

export const metadata: Metadata = {
  title: "Unir Boletas de Correo Argentino - Herramienta gratuita",
  description: "Herramienta gratuita para unir múltiples boletas de Correo Argentino en un solo documento optimizado. Procesamiento local, seguro y rápido. Organiza 3 boletas por hoja para ahorrar al imprimir.",
  keywords: ["unir boletas", "combinar boletas", "boletas correo argentino", "optimizar boletas", "herramienta boletas", "gratis", "ahorrar impresion"],
  authors: [{ name: "Unir Boletas Correo Argentino" }],
  openGraph: {
    title: "Unir Boletas de Correo Argentino - Herramienta gratuita",
    description: "Une múltiples boletas de Correo Argentino en un solo documento optimizado con 3 boletas por hoja.",
    url: "https://ramiroev7.github.io/",
    siteName: "Unir Boletas Correo Argentino",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unir Boletas de Correo Argentino - Herramienta gratuita",
    description: "Une múltiples boletas de Correo Argentino en un solo documento optimizado.",
  },
  other: {
    "google-adsense-account": "ca-pub-0000000000000000", // Reemplazar con tu ID real
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className="antialiased bg-background text-foreground font-sans"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
