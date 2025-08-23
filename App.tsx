
import React, { useState, useCallback } from 'react';
import FileUpload from './components/FileUpload';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';
import PrivacyDialog from './components/PrivacyDialog';
import Header from './components/Header';
import Features from './components/Features';
import HowToUse from './components/HowToUse';
import ImportantNote from './components/ImportantNote';
import UploadIcon from './components/icons/UploadIcon';
import TermsDialog from './components/TermsDialog';
import SupportDialog from './components/SupportDialog';
import Toast from './components/Toast';
import { processFiles, downloadProcessedPdf, ProcessedPdfData } from './utils/UnirPdf';

const App: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedPdfData, setProcessedPdfData] = useState<ProcessedPdfData | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'error' | 'success' } | null>(null);


  const handleFilesSelected = (files: File[]) => {
    setSelectedFiles(files);
    setProcessedPdfData(null);
  };

  const handleRemoveFile = (fileIndex: number) => {
    const newFiles = selectedFiles.filter((_, index) => index !== fileIndex);
    setSelectedFiles(newFiles);
    setProcessedPdfData(null);
  };

  const handleUnionBoletas = useCallback(async () => {
    if (selectedFiles.length === 0) {
      setToast({ message: "Por favor, selecciona al menos un archivo PDF.", type: 'error' });
      return;
    }
    setIsProcessing(true);
    setProcessedPdfData(null);
    try {
      const result = await processFiles(selectedFiles);
      setProcessedPdfData(result);
    } catch (error) {
      console.error("Error al unir los PDFs:", error);
      setToast({ message: "Ocurrió un error al procesar los archivos. Por favor, inténtalo de nuevo.", type: 'error' });
    } finally {
      setIsProcessing(false);
    }
  }, [selectedFiles]);
  
  const handleDownload = () => {
    if (processedPdfData) {
      downloadProcessedPdf(processedPdfData.pdfBytes, processedPdfData.fileName);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200 flex flex-col items-center p-4 sm:p-6 md:p-8">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <div className="w-full max-w-7xl mx-auto">
        <Header />

        <main className="mt-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <section className="bg-[#161b22] rounded-xl p-6 shadow-lg border border-gray-700 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <UploadIcon className="w-6 h-6 text-gray-400" />
                <h2 className="text-xl font-semibold text-gray-200">Subir Boletas PDF</h2>
              </div>
              <p className="text-gray-300 mb-6">Selecciona las boletas que deseas unir</p>
              <FileUpload 
                selectedFiles={selectedFiles}
                onFilesSelected={handleFilesSelected}
                onFileRemoved={handleRemoveFile}
              />
              {selectedFiles.length > 0 && (
                 <div className="mt-6">
                    {processedPdfData && !isProcessing ? (
                      <div className="text-center">
                        <p className="text-green-400 mb-4 font-semibold">¡Tus boletas han sido unidas con éxito!</p>
                        <button
                          onClick={handleDownload}
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Descargar Archivo Unido
                        </button>
                        <p className="text-sm text-gray-400 mt-4">Para procesar nuevos archivos, simplemente selecciónalos o arrástralos arriba.</p>
                      </div>
                    ) : (
                      <button
                          onClick={handleUnionBoletas}
                          disabled={isProcessing}
                          className="w-full bg-[#0F3166] hover:bg-[#0E2B5A] text-white font-bold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-[#FFC40C] focus:ring-opacity-50 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                          {isProcessing ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Procesando...
                            </>
                          ) : (
                            `Unir ${selectedFiles.length} archivo${selectedFiles.length > 1 ? 's' : ''}`
                          )}
                      </button>
                    )}
                </div>
              )}
            </section>

            {/* Demo Section */}
            <DemoSection />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Features />
            <HowToUse />
          </div>

          <ImportantNote />
        </main>

        <Footer 
          onPolicyClick={() => setIsPolicyOpen(true)}
          onTermsClick={() => setIsTermsOpen(true)}
          onSupportClick={() => setIsSupportOpen(true)}
        />
      </div>

      <PrivacyDialog isOpen={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />
      <TermsDialog isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <SupportDialog isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </div>
  );
};

export default App;