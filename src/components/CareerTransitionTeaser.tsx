import React from 'react';
import { ArrowRight, Building, Compass, Wrench } from 'lucide-react';

interface CareerTransitionTeaserProps {
  onExploreCareer: () => void;
}

export const CareerTransitionTeaser: React.FC<CareerTransitionTeaserProps> = ({
  onExploreCareer,
}) => {
  return (
    <section id="career-teaser" className="py-16 bg-[#161616] text-[#FAF9F6] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 rounded-sm bg-[#1C1C1C] border border-stone-800 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#161616] border border-[#B5A642]/40 text-[#B5A642] font-mono text-[10px] uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B5A642]" />
                <span>Career Pathway & Strategy</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF9F6] tracking-tight">
                From Field Experience to <span className="italic text-[#B5A642]">Electrical Design</span>
              </h2>

              <p className="text-sm sm:text-base text-stone-300 font-sans leading-relaxed">
                "My experience in facilities engineering has given me practical exposure to building systems, equipment, maintenance, troubleshooting, technical coordination, and emergency response. I am building on that foundation by developing my electrical design capabilities through independent projects and technical studies."
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-stone-800 lg:pl-8">
              <div className="text-xs font-mono uppercase tracking-wider text-stone-400 space-y-1">
                <p className="flex items-center text-stone-200 font-bold">
                  <Building className="w-4 h-4 mr-2 text-[#B5A642]" />
                  Facilities Field Knowledge
                </p>
                <p className="flex items-center text-stone-200 font-bold">
                  <Compass className="w-4 h-4 mr-2 text-[#B5A642]" />
                  Electrical Design Target
                </p>
              </div>

              <button
                onClick={onExploreCareer}
                className="inline-flex items-center justify-center px-6 py-3 rounded-sm text-xs font-mono tracking-widest uppercase font-bold bg-[#B5A642] text-stone-950 hover:bg-[#c9b84a] transition-all shadow-md group"
              >
                <span>Explore My Career</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
