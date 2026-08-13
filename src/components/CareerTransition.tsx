import React from 'react';
import { ShieldCheck, Wrench, Building, Cpu, Compass, CheckCircle2 } from 'lucide-react';

export const CareerTransition: React.FC = () => {
  const transitionSteps = [
    {
      step: '01',
      title: 'Registered Electrical Engineer',
      subtitle: 'Licensure Foundation',
      icon: ShieldCheck,
      desc: 'Passed 2024 EE Board Exam with 86.45% rating, mastering circuit theory, power systems, and PEC principles.',
      tag: 'Credential'
    },
    {
      step: '02',
      title: 'Facilities Engineering',
      subtitle: 'High-Rise Property Operations',
      icon: Building,
      desc: 'Promoted to Senior Facilities Engineer at RIPSI. Overseeing generators, pumps, HVAC VRF, elevators, FDAS, and PM checklists.',
      tag: 'Field Experience'
    },
    {
      step: '03',
      title: 'Practical Systems Knowledge',
      subtitle: 'Real-World System Behaviors',
      icon: Wrench,
      desc: 'Direct exposure to how electrical and MEP systems are installed, operated, maintained, troubleshot, and inspected in active buildings.',
      tag: 'Field Insights'
    },
    {
      step: '04',
      title: 'Independent Design Projects',
      subtitle: 'CAD, BIM & Lighting Software',
      icon: Cpu,
      desc: 'Developing technical deliverables in AutoCAD, Revit, DIALux, PVsyst, and Excel for power distribution, lighting, and solar load studies.',
      tag: 'Design Lab'
    },
    {
      step: '05',
      title: 'Electrical Design Engineering',
      subtitle: 'Technical Capability',
      icon: Compass,
      desc: 'Delivering technical design packages where field-verified practical knowledge ensures constructible, maintainable drawings.',
      tag: 'Capability'
    }
  ];

  const advantages = [
    'Constructibility Awareness: Designing electrical layouts with clear physical clearances for pull boxes, shafts, and maintenance access.',
    'Operational Foresight: Anticipating transient surge currents, motor start behavior, and neutral heating observed in real facility loops.',
    'Preventive Maintenance Mindset: Specifying panel board layouts and circuit labeling that facilitate smooth long-term inspection.',
    'Code & Safety Grounding: Ground-level enforcement of Philippine Electrical Code (PEC) provisions during daily walkthroughs.'
  ];

  return (
    <section id="transition" className="py-20 bg-transparent text-[#FAF9F6] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#1C1C1C] border border-[#B5A642]/40 text-[#B5A642] font-mono text-[11px] uppercase tracking-[0.2em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B5A642]" />
            <span>Integrated Engineering Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#FAF9F6] tracking-tight">
            Building Systems & <span className="italic text-[#B5A642]">Electrical Design</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-sans">
            Connecting real-world field installation and operations experience to rigorous electrical engineering design.
          </p>
        </div>

        {/* 5-Step Visual Transition Pathway */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-16">
          {transitionSteps.map((stepItem, idx) => {
            const IconComp = stepItem.icon;
            return (
              <div
                key={stepItem.step}
                className="relative rounded-sm bg-[#1C1C1C] border border-stone-800 p-5 hover:border-[#B5A642]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-stone-800 pb-2">
                    <span className="text-[10px] font-mono font-bold text-[#B5A642] tracking-widest uppercase">
                      STEP {stepItem.step}
                    </span>
                    <span className="text-[9px] font-mono text-stone-400 bg-[#161616] px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      {stepItem.tag}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-sm bg-[#161616] border border-stone-800 flex items-center justify-center text-[#B5A642] mb-3 group-hover:border-[#B5A642] transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>

                  <h3 className="text-sm font-serif font-bold text-[#FAF9F6] mb-1">
                    {stepItem.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#B5A642] mb-2 uppercase tracking-wider">
                    {stepItem.subtitle}
                  </p>
                  <p className="text-xs text-stone-400 font-sans leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Field Advantage Box */}
        <div className="rounded-sm bg-[#1C1C1C] border border-stone-800 p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-mono text-[#B5A642] tracking-[0.2em] uppercase font-bold">
                Strategic Perspective
              </span>
              <h3 className="text-2xl font-serif font-normal text-[#FAF9F6]">
                How Field Experience Informs Electrical Design
              </h3>
              <p className="text-sm text-stone-300 font-sans leading-relaxed">
                Working directly with active building equipment—generators, pumps, switchgears, elevators, and HVAC controls—provides an acute understanding of how engineered drawings translate into physical reality.
              </p>
              <div className="p-4 rounded-sm bg-[#161616] border border-stone-800 text-xs text-stone-300 font-serif italic">
                "An engineer who has maintained a building knows why maintenance space, labeling clarity, and spare breaker allowances matter in design."
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((adv, idx) => {
                const [title, desc] = adv.split(': ');
                return (
                  <div key={idx} className="p-4 rounded-sm bg-[#161616] border border-stone-800 flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#B5A642] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-200">{title}</h4>
                      <p className="mt-1 text-xs text-stone-400 font-sans leading-normal">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
