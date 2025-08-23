
import React from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsDialog: React.FC<DialogProps> = ({ isOpen, onClose }) => {
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
          <h2 className="text-2xl font-bold text-white">Términos de Servicio</h2>
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
          <p>
            <strong>Última actualización: 24 de Julio de 2024</strong>
          </p>
          <p>
            Al utilizar 'Unir Boletas de Correo Argentino' (en adelante, "el Servicio"), usted acepta cumplir con los presentes términos y condiciones.
          </p>
          
          <h3 className="text-white">Descripción del Servicio</h3>
          <p>
            El Servicio permite a los usuarios seleccionar y combinar múltiples archivos PDF de boletas de Correo Argentino en un único documento. Cada hoja del PDF se trata como una imagen temporal, se recorta y se combina en un nuevo archivo PDF. El objetivo es reducir el consumo de papel al imprimir.
          </p>
          <p>
            Todo el procesamiento se realiza localmente en el navegador del usuario. Sus archivos nunca se suben a nuestros servidores, garantizando su privacidad.
          </p>
          
          <h3 className="text-white">Uso Adecuado</h3>
          <p>
            Usted se compromete a no utilizar este Servicio para fines ilegales o para procesar documentos cuyo contenido infrinja derechos de autor o cualquier otra ley aplicable.
          </p>

          <h3 className="text-white">Limitación de Responsabilidad</h3>
          <p>
            El Servicio se proporciona "tal cual". No nos hacemos responsables de la pérdida de datos, errores en el documento final o de cualquier problema que pueda surgir durante el uso de la herramienta. Es responsabilidad del usuario conservar copias de seguridad de sus archivos originales.
          </p>

          <h3 className="text-white">Propiedad Intelectual</h3>
          <p>
            El diseño, el logo, el código y el nombre de esta aplicación son de nuestra propiedad y están protegidos por las leyes de propiedad intelectual.
          </p>

          <h3 className="text-white">Cambios en los Términos</h3>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Cualquier cambio se notificará actualizando la fecha en la parte superior de este documento.
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

export default TermsDialog;
