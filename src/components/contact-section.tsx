"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink, Github } from "lucide-react";

export function ContactSection() {
  const handleEmailClick = () => {
    window.open("mailto:ramirodev7@gmail.com", "_blank");
  };

  const handleWebsiteClick = () => {
    window.open("https://ramirodev7.github.io/", "_blank");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>Contacto</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <Mail className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm">Email</p>
                <p className="text-xs text-muted-foreground truncate">ramirodev7@gmail.com</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleEmailClick}
              className="flex-shrink-0 w-full sm:w-auto"
            >
              Enviar correo
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <Github className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm">Web Personal</p>
                <p className="text-xs text-muted-foreground truncate">ramirodev7.github.io</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleWebsiteClick}
              className="flex-shrink-0 w-full sm:w-auto"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Visitar
            </Button>
          </div>
        </div>

        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            ¿Tienes preguntas o sugerencias? No dudes en contactarme.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}