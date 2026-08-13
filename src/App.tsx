import React, { useState, useEffect } from 'react';
import {
  getStoredProfile,
  getStoredExperience,
  getStoredProjects,
  getStoredEducation,
  getStoredCertifications,
  getStoredSkills,
  saveProjectToFirestore,
  deleteProjectFromFirestore,
  fetchProjectsFromFirestore,
} from './lib/dataStore';
import { DesignProject, Profile } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EngineeringFoundation } from './components/EngineeringFoundation';
import { ElectricalDesignCapabilities } from './components/ElectricalDesignCapabilities';
import { FeaturedDesignWork } from './components/FeaturedDesignWork';
import { CareerTransitionTeaser } from './components/CareerTransitionTeaser';
import { CareerTransition } from './components/CareerTransition';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { DesignPortfolio } from './components/DesignPortfolio';
import { Expertise } from './components/Expertise';
import { Credentials } from './components/Credentials';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';

export default function App() {
  const [viewMode, setViewMode] = useState<'public' | 'admin'>('public');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [jotformOpen, setJotformOpen] = useState<boolean>(false);

  // Portfolio data state
  const [profile, setProfile] = useState<Profile>(getStoredProfile());
  const [experienceList] = useState(getStoredExperience());
  const [educationList] = useState(getStoredEducation());
  const [certificationList] = useState(getStoredCertifications());
  const [skillCategories] = useState(getStoredSkills());
  const [projects, setProjects] = useState<DesignProject[]>(getStoredProjects());

  // Load latest projects from Firestore if available
  useEffect(() => {
    async function loadRemoteProjects() {
      const fetched = await fetchProjectsFromFirestore();
      if (fetched && fetched.length > 0) {
        setProjects(fetched);
      }
    }
    loadRemoteProjects();
  }, []);

  const handleSaveProject = async (proj: DesignProject) => {
    await saveProjectToFirestore(proj);
    setProjects(getStoredProjects());
  };

  const handleDeleteProject = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this design study?')) {
      await deleteProjectFromFirestore(id);
      setProjects(getStoredProjects());
    }
  };

  const navigateToTab = (tabId: string) => {
    setActiveSection(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (viewMode === 'admin') {
    return (
      <AdminDashboard
        projects={projects}
        onSaveProject={handleSaveProject}
        onDeleteProject={handleDeleteProject}
        onCloseAdmin={() => setViewMode('public')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#161616] text-[#FAF9F6] font-sans selection:bg-[#B5A642] selection:text-[#161616]">
      
      {/* Top Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={navigateToTab}
        onOpenJotform={() => setJotformOpen(true)}
        onOpenAdmin={() => setViewMode('admin')}
      />

      {/* Main Content Area based on Active Navigation Tab */}
      <main>
        {/* VIEW 1: HOMEPAGE (Focused, Clean Landing Page) */}
        {(activeSection === 'home' || !activeSection) && (
          <>
            {/* 1. Hero Section */}
            <Hero
              profile={profile}
              onExplorePortfolio={() => navigateToTab('portfolio')}
              onOpenContact={() => setJotformOpen(true)}
            />

            {/* 2. Engineering Foundation */}
            <EngineeringFoundation
              boardExamRating={profile.boardExamRating}
              boardExamYear={profile.boardExamYear}
            />

            {/* 3. Electrical Design Capabilities */}
            <ElectricalDesignCapabilities />

            {/* 4. Selected Design Work */}
            <FeaturedDesignWork
              projects={projects}
              onViewAllProjects={() => navigateToTab('portfolio')}
            />

            {/* 5. Career Transition Teaser */}
            <CareerTransitionTeaser
              onExploreCareer={() => navigateToTab('career')}
            />

            {/* 6. Contact CTA */}
            <ContactCTA
              profile={profile}
              jotformOpen={jotformOpen}
              setJotformOpen={setJotformOpen}
            />
          </>
        )}

        {/* VIEW 2: CAREER & EXPERIENCE PAGE (Detailed Professional Background) */}
        {(activeSection === 'career' || activeSection === 'experience' || activeSection === 'about') && (
          <>
            {/* Page Header */}
            <div className="bg-[#1C1C1C] border-b border-stone-800 py-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B5A642] block mb-1">
                  Professional Background
                </span>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF9F6]">
                  Career, Facilities Experience & Credentials
                </h1>
                <p className="mt-2 text-sm text-stone-300 font-sans max-w-2xl">
                  Comprehensive history of building-systems facilities engineering, official licensure credentials, and transition toward electrical design.
                </p>
              </div>
            </div>

            {/* Detailed Career Components */}
            <About profile={profile} />
            <CareerTransition />
            <Experience experienceList={experienceList} />
            <Credentials
              education={educationList}
              certifications={certificationList}
              boardExamRating={profile.boardExamRating}
              boardExamYear={profile.boardExamYear}
            />
            <Expertise skills={skillCategories} />
            <ContactCTA
              profile={profile}
              jotformOpen={jotformOpen}
              setJotformOpen={setJotformOpen}
            />
          </>
        )}

        {/* VIEW 3: DESIGN PORTFOLIO PAGE (Full Project Library) */}
        {activeSection === 'portfolio' && (
          <>
            <DesignPortfolio projects={projects} />
            <ContactCTA
              profile={profile}
              jotformOpen={jotformOpen}
              setJotformOpen={setJotformOpen}
            />
          </>
        )}

        {/* VIEW 4: CONTACT PAGE */}
        {activeSection === 'contact' && (
          <ContactCTA
            profile={profile}
            jotformOpen={jotformOpen}
            setJotformOpen={setJotformOpen}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onOpenAdmin={() => setViewMode('admin')} />

    </div>
  );
}
