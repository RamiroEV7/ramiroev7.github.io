
import React from 'react';
import Logo from './icons/Logo';
import MailIcon from './icons/MailIcon';
import WebsiteIcon from './icons/WebsiteIcon';

interface FooterProps {
  onPolicyClick: () => void;
  onTermsClick: () => void;
  onSupportClick: () => void;
}

const FooterLink: React.FC<{ href?: string; onClick?: () => void; children: React.ReactNode }> = ({ href, onClick, children }) => {
    const commonClasses = "text-gray-300 hover:text-[#FFC40C] transition-colors";
    if (onClick) {
        return <button onClick={onClick} className={`${commonClasses} text-left`}>{children}</button>;
    }
    return <a href={href || '#'} className={commonClasses} target={href?.startsWith('mailto:') ? '_blank' : '_self'} rel="noopener noreferrer">{children}</a>;
};


const Footer: React.FC<FooterProps> = ({ onPolicyClick, onTermsClick, onSupportClick }) => {
  return (
    <footer className="w-full mt-16 pt-10 pb-8 border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Column 1: About */}
        <div className="space-y-4 pr-4">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <span className="font-bold text-lg text-gray-200">
              <span className="text-[#FFC40C]">Unir Boletas</span>
            </span>
          </div>
          <p className="text-gray-300 text-sm">
            Herramienta gratuita y segura para unir múltiples boletas de Correo Argentino en un solo documento.
          </p>
        </div>

        {/* Column 2: Legal & Support */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-200">Legal y Soporte</h3>
          <ul className="space-y-2">
            <li><FooterLink onClick={onPolicyClick}>Política de Privacidad</FooterLink></li>
            <li><FooterLink onClick={onTermsClick}>Términos de Servicio</FooterLink></li>
            <li><FooterLink onClick={onSupportClick}>Ayuda y Soporte</FooterLink></li>
          </ul>
        </div>
        
        {/* Column 3: Features */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-200">Características</h3>
          <ul className="space-y-2">
            <li><p className="text-gray-300">Procesamiento local</p></li>
            <li><p className="text-gray-300">100% gratuito</p></li>
            <li><p className="text-gray-300">Sin registro</p></li>
            <li><p className="text-gray-300">Seguro y privado</p></li>
          </ul>
        </div>
        
        {/* Column 4: Contacto */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-200">Contacto</h3>
          <ul className="space-y-3">
            <li>
              <a href="mailto:ramirodev7@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-[#FFC40C] transition-colors">
                <MailIcon className="w-5 h-5 flex-shrink-0" />
                <span>Correo Electrónico</span>
              </a>
            </li>
            <li>
              <a href="https://ramirodev7.github.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-[#FFC40C] transition-colors">
                <WebsiteIcon className="w-5 h-5 flex-shrink-0" />
                <span>Web Personal</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
      <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Unir Boletas de Correo Argentino - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
