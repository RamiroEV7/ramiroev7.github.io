"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function DemoImages() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>Ejemplo de resultado</span>
          <Badge variant="secondary">Antes y Después</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="font-medium text-sm">ANTES</span>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg border-2 border-border">
                <Image
                  src="/unaboleta.png"
                  alt="Boleta individual antes de unir"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Boletas individuales
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-medium text-sm">DESPUÉS</span>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg border-2 border-border">
                <Image
                  src="/tresboletas.png"
                  alt="Boletas unidas después del proceso"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Boletas unidas (3 boletas por hoja)
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <span>Boletas individuales</span>
          <ArrowRight className="h-4 w-4" />
          <span>Boletas unidas optimizadas</span>
        </div>
      </CardContent>
    </Card>
  );
}