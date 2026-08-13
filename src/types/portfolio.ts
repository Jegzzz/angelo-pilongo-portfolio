export type ProjectStatus = 'Learning' | 'In Progress' | 'Completed';
export type PublicationStatus = 'Draft' | 'Published';

export interface DesignProject {
  id: string;
  slug: string;
  title: string;
  projectType: string; // e.g. "Independent Electrical Design Project", "Personal Design Study"
  engineeringDiscipline: string; // e.g. "Building Electrical Systems", "Lighting Design", "Solar PV"
  status: ProjectStatus;
  publicationStatus: PublicationStatus;
  date: string;
  objective: string;
  context: string;
  role: string;
  designAssumptions: string[];
  methodology: string;
  calculations: string[];
  designDecisions: string[];
  results: string;
  lessonsLearned: string[];
  limitations: string[];
  futureImprovements: string[];
  softwareTools: string[]; // e.g. ["AutoCAD", "DIALux", "Excel"]
  skillsDemonstrated: string[];
  imageUrl?: string;
  drawings?: { name: string; type: string; url?: string; description: string }[];
  pdfDeliverableUrl?: string;
  tags: string[];
  featured: boolean;
  targetRole?: string;
}

export interface Profile {
  name: string;
  credentialTitle: string; // "Registered Electrical Engineer"
  boardExamRating: string; // "86.45%"
  boardExamYear: string; // "2024"
  boardExamName: string; // "Electrical Engineering Licensure Examination"
  currentRole: string; // "Facilities Engineer / Senior Facilities Engineer"
  currentEmployer: string; // "Proscenium – Rockwell Integrated Property Services Incorporated (RIPSI)"
  location: string; // "Meycauayan, Bulacan, Philippines"
  email: string;
  jotformUrl: string; // "JOTFORM_URL_PLACEHOLDER"
  positioningStatement: string;
  summaryText: string;
  photoUrl?: string;
}

export interface CapabilityGroup {
  title: string;
  iconName: string;
  items: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: string;
  promotionNotice?: string;
  period: string;
  summary: string;
  capabilityGroups: CapabilityGroup[];
  highlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  notes?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  organizer: string;
  year: string;
  category: 'Technical Training' | 'Safety and Emergency Response';
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: 'Professional Experience' | 'Independent Project Experience' | 'Currently Developing';
  }[];
}
