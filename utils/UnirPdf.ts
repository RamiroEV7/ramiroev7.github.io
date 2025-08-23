import { PDFDocument, PDFPage } from "pdf-lib";

export interface ProcessedPdfData {
    pdfBytes: Uint8Array;
    fileName: string;
}

async function processFiles(files: File[]): Promise<ProcessedPdfData> {
    const newPdfDoc = await PDFDocument.create();
    const newDocBind = await PDFDocument.create();
    let newPage = newPdfDoc.addPage([841.89, 595.28]);

    let pages: PDFPage[] = [];

    let x = 30; // Aumentado el margen izquierdo para un mejor centrado
    let cont = 0;
    let contador = 0;
    let contPages = 0;

    const bind = async (): Promise<Uint8Array> => {
        for (const file of files) {
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            const copiedPages = await newDocBind.copyPages(pdfDoc, pdfDoc.getPageIndices());
            for (const page of copiedPages) {
                newDocBind.addPage(page);
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

        for (const embeddedPage of embeddedPages) {
            newPage.drawPage(embeddedPage, {
                x: x,
                y: 65,
                // Escala devuelta a 1.0 para evitar que las etiquetas se agranden y se superpongan
                xScale: 1.0,
                yScale: 1.0,
            });
            // Incremento ajustado para la nueva escala y para agregar espaciado
            x += 267.5;
            cont++;
            contPages++;
            if (cont === 3) {
                if (contPages !== contador) {
                    newPage = newPdfDoc.addPage([841.89, 595.28]);
                }
                cont = 0;
                x = 30; // Reiniciar x para la nueva página
            }
        }
    };

    const doc = await bind();
    const pdfDoc = await PDFDocument.load(doc);
    contador += pdfDoc.getPageCount();
    pages = pdfDoc.getPages();

    await embedPagesInNewPdf();

    const pdfBytes = await newPdfDoc.save();

    const now = new Date();
    const millis = now.getTime();
    const fileName = `boletas[${contador}]-${millis}.pdf`;

    return { pdfBytes, fileName };
}

function downloadProcessedPdf(pdfBytes: Uint8Array, fileName: string) {
    // Se crea un nuevo Uint8Array para resolver una sutil incompatibilidad de tipos
    // entre la salida de pdf-lib y lo que espera el constructor de Blob.
    const pdfBlob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

export { downloadProcessedPdf, processFiles };
