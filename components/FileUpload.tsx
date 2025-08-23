
import React, { useState, useCallback } from 'react';
import XIcon from './icons/XIcon';

interface FileUploadProps {
  selectedFiles: File[];
  onFilesSelected: (files: File[]) => void;
  onFileRemoved: (index: number) => void;
}

const FileUploadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
);

const FileUpload: React.FC<FileUploadProps> = ({ selectedFiles, onFilesSelected, onFileRemoved }) => {
  const [dragIsOver, setDragIsOver] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      onFilesSelected(files);
    }
  };

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLLabelElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setDragIsOver(false);
      if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        const files = Array.from(event.dataTransfer.files).filter(file => file.type === 'application/pdf');
        onFilesSelected(files);
      }
    },
    [onFilesSelected]
  );

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragEnter = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragIsOver(true);
  };
  
  const handleDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragIsOver(false);
  };

  return (
    <div className="flex-grow flex flex-col">
      <label
        htmlFor="file-upload"
        className={`relative flex flex-col items-center justify-center w-full flex-grow border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-300 ${
          dragIsOver ? 'border-[#FFC40C] bg-gray-800' : 'border-gray-600 bg-[#161b22] hover:bg-gray-800'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
            <FileUploadIcon className="w-12 h-12 mb-4 text-[#FFC40C]" />
            <p className="mb-2 text-lg text-gray-300">
                <span className="font-semibold text-[#FFC40C]">Haz clic para seleccionar archivos</span>
            </p>
            <p className="text-gray-400">O arrastra y suelta tus boletas aquí</p>
        </div>
        <input id="file-upload" type="file" className="hidden" accept=".pdf" multiple onChange={handleFileChange} />
      </label>
      {selectedFiles.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold text-gray-200">Archivos Seleccionados ({selectedFiles.length}):</h3>
          <ul className="list-none mt-2 bg-gray-800/50 p-2 rounded-md max-h-40 overflow-y-auto space-y-1">
            {selectedFiles.map((file, index) => (
              <li key={`${file.name}-${index}`} className="flex items-center justify-between bg-gray-700/50 p-2 rounded-md text-sm">
                <span className="truncate text-gray-300" title={file.name}>{file.name}</span>
                <button
                  onClick={() => onFileRemoved(index)}
                  className="ml-2 p-1 rounded-full text-gray-400 hover:bg-red-500/50 hover:text-white transition-colors"
                  aria-label={`Quitar ${file.name}`}
                >
                  <XIcon className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;