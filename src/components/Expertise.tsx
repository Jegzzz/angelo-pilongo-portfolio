import React from 'react';
import { SkillCategory } from '../types/portfolio';
import { Cpu, ShieldCheck, Wrench, FileCode2, CheckCircle2, Flame } from 'lucide-react';

interface ExpertiseProps {
  skills: SkillCategory[];
}

export const Expertise: React.FC<ExpertiseProps> = ({ skills }) => {
  const getBadgeStyle = (level: string) => {
    switch (level) {
      case 'Professional Experience':
        return 'bg-[#161616] text-[#B5A642] border-[#B5A642]/60';
      case 'Independent Project Experience':
        return 'bg-[#161616] text-stone-200 border-stone-700';
      case 'Currently Developing':
        return 'bg-[#161616] text-amber-300 border-amber-800/80';
      default:
        return 'bg-[#161616] text-stone-300 border-stone-800';
    }
  };

  return (
    <section id="expertise" className="py-20 bg-[#161616] text-[#FAF9F6] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#1C1C1C] border border-[#B5A642]/40 text-[#B5A642] font-mono text-[11px] uppercase tracking-[0.2em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B5A642]" />
            <span>Technical Competencies & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#FAF9F6] tracking-tight">
            Engineering Expertise <span className="italic text-[#B5A642]">Matrix</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-sans">
            Categorized competencies distinguished by verified professional practice, independent design work, and active skill development.
          </p>
        </div>

        {/* Legend Banner */}
        <div className="mb-10 p-4 rounded-sm bg-[#1C1C1C] border border-stone-800 flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-wider">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B5A642]" />
            <span className="text-stone-200 font-bold">Professional Experience</span>
            <span className="text-stone-500">(Verified Field Practice)</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-stone-300" />
            <span className="text-stone-200 font-bold">Independent Project Experience</span>
            <span className="text-stone-500">(Design Studies)</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-stone-200 font-bold">Currently Developing</span>
            <span className="text-stone-500">(Active Software Lab)</span>
          </div>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-sm bg-[#1C1C1C] border border-stone-800 p-6 sm:p-8 space-y-6 shadow-xl"
            >
              <div className="border-b border-stone-800 pb-4 flex items-center justify-between">
                <h3 className="text-xl font-serif font-bold text-[#FAF9F6] tracking-tight">
                  {cat.category}
                </h3>
                <span className="text-[10px] font-mono text-[#B5A642] uppercase tracking-widest">
                  {cat.skills.length} Competencies
                </span>
              </div>

              <div className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-sm bg-[#161616] border border-stone-800 flex items-center justify-between hover:border-stone-700 transition-colors"
                  >
                    <span className="text-sm font-sans font-medium text-stone-200">
                      {skill.name}
                    </span>

                    <span className={`px-2.5 py-1 rounded-sm text-[9px] font-mono uppercase tracking-wider font-bold border ${getBadgeStyle(skill.level)} shrink-0 ml-3`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
