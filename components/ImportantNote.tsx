
import React from 'react';

const ImportantNote: React.FC = () => {
  return (
    <section className="bg-[#161b22] rounded-xl p-6 shadow-lg border border-l-4 border-l-[#FFC40C] border-gray-700">
      <p className="text-gray-300">
        <strong className="font-semibold text-gray-200">Importante:</strong> Esta herramienta procesa todos los archivos localmente en tu navegador. Tus archivos nunca se suben a ningún servidor, garantizando tu privacidad y seguridad.
      </p>
    </section>
  );
};

export default ImportantNote;