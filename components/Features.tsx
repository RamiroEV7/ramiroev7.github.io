
import React from 'react';

const FeatureItem: React.FC<{ tag: string; tagColor: string; children: React.ReactNode }> = ({ tag, tagColor, children }) => (
  <li className="flex items-start gap-4">
    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${tagColor}`}>{tag}</span>
    <p className="text-gray-300 mt-0.5">{children}</p>
  </li>
);

const Features: React.FC = () => {
  return (
    <section className="bg-[#161b22] rounded-xl p-6 shadow-lg border border-gray-700">
      <h2 className="text-xl font-semibold text-gray-200 mb-6">Características</h2>
      <ul className="space-y-5">
        <FeatureItem tag="Rápido" tagColor="bg-[#0F3166]/50 text-[#FFC40C]">
          Procesamiento en el navegador
        </FeatureItem>
        <FeatureItem tag="Seguro" tagColor="bg-[#FFC40C]/20 text-[#FFC40C]">
          Tus archivos nunca salen de tu dispositivo
        </FeatureItem>
        <FeatureItem tag="Gratis" tagColor="bg-green-600/30 text-green-300">
          Sin límites ni costos ocultos
        </FeatureItem>
        <FeatureItem tag="Múltiples" tagColor="bg-[#0F3166]/50 text-[#FFC40C]">
          Organiza 3 boletas por hoja para ahorrar al imprimir
        </FeatureItem>
      </ul>
    </section>
  );
};

export default Features;