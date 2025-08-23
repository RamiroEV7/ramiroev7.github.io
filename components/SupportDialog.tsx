
import React from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportDialog: React.FC<DialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-white">Ayuda y Soporte</h2>
          <button 
            onClick={onClose} 
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="prose prose-invert prose-sm sm:prose-base text-gray-200 space-y-4">
          
          <h3 className="text-white">Preguntas Frecuentes (FAQ)</h3>
          <dl className="space-y-4">
            <div>
              <dt className="font-semibold text-gray-100">¿Mis archivos están seguros?</dt>
              <dd className="mt-1 text-gray-300">Sí. La seguridad es nuestra máxima prioridad. Todo el proceso de unión de PDFs ocurre directamente en tu computadora. Tus archivos nunca se suben a internet ni a nuestros servidores.</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-100">¿Hay un límite en la cantidad de archivos que puedo unir?</dt>
              <dd className="mt-1 text-gray-300">No hay un límite programado. El rendimiento depende de la capacidad de tu computadora y del tamaño total de los archivos. Para un uso normal, no deberías encontrar ningún problema.</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-100">¿La herramienta es realmente gratuita?</dt>
              <dd className="mt-1 text-gray-300">Sí, es 100% gratuita. El sitio se mantiene a través de la publicidad que se muestra, lo que nos permite ofrecer la herramienta sin costo para ti.</dd>
            </div>
          </dl>
          
          <h3 className="text-white">Reportar un Problema o Enviar Sugerencias</h3>
          <p>
            Si encuentras un error, tienes una idea para mejorar la herramienta o cualquier otra consulta, nos encantaría escucharte. Tu feedback es muy valioso para nosotros.
          </p>
          <p>
            Por favor, envíanos un correo a: <a href="mailto:ramirodev7@gmail.com" className="text-[#FFC40C] hover:underline">ramirodev7@gmail.com</a>
          </p>

        </div>
        <div className="mt-6 text-right">
          <button 
            onClick={onClose} 
            className="bg-[#0F3166] hover:bg-[#0E2B5A] text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportDialog;
