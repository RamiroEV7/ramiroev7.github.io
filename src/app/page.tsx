"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PdfDropzone } from "@/components/pdf-dropzone";
import { PdfProgress } from "@/components/pdf-progress";
import { DemoImages } from "@/components/demo-images";
import { ThemeToggle } from "@/components/theme-toggle";
import { FooterNav } from "@/components/footer-nav";
import { ContactSection } from "@/components/contact-section";
import { mergePdfs, downloadPdf } from "@/lib/pdf-merger";
import { useToast } from "@/hooks/use-toast";
import { FileText, Download, Sparkles } from "lucide-react";

export default function Home() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "processing" | "completed" | "error">("idle");
  const [error, setError] = useState<string | undefined>();
  const { toast } = useToast();

  const handleMergePdfs = async () => {
    if (selectedFiles.length === 0) {
      toast({
        title: "No hay boletas seleccionadas",
        description: "Por favor, selecciona al menos una boleta para unir.",
        variant: "destructive",
      });
      return;
    }

    setStatus("processing");
    setProgress(0);
    setError(undefined);

    try {
      const blob = await mergePdfs({
        files: selectedFiles,
        onProgress: (progressValue) => {
          setProgress(progressValue);
        },
        onComplete: () => {
          setStatus("completed");
          toast({
            title: "¡Boletas unidas con éxito!",
            description: `Se han unido ${selectedFiles.length} boletas.`,
          });
        },
        onError: (error) => {
          setStatus("error");
          setError(error.message);
          toast({
            title: "Error al unir boletas",
            description: error.message,
            variant: "destructive",
          });
        },
      });

      if (status === "completed") {
        const now = new Date();
        const timestamp = now.getTime();
        const filename = `boletas[${selectedFiles.length}]-${timestamp}.pdf`;
        downloadPdf(blob, filename);
      }
    } catch (error) {
      setStatus("error");
      const errorMessage = error instanceof Error ? error.message : "Error desconocido";
      setError(errorMessage);
      toast({
        title: "Error al unir boletas",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const handleReset = () => {
    setSelectedFiles([]);
    setStatus("idle");
    setProgress(0);
    setError(undefined);
  };

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <div className="flex items-center justify-center space-x-3">
            <div className="relative">
              <FileText className="h-10 w-10 text-primary" />
              <div className="absolute -top-1 -right-1 flex">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-primary rounded-full -ml-1"></div>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
              Unir Boletas de Correo Argentino
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combina múltiples boletas en un solo documento optimizado con 3 boletas por hoja. 
            Rápido, gratuito y diseñado para ahorrar al imprimir.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Upload and Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Area */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Seleccionar archivos PDF</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PdfDropzone
                  onFilesChange={setSelectedFiles}
                  maxFiles={20}
                />
              </CardContent>
            </Card>

            {/* Progress */}
            <PdfProgress progress={progress} status={status} error={error} />

            {/* Action Buttons */}
            {selectedFiles.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleMergePdfs}
                      disabled={status === "processing"}
                      className="flex-1"
                      size="lg"
                    >
                      {status === "processing" ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Procesando...
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4 mr-2" />
                          Unir Boletas ({selectedFiles.length})
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      disabled={status === "processing"}
                      size="lg"
                    >
                      Limpiar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Demo and Info */}
          <div className="space-y-6">
            {/* Demo Images */}
            <DemoImages />

            {/* Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Características</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">Optimización inteligente</p>
                      <p className="text-xs text-muted-foreground">
                        Organiza 3 boletas por hoja para ahorrar al imprimir
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">Procesamiento local</p>
                      <p className="text-xs text-muted-foreground">
                        Tus archivos nunca se suben a servidores externos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">Rápido y gratuito</p>
                      <p className="text-xs text-muted-foreground">
                        Sin límites de uso ni costos ocultos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">Modo oscuro/claro</p>
                      <p className="text-xs text-muted-foreground">
                        Interfaz cómoda para cualquier entorno
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <ContactSection />

            {/* How it works Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo funciona?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    1. Arrastra o selecciona tus boletas
                  </p>
                  <p className="text-muted-foreground">
                    2. Haz clic en "Unir Boletas"
                  </p>
                  <p className="text-muted-foreground">
                    3. Descarga tu documento unido
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <FooterNav />
      </main>
    </div>
  );
}