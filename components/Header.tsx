import React from 'react';
import Logo from './icons/Logo';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <div className="flex items-center gap-3">
        <Logo className="h-10 w-10" />
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-[#FFC40C] via-white to-blue-400 text-transparent bg-clip-text">
          Unir Boletas de Correo Argentino
        </h1>
      </div>
    </header>
  );
};

export default Header;
