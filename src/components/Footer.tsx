import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A3764] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center space-x-2 text-lg">
            <span>© 2025 Rénato Tchobo</span>
            <span className="text-white/60">•</span>
            <span className="flex items-center space-x-1">
              <span>Créé avec</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
            </span>
          </p>
          <p className="mt-2 text-white/80">
            Développeur passionné • Créateur numérique
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;