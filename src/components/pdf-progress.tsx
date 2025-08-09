"use client";

import React from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

interface PdfProgressProps {
  progress: number;
  status: "idle" | "processing" | "completed" | "error";
  error?: string;
}

export function PdfProgress({ progress, status, error }: PdfProgressProps) {
  if (status === "idle") {
    return null;
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            {status === "processing" && (
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
            )}
            {status === "completed" && (
              <CheckCircle className="h-5 w-5 text-green-500" />
            )}
            {status === "error" && (
              <AlertCircle className="h-5 w-5 text-destructive" />
            )}
            <div className="space-y-1">
              <p className="font-medium">
                {status === "processing" && "Procesando boletas..."}
                {status === "completed" && "¡Boletas unidas con éxito!"}
                {status === "error" && "Error al procesar boletas"}
              </p>
              {status === "error" && error && (
                <p className="text-sm text-muted-foreground">{error}</p>
              )}
            </div>
          </div>
          
          {status === "processing" && (
            <div className="space-y-2">
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-muted-foreground text-center">
                {progress.toFixed(0)}% completado
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}