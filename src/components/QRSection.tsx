import React from 'react';
import { Instagram, Linkedin, Youtube, Globe, Github, QrCode, Facebook, Twitter, MessageCircle } from 'lucide-react';

const QRSection: React.FC = () => {
  const qrCodes = [
    {
      icon: Instagram,
      name: 'Instagram',
      description: 'Suivez-moi sur Instagram',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      description: 'Rejoignez-moi sur Facebook',
      color: 'bg-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      description: 'Suivez-moi sur Twitter',
      color: 'bg-sky-500'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      description: 'Connectons-nous sur LinkedIn',
      color: 'bg-blue-700'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      description: 'Contactez-moi sur WhatsApp',
      color: 'bg-green-500'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      description: 'Abonnez-vous à ma chaîne',
      color: 'bg-red-600'
    },
    {
      icon: Globe,
      name: 'Pinterest',
      description: 'Découvrez mes inspirations',
      color: 'bg-red-500'
    },
    {
      icon: Globe,
      name: 'Portfolio',
      description: 'Visitez mon site web',
      color: 'bg-[#195885]'
    },
    {
      icon: Github,
      name: 'GitHub',
      description: 'Découvrez mes projets',
      color: 'bg-gray-800'
    }
  ];

  return (
    <section id="mes-qr-codes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#195885] mb-4">
            Mes QR Codes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scannez pour accéder rapidement à mes différents réseaux et plateformes
          </p>
        </div>

        {/* QR Codes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {qrCodes.map((qr, index) => {
            const IconComponent = qr.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`${qr.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* QR Code Placeholder */}
                <div className="bg-gray-100 rounded-xl p-6 mb-6 relative overflow-hidden">
                  <div className="w-full h-32 bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <QrCode className="w-20 h-20 text-gray-400" />
                  </div>
                  {/* Decorative corners */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#195885] rounded-tl"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#195885] rounded-tr"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#195885] rounded-bl"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#195885] rounded-br"></div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-[#195885] text-center mb-2">
                  {qr.name}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {qr.description}
                </p>

                {/* Scan Button */}
                <button className="w-full mt-4 bg-[#69DEF0] hover:bg-[#195885] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                  Scanner
                </button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#195885] to-[#69DEF0] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Restons connectés !</h3>
            <p className="text-lg mb-6 opacity-90">
              Utilisez votre téléphone pour scanner les QR codes et accéder instantanément à mes réseaux
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <QrCode className="w-6 h-6" />
              </div>
              <span className="text-xl">→</span>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                📱
              </div>
              <span className="text-xl">→</span>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                🌐
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;