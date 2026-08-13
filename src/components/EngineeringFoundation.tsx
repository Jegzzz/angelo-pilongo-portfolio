import React from 'react';
import { Award, GraduationCap, ShieldCheck } from 'lucide-react';

interface EngineeringFoundationProps {
  boardExamRating?: string;
  boardExamYear?: string;
}

export const EngineeringFoundation: React.FC<EngineeringFoundationProps> = ({
  boardExamRating = '86.45%',
  boardExamYear = '2024',
}) => {
  return (
    <section id="foundation" className="py-12 bg-[#161616] text-[#FAF9F6] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#1C1C1C] border border-[#B5A642]/40 text-[#B5A642] font-mono text-[10px] uppercase tracking-[0.2em] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B5A642]" />
            <span>Formal Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#FAF9F6] tracking-tight">
            Engineering <span className="italic text-[#B5A642]">Foundation</span>
          </h2>
        </div>

        {/* 3 Prominent Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card A: Professional License */}
          <div className="p-6 rounded-sm bg-[#1C1C1C] border border-stone-800 flex flex-col justify-between space-y-4 hover:border-stone-700 transition-colors">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#B5A642]">
                Official License
              </span>
              <ShieldCheck className="w-4 h-4 text-[#B5A642]" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-serif font-bold text-[#FAF9F6]">
                Registered Electrical Engineer
              </h3>
              <p className="text-xs font-mono text-stone-400">
                Professional Regulation Commission (PRC)
              </p>
            </div>

            <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-400">
              <span>Status: Active License</span>
              <span className="text-[#B5A642] font-bold">{boardExamYear}</span>
            </div>
          </div>

          {/* Card B: Licensure Examination Rating */}
          <div className="p-6 rounded-sm bg-[#1C1C1C] border border-[#B5A642]/40 flex flex-col justify-between space-y-4 shadow-md">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#B5A642]">
                EE Licensure Examination
              </span>
              <Award className="w-4 h-4 text-[#B5A642]" />
            </div>

            <div className="text-center py-1">
              <span className="text-4xl sm:text-5xl font-serif font-bold text-[#B5A642] tracking-tight block">
                {boardExamRating}
              </span>
              <p className="text-xs font-serif italic text-stone-200 mt-1">
                Electrical Engineering Licensure Exam
              </p>
            </div>

            <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-400">
              <span>Verified PRC Board Rating</span>
              <span className="text-[#B5A642] font-bold">{boardExamYear}</span>
            </div>
          </div>

          {/* Card C: Education */}
          <div className="p-6 rounded-sm bg-[#1C1C1C] border border-stone-800 flex flex-col justify-between space-y-4 hover:border-stone-700 transition-colors">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#B5A642]">
                Academic Degree
              </span>
              <GraduationCap className="w-4 h-4 text-[#B5A642]" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-serif font-bold text-[#FAF9F6]">
                BS Electrical Engineering
              </h3>
              <p className="text-xs font-mono text-stone-400">
                Polytechnic University of the Philippines
              </p>
            </div>

            <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-400">
              <span>Degree Conferred</span>
              <span className="text-[#B5A642] font-bold">2019–2023</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
