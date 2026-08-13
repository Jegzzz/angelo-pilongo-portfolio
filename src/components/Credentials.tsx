import React from 'react';
import { EducationItem, CertificationItem } from '../types/portfolio';
import { Award, GraduationCap, ShieldAlert, CheckCircle2, Calendar, FileText } from 'lucide-react';

interface CredentialsProps {
  education: EducationItem[];
  certifications: CertificationItem[];
  boardExamRating: string;
  boardExamYear: string;
}

export const Credentials: React.FC<CredentialsProps> = ({
  education,
  certifications,
  boardExamRating,
  boardExamYear,
}) => {
  const technicalTrainings = certifications.filter(c => c.category === 'Technical Training');
  const safetyTrainings = certifications.filter(c => c.category === 'Safety and Emergency Response');

  return (
    <section id="credentials" className="py-20 bg-transparent text-[#FAF9F6] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#1C1C1C] border border-[#B5A642]/40 text-[#B5A642] font-mono text-[11px] uppercase tracking-[0.2em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B5A642]" />
            <span>Qualifications & Licensure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#FAF9F6] tracking-tight">
            Credentials, Education & <span className="italic text-[#B5A642]">Training</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-sans">
            Professional licensure status, academic foundation, and specialized technical certifications.
          </p>
        </div>

        {/* Primary Licensure Card */}
        <div className="mb-16 p-8 sm:p-10 rounded-sm bg-[#1C1C1C] border border-stone-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-sm bg-[#161616] border border-[#B5A642]/40 text-[#B5A642] font-mono text-xs font-bold uppercase tracking-widest">
                <Award className="w-4 h-4 mr-2" /> Official PRC Licensure
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF9F6]">
                Registered Electrical Engineer (REE)
              </h3>
              <p className="text-base font-serif italic text-stone-300">
                Philippine Electrical Engineering Licensure Examination • {boardExamYear}
              </p>
              <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed max-w-2xl">
                Authorized and registered by the Professional Regulation Commission (PRC) to practice electrical engineering in the Philippines.
              </p>
            </div>

            <div className="lg:col-span-4 text-center p-6 rounded-sm bg-[#161616] border border-stone-800">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 block mb-1">
                Board Exam Rating
              </span>
              <span className="text-5xl sm:text-6xl font-serif font-bold text-[#B5A642] tracking-tight">
                {boardExamRating}
              </span>
              <span className="text-xs font-mono text-stone-400 block mt-2 uppercase tracking-wider">
                Exam Year: {boardExamYear}
              </span>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-xl font-serif font-bold text-[#FAF9F6] border-b border-stone-800 pb-3">
              <GraduationCap className="w-5 h-5 text-[#B5A642]" />
              <span>Education</span>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="p-6 rounded-sm bg-[#1C1C1C] border border-stone-800 space-y-2">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="text-base font-serif font-bold text-[#FAF9F6]">{edu.degree}</h4>
                    <span className="text-[10px] font-mono font-bold text-[#B5A642] bg-[#161616] px-2.5 py-1 rounded-sm border border-stone-800 uppercase tracking-wider">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-sans font-semibold text-stone-300">{edu.institution}</p>
                  {edu.notes && (
                    <p className="text-xs text-stone-400 font-sans pt-1 leading-relaxed">{edu.notes}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Specialized Training */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-xl font-serif font-bold text-[#FAF9F6] border-b border-stone-800 pb-3">
              <FileText className="w-5 h-5 text-[#B5A642]" />
              <span>Confirmed Training & Seminars</span>
            </div>

            {/* Technical Training */}
            <div className="space-y-3">
              <h5 className="text-[10px] font-mono font-bold text-[#B5A642] uppercase tracking-[0.2em]">
                Technical Equipment & Systems Training
              </h5>
              {technicalTrainings.map((cert) => (
                <div key={cert.id} className="p-4 rounded-sm bg-[#1C1C1C] border border-stone-800 space-y-1">
                  <div className="flex justify-between items-start">
                    <h6 className="text-sm font-sans font-bold text-stone-100">{cert.title}</h6>
                    <span className="text-[10px] font-mono text-stone-400 bg-[#161616] px-2 py-0.5 rounded-sm border border-stone-800 uppercase">{cert.year}</span>
                  </div>
                  <p className="text-xs text-[#B5A642] font-mono uppercase tracking-wider">{cert.organizer}</p>
                  {cert.description && <p className="text-xs text-stone-400 font-sans pt-1">{cert.description}</p>}
                </div>
              ))}
            </div>

            {/* Safety Training */}
            <div className="space-y-3 pt-2">
              <h5 className="text-[10px] font-mono font-bold text-stone-300 uppercase tracking-[0.2em]">
                Safety & Emergency Response Training
              </h5>
              {safetyTrainings.map((cert) => (
                <div key={cert.id} className="p-4 rounded-sm bg-[#1C1C1C] border border-stone-800 space-y-1">
                  <div className="flex justify-between items-start">
                    <h6 className="text-sm font-sans font-bold text-stone-100">{cert.title}</h6>
                    <span className="text-[10px] font-mono text-stone-400 bg-[#161616] px-2 py-0.5 rounded-sm border border-stone-800 uppercase">{cert.year}</span>
                  </div>
                  <p className="text-xs text-stone-300 font-mono uppercase tracking-wider">{cert.organizer}</p>
                  {cert.description && <p className="text-xs text-stone-400 font-sans pt-1">{cert.description}</p>}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
