import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Mail, ExternalLink, Zap, Linkedin } from 'lucide-react';
import { Profile } from '../types/portfolio';

interface HeroProps {
  profile: Profile;
  onExplorePortfolio: () => void;
  onOpenContact: () => void;
}

const DEFAULT_IMAGE_CANDIDATES = [
  '/images/profile/angelo-pilongo.jpg',
  '/images/profile/angelo-pilongo.jpeg',
  '/images/profile/angelo-pilongo.png',
  '/images/profile/angelo-pilongo.JPG',
  '/images/angelo-pilongo.jpg',
];

export const Hero: React.FC<HeroProps> = ({
  profile,
  onExplorePortfolio,
  onOpenContact,
}) => {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [currentSrc, setCurrentSrc] = useState<string>(profile.photoUrl || DEFAULT_IMAGE_CANDIDATES[0]);
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    const nextIndex = candidateIndex + 1;
    if (nextIndex < DEFAULT_IMAGE_CANDIDATES.length) {
      setCandidateIndex(nextIndex);
      setCurrentSrc(DEFAULT_IMAGE_CANDIDATES[nextIndex]);
    } else {
      setImgError(true);
    }
  };

  return (
    <section id="home" className="relative bg-transparent text-[#FAF9F6] overflow-hidden py-14 lg:py-20 border-b border-stone-800">
      {/* Subtle Architectural Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Professional Introduction & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Name & Primary Credential Hierarchy */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#FAF9F6] tracking-tight leading-[1.05]">
                {profile.name}
              </h1>

              {/* 86.45% PRC Board Exam Rating Secondary Credential */}
              <div className="mt-3 flex items-center space-x-2.5">
                <span className="text-lg sm:text-xl font-serif font-bold text-[#B5A642]">
                  {profile.boardExamRating || '86.45%'}
                </span>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.18em] text-stone-300">
                  PRC BOARD EXAM RATING
                </span>
              </div>

              <p className="mt-2 text-sm font-mono uppercase tracking-[0.15em] text-stone-400">
                Electrical Design & Building Systems
              </p>
            </div>

            {/* Short Supporting Statement */}
            <div className="p-5 rounded-sm bg-[#1C1C1C] border-l-2 border-[#B5A642] border-stone-800 shadow-sm">
              <p className="text-base sm:text-lg text-stone-200 font-serif leading-relaxed italic">
                "Registered Electrical Engineer with hands-on experience in building systems, facilities engineering, and electrical design."
              </p>
            </div>

            {/* Primary & Secondary CTAs + LinkedIn */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onExplorePortfolio}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm text-xs font-mono tracking-widest uppercase font-bold bg-[#B5A642] text-stone-950 hover:bg-[#c9b84a] transition-all shadow-md group cursor-pointer"
                >
                  <span>View Design Portfolio</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm text-xs font-mono tracking-widest uppercase font-semibold bg-[#1C1C1C] text-stone-200 hover:bg-stone-800 hover:text-white transition-all border border-stone-800 cursor-pointer"
                >
                  <Mail className="w-4 h-4 mr-2 text-[#B5A642]" />
                  <span>Contact Me</span>
                </button>

                <a
                  href={profile.linkedinUrl || "https://linkedin.com/in/pilongoac"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-3.5 rounded-sm text-xs font-mono tracking-widest uppercase text-stone-300 hover:text-[#B5A642] transition-colors border border-stone-800 hover:border-[#B5A642]/40 bg-[#161616]"
                >
                  <Linkedin className="w-3.5 h-3.5 mr-1.5 text-[#B5A642]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 ml-1 text-stone-500" />
                </a>
              </div>

              {/* Quick Contact & Location Info */}
              <div className="text-[11px] text-stone-400 font-mono uppercase tracking-widest flex flex-col items-start gap-y-2 pt-3 border-t border-stone-800/60">
                <span className="flex items-center">
                  <span className="text-stone-500 mr-2">Location:</span>
                  <span className="text-stone-300 font-medium">{profile.location}</span>
                </span>
                <span className="flex items-center">
                  <span className="text-stone-500 mr-2">Email:</span>
                  <a href={`mailto:${profile.email}`} className="text-stone-300 hover:text-[#B5A642] transition-colors font-medium">
                    {profile.email}
                  </a>
                </span>
                <span className="flex items-center">
                  <span className="text-stone-500 mr-2">LinkedIn:</span>
                  <a
                    href={profile.linkedinUrl || "https://linkedin.com/in/pilongoac"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-300 hover:text-[#B5A642] underline font-medium"
                  >
                    linkedin.com/in/pilongoac
                  </a>
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Professional Photo (Read-Only) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-sm bg-[#1C1C1C] border border-stone-800 p-3.5 shadow-2xl space-y-3 select-none">
              
              {/* Photo Frame Container - Read-Only presentation */}
              <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden bg-[#161616] border border-stone-800/80 flex items-center justify-center">
                {!imgError ? (
                  <img
                    key={currentSrc}
                    src={currentSrc}
                    alt={`${profile.name} - Registered Electrical Engineer`}
                    className="w-full h-full object-cover object-center rounded-sm pointer-events-none"
                    style={{ filter: 'none' }}
                    onError={handleImageError}
                    draggable={false}
                  />
                ) : (
                  /* Editorial Profile Card fallback */
                  <div className="w-full h-full p-8 flex flex-col items-center justify-between text-center bg-[#161616] text-stone-300">
                    <div className="w-full text-right font-mono text-[9px] uppercase tracking-widest text-[#B5A642]">
                      PORTRAIT
                    </div>

                    <div className="space-y-3 my-auto">
                      <div className="w-20 h-20 rounded-full bg-[#1C1C1C] border-2 border-[#B5A642]/40 text-[#B5A642] mx-auto flex items-center justify-center">
                        <Zap className="w-9 h-9 text-[#B5A642]" strokeWidth={2.2} />
                      </div>
                      <div>
                        <p className="font-serif font-bold text-lg text-[#FAF9F6]">Angelo C. Pilongo</p>
                        <p className="font-mono text-xs text-[#B5A642] uppercase tracking-wider">Registered Electrical Engineer</p>
                      </div>
                    </div>

                    <div className="w-full pt-3 border-t border-stone-800 text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                      PRC REE 2024 • Philippines
                    </div>
                  </div>
                )}

                {/* Corner Accreditation Tag */}
                <div className="absolute top-3 left-3 bg-[#161616]/90 backdrop-blur-sm border border-[#B5A642]/40 px-2.5 py-1 rounded-sm text-[10px] font-mono uppercase tracking-widest text-[#B5A642] shadow-sm pointer-events-none">
                  REE 2024
                </div>
              </div>

              {/* Photo Caption */}
              <div className="text-center font-mono text-[11px] text-stone-400 uppercase tracking-wider">
                <span>Angelo C. Pilongo, REE</span>
                <span className="block text-[10px] text-stone-500 font-sans normal-case">Facilities Engineering & Electrical Design</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
