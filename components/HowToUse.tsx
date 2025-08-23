
import React from 'react';

const Step: React.FC<{ number: number; children: React.ReactNode }> = ({ number, children }) => (
  <li className="flex items-start gap-4">
    <div className="flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center font-bold text-gray-200">
      {number}
    </div>
    <p className="text-gray-300 mt-1">{children}</p>
  </li>
);

const HowToUse: React.FC = () => {
  return (
    <section className="bg-[#161b22] rounded-xl p-6 shadow-lg border border-gray-700">
      <h2 className="text-xl font-semibold text-gray-200 mb-6">Cómo Usar</h2>
      <ol className="space-y-4">
        <Step number={1}>Haz clic en el área de subida o arrastra tus boletas PDF</Step>
        <Step number={2}>Revisa la lista de boletas seleccionadas</Step>
        <Step number={3}>Haz clic en "Unir Boletas" y espera el proceso</Step>
        <Step number={4}>Descarga tu documento unido automáticamente</Step>
      </ol>
    </section>
  );
};

export default HowToUse;