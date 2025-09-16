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
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#195885]">Rénato Tchobo</span>
            <Code2 className="w-6 h-6 text-[#69DEF0]" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-700 hover:text-[#195885] transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#195885]" />
            ) : (
              <Menu className="w-6 h-6 text-[#195885]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="py-4 space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-4 py-2 text-gray-700 hover:text-[#195885] hover:bg-gray-50 transition-colors duration-300 font-medium"
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