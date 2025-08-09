"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, FileText, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PdfFile {
  file: File;
  preview: string;
}

interface PdfDropzoneProps {
  onFilesChange: (files: File[]) => void;
  maxFiles?: number;
}

export function PdfDropzone({ onFilesChange, maxFiles = 20 }: PdfDropzoneProps) {
  const [pdfFiles, setPdfFiles] = useState<PdfFile[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newPdfFiles = acceptedFiles
        .filter((file) => file.type === "application/pdf")
        .map((file) => ({
          file,
          preview: URL.createObjectURL(file),
        }));

      setPdfFiles((prev) => {
        const updated = [...prev, ...newPdfFiles].slice(0, maxFiles);
        onFilesChange(updated.map((item) => item.file));
        return updated;
      });
    },
    [onFilesChange, maxFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    maxFiles: maxFiles - pdfFiles.length,
  });

  const removeFile = (index: number) => {
    setPdfFiles((prev) => {
      const newFiles = prev.filter((_, i) => i !== index);
      onFilesChange(newFiles.map((item) => item.file));
      return newFiles;
    });
  };

  return (
    <div className="w-full space-y-4">
      <Card
        {...getRootProps()}
        className={`border-2 border-dashed transition-colors cursor-pointer ${
          isDragActive
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25 hover:border-primary/50"
        }`}
      >
        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
          <input {...getInputProps()} />
          <Upload className="h-12 w-12 text-muted-foreground mb-4" />
          <div className="space-y-2">
            <p className="text-lg font-medium">
              {isDragActive ? "Suelta las boletas aquí" : "Arrastra y suelta boletas aquí"}
            </p>
            <p className="text-sm text-muted-foreground">
              o haz clic para seleccionar archivos
            </p>
            <p className="text-xs text-muted-foreground">
              Máximo {maxFiles} archivos PDF de boletas
            </p>
          </div>
        </CardContent>
      </Card>

      {pdfFiles.length > 0 && (
        <Card>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Boletas seleccionadas ({pdfFiles.length})</h3>
                <Badge variant="secondary">{pdfFiles.length} Boletas</Badge>
              </div>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {pdfFiles.map((pdfFile, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium truncate max-w-[200px] sm:max-w-[300px]">
                          {pdfFile.file.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {(pdfFile.file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="h-8 w-8 p-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}