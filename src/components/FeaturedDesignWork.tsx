import React, { useState } from 'react';
import { DesignProject } from '../types/portfolio';
import { ArrowRight, Eye, Cpu, FileCheck } from 'lucide-react';
import { ProjectDetailModal } from './ProjectDetailModal';

interface FeaturedDesignWorkProps {
  projects: DesignProject[];
  onViewAllProjects: () => void;
}

export const FeaturedDesignWork: React.FC<FeaturedDesignWorkProps> = ({
  projects,
  onViewAllProjects,
}) => {
  const [selectedProject, setSelectedProject] = useState<DesignProject | null>(null);

  // Take up to 3 published or featured projects
  const featuredList = projects
    .filter(p => p.publicationStatus === 'Published')
    .slice(0, 3);

  return (
    <section id="featured-work" className="py-16 bg-[#161616] text-[#FAF9F6] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#1C1C1C] border border-[#B5A642]/40 text-[#B5A642] font-mono text-[10px] uppercase tracking-[0.2em] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B5A642]" />
              <span>Evidence of Design Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#FAF9F6] tracking-tight">
              Selected <span className="italic text-[#B5A642]">Design Work</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-300 font-sans max-w-xl">
              Independent electrical design studies demonstrating load calculations, single-line diagrams, and technical documentation.
            </p>
          </div>

          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center px-5 py-2.5 rounded-sm bg-[#1C1C1C] border border border-stone-800 hover:border-[#B5A642] text-xs font-mono font-bold uppercase tracking-widest text-[#B5A642] transition-colors shrink-0 self-start md:self-auto"
          >
            <span>View All Design Projects</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* 3 Featured Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredList.map((project) => (
            <div
              key={project.id}
              className="rounded-sm bg-[#1C1C1C] border border-stone-800 hover:border-[#B5A642]/60 transition-all shadow-xl flex flex-col justify-between overflow-hidden group"
            >
              <div className="space-y-4 p-6">
                
                {/* Meta Header */}
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-stone-400">
                  <span className="text-[#B5A642]">{project.projectType}</span>
                  <span className="px-2 py-0.5 rounded-sm bg-[#161616] border border-stone-800 font-bold">
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-serif font-bold text-[#FAF9F6] group-hover:text-[#B5A642] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Engineering Discipline */}
                <p className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                  Discipline: {project.engineeringDiscipline}
                </p>

                {/* Short Objective/Description */}
                <p className="text-xs text-stone-300 font-sans leading-relaxed line-clamp-3">
                  {project.objective}
                </p>

                {/* Tools Used Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.softwareTools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-sm bg-[#161616] border border-stone-800 text-[10px] font-mono text-stone-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

              </div>

              {/* View Project Action Footer */}
              <div className="p-4 bg-[#161616] border-t border-stone-800 flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  {project.date}
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-[#B5A642] font-bold hover:underline"
                >
                  <Eye className="w-3.5 h-3.5 mr-1.5" />
                  View Project
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center justify-center px-6 py-3 rounded-sm text-xs font-mono tracking-widest uppercase font-bold bg-[#B5A642] text-stone-950 hover:bg-[#c9b84a] transition-all shadow-md"
          >
            <span>Explore Full Design Portfolio</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
