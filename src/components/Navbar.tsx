import React, { useState } from 'react';
import { ShieldCheck, Menu, X, Mail, Lock } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
  onOpenJotform: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenJotform,
  onOpenAdmin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'career', label: 'CAREER' },
    { id: 'portfolio', label: 'DESIGN PORTFOLIO' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#161616]/95 backdrop-blur-md border-b border-stone-800/80 text-[#FAF9F6] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Credential Identifier */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleNavClick('home')}>
            <div className="w-10 h-10 rounded-sm bg-[#1C1C1C] border border-[#B5A642]/40 flex items-center justify-center text-[#B5A642] font-serif font-bold text-base tracking-wider group-hover:border-[#B5A642] transition-colors">
              AP
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif font-bold text-[#FAF9F6] text-lg tracking-tight">
                  Angelo C. Pilongo
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono uppercase tracking-widest bg-[#B5A642]/15 text-[#B5A642] border border-[#B5A642]/30">
                  <ShieldCheck className="w-3 h-3 mr-1 text-[#B5A642]" /> REE
                </span>
              </div>
              <p className="text-[10px] text-stone-400 font-mono tracking-widest uppercase">
                Registered Electrical Engineer • 86.45%
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-2 font-mono text-[11px] tracking-[0.15em]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 rounded-sm transition-all font-medium uppercase ${
                  activeSection === link.id
                    ? 'bg-[#B5A642]/15 text-[#B5A642] border border-[#B5A642]/40'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs & Admin Link */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenJotform}
              className="inline-flex items-center px-4 py-2 text-xs font-mono tracking-widest uppercase rounded-sm bg-[#B5A642] text-stone-950 font-bold hover:bg-[#c9b84a] transition-all shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5" />
              Let's Connect
            </button>
            <button
              onClick={onOpenAdmin}
              title="Admin Portal"
              className="p-2 text-stone-400 hover:text-stone-100 hover:bg-stone-800/80 rounded-sm transition-colors border border-stone-800"
            >
              <Lock className="w-4 h-4 text-[#B5A642]" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenAdmin}
              title="Admin Portal"
              className="p-2 text-stone-400 hover:text-stone-100 rounded-sm border border-stone-800"
            >
              <Lock className="w-4 h-4 text-[#B5A642]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white rounded-sm border border-stone-800 bg-[#1C1C1C]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-800 bg-[#161616] px-4 pt-2 pb-6 space-y-3 font-mono text-xs">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-sm uppercase tracking-wider font-bold ${
                activeSection === link.id
                  ? 'bg-[#B5A642]/15 text-[#B5A642] border border-[#B5A642]/40'
                  : 'text-stone-300 hover:bg-stone-800/50'
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJotform();
              }}
              className="w-full flex items-center justify-center px-4 py-3 rounded-sm bg-[#B5A642] text-stone-950 font-bold uppercase tracking-widest text-xs"
            >
              <Mail className="w-4 h-4 mr-2" />
              Let's Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
