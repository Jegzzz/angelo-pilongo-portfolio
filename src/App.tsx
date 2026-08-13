import React, { useState, useEffect } from 'react';
import { getStoredProfile, getStoredProjects, getStoredExperience, getStoredEducation, getStoredCertifications } from './lib/dataStore';
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
import { Credentials } from './components/Credentials';
import { DesignPortfolio } from './components/DesignPortfolio';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';

export default function App() {
  const [viewMode, setViewMode] = useState<'public' | 'admin'>('public');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [jotformOpen, setJotformOpen] = useState<boolean>(false);

  // Portfolio data state
  const [profile, setProfile] = useState<Profile>(getStoredProfile());
  const [projects, setProjects] = useState<DesignProject[]>(getStoredProjects());
  const [experienceList, setExperienceList] = useState(getStoredExperience());
  const [educationList, setEducationList] = useState(getStoredEducation());
  const [certificationList, setCertificationList] = useState(getStoredCertifications());

  // Handle Hash/URL Navigation on load or change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'career', 'portfolio', 'contact'].includes(hash)) {
        setActiveSection(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToTab = (sectionId: string) => {
    setActiveSection(sectionId);
    window.location.hash = sectionId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveProfile = (updatedProfile: Profile) => {
    setProfile(updatedProfile);
  };

  const handleSaveProjects = (updatedProjects: DesignProject[]) => {
    setProjects(updatedProjects);
  };

  if (viewMode === 'admin') {
    return (
      <AdminDashboard
        profile={profile}
        projects={projects}
        onSaveProfile={handleSaveProfile}
        onSaveProjects={handleSaveProjects}
        onExitAdmin={() => setViewMode('public')}
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
      <main className="min-h-[calc(100vh-80px-200px)]">
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
                  Comprehensive history of building-systems facilities engineering, official licensure credentials, and electrical design capabilities.
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
            />
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
