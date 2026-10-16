import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[var(--dark-teal)] text-white/90 text-xs py-2.5 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex-1" />
          {/* Right: Direct Contacts */}
        <div className="flex items-center gap-5">
          <a
            href="tel:+233302984421"
            className="cursor-pointer flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-white" />
            <span>+233 (0) 30 298 4421</span>
          </a>

          <div className="h-3 w-px bg-white/20" />

          <a
            href="mailto:regulatory@mjadom.com"
            className="cursor-pointer flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-white" />
            <span>regulatory@mjadom.com</span>
          </a>

          <div className="h-3 w-px bg-white/20" />

          <div className="flex items-center gap-1.5 text-white/70">
            <MapPin className="w-3.5 h-3.5 text-white" />
            <span>Accra, Ghana</span>
          </div>
        </div>
      </div>
    </div>
  );
};
