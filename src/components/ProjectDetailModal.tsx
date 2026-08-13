import React, { useState } from 'react';
import { DesignProject } from '../types/portfolio';
import { X, Cpu, Calculator, FileText, CheckCircle2, AlertTriangle, Layers, ArrowUpRight, Maximize2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: DesignProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'calculations' | 'drawings' | 'reflections'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      
      <div className="relative w-full max-w-5xl bg-[#1C1C1C] border border-stone-800 rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-[#FAF9F6]">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#161616] border-b border-stone-800 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-sm text-[10px] font-mono font-bold bg-[#1C1C1C] text-[#B5A642] border border-[#B5A642]/40 tracking-wider uppercase">
                {project.projectType}
              </span>
              <span className="px-2.5 py-0.5 rounded-sm text-[10px] font-mono font-bold bg-[#1C1C1C] text-stone-300 border border-stone-800 tracking-wider uppercase">
                {project.status}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FAF9F6] tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-stone-400 mt-0.5 uppercase tracking-wider">
              Discipline: {project.engineeringDiscipline} • Date: {project.date}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white hover:bg-[#161616] rounded-sm transition-colors border border-stone-800"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 bg-[#161616] border-b border-stone-800 flex space-x-2 font-mono text-xs overflow-x-auto shrink-0 pt-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 font-bold border-b-2 transition-all uppercase tracking-wider ${
              activeTab === 'overview'
                ? 'border-[#B5A642] text-[#B5A642] bg-[#1C1C1C]'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            1. Overview
          </button>

          <button
            onClick={() => setActiveTab('calculations')}
            className={`px-4 py-2.5 font-bold border-b-2 transition-all uppercase tracking-wider ${
              activeTab === 'calculations'
                ? 'border-[#B5A642] text-[#B5A642] bg-[#1C1C1C]'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            2. Calculations
          </button>

          <button
            onClick={() => setActiveTab('drawings')}
            className={`px-4 py-2.5 font-bold border-b-2 transition-all uppercase tracking-wider ${
              activeTab === 'drawings'
                ? 'border-[#B5A642] text-[#B5A642] bg-[#1C1C1C]'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            3. CAD Drawings ({project.drawings?.length || 0})
          </button>

          <button
            onClick={() => setActiveTab('reflections')}
            className={`px-4 py-2.5 font-bold border-b-2 transition-all uppercase tracking-wider ${
              activeTab === 'reflections'
                ? 'border-[#B5A642] text-[#B5A642] bg-[#1C1C1C]'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            4. Lessons
          </button>
        </div>

        {/* Modal Body Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-300 text-sm font-sans leading-relaxed">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Project Image Banner if available */}
              {project.imageUrl && (
                <div className="relative rounded-sm overflow-hidden border border-stone-800 h-64 sm:h-80 bg-[#161616]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#161616]/90 border border-stone-800 px-3 py-1 rounded-sm text-xs font-mono text-stone-300">
                    Project Visual Preview
                  </div>
                </div>
              )}

              {/* Tools & Skills Pills */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-sm bg-[#161616] border border-stone-800">
                  <h4 className="text-[10px] font-mono font-bold text-[#B5A642] uppercase tracking-[0.2em] mb-2 flex items-center">
                    <Cpu className="w-4 h-4 mr-1.5" /> Software & Tools Utilized
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.softwareTools.map((tool, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-sm text-xs font-mono bg-[#1C1C1C] text-stone-200 border border-stone-800">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-sm bg-[#161616] border border-stone-800">
                  <h4 className="text-[10px] font-mono font-bold text-[#B5A642] uppercase tracking-[0.2em] mb-2 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1.5" /> Skills Demonstrated
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.skillsDemonstrated.map((sk, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-sm text-xs font-mono bg-[#1C1C1C] text-stone-200 border border-stone-800">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Objective & Context */}
              <div className="space-y-4">
                <div className="p-4 rounded-sm bg-[#161616] border border-stone-800">
                  <h4 className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-[0.2em] mb-1">
                    Design Objective
                  </h4>
                  <p className="text-stone-200 font-medium font-serif">{project.objective}</p>
                </div>

                <div className="p-4 rounded-sm bg-[#161616] border border-stone-800">
                  <h4 className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-[0.2em] mb-1">
                    Context & Study Background
                  </h4>
                  <p className="text-stone-300">{project.context}</p>
                </div>

                <div className="p-4 rounded-sm bg-[#161616] border border-stone-800">
                  <h4 className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-[0.2em] mb-1">
                    Author Role & Scope
                  </h4>
                  <p className="text-stone-300">{project.role}</p>
                </div>
              </div>

              {/* Design Assumptions */}
              <div>
                <h4 className="text-[10px] font-mono font-bold text-stone-300 uppercase tracking-[0.2em] mb-2">
                  Key Design Assumptions
                </h4>
                <ul className="space-y-1.5 text-xs font-mono bg-[#161616] p-4 rounded-sm border border-stone-800">
                  {project.designAssumptions.map((asm, i) => (
                    <li key={i} className="flex items-start space-x-2 text-stone-300">
                      <span className="text-[#B5A642] font-bold">•</span>
                      <span>{asm}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}

          {activeTab === 'calculations' && (
            <div className="space-y-6">
              
              {/* Methodology */}
              <div className="p-4 rounded-sm bg-[#161616] border border-stone-800">
                <h4 className="text-[10px] font-mono font-bold text-[#B5A642] uppercase tracking-[0.2em] mb-2 flex items-center">
                  <Calculator className="w-4 h-4 mr-1.5" /> Engineering Methodology
                </h4>
                <p className="text-stone-300 leading-relaxed">{project.methodology}</p>
              </div>

              {/* Math / Calculations breakdown */}
              <div>
                <h4 className="text-[10px] font-mono font-bold text-stone-300 uppercase tracking-[0.2em] mb-3">
                  Sample Design Calculations & Formulas
                </h4>
                <div className="space-y-2 font-mono text-xs">
                  {project.calculations.map((calc, i) => (
                    <div key={i} className="p-3 rounded-sm bg-[#161616] border border-stone-800 text-stone-200">
                      <span className="text-[#B5A642] font-bold mr-2">[{i + 1}]</span>
                      {calc}
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Decisions */}
              <div>
                <h4 className="text-[10px] font-mono font-bold text-stone-300 uppercase tracking-[0.2em] mb-3">
                  Engineering Design Decisions
                </h4>
                <div className="space-y-2 text-xs font-sans">
                  {project.designDecisions.map((dec, i) => (
                    <div key={i} className="p-3 rounded-sm bg-[#161616] border border-stone-800 text-stone-300 flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B5A642] shrink-0 mt-0.5" />
                      <span>{dec}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {activeTab === 'drawings' && (
            <div className="space-y-6">
              <p className="text-xs text-stone-400 font-mono">
                Technical deliverables, CAD schematics, panel board schedules, or simulation reports associated with this study:
              </p>

              {project.drawings && project.drawings.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.drawings.map((dwg, i) => (
                    <div key={i} className="p-4 rounded-sm bg-[#161616] border border-stone-800 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono font-bold text-[#B5A642] uppercase tracking-wider">
                            {dwg.type}
                          </span>
                          <FileText className="w-4 h-4 text-stone-400" />
                        </div>
                        <h5 className="text-sm font-serif font-bold text-[#FAF9F6] mb-1">{dwg.name}</h5>
                        <p className="text-xs text-stone-400 leading-relaxed mb-4">{dwg.description}</p>
                      </div>

                      <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-stone-400">
                        <span>Format: AutoCAD / PDF</span>
                        <span className="text-[#B5A642]">Full package available</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs font-mono text-stone-400 p-4 rounded-sm bg-[#161616] border border-stone-800">
                  Drawings currently undergoing review and will be uploaded upon publication update.
                </p>
              )}
            </div>
          )}

          {activeTab === 'reflections' && (
            <div className="space-y-6">
              
              {/* Lessons Learned */}
              <div>
                <h4 className="text-[10px] font-mono font-bold text-[#B5A642] uppercase tracking-[0.2em] mb-2 flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1.5" /> Lessons Learned & Engineering Insights
                </h4>
                <div className="space-y-2 text-xs font-sans">
                  {project.lessonsLearned.map((ls, i) => (
                    <div key={i} className="p-3 rounded-sm bg-[#161616] border border-stone-800 text-stone-200">
                      • {ls}
                    </div>
                  ))}
                </div>
              </div>

              {/* Limitations */}
              <div>
                <h4 className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-[0.2em] mb-2 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-1.5" /> Study Limitations
                </h4>
                <div className="space-y-2 text-xs font-sans">
                  {project.limitations.map((lim, i) => (
                    <div key={i} className="p-3 rounded-sm bg-[#161616] border border-stone-800 text-stone-300">
                      • {lim}
                    </div>
                  ))}
                </div>
              </div>

              {/* Future Improvements */}
              <div>
                <h4 className="text-[10px] font-mono font-bold text-stone-300 uppercase tracking-[0.2em] mb-2">
                  Planned Future Improvements
                </h4>
                <div className="space-y-2 text-xs font-sans">
                  {project.futureImprovements.map((imp, i) => (
                    <div key={i} className="p-3 rounded-sm bg-[#161616] border border-stone-800 text-stone-300">
                      • {imp}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#161616] border-t border-stone-800 flex items-center justify-between shrink-0 font-mono text-xs">
          <span className="text-stone-400 uppercase tracking-wider text-[10px]">
            Angelo C. Pilongo • Electrical Design Showcase
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-sm bg-[#1C1C1C] hover:bg-stone-800 text-[#FAF9F6] border border-stone-800 font-semibold transition-colors"
          >
            Close Detail
          </button>
        </div>

      </div>
    </div>
  );
};
