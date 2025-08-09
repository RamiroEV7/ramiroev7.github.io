"use client";

import Link from "next/link";
import { FileText, Shield, Scale } from "lucide-react";

export function FooterNav() {
  return (
    <footer className="mt-12 pt-8 border-t border-border">
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
          <Link 
            href="/privacidad" 
            className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Shield className="h-4 w-4" />
            <span>Política de Privacidad</span>
          </Link>
          <Link 
            href="/terminos" 
            className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Scale className="h-4 w-4" />
            <span>Términos y Condiciones</span>
          </Link>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            © 2024 Unir Boletas de Correo Argentino. Herramienta gratuita para optimizar tus boletas.
          </p>
          <p className="text-xs text-muted-foreground">
            Las boletas se procesan localmente en tu navegador. No almacenamos tus datos.
          </p>
        </div>
      </div>
    </footer>
  );
}