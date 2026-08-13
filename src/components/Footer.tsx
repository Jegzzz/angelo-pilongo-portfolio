import React from 'react';
import { ShieldCheck, Mail, MapPin, Lock } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer className="bg-[#161616] text-stone-400 font-mono text-xs border-t border-stone-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Identity Column */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center space-x-2 text-[#FAF9F6] font-serif font-bold text-lg">
              <span className="w-8 h-8 rounded-sm bg-[#1C1C1C] border border-[#B5A642]/40 text-[#B5A642] flex items-center justify-center font-mono text-xs">
                AP
              </span>
              <span>Angelo C. Pilongo</span>
              <span className="text-[10px] bg-[#1C1C1C] text-[#B5A642] px-2 py-0.5 rounded-sm border border-[#B5A642]/40 font-mono uppercase tracking-wider">
                REE
              </span>
            </div>

            <p className="text-stone-300 text-xs font-sans leading-relaxed max-w-md">
              Registered Electrical Engineer (86.45% Exam Rating, 2024). Bringing practical building-systems facilities experience into electrical design engineering.
            </p>

            <div className="pt-1 text-stone-400 space-y-1 font-mono text-xs">
              <p className="flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#B5A642]" />
                <span>Meycauayan, Bulacan, Philippines</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-1.5 text-[#B5A642]" />
                <a href="mailto:angelocpilongo@gmail.com" className="hover:text-[#FAF9F6] underline">
                  angelocpilongo@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Core Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-stone-200 font-mono font-bold uppercase tracking-widest text-[10px] border-b border-stone-800 pb-2">
              Portfolio Navigation
            </h4>
            <ul className="space-y-1.5 uppercase text-[11px]">
              <li><a href="#home" className="hover:text-[#B5A642] transition-colors">Home & Credential</a></li>
              <li><a href="#about" className="hover:text-[#B5A642] transition-colors">About & Profile</a></li>
              <li><a href="#transition" className="hover:text-[#B5A642] transition-colors">Career Story</a></li>
              <li><a href="#experience" className="hover:text-[#B5A642] transition-colors">Facilities Experience</a></li>
              <li><a href="#portfolio" className="hover:text-[#B5A642] transition-colors">Design Lab</a></li>
              <li><a href="#expertise" className="hover:text-[#B5A642] transition-colors">Expertise Matrix</a></li>
            </ul>
          </div>

          {/* Privacy & Admin Column */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-stone-200 font-mono font-bold uppercase tracking-widest text-[10px] border-b border-stone-800 pb-2">
              Privacy & Portal
            </h4>
            <p className="text-[11px] text-stone-400 leading-relaxed font-sans">
              Complete residential address and personal contact details are withheld for privacy. Résumé submitted separately with employment applications.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center px-3 py-1.5 rounded-sm bg-[#1C1C1C] border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white transition-colors font-mono text-[10px] uppercase tracking-wider"
              >
                <Lock className="w-3.5 h-3.5 mr-1.5 text-[#B5A642]" />
                Admin Content Portal
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-[10px] text-stone-400 gap-2 font-mono uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Angelo C. Pilongo, REE. All rights reserved.</p>
          <p>Registered Electrical Engineer • Philippines</p>
        </div>

      </div>
    </footer>
  );
};
