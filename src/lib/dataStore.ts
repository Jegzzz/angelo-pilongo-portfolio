import { Profile, ExperienceItem, DesignProject, EducationItem, CertificationItem, SkillCategory } from '../types/portfolio';
import { initialProfile, initialExperience, initialProjects, initialEducation, initialCertifications, initialSkills } from './seedData';
import { db } from './firebase';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';

const STORAGE_KEYS = {
  PROFILE: 'acp_profile_v1',
  EXPERIENCE: 'acp_experience_v1',
  PROJECTS: 'acp_projects_v1',
  EDUCATION: 'acp_education_v1',
  CERTIFICATIONS: 'acp_certifications_v1',
  SKILLS: 'acp_skills_v1',
};

// Helper to get items from LocalStorage or seed fallback
export function getStoredProfile(): Profile {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROFILE);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Error reading profile from localStorage:', e);
  }
  return initialProfile;
}

export function saveProfile(profile: Profile): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  } catch (e) {
    console.error('Error saving profile:', e);
  }
}

export function getStoredExperience(): ExperienceItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.EXPERIENCE);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Error reading experience:', e);
  }
  return initialExperience;
}

export function getStoredProjects(): DesignProject[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn('Error reading projects:', e);
  }
  return initialProjects;
}

export function saveProjects(projects: DesignProject[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  } catch (e) {
    console.error('Error saving projects:', e);
  }
}

export function getStoredEducation(): EducationItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.EDUCATION);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Error reading education:', e);
  }
  return initialEducation;
}

export function getStoredCertifications(): CertificationItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CERTIFICATIONS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Error reading certifications:', e);
  }
  return initialCertifications;
}

export function getStoredSkills(): SkillCategory[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SKILLS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Error reading skills:', e);
  }
  return initialSkills;
}

// Firestore async sync helper
export async function fetchProjectsFromFirestore(): Promise<DesignProject[]> {
  if (!db) return getStoredProjects();
  try {
    const querySnapshot = await getDocs(collection(db, 'projects'));
    if (!querySnapshot.empty) {
      const fetched: DesignProject[] = [];
      querySnapshot.forEach((docSnap) => {
        fetched.push({ id: docSnap.id, ...docSnap.data() } as DesignProject);
      });
      saveProjects(fetched);
      return fetched;
    }
  } catch (err) {
    console.warn('Firestore fetch projects notice:', err);
  }
  return getStoredProjects();
}

export async function saveProjectToFirestore(project: DesignProject): Promise<void> {
  const current = getStoredProjects();
  const idx = current.findIndex(p => p.id === project.id);
  let updated: DesignProject[];
  if (idx >= 0) {
    updated = [...current];
    updated[idx] = project;
  } else {
    updated = [project, ...current];
  }
  saveProjects(updated);

  if (db) {
    try {
      await setDoc(doc(db, 'projects', project.id), project);
    } catch (err) {
      console.warn('Firestore save project notice:', err);
    }
  }
}

export async function deleteProjectFromFirestore(projectId: string): Promise<void> {
  const current = getStoredProjects();
  const updated = current.filter(p => p.id !== projectId);
  saveProjects(updated);

  if (db) {
    try {
      await deleteDoc(doc(db, 'projects', projectId));
    } catch (err) {
      console.warn('Firestore delete project notice:', err);
    }
  }
}
