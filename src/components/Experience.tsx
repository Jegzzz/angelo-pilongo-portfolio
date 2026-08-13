import React from 'react';
import { ExperienceItem } from '../types/portfolio';
import { Building, ShieldAlert, Wrench, Users, CheckCircle2, Award, Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  experienceList: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experienceList }) => {
  return (
    <section id="experience" className="py-20 bg-[#161616] text-[#FAF9F6] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#1C1C1C] border border-[#B5A642]/40 text-[#B5A642] font-mono text-[11px] uppercase tracking-[0.2em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B5A642]" />
            <span>Facilities Engineering Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#FAF9F6] tracking-tight">
            Professional <span className="italic text-[#B5A642]">Experience</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-sans">
            Practical building-systems management, preventive maintenance, technical supervision, and emergency response in high-rise property infrastructure.
          </p>
        </div>

        {/* Experience Timeline Item */}
        <div className="space-y-12">
          {experienceList.map((exp) => (
            <div key={exp.id} className="rounded-sm bg-[#1C1C1C] border border-stone-800 p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
              
              {/* Promotion Header Banner */}
              {exp.promotionNotice && (
                <div className="mb-6 p-4 rounded-sm bg-[#161616] border border-[#B5A642]/40 text-stone-200 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-[#B5A642] shrink-0" />
                    <span className="text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-stone-200">
                      CAREER ADVANCEMENT: {exp.promotionNotice}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-[#B5A642]/15 px-2.5 py-1 rounded-sm border border-[#B5A642]/30 text-[#B5A642]">
                    RIPSI Technical Leadership
                  </span>
                </div>
              )}

              {/* Header Title Block */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-stone-800 pb-6 mb-8 gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF9F6]">
                    {exp.company}
                  </h3>
                  <p className="text-base sm:text-lg font-serif italic text-[#B5A642] mt-1">
                    {exp.role}
                  </p>
                </div>

                <div className="font-mono text-xs text-stone-400 space-y-1 lg:text-right uppercase tracking-wider">
                  <div className="flex items-center lg:justify-end space-x-1.5">
                    <Calendar className="w-4 h-4 text-[#B5A642]" />
                    <span className="text-stone-200 font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center lg:justify-end space-x-1.5">
                    <MapPin className="w-4 h-4 text-stone-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Core Overview Paragraph */}
              <p className="text-sm sm:text-base text-stone-300 mb-8 font-sans leading-relaxed">
                {exp.summary}
              </p>

              {/* Capability Areas Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {exp.capabilityGroups.map((group, idx) => {
                  let GroupIcon = Building;
                  if (group.iconName === 'ShieldAlert') GroupIcon = ShieldAlert;
                  if (group.iconName === 'Wrench') GroupIcon = Wrench;
                  if (group.iconName === 'Users') GroupIcon = Users;

                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-sm bg-[#161616] border border-stone-800 hover:border-stone-700 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center space-x-2.5 mb-3 text-[#B5A642] font-serif font-bold text-base border-b border-stone-800 pb-2.5">
                          <GroupIcon className="w-4 h-4 shrink-0" />
                          <span>{group.title}</span>
                        </div>

                        <ul className="space-y-2 text-xs sm:text-sm text-stone-300 font-sans">
                          {group.items.map((item, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="text-[#B5A642] font-mono mt-0.5">•</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Verified Key Accomplishments */}
              <div className="p-5 rounded-sm bg-[#161616] border border-stone-800">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-stone-300 mb-3">
                  Key Operational Outcomes & Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {exp.highlights.map((hl, i) => (
                    <div key={i} className="p-3 rounded-sm bg-[#1C1C1C] border border-stone-800 text-xs text-stone-300 font-sans flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B5A642] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
