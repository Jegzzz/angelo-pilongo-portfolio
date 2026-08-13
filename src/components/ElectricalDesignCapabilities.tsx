import React from 'react';
import { Cpu, FileCode2, Building, Flame, CheckCircle2 } from 'lucide-react';

export const ElectricalDesignCapabilities: React.FC = () => {
  const capabilityGroups = [
    {
      title: 'ELECTRICAL DESIGN',
      icon: Cpu,
      items: [
        { name: 'Electrical layouts', status: 'Independent Project Experience' },
        { name: 'Power distribution', status: 'Independent Project Experience' },
        { name: 'Lighting systems', status: 'Independent Project Experience' },
        { name: 'Load calculations', status: 'Independent Project Experience' },
        { name: 'Single-line diagrams', status: 'Independent Project Experience' },
        { name: 'Panel schedules', status: 'Independent Project Experience' },
      ],
    },
    {
      title: 'DESIGN & DOCUMENTATION',
      icon: FileCode2,
      items: [
        { name: 'AutoCAD', status: 'Independent Project Experience' },
        { name: 'Revit (MEP)', status: 'Currently Learning' },
        { name: 'Technical drawings', status: 'Independent Project Experience' },
        { name: 'Engineering documentation', status: 'Verified Field Practice' },
        { name: 'BIM Fundamentals', status: 'Currently Learning' },
      ],
    },
    {
      title: 'BUILDING SYSTEMS',
      icon: Building,
      items: [
        { name: 'Generators', status: 'Verified Field Practice' },
        { name: 'HVAC (VRF/Chillers)', status: 'Verified Field Practice' },
        { name: 'Pumps & Water Systems', status: 'Verified Field Practice' },
        { name: 'Elevators (KONE)', status: 'Verified Field Practice' },
        { name: 'FDAS & Fire Protection', status: 'Verified Field Practice' },
      ],
    },
    {
      title: 'ANALYSIS & SIMULATION',
      icon: Flame,
      items: [
        { name: 'DIALux Evo', status: 'Developing' },
        { name: 'PVsyst', status: 'Developing' },
        { name: 'Engineering calculations', status: 'Verified Field Practice' },
        { name: 'Energy analysis', status: 'Developing' },
      ],
    },
  ];

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Verified Field Practice':
        return 'bg-[#B5A642]/15 text-[#B5A642] border-[#B5A642]/40';
      case 'Independent Project Experience':
        return 'bg-[#161616] text-stone-200 border-stone-700';
      case 'Developing':
      case 'Currently Learning':
        return 'bg-[#161616] text-amber-300 border-amber-800/60';
      default:
        return 'bg-[#161616] text-stone-300 border-stone-800';
    }
  };

  return (
    <section id="capabilities" className="py-16 bg-[#161616] text-[#FAF9F6] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#1C1C1C] border border-[#B5A642]/40 text-[#B5A642] font-mono text-[10px] uppercase tracking-[0.2em] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B5A642]" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#FAF9F6] tracking-tight">
            Electrical Design <span className="italic text-[#B5A642]">Capabilities</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300 font-sans">
            Structured view of practical building-systems capabilities alongside evolving electrical design competencies.
          </p>
        </div>

        {/* Status Legend */}
        <div className="mb-8 p-3.5 rounded-sm bg-[#1C1C1C] border border-stone-800 flex flex-wrap items-center justify-center gap-5 text-[11px] font-mono uppercase tracking-wider">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#B5A642]" />
            <span className="text-stone-200 font-bold">Verified Field Practice</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-stone-300" />
            <span className="text-stone-200 font-bold">Independent Project Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-stone-200 font-bold">Developing / Currently Learning</span>
          </div>
        </div>

        {/* 4 Grouped Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilityGroups.map((group, idx) => {
            const IconComp = group.icon;
            return (
              <div key={idx} className="rounded-sm bg-[#1C1C1C] border border-stone-800 p-6 space-y-5 shadow-lg">
                <div className="border-b border-stone-800 pb-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <IconComp className="w-4 h-4 text-[#B5A642]" />
                    <h3 className="text-sm font-mono font-bold text-[#FAF9F6] uppercase tracking-widest">
                      {group.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-stone-500 uppercase">
                    {group.items.length} Items
                  </span>
                </div>

                <div className="space-y-2.5">
                  {group.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-sm bg-[#161616] border border-stone-800 flex items-center justify-between hover:border-stone-700 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-sans font-medium text-stone-200">
                        {item.name}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-sm text-[9px] font-mono uppercase tracking-wider font-bold border ${getStatusBadgeClass(item.status)} shrink-0 ml-2`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
