import { PDFDocument, PDFPage } from "pdf-lib";

export interface MergePdfOptions {
  files: File[];
  onProgress?: (progress: number) => void;
  onComplete?: () => void;
  onError?: (error: Error) => void;
}

export async function mergePdfs(options: MergePdfOptions): Promise<Blob> {
  const { files, onProgress, onComplete, onError } = options;

  try {
    const newPdfDoc = await PDFDocument.create();
    const newDocBind = await PDFDocument.create();
    let newPage = newPdfDoc.addPage([841.89, 595.28]);
    let pages: PDFPage[] = [];
    let x = 15;
    let cont = 0;
    let contador = 0;
    let contPages = 0;

    const bind = async () => {
      const totalFiles = files.length;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        const docPages = await newDocBind.copyPages(pdfDoc, pdfDoc.getPageIndices());
        for (const page of docPages) {
          newDocBind.addPage(page);
        }
        
        if (onProgress) {
          onProgress(((i + 1) / totalFiles) * 50);
        }
      }
      const pdfBytes = await newDocBind.save();
      return pdfBytes;
    };

    const embedPagesInNewPdf = async () => {
      const boundingBoxes = Array(pages.length).fill({
        left: 55,
        right: 302,
        bottom: 72,
        top: 537,
      });

      const embeddedPages = await newPdfDoc.embedPages(pages, boundingBoxes);

      const totalPages = embeddedPages.length;
      for (let i = 0; i < embeddedPages.length; i++) {
        const embeddedPage = embeddedPages[i];
        newPage.drawPage(embeddedPage, {
          x: x,
          y: 40,
          xScale: 1.09,
          yScale: 1.09,
        });
        x += 270;
        cont++;
        contPages++;
        if (cont == 3) {
          if (contPages !== contador) {
            newPage = newPdfDoc.addPage([841.89, 595.28]);
          }
          cont = 0;
          x = 15;
        }
        
        if (onProgress) {
          onProgress(50 + ((i + 1) / totalPages) * 50);
        }
      }
    };

    if (onProgress) {
      onProgress(10);
    }

    const doc = await bind();
    const pdfDoc = await PDFDocument.load(doc);
    contador += pdfDoc.getPageCount();
    pages = pdfDoc.getPages();

    if (onProgress) {
      onProgress(60);
    }

    await embedPagesInNewPdf();

    if (onProgress) {
      onProgress(90);
    }

    const pdfBytes = await newPdfDoc.save();

    if (onProgress) {
      onProgress(100);
    }

    if (onComplete) {
      onComplete();
    }

    return new Blob([pdfBytes], { type: "application/pdf" });
  } catch (error) {
    if (onError && error instanceof Error) {
      onError(error);
    }
    throw error;
  }
}

export function downloadPdf(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}