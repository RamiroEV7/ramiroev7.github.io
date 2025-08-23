
import React from 'react';

const DemoSection: React.FC = () => {
  return (
    <section className="bg-[#161b22] rounded-xl p-6 shadow-lg border border-gray-700">
      <h2 className="text-xl font-semibold text-gray-200">Ejemplo de Resultado</h2>
      <p className="text-gray-300 mb-6">Así es como tus archivos se combinarán</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <div className="w-full aspect-[4/3] bg-gray-700 rounded-lg overflow-hidden shadow-md flex items-center justify-center">
            <img 
              src="/antes.png"
              alt="Ejemplo de boleta individual" 
              className="object-contain w-full h-full"
            />
          </div>
          <p className="mt-3 font-semibold text-gray-200">Antes</p>
          <p className="mt-1 text-sm text-gray-300">Boletas individuales</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full aspect-[4/3] bg-gray-700 rounded-lg overflow-hidden shadow-md flex items-center justify-center">
            <img 
              src="/despues.png"
              alt="Ejemplo de boletas unidas en una hoja" 
              className="object-contain w-full h-full"
            />
          </div>
          <p className="mt-3 font-semibold text-gray-200">Después</p>
          <p className="mt-1 text-sm text-gray-300">Boletas unidas (3 boletas por hoja)</p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;