import { Profile, ExperienceItem, DesignProject, EducationItem, CertificationItem, SkillCategory } from '../types/portfolio';

export const initialProfile: Profile = {
  name: 'Angelo C. Pilongo',
  credentialTitle: 'Registered Electrical Engineer',
  boardExamRating: '86.45%',
  boardExamYear: '2024',
  boardExamName: 'Electrical Engineering Licensure Examination',
  currentRole: 'Facilities Engineer / Senior Facilities Engineer',
  currentEmployer: 'Proscenium – Rockwell Integrated Property Services Incorporated (RIPSI)',
  location: 'Meycauayan, Bulacan, Philippines',
  email: 'angelocpilongo@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/pilongoac',
  jotformUrl: 'JOTFORM_URL_PLACEHOLDER',
  positioningStatement: 'Combining practical building-systems experience with electrical design capabilities.',
  summaryText: 'Registered Electrical Engineer with professional experience in facilities engineering and building systems, including equipment operations, maintenance, technical supervision, emergency response, and vendor coordination. Experienced in working with critical building systems and translating field conditions into practical engineering decisions. Holds strong electrical design capabilities in power distribution, lighting design, single-line diagrams, and solar PV modeling.',
  photoUrl: '/images/profile/angelo-pilongo.jpg'
};

export const initialExperience: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Proscenium – Rockwell Integrated Property Services Incorporated (RIPSI)',
    location: 'Makati, Philippines',
    role: 'Facilities Engineer (Promoted to Senior Facilities Engineer in 2026)',
    promotionNotice: 'Promoted to Senior Facilities Engineer in 2026',
    period: 'September 2024 – Present',
    summary: 'Overseeing critical MEP and building systems at high-rise residential & commercial complex, combining technical supervision, preventive maintenance, vendor management, and emergency response.',
    capabilityGroups: [
      {
        title: 'Building Systems & Walkthroughs',
        iconName: 'Building2',
        items: [
          'Conducts daily equipment walkthroughs covering potable water, emergency generators, HVAC, sanitary systems, elevators, FDAS, and fire protection.',
          'Oversees repair and maintenance of high-value building equipment including pumps, generators, elevators, and related subsystems.'
        ]
      },
      {
        title: 'Emergency Response & High-Risk Tasks',
        iconName: 'ShieldAlert',
        items: [
          'Supervises and leads Emergency Response Team activities involving water, electrical generators, sanitary systems, elevators, HVAC, security, FDAS, and fire protection.',
          'Certified and capable of conducting KONE Elevator Technical Mantrap Rescue procedures.',
          'Handles LPG refill and specialized maintenance operations for retail facilities.'
        ]
      },
      {
        title: 'Engineering Operations & Maintenance',
        iconName: 'Wrench',
        items: [
          'Reviews and approves installation and preventive maintenance activities adhering strictly to 52-week PM schedules.',
          'Implements comprehensive equipment PM forms and daily/weekly accomplishment checklists.',
          'Monitors availability of essential engineering tools, critical spare parts, and material stocks.'
        ]
      },
      {
        title: 'Technical Coordination & Vendor Management',
        iconName: 'Users',
        items: [
          'Supervises technician teams during complex troubleshooting and physical repairs.',
          'Manages specialized vendors providing outsourced engineering services, equipment spare parts, and utility supplies.',
          'Processes billing payments for contracted technical services, utilities, and facility supplies.',
          'Prepares equipment and common-area punch lists and communicates technical engineering concerns directly to unit residents.'
        ]
      }
    ],
    highlights: [
      'Promoted to Senior Facilities Engineer in 2026 for technical leadership and operational consistency.',
      'Maintained 100% compliance across 52-week preventive maintenance schedules for major MEP assets.',
      'Successfully led emergency response protocols without downtime incidents in critical water and power distribution loops.'
    ]
  }
];

export const initialEducation: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Science in Electrical Engineering',
    institution: 'Polytechnic University of the Philippines',
    period: '2019 – 2023',
    notes: 'Rigorous foundation in electrical circuit theory, power systems analysis, electrical machines, electromagnetics, and engineering design mathematics.'
  },
  {
    id: 'edu-2',
    degree: 'Secondary Education (STEM Strand)',
    institution: 'Valenzuela City School of Mathematics and Science',
    period: '2013 – 2019',
    notes: 'Specialized science and mathematics curriculum background.'
  }
];

