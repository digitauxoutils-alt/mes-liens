import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'Accueil',
    'Mes Réseaux Sociaux',
    'Mes QR Codes',
    'Mes Sites',
    'Mes Réalisations',
    'Collaborations'
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="#accueil" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl font-bold text-[#0A3764]">Rénato Tchobo</span>
              <Code2 className="w-6 h-6 text-[#0A3764]" />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.slice(0, 3).map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[#0A3764] hover:text-[#0A3764]/70 transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[#0A3764]/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#0A3764]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0A3764]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="py-4 space-y-4">
              {menuItems.slice(0, 3).map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-4 py-2 text-[#0A3764] hover:text-[#0A3764]/70 hover:bg-[#0A3764]/5 transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;