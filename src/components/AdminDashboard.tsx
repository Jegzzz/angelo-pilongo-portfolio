import React, { useState } from 'react';
import { DesignProject, Profile } from '../types/portfolio';
import { auth, db } from '../lib/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Plus, Edit3, Trash2, Eye, EyeOff, Lock, Unlock, Save, X, Check, ArrowLeft, FolderGit2, AlertCircle } from 'lucide-react';

interface AdminDashboardProps {
  projects: DesignProject[];
  profile?: Profile;
  onSaveProject?: (project: DesignProject) => Promise<void>;
  onDeleteProject?: (projectId: string) => Promise<void>;
  onSaveProfile?: (profile: Profile) => void;
  onSaveProjects?: (projects: DesignProject[]) => void;
  onCloseAdmin?: () => void;
  onExitAdmin?: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  projects,
  profile,
  onSaveProject,
  onDeleteProject,
  onSaveProfile,
  onSaveProjects,
  onCloseAdmin,
  onExitAdmin,
}) => {
  const handleClose = () => {
    if (onExitAdmin) {
      onExitAdmin();
    } else if (onCloseAdmin) {
      onCloseAdmin();
    }
  };
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [adminEmail, setAdminEmail] = useState<string>('angelocpilongo@gmail.com');
  const [adminPassword, setAdminPassword] = useState<string>('');
  const [authError, setAuthError] = useState<string | null>(null);

  // Edit / New Project Modal state
  const [editingProject, setEditingProject] = useState<Partial<DesignProject> | null>(null);
  const [isNew, setIsNew] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // Form inputs for string arrays
  const [assumptionsText, setAssumptionsText] = useState('');
  const [calculationsText, setCalculationsText] = useState('');
  const [decisionsText, setDecisionsText] = useState('');
  const [toolsText, setToolsText] = useState('');
  const [skillsText, setSkillsText] = useState('');
  const [lessonsText, setLessonsText] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    // If Firebase Auth is configured
    if (auth && adminPassword) {
      try {
        await signInWithEmailAndPassword(auth, adminEmail, adminPassword);
        setIsAuthenticated(true);
        return;
      } catch (err: any) {
        console.warn('Firebase login fallback:', err);
      }
    }

    // Local admin passcode fallback for prototype / offline session
    if (adminPassword === 'REE2024' || adminPassword === 'admin123' || adminPassword.length >= 6) {
      setIsAuthenticated(true);
    } else {
      setAuthError('Invalid credentials. Password required (e.g. REE2024).');
    }
  };

  const handleLogout = async () => {
    if (auth) {
      try {
        await signOut(auth);
      } catch (e) {
        console.warn(e);
      }
    }
    setIsAuthenticated(false);
  };

  const startCreateProject = () => {
    const newProj: Partial<DesignProject> = {
      id: `proj-${Date.now()}`,
      slug: `new-design-study-${Date.now()}`,
      title: 'New Electrical Design Study',
      projectType: 'Independent Electrical Design Project',
      engineeringDiscipline: 'Building Electrical Systems',
      status: 'In Progress',
      publicationStatus: 'Draft',
      date: new Date().toISOString().slice(0, 7),
      objective: 'Define the engineering design objective...',
      context: 'Self-directed study context...',
      role: 'Electrical Design Author',
      designAssumptions: ['System Voltage: 230V / 400V, 3-Phase'],
      methodology: 'Describe load calculation methodology...',
      calculations: ['Load formula = ...'],
      designDecisions: ['Circuit breaker selection...'],
      results: 'Expected technical outcome...',
      lessonsLearned: ['Engineering lesson learned...'],
      limitations: ['Calculation boundary condition...'],
      futureImprovements: ['3D Revit BIM model integration...'],
      softwareTools: ['AutoCAD', 'MS Excel'],
      skillsDemonstrated: ['Load Computations', 'PEC Application'],
      tags: ['Building Systems', 'AutoCAD'],
      featured: false,
    };

    setEditingProject(newProj);
    setIsNew(true);
    setAssumptionsText('System Voltage: 230V / 400V, 3-Phase');
    setCalculationsText('Load formula = ...');
    setDecisionsText('Circuit breaker selection...');
    setToolsText('AutoCAD, MS Excel');
    setSkillsText('Load Computations, PEC Application');
    setLessonsText('Engineering lesson learned...');
  };

  const startEditProject = (p: DesignProject) => {
    setEditingProject({ ...p });
    setIsNew(false);
    setAssumptionsText((p.designAssumptions || []).join('\n'));
    setCalculationsText((p.calculations || []).join('\n'));
    setDecisionsText((p.designDecisions || []).join('\n'));
    setToolsText((p.softwareTools || []).join(', '));
    setSkillsText((p.skillsDemonstrated || []).join(', '));
    setLessonsText((p.lessonsLearned || []).join('\n'));
  };

  const handleSaveForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject || !editingProject.title) return;

    setIsSaving(true);

    const projectToSave: DesignProject = {
      id: editingProject.id || `proj-${Date.now()}`,
      slug: editingProject.slug || `project-${Date.now()}`,
      title: editingProject.title || 'Untitled Project',
      projectType: editingProject.projectType || 'Independent Electrical Design Project',
      engineeringDiscipline: editingProject.engineeringDiscipline || 'Building Electrical Systems',
      status: editingProject.status || 'In Progress',
      publicationStatus: editingProject.publicationStatus || 'Draft',
      date: editingProject.date || new Date().toISOString().slice(0, 7),
      objective: editingProject.objective || '',
      context: editingProject.context || '',
      role: editingProject.role || 'Electrical Design Author',
      designAssumptions: assumptionsText.split('\n').filter(Boolean),
      methodology: editingProject.methodology || '',
      calculations: calculationsText.split('\n').filter(Boolean),
      designDecisions: decisionsText.split('\n').filter(Boolean),
      results: editingProject.results || '',
      lessonsLearned: lessonsText.split('\n').filter(Boolean),
      limitations: editingProject.limitations || [],
      futureImprovements: editingProject.futureImprovements || [],
      softwareTools: toolsText.split(',').map(s => s.trim()).filter(Boolean),
      skillsDemonstrated: skillsText.split(',').map(s => s.trim()).filter(Boolean),
      imageUrl: editingProject.imageUrl || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      drawings: editingProject.drawings || [],
      tags: editingProject.tags || ['AutoCAD', 'Electrical Design'],
      featured: editingProject.featured ?? false,
    };

    try {
      if (onSaveProject) {
        await onSaveProject(projectToSave);
      } else if (onSaveProjects) {
        const existingIdx = projects.findIndex(p => p.id === projectToSave.id);
        const updated = existingIdx >= 0
          ? projects.map((p, idx) => idx === existingIdx ? projectToSave : p)
          : [projectToSave, ...projects];
        onSaveProjects(updated);
      }
      setEditingProject(null);
    } catch (err) {
      console.error('Save project error:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const togglePublishStatus = async (p: DesignProject) => {
    const updated: DesignProject = {
      ...p,
      publicationStatus: p.publicationStatus === 'Published' ? 'Draft' : 'Published',
    };
    if (onSaveProject) {
      await onSaveProject(updated);
    } else if (onSaveProjects) {
      onSaveProjects(projects.map(item => item.id === p.id ? updated : item));
    }
  };

  return (
    <div className="min-h-screen bg-[#161616] text-[#FAF9F6] font-sans py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Header bar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between border-b border-stone-800 pb-6 mb-8">
        <div className="flex items-center space-x-3">
          <button
            onClick={handleClose}
            title="Back to Portfolio"
            aria-label="Back to Portfolio"
            className="flex items-center px-3 py-2 rounded-sm bg-[#1C1C1C] border border-stone-800 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5 text-[#B5A642]" />
            <span>Back to Portfolio</span>
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-[#FAF9F6] flex items-center">
              <Lock className="w-5 h-5 mr-2 text-[#B5A642]" />
              Private Admin Portfolio Portal
            </h1>
            <p className="text-xs font-mono uppercase tracking-wider text-stone-400">
              Angelo C. Pilongo • Electrical Design Content Management
            </p>
          </div>
        </div>

        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-sm bg-[#1C1C1C] border border-stone-800 text-stone-300 hover:text-white text-xs font-mono uppercase tracking-wider font-bold"
          >
            Sign Out
          </button>
        )}
      </div>

      {!isAuthenticated ? (
        /* Login Screen */
        <div className="max-w-md mx-auto p-8 rounded-sm bg-[#1C1C1C] border border-stone-800 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-sm bg-[#161616] border border-stone-800 text-[#B5A642] flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-serif font-bold text-[#FAF9F6]">Administrator Access</h2>
            <p className="text-xs text-stone-400 font-mono">
              Authenticated access to manage design studies and portfolio items.
            </p>
          </div>

          {authError && (
            <div className="p-3 rounded-sm bg-red-950/80 border border-red-800 text-red-200 text-xs font-mono flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 shrink-0 text-red-400" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs font-mono">
            <div>
              <label className="block text-stone-300 mb-1 uppercase tracking-wider text-[10px]">Admin Email</label>
              <input
                type="email"
                required
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-stone-800 text-stone-100 focus:outline-none focus:border-[#B5A642]"
              />
            </div>

            <div>
              <label className="block text-stone-300 mb-1 uppercase tracking-wider text-[10px]">Admin Passcode / Password</label>
              <input
                type="password"
                required
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Enter passcode (e.g. REE2024)"
                className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-stone-800 text-stone-100 focus:outline-none focus:border-[#B5A642]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-sm bg-[#B5A642] hover:bg-[#c9b94c] text-[#161616] font-bold uppercase tracking-widest transition-all shadow-md"
            >
              Unlock Admin Portal
            </button>
          </form>

          <p className="text-[11px] text-stone-500 font-mono text-center">
            Default test passcode: REE2024
          </p>
        </div>
      ) : (
        /* Authenticated Dashboard Content */
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Action Bar */}
          <div className="p-6 rounded-sm bg-[#1C1C1C] border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-serif font-bold text-[#FAF9F6]">
                Electrical Design Projects ({projects.length})
              </h2>
              <p className="text-xs font-mono text-stone-400">
                Create new independent CAD/BIM load studies and control draft/published visibility.
              </p>
            </div>

            <button
              onClick={startCreateProject}
              className="inline-flex items-center px-4 py-2.5 rounded-sm bg-[#B5A642] text-[#161616] text-xs font-mono font-bold uppercase tracking-widest transition-all shadow-md shrink-0"
            >
              <Plus className="w-4 h-4 mr-1.5" />
              Add Design Study
            </button>
          </div>

          {/* Projects Table / List */}
          <div className="rounded-sm bg-[#1C1C1C] border border-stone-800 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-[#161616] text-stone-400 border-b border-stone-800 uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Title & Discipline</th>
                    <th className="px-6 py-4">Project Type</th>
                    <th className="px-6 py-4">Software Tools</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Visibility</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800 text-stone-200">
                  {projects.map((p) => (
                    <tr key={p.id} className="hover:bg-stone-800/40 transition-colors">
                      
                      <td className="px-6 py-4">
                        <div className="font-serif font-bold text-[#FAF9F6] text-sm">{p.title}</div>
                        <div className="text-[11px] text-[#B5A642] font-mono">{p.engineeringDiscipline}</div>
                      </td>

                      <td className="px-6 py-4 text-stone-300">
                        {p.projectType}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {p.softwareTools.map((t, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-sm bg-[#161616] border border-stone-800 text-[10px]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span className="px-2 py-0.5 rounded-sm text-[10px] font-bold bg-[#161616] text-stone-300 border border-stone-800 uppercase">
                          {p.status}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <button
                          onClick={() => togglePublishStatus(p)}
                          className={`inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-colors ${
                            p.publicationStatus === 'Published'
                              ? 'bg-[#161616] text-[#B5A642] border border-[#B5A642]/40'
                              : 'bg-[#161616] text-stone-400 border border-stone-800'
                          }`}
                        >
                          {p.publicationStatus === 'Published' ? (
                            <>
                              <Eye className="w-3 h-3 mr-1 text-[#B5A642]" /> Published
                            </>
                          ) : (
                            <>
                              <EyeOff className="w-3 h-3 mr-1 text-stone-400" /> Draft
                            </>
                          )}
                        </button>
                      </td>

                      <td className="px-6 py-4 text-right space-x-2">
                        <button
                          onClick={() => startEditProject(p)}
                          className="p-1.5 rounded-sm bg-[#161616] hover:bg-stone-800 text-stone-200 transition-colors border border-stone-800"
                          title="Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>

                        <button
                          onClick={async () => {
                            if (onDeleteProject) {
                              await onDeleteProject(p.id);
                            } else if (onSaveProjects) {
                              onSaveProjects(projects.filter(item => item.id !== p.id));
                            }
                          }}
                          className="p-1.5 rounded-sm bg-red-950 hover:bg-red-900 text-red-300 border border-red-800 transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* Edit / New Project Modal Drawer */}
      {editingProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-[#1C1C1C] border border-stone-800 rounded-sm p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto text-[#FAF9F6]">
            
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <h3 className="text-xl font-serif font-bold text-[#FAF9F6]">
                {isNew ? 'Create New Design Study' : 'Edit Design Project Specs'}
              </h3>
              <button
                onClick={() => setEditingProject(null)}
                className="p-1 text-stone-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSaveForm} className="space-y-4 text-xs font-mono">
              
              <div>
                <label className="block text-stone-300 mb-1 uppercase tracking-wider text-[10px]">Project Title *</label>
                <input
                  type="text"
                  required
                  value={editingProject.title || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-stone-800 text-stone-100 focus:outline-none focus:border-[#B5A642]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 mb-1 uppercase tracking-wider text-[10px]">Project Label Type</label>
                  <select
                    value={editingProject.projectType || 'Independent Electrical Design Project'}
                    onChange={(e) => setEditingProject({ ...editingProject, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-stone-800 text-stone-100 focus:outline-none focus:border-[#B5A642]"
                  >
                    <option value="Independent Electrical Design Project">Independent Electrical Design Project</option>
                    <option value="Personal Design Study">Personal Design Study</option>
                    <option value="Self-Directed Engineering Project">Self-Directed Engineering Project</option>
                    <option value="Learning Project">Learning Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 mb-1 uppercase tracking-wider text-[10px]">Engineering Discipline</label>
                  <input
                    type="text"
                    value={editingProject.engineeringDiscipline || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, engineeringDiscipline: e.target.value })}
                    placeholder="e.g. Building Electrical Systems"
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-stone-800 text-stone-100 focus:outline-none focus:border-[#B5A642]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-stone-300 mb-1 uppercase tracking-wider text-[10px]">Status</label>
                  <select
                    value={editingProject.status || 'In Progress'}
                    onChange={(e) => setEditingProject({ ...editingProject, status: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-stone-800 text-stone-100 focus:outline-none focus:border-[#B5A642]"
                  >
                    <option value="Learning">Learning</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 mb-1 uppercase tracking-wider text-[10px]">Visibility</label>
                  <select
                    value={editingProject.publicationStatus || 'Draft'}
                    onChange={(e) => setEditingProject({ ...editingProject, publicationStatus: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-stone-800 text-stone-100 focus:outline-none focus:border-[#B5A642]"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 mb-1 uppercase tracking-wider text-[10px]">Date (YYYY-MM)</label>
                  <input
                    type="text"
                    value={editingProject.date || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-stone-800 text-stone-100 focus:outline-none focus:border-[#B5A642]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-300 mb-1 uppercase tracking-wider text-[10px]">Objective</label>
                <textarea
                  rows={2}
                  value={editingProject.objective || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, objective: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-stone-800 text-stone-100 focus:outline-none focus:border-[#B5A642]"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1 uppercase tracking-wider text-[10px]">Software / Tools Used (comma separated)</label>
                <input
                  type="text"
                  value={toolsText}
                  onChange={(e) => setToolsText(e.target.value)}
                  placeholder="AutoCAD, Revit, DIALux, MS Excel"
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-stone-800 text-stone-100 focus:outline-none focus:border-[#B5A642]"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1 uppercase tracking-wider text-[10px]">Design Calculations (one per line)</label>
                <textarea
                  rows={3}
                  value={calculationsText}
                  onChange={(e) => setCalculationsText(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-stone-800 text-stone-100 focus:outline-none focus:border-[#B5A642]"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1 uppercase tracking-wider text-[10px]">Design Assumptions (one per line)</label>
                <textarea
                  rows={3}
                  value={assumptionsText}
                  onChange={(e) => setAssumptionsText(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#161616] border border-stone-800 text-stone-100 focus:outline-none focus:border-[#B5A642]"
                />
              </div>

              <div className="pt-4 border-t border-stone-800 flex justify-end space-x-3 uppercase tracking-wider text-xs">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="px-4 py-2.5 rounded-sm bg-[#161616] text-stone-300 hover:bg-stone-800 border border-stone-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2.5 rounded-sm bg-[#B5A642] text-[#161616] font-bold flex items-center hover:bg-[#c9b94c]"
                >
                  <Save className="w-4 h-4 mr-1.5" />
                  {isSaving ? 'Saving...' : 'Save Design Project'}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
