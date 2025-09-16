import React from 'react';
import { Instagram, Linkedin, Youtube, Globe, Github, Facebook, Twitter, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/renato_tchobo/',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100083135836664&mibextid=ZbWKwL',
      color: 'bg-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://x.com/renatotchoboy',
      color: 'bg-sky-500'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/renato-tchobo',
      color: 'bg-blue-700'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      url: 'https://wa.me/22958848420',
      color: 'bg-green-500'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      url: 'https://youtube.com/@renato-tchobo',
      color: 'bg-red-600'
    },
    {
      icon: Globe,
      name: 'Pinterest',
      url: 'https://www.pinterest.com/renatotchobo',
      color: 'bg-red-500'
    },
    {
      icon: Globe,
      name: 'Portfolio',
      url: 'https://renatotchobo.com',
      color: 'bg-[#0A3764]'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/tcbrenato',
      color: 'bg-gray-800'
    }
  ];

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Photo */}
        <div className="mb-8">
          <div className="relative inline-block">
            <img
              src="https://i.ibb.co/SXkgwHyT/profile-pic-1.png"
              alt="Rénato Tchobo"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-white shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-[#0A3764]/30 animate-pulse"></div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A3764] mb-6 leading-tight">
            Bienvenue !
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-4">
            Je suis <span className="text-[#0A3764] font-bold">Rénato Tchobo</span>
          </p>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Retrouvez-moi facilement à travers mes réseaux sociaux et mes coordonnées pour échanger, collaborer ou en savoir plus sur mon travail dans le développement web et la création numérique.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group`}
                aria-label={social.name}
              >
                <IconComponent className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </a>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#0A3764] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#0A3764] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;