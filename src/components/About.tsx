import React from 'react';
import { Profile } from '../types/portfolio';
import { Award, BookOpen, Building2, CheckCircle2, FileCode2 } from 'lucide-react';

interface AboutProps {
  profile: Profile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-20 bg-[#161616] text-[#FAF9F6] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#1C1C1C] border border-[#B5A642]/40 text-[#B5A642] font-mono text-[11px] uppercase tracking-[0.2em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B5A642]" />
            <span>Professional Profile & Narrative</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#FAF9F6] tracking-tight">
            About <span className="italic text-[#B5A642]">Angelo C. Pilongo</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-sans">
            Registered Electrical Engineer with practical experience in facilities engineering and building systems, combined with electrical design capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Content */}
          <div className="lg:col-span-7 space-y-6 text-stone-300 text-base leading-relaxed font-sans">
            
            <p>
              I am a <strong className="text-[#FAF9F6] font-serif font-bold">Registered Electrical Engineer (REE)</strong> who earned my license in 2024 after scoring an <strong className="text-[#B5A642]">86.45% rating</strong> in the Philippine Electrical Engineering Licensure Examination. My academic foundation was built at the <strong className="text-stone-100">Polytechnic University of the Philippines</strong>, where I earned my Bachelor of Science in Electrical Engineering.
            </p>

            <p>
              Currently, I serve as a <strong className="text-[#FAF9F6] font-serif font-bold">Senior Facilities Engineer</strong> at Proscenium – Rockwell Integrated Property Services Incorporated (RIPSI) in Makati. In this role, I am responsible for the operational oversight, preventive maintenance, emergency response, and technical troubleshooting of critical electrical and building MEP infrastructure.
            </p>

            <p>
              My day-to-day experience places me at the intersection of engineering theory and physical building operations. I supervise technician teams, conduct daily walkthroughs of emergency generators, HVAC VRF units, potable water booster pumps, FDAS panels, and elevator installations, and coordinate maintenance activities across 52-week schedules.
            </p>

            <p>
              Alongside my practical facilities experience, I hold comprehensive <strong className="text-[#B5A642] font-serif font-semibold">electrical design capabilities</strong>. I actively develop technical design deliverables—utilizing industry-standard tools such as <strong className="text-stone-100">AutoCAD, Revit MEP, DIALux Evo, PVsyst, and Excel calculation worksheets</strong>—for power distribution schematics, lighting layouts, single-line diagrams, load analyses, and solar PV system modeling.
            </p>

            <p>
              I believe that field-tested engineering intuition—knowing how equipment is actually installed, troubleshot, serviced, and inspected—is an invaluable asset when creating constructible, reliable, and compliant electrical design packages.
            </p>

            {/* Core Values / Engineering Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-sm bg-[#1C1C1C] border border-stone-800">
                <div className="flex items-center space-x-2 text-[#B5A642] font-serif font-bold mb-1 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Technical Honesty</span>
                </div>
                <p className="text-xs text-stone-400 font-sans leading-normal">
                  Accurate representation of field experience and transparent labeling of independent design studies.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#1C1C1C] border border-stone-800">
                <div className="flex items-center space-x-2 text-[#B5A642] font-serif font-bold mb-1 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>PEC Code Compliance</span>
                </div>
                <p className="text-xs text-stone-400 font-sans leading-normal">
                  Strict alignment with Philippine Electrical Code provisions for circuit sizing, protection, and safety.
                </p>
              </div>
            </div>

          </div>

          {/* Quick Profile Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-sm bg-[#1C1C1C] border border-stone-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-base font-serif font-bold text-[#FAF9F6] border-b border-stone-800 pb-3 flex items-center justify-between">
                <span className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-[#B5A642]" />
                  Snapshot Summary
                </span>
                <span className="text-[10px] font-mono text-[#B5A642] tracking-widest uppercase">PLATE 02</span>
              </h3>

              <ul className="space-y-4 font-mono text-xs">
                <li className="flex justify-between items-start border-b border-stone-800 pb-2.5">
                  <span className="text-stone-400 uppercase tracking-wider text-[10px]">Full Name</span>
                  <span className="text-stone-100 font-semibold text-right">Angelo C. Pilongo</span>
                </li>

                <li className="flex justify-between items-start border-b border-stone-800 pb-2.5">
                  <span className="text-stone-400 uppercase tracking-wider text-[10px]">Credential</span>
                  <span className="text-[#B5A642] font-bold text-right">Registered Electrical Engineer</span>
                </li>

                <li className="flex justify-between items-start border-b border-stone-800 pb-2.5">
                  <span className="text-stone-400 uppercase tracking-wider text-[10px]">2024 Exam Rating</span>
                  <span className="text-[#B5A642] font-bold text-right">86.45%</span>
                </li>

                <li className="flex justify-between items-start border-b border-stone-800 pb-2.5">
                  <span className="text-stone-400 uppercase tracking-wider text-[10px]">Employer</span>
                  <span className="text-stone-100 text-right max-w-[200px]">Proscenium - RIPSI</span>
                </li>

                <li className="flex justify-between items-start border-b border-stone-800 pb-2.5">
                  <span className="text-stone-400 uppercase tracking-wider text-[10px]">Position</span>
                  <span className="text-stone-100 text-right">Senior Facilities Engineer</span>
                </li>

                <li className="flex justify-between items-start border-b border-stone-800 pb-2.5">
                  <span className="text-stone-400 uppercase tracking-wider text-[10px]">Education</span>
                  <span className="text-stone-100 text-right">BS EE (PUP, 2019-2023)</span>
                </li>

                <li className="flex justify-between items-start border-b border-stone-800 pb-2.5">
                  <span className="text-stone-400 uppercase tracking-wider text-[10px]">Core Capabilities</span>
                  <span className="text-stone-200 font-semibold text-right">Electrical Design & Facilities</span>
                </li>

                <li className="flex justify-between items-start pb-1">
                  <span className="text-stone-400 uppercase tracking-wider text-[10px]">Location</span>
                  <span className="text-stone-200 text-right">Meycauayan, Bulacan, PH</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-stone-800">
                <p className="text-[11px] text-stone-400 text-center font-mono">
                  Primary Contact: <a href="mailto:angelocpilongo@gmail.com" className="text-[#B5A642] hover:underline">angelocpilongo@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Design Tools Track */}
            <div className="p-5 rounded-sm bg-[#1C1C1C] border border-stone-800">
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-stone-300 mb-3 flex items-center">
                <FileCode2 className="w-4 h-4 mr-2 text-[#B5A642]" />
                Design & Engineering Software Tools
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-sm bg-[#161616] border border-stone-800 text-stone-200">AutoCAD</span>
                <span className="px-2.5 py-1 rounded-sm bg-[#161616] border border-stone-800 text-stone-200">Revit MEP</span>
                <span className="px-2.5 py-1 rounded-sm bg-[#161616] border border-stone-800 text-stone-200">DIALux Evo</span>
                <span className="px-2.5 py-1 rounded-sm bg-[#161616] border border-stone-800 text-stone-200">PVsyst</span>
                <span className="px-2.5 py-1 rounded-sm bg-[#161616] border border-stone-800 text-stone-200">MS Excel Calculations</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
