import React, { useState } from 'react';
import { DesignProject } from '../types/portfolio';
import { Cpu, Search, Filter, ArrowUpRight, FolderGit2, Sparkles, Layers, FileCode2 } from 'lucide-react';
import { ProjectDetailModal } from './ProjectDetailModal';

interface DesignPortfolioProps {
  projects: DesignProject[];
}

export const DesignPortfolio: React.FC<DesignPortfolioProps> = ({ projects }) => {
  const [selectedSoftware, setSelectedSoftware] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<DesignProject | null>(null);

  const softwareList = ['All', 'AutoCAD', 'Revit', 'DIALux', 'PVsyst', 'MS Excel'];
  const categoryList = ['All', 'Building Electrical Systems', 'Lighting Design', 'Solar PV & Renewable Energy'];

  // Filter published projects only
  const publishedProjects = projects.filter(p => p.publicationStatus === 'Published');

  const filteredProjects = publishedProjects.filter((proj) => {
    const matchesSoftware =
      selectedSoftware === 'All' || proj.softwareTools.some(tool => tool.toLowerCase().includes(selectedSoftware.toLowerCase()));
    
    const matchesCategory =
      selectedCategory === 'All' || proj.engineeringDiscipline.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesSearch =
      searchQuery === '' ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.objective.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesSoftware && matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-20 bg-transparent text-[#FAF9F6] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#1C1C1C] border border-[#B5A642]/40 text-[#B5A642] font-mono text-[11px] uppercase tracking-[0.2em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B5A642]" />
            <span>Evolving Design Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#FAF9F6] tracking-tight">
            Independent Electrical <span className="italic text-[#B5A642]">Design Lab</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-sans">
            A growing body of self-directed engineering studies, load calculations, lighting simulations, and AutoCAD/Revit layouts.
          </p>
        </div>

        {/* Disclaimer Banner */}
        <div className="mb-10 p-4 rounded-sm bg-[#1C1C1C] border border-stone-800 text-xs text-stone-300 font-mono flex items-start space-x-3 max-w-4xl mx-auto">
          <FolderGit2 className="w-5 h-5 text-[#B5A642] shrink-0 mt-0.5" />
          <p>
            <strong className="text-stone-100 font-bold uppercase tracking-wider">Engineering Portfolio Policy:</strong> All projects below represent self-directed, independent engineering studies and personal skill-development work in electrical design software. They are explicitly identified as independent work to maintain complete technical transparency.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="mb-10 p-5 rounded-sm bg-[#1C1C1C] border border-stone-800 space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, load type, or keyword..."
                className="w-full pl-10 pr-4 py-2.5 rounded-sm bg-[#161616] border border-stone-800 text-stone-100 placeholder-stone-500 text-xs font-mono focus:outline-none focus:border-[#B5A642]"
              />
            </div>

            {/* Software Tools Pills */}
            <div className="md:col-span-7 flex flex-wrap items-center gap-1.5 font-mono text-xs">
              <span className="text-stone-400 mr-2 flex items-center shrink-0 uppercase tracking-wider text-[10px]">
                <Filter className="w-3.5 h-3.5 mr-1 text-[#B5A642]" /> Tool:
              </span>
              {softwareList.map((sw) => (
                <button
                  key={sw}
                  onClick={() => setSelectedSoftware(sw)}
                  className={`px-3 py-1.5 rounded-sm transition-all text-xs ${
                    selectedSoftware === sw
                      ? 'bg-[#B5A642] text-[#161616] font-bold shadow-sm'
                      : 'bg-[#161616] text-stone-300 hover:text-white border border-stone-800'
                  }`}
                >
                  {sw}
                </button>
              ))}
            </div>

          </div>

          {/* Discipline Category Filters */}
          <div className="pt-3 border-t border-stone-800 flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="text-stone-400 mr-2 flex items-center uppercase tracking-wider text-[10px]">
              <Layers className="w-3.5 h-3.5 mr-1 text-[#B5A642]" /> Discipline:
            </span>
            {categoryList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-sm transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#161616] text-[#B5A642] border border-[#B5A642]/50 font-bold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-sm bg-[#1C1C1C] border border-stone-800 hover:border-[#B5A642]/60 transition-all flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div>
                
                {/* Image or Visual Header */}
                <div className="relative h-48 bg-[#161616] overflow-hidden border-b border-stone-800">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#161616] text-stone-700">
                      <FileCode2 className="w-12 h-12 text-stone-600" />
                    </div>
                  )}

                  <div className="absolute top-3 left-3 flex items-center space-x-1.5">
                    <span className="px-2.5 py-1 rounded-sm text-[9px] font-mono font-bold bg-[#161616]/90 text-[#B5A642] border border-stone-800 tracking-wider uppercase">
                      {project.projectType}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded-sm text-[9px] font-mono font-bold bg-[#161616]/90 text-stone-300 border border-stone-800 uppercase tracking-wider">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#B5A642] font-bold block mb-1 uppercase tracking-widest">
                      {project.engineeringDiscipline}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-[#FAF9F6] group-hover:text-[#B5A642] transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-400 font-sans line-clamp-3 leading-relaxed">
                    {project.objective}
                  </p>

                  {/* Software Tools Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.softwareTools.map((tool, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-[#161616] text-stone-300 border border-stone-800">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer Button */}
              <div className="px-6 py-4 bg-[#161616] border-t border-stone-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                  {project.date}
                </span>

                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="inline-flex items-center text-xs font-mono font-bold text-[#B5A642] hover:text-[#d4c359] transition-colors uppercase tracking-wider"
                >
                  <span>View Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 p-8 rounded-sm bg-[#1C1C1C] border border-stone-800 max-w-xl mx-auto">
            <FolderGit2 className="w-10 h-10 text-stone-600 mx-auto mb-3" />
            <h3 className="text-base font-serif font-bold text-[#FAF9F6]">No Projects Found</h3>
            <p className="text-xs text-stone-400 mt-1 font-sans">
              Try clearing your search query or adjusting the software tool filters.
            </p>
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
};