export const initialCertifications: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Red Cross Occupational First Aid Training',
    organizer: 'Philippine Red Cross',
    year: '2026',
    category: 'Safety and Emergency Response',
    description: 'Certified first-responder training for workplace occupational safety and emergency protocol management.'
  },
  {
    id: 'cert-2',
    title: 'Vonotech Monorail BMU Training',
    organizer: 'Vonotech',
    year: '2025',
    category: 'Technical Training',
    description: 'Technical operation and safety verification for Building Maintenance Unit (BMU) monorail equipment.'
  },
  {
    id: 'cert-3',
    title: 'SAMSUNG VRF System Technical Training',
    organizer: 'SAMSUNG Climate Solutions',
    year: '2025',
    category: 'Technical Training',
    description: 'Variable Refrigerant Flow (VRF) system diagnostics, operational controls, and electrical integration.'
  },
  {
    id: 'cert-4',
    title: 'KONE Elevator Mantrap Rescue Procedure Training',
    organizer: 'KONE Philippines',
    year: '2025',
    category: 'Technical Training',
    description: 'Specialized emergency manual brake release and elevator car mantrap rescue procedures.'
  },
  {
    id: 'cert-5',
    title: 'INAEC Helipad Landing Officer (HLO) Training',
    organizer: 'INAEC Aviation Corporation',
    year: '2025',
    category: 'Safety and Emergency Response',
    description: 'Helipad emergency response, refueling safety protocols, and aviation landing operations.'
  }
];

export const initialSkills: SkillCategory[] = [
  {
    category: 'Electrical Engineering & Design',
    skills: [
      { name: 'Electrical Load Calculations', level: 'Independent Project Experience' },
      { name: 'Single-Line Diagrams (SLD)', level: 'Independent Project Experience' },
      { name: 'Panel Board Scheduling & Sizing', level: 'Independent Project Experience' },
      { name: 'Voltage Drop & Feeder Calculations', level: 'Independent Project Experience' },
      { name: 'Short Circuit Calculation Principles', level: 'Independent Project Experience' },
      { name: 'Philippine Electrical Code (PEC) Principles', level: 'Professional Experience' }
    ]
  },
  {
    category: 'Engineering Software & Tools',
    skills: [
      { name: 'AutoCAD Electrical Layouts', level: 'Currently Developing' },
      { name: 'Revit MEP Modeling', level: 'Currently Developing' },
      { name: 'DIALux Evo Lighting Simulation', level: 'Currently Developing' },
      { name: 'PVsyst Solar PV Modeling', level: 'Currently Developing' },
      { name: 'MS Excel Engineering Worksheets', level: 'Professional Experience' }
    ]
  },
  {
    category: 'Building Systems & Facilities',
    skills: [
      { name: 'Emergency Power & Generator Systems', level: 'Professional Experience' },
      { name: 'HVAC & VRF System Controls', level: 'Professional Experience' },
      { name: 'Fire Alarm & Detection Systems (FDAS)', level: 'Professional Experience' },
      { name: 'Potable & Sanitary Water Pump Systems', level: 'Professional Experience' },
      { name: 'Elevator Maintenance & Mantrap Rescue', level: 'Professional Experience' },
      { name: '52-Week Preventive Maintenance Scheduling', level: 'Professional Experience' }
    ]
  },
  {
    category: 'Engineering Operations & Management',
    skills: [
      { name: 'Emergency Response Leadership', level: 'Professional Experience' },
      { name: 'Technical Equipment Troubleshooting', level: 'Professional Experience' },
      { name: 'Vendor & Contractor Management', level: 'Professional Experience' },
      { name: 'Punch-Listing & Quality Review', level: 'Professional Experience' },
      { name: 'Billing & Utility Operations Processing', level: 'Professional Experience' }
    ]
  }
];

