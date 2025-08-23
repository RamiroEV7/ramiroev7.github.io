
import React from 'react';

interface PrivacyDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyDialog: React.FC<PrivacyDialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

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
          <h2 className="text-2xl font-bold text-white">Políticas de Privacidad</h2>
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
            Bienvenido a Unir Boletas de Correo Argentino. Nos comprometemos a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y salvaguardamos tu información cuando visitas nuestro sitio web.
          </p>
          <h3 className="text-white">Recopilación y Uso de Información</h3>
          <p>
            <strong>Datos Personales:</strong> No recopilamos ni solicitamos datos personales como nombre, correo electrónico o dirección.
          </p>
          <p>
            <strong>Datos de Uso y Técnicos:</strong> Para mejorar el servicio y mostrar anuncios relevantes, podemos recopilar información anónima sobre el uso de la aplicación (frecuencia, funcionalidades utilizadas) y datos técnicos (tipo de dispositivo, navegador, etc.). Esta información no puede identificarte personalmente.
          </p>
          
          <h3 className="text-white">Tratamiento y Seguridad de las Boletas</h3>
          <p>
            La seguridad de tus documentos es nuestra máxima prioridad. El proceso de unión de PDFs se realiza íntegramente en tu navegador (del lado del cliente).
          </p>
          <ul className="list-disc pl-5">
            <li><strong>Procesamiento Local:</strong> La aplicación convierte cada hoja de tus PDFs en una imagen temporal, la recorta y la combina en un nuevo archivo PDF en tu propio dispositivo.</li>
            <li><strong>No Retención de Archivos:</strong> Tus archivos, imágenes temporales o el PDF resultante nunca se envían, almacenan o retienen en nuestros servidores. Se eliminan de la memoria del navegador una vez que cierras la página.</li>
            <li><strong>No Extracción de Datos:</strong> No extraemos, leemos ni almacenamos ningún dato contenido en tus boletas. Solo manipulamos los archivos como imágenes para unirlos.</li>
          </ul>
          
          <h3 className="text-white">Publicidad y Cookies</h3>
          <p>
            Utilizamos empresas de publicidad de terceros, como Google AdSense, para publicar anuncios. Estas empresas pueden utilizar cookies para proporcionar anuncios relevantes basados en tus visitas a este y otros sitios web.
          </p>
          <p>
            Puedes optar por no recibir publicidad personalizada visitando la página de <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#FFC40C] hover:underline">Configuración de anuncios de Google</a>.
          </p>

          <h3 className="text-white">Cambios en esta Política de Privacidad</h3>
          <p>
            Nos reservamos el derecho de hacer cambios a esta Política de Privacidad en cualquier momento. Te alertaremos sobre cualquier cambio actualizando la fecha de "Última actualización".
          </p>

          <h3 className="text-white">Contacto</h3>
          <p>
            Si tienes preguntas o comentarios sobre esta Política, por favor contáctanos a través del correo proporcionado en la sección de 'Ayuda y Soporte'.
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

export default PrivacyDialog;