export const initialProjects: DesignProject[] = [
  {
    id: 'proj-1',
    slug: 'three-story-commercial-electrical-design',
    title: '3-Story Commercial Building Power & Lighting Distribution Design Study',
    projectType: 'Independent Electrical Design Project',
    engineeringDiscipline: 'Building Electrical Systems',
    status: 'Completed',
    publicationStatus: 'Published',
    date: '2025-02',
    objective: 'Design a compliant 3-phase low-voltage electrical distribution system, lighting branch circuits, and panel schedules for a hypothetical 3-story commercial retail facility following PEC guidelines.',
    context: 'Self-directed engineering study integrating field insights on maintenance accessibility, spare breaker allowances, and feeder conductor sizing into early-stage AutoCAD schematics.',
    role: 'Electrical Design Author (Independent Study)',
    designAssumptions: [
      'System Voltage: 230V / 400V, 3-Phase, 4-Wire, 60 Hz utility service',
      'Lighting power density assumed at 12 W/m² for general retail space',
      'Convenience receptacles calculated at 180 VA per duplex outlet',
      'Future expansion allowance set to 25% minimum spare capacity on main distribution panel'
    ],
    methodology: 'Determined total connected and demand loads per panel using Philippine Electrical Code (PEC) demand factors. Computed feeder sizes, overcurrent protective devices (OCPD), and main circuit breaker ratings. Drafted floor plans and single-line diagrams in AutoCAD.',
    calculations: [
      'Lighting Circuit Load: 18 fixtures @ 40W = 720 VA (15A branch circuit, 2.0 mm² THHN wire)',
      'General Power Branch Circuits: 8 Duplex Outlets @ 180 VA = 1,440 VA (20A CB, 3.5 mm² THHN wire)',
      'Main Feeder Current Calculation: I_main = Total Demand Load / (√3 × 400V × 0.9 PF)',
      'Conductor Sizing: Selected 125% of continuous load + 100% non-continuous load per PEC provisions'
    ],
    designDecisions: [
      'Specified dedicated neutral buses and equipment grounding conductors on all sub-panels to prevent floating neutral issues observed during field facility walkthroughs.',
      'Grouped high-surge motor loads (HVAC fans, booster pumps) onto separate distribution sub-panels with individual soft-start / VFD breaker feeds.',
      'Designed panel placement near main electrical shafts with 1.0m front clear working space per code.'
    ],
    results: 'Produced a 4-sheet drawing package comprising Lighting Plan, Power Layout, Riser Diagram, and Panel Boards Schedule with full conductor and OCPD sizing tables.',
    lessonsLearned: [
      'Balancing phase loads across 3-phase panel boards significantly reduces neutral current rise in unbalanced operating conditions.',
      'Including generous conduit sizing and clear pull-box clearances in design drawings saves labor during field installation and maintenance.'
    ],
    limitations: [
      'Short-circuit withstand ratings (KAIC) were calculated using point-to-point simplified method rather than full computer-simulated transient software.',
      'Utility transformer impedance was based on standard Philippine utility parameters.'
    ],
    futureImprovements: [
      'Incorporate 3D Revit MEP BIM model to detect spatial clashes between electrical conduits and HVAC ductwork.',
      'Perform detailed voltage drop verification across long horizontal feeder runs.'
    ],
    softwareTools: ['AutoCAD', 'MS Excel'],
    skillsDemonstrated: [
      'Philippine Electrical Code (PEC) Application',
      'Load Computations & Panel Schedules',
      'Single-Line Diagram Drafting',
      'Feeder & OCPD Sizing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    drawings: [
      {
        name: 'Single Line Diagram (SLD-01)',
        type: 'Schematic Drawing',
        description: 'Main service entrance, ATS transfer switch, MDP-1, and branch sub-panel feeders.'
      },
      {
        name: 'Panel Board Schedules (PDR-01)',
        type: 'Schedule Table',
        description: 'Complete phase balancing (A-B-C), circuit breaker ratings, and wire/conduit callouts.'
      }
    ],
    tags: ['Building Systems', 'AutoCAD', 'Load Calculation', 'Commercial'],
    featured: true,
    targetRole: 'Electrical Design Engineer'
  },
  {
    id: 'proj-2',
    slug: 'dialux-evo-office-lighting-design-study',
    title: 'DIALux Evo Indoor Visual Comfort & Lux Analysis Study',
    projectType: 'Personal Design Study',
    engineeringDiscipline: 'Lighting Design',
    status: 'In Progress',
    publicationStatus: 'Published',
    date: '2025-01',
    objective: 'Simulate LED luminaire selection and placement for a 150 m² open-plan office space to meet EN 12464-1 / CIBSE lux level standards (500 lx workplane average, UGR < 19).',
    context: 'Independent study exploring photometric data interpretation, false color renderings, and energy efficiency targets in professional indoor spaces.',
    role: 'Lighting Designer (Personal Study)',
    designAssumptions: [
      'Target Illuminance: 500 Lux at 0.75m desk working height',
      'Uniformity Ratio (E_min / E_avg) >= 0.60',
      'Unified Glare Rating (UGR) <= 19 for computer workstation comfort',
      'Maintenance Factor: 0.80 assuming clean indoor commercial environment'
    ],
    methodology: 'Modeled room geometry in DIALux Evo. Imported IES/LDT photometric files of recess-mounted LED troffers (4000K, CRI 80+). Generated illuminance contours and calculated lighting power density (LPD).',
    calculations: [
      'Space Area: 15m × 10m = 150 m²',
      'Total Lumens Required = (E_target × Area) / (UF × MF) = (500 × 150) / (0.55 × 0.80) ≈ 170,450 lm',
      'Luminaires Selected: 36W LED Troffers @ 4000 lm each -> 42 fixtures placed in 6x7 grid',
      'Calculated LPD: (42 × 36W) / 150 m² = 10.08 W/m² (complies with energy efficiency codes)'
    ],
    designDecisions: [
      'Selected micro-prismatic optics to minimize direct glare on computer screens.',
      'Organized luminaire grouping into perimeter daylight-harvesting zones to enable energy saving during daytime hours.'
    ],
    results: 'Achieved average workplane illuminance of 524 lx with a uniformity of 0.68 and glare index UGR 18.2.',
    lessonsLearned: [
      'Surface reflectances (ceiling 0.7, walls 0.5, floor 0.2) drastically impact overall room lux levels.',
      'Inter-reflections contribute over 20% of workplane illuminance in enclosed office spaces.'
    ],
    limitations: [
      'Study does not account for dynamic exterior window shading blinds movement.',
      'Emergency egress lighting levels were modeled separately.'
    ],
    futureImprovements: [
      'Integrate daylight sensor controls in simulation.',
      'Export 3D CAD DXF floor plans directly to AutoCAD for electrical wiring installation drawings.'
    ],
    softwareTools: ['DIALux Evo', 'AutoCAD'],
    skillsDemonstrated: [
      'Photometric Calculations',
      'Visual Comfort & Glare Control (UGR)',
      'Energy Efficiency / LPD Evaluation',
      'DIALux Simulation Modeling'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    drawings: [
      {
        name: 'False Color Rendering',
        type: 'Lux Heatmap',
        description: 'Workplane illuminance distribution map confirming 500+ lx across all workstation zones.'
      }
    ],
    tags: ['Lighting Design', 'DIALux', 'Visual Comfort', 'Energy Efficiency'],
    featured: true,
    targetRole: 'MEP Electrical Engineer'
  },
  {
    id: 'proj-3',
    slug: 'solar-pv-grid-tied-rooftop-study',
    title: 'Self-Directed Solar PV Rooftop Load & Array Capacity Analysis Study',
    projectType: 'Self-Directed Engineering Project',
    engineeringDiscipline: 'Solar PV & Renewable Energy',
    status: 'In Progress',
    publicationStatus: 'Published',
    date: '2025-01',
    objective: 'Analyze roof tilt, solar irradiation data for Bulacan / Central Luzon area, inverter matching, and string sizing for a 15 kWp rooftop solar PV installation.',
    context: 'Independent study applying engineering mathematics to solar PV array sizing, DC string voltage constraints, and AC grid integration requirements.',
    role: 'Solar PV Analyst (Independent Project)',
    designAssumptions: [
      'Location: Bulacan, Philippines (Latitude ~14.7° N)',
      'Peak Sun Hours (PSH): 4.5 kWh/m²/day average',
      'PV Module: 550W Monocrystalline PERC (V_mp = 41.95V, I_mp = 13.12A, V_oc = 49.80V)',
      'Inverter: 15 kW Grid-Tied 3-Phase (MPPT Operating Range: 200V - 850V, Max V_dc: 1000V)'
    ],
    methodology: 'Analyzed ambient temperature range (22°C to 38°C) to apply temperature coefficients for V_oc max and V_mp min. Determined minimum and maximum solar modules per string. Calculated expected annual energy output and AC feeder wire requirements.',
    calculations: [
      'Max String Voltage @ 22°C: V_oc(temp) = 49.80V × [1 + (-0.27%/°C) × (22 - 25)] = 50.2V per module',
      'Max Modules in Series: 1000V / 50.2V = 19.9 -> Limit to 16 modules per string for safety margin',
      'Array Configuration: 2 strings of 14 modules = 28 modules × 550W = 15.4 kWp total DC capacity',
      'Estimated Daily Generation: 15.4 kWp × 4.5 PSH × 0.82 System Efficiency ≈ 56.8 kWh/day'
    ],
    designDecisions: [
      'Specified DC isolator switch and surge protective device (SPD Class II) located adjacent to array junction box.',
      'Selected AC disconnect switch and 32A 3-pole miniature circuit breaker at main AC distribution board.'
    ],
    results: 'Formulated complete DC string wiring diagram, inverter matching report, and preliminary electrical load offset projection.',
    lessonsLearned: [
      'Temperature coefficients are critical in tropical environments; high ambient roof temperatures reduce solar panel operating voltage significantly.',
      'Matching MPPT voltage window during hottest summer months prevents inverter derating.'
    ],
    limitations: [
      'Rooftop shading analysis was estimated manually without 3D LIDAR roof scan software.',
      'Utility net-metering interconnection approval steps were studied conceptually.'
    ],
    futureImprovements: [
      'Perform detailed PVsyst simulation to account for horizon shading and inverter clipping losses.',
      'Draft 3D structural mounting clip details in Revit or AutoCAD.'
    ],
    softwareTools: ['PVsyst', 'MS Excel', 'AutoCAD'],
    skillsDemonstrated: [
      'Solar PV Array Sizing',
      'Temperature Correction Calculations',
      'Inverter MPPT Matching',
      'DC & AC Circuit Protection Design'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    tags: ['Solar PV', 'PVsyst', 'Renewable Energy', 'Calculations'],
    featured: false,
    targetRole: 'Electrical Design Engineer'
  }
];
