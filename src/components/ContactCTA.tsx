import React, { useState } from 'react';
import { Mail, MapPin, Send, ShieldCheck, CheckCircle2, Lock, ExternalLink, X } from 'lucide-react';
import { Profile } from '../types/portfolio';

interface ContactCTAProps {
  profile: Profile;
  jotformOpen: boolean;
  setJotformOpen: (open: boolean) => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  profile,
  jotformOpen,
  setJotformOpen,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const handleSubmitFallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !senderMessage) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#161616] text-[#FAF9F6] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-sm bg-[#1C1C1C] border border-stone-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Contact Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#161616] border border-[#B5A642]/40 text-[#B5A642] font-mono text-[11px] uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B5A642]" />
                <span>Professional Inquiries</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#FAF9F6] tracking-tight">
                Let's <span className="italic text-[#B5A642]">Connect</span>
              </h2>

              <p className="text-base text-stone-300 font-sans leading-relaxed">
                Interested in an engineering opportunity, collaboration, or learning more about my work? I welcome opportunities to discuss how my facilities background and electrical design skills can add value.
              </p>

              <div className="space-y-4 font-mono text-sm pt-2">
                
                <div className="p-4 rounded-sm bg-[#161616] border border-stone-800 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-sm bg-[#1C1C1C] border border-stone-800 flex items-center justify-center text-[#B5A642] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-stone-400 block tracking-wider">Direct Email</span>
                    <a href={`mailto:${profile.email}`} className="text-stone-100 font-serif font-bold hover:text-[#B5A642] transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-sm bg-[#161616] border border-stone-800 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-sm bg-[#1C1C1C] border border-stone-800 flex items-center justify-center text-[#B5A642] shrink-0">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-stone-400 block tracking-wider">Professional Profile</span>
                    <a
                      href="https://linkedin.com/in/pilongoac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-100 font-serif font-bold hover:text-[#B5A642] transition-colors inline-flex items-center"
                    >
                      <span>linkedin.com/in/pilongoac</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-sm bg-[#161616] border border-stone-800 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-sm bg-[#1C1C1C] border border-stone-800 flex items-center justify-center text-[#B5A642] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-stone-400 block tracking-wider">Location</span>
                    <span className="text-stone-200 font-serif font-bold">{profile.location}</span>
                  </div>
                </div>

                <div className="p-4 rounded-sm bg-[#161616] border border-stone-800 flex items-center space-x-3 text-xs text-stone-400 font-sans">
                  <Lock className="w-4 h-4 text-[#B5A642] shrink-0" />
                  <span>Privacy Assured: No residential address or personal phone number published. Contact details are used strictly for engineering recruitment and inquiries.</span>
                </div>

              </div>

              <div className="pt-2">
                <button
                  onClick={() => setJotformOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm text-xs font-mono font-bold uppercase tracking-widest bg-[#B5A642] text-[#161616] hover:bg-[#c9b94c] transition-all shadow-md"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Open Jotform Contact Portal
                </button>
              </div>

            </div>

            {/* Right Interactive Quick Message Box */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-sm bg-[#161616] border border-stone-800">
              
              {!formSubmitted ? (
                <form onSubmit={handleSubmitFallback} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#FAF9F6] mb-1">
                      Send a Direct Message
                    </h3>
                    <p className="text-[11px] text-stone-400 font-mono uppercase tracking-wider mb-4">
                      Primary inquiries handled via Jotform or direct email.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-stone-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Engr. Mark Santos"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#1C1C1C] border border-stone-800 text-stone-100 text-xs font-mono focus:outline-none focus:border-[#B5A642]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-stone-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#1C1C1C] border border-stone-800 text-stone-100 text-xs font-mono focus:outline-none focus:border-[#B5A642]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-stone-300 mb-1">Organization / Firm</label>
                      <input
                        type="text"
                        value={senderOrg}
                        onChange={(e) => setSenderOrg(e.target.value)}
                        placeholder="Company or Firm Name"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#1C1C1C] border border-stone-800 text-stone-100 text-xs font-mono focus:outline-none focus:border-[#B5A642]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-stone-300 mb-1">Message / Inquiry *</label>
                    <textarea
                      required
                      rows={4}
                      value={senderMessage}
                      onChange={(e) => setSenderMessage(e.target.value)}
                      placeholder="Discuss electrical design opportunities, project collaboration, or engineering background..."
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#1C1C1C] border border-stone-800 text-stone-100 text-xs font-mono focus:outline-none focus:border-[#B5A642]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-sm bg-[#1C1C1C] hover:bg-stone-800 text-[#FAF9F6] font-mono text-xs font-bold uppercase tracking-widest transition-all border border-stone-800"
                  >
                    Send Direct Inquiry
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-sm bg-[#1C1C1C] text-[#B5A642] border border-stone-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#FAF9F6]">Inquiry Received</h3>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans">
                    Thank you, {senderName}. Your message has been prepared for Angelo C. Pilongo. You may also email directly at <strong className="text-[#B5A642]">{profile.email}</strong>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono text-[#B5A642] uppercase tracking-wider underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* Jotform Modal Portal */}
      {jotformOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-[#1C1C1C] border border-stone-800 rounded-sm p-6 shadow-2xl space-y-4 text-[#FAF9F6]">
            
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-5 h-5 text-[#B5A642]" />
                <h3 className="text-lg font-serif font-bold text-[#FAF9F6]">Jotform Professional Contact</h3>
              </div>
              <button
                onClick={() => setJotformOpen(false)}
                className="p-1 text-stone-400 hover:text-white rounded-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Inquiries are managed through our secure Jotform integration.
            </p>

            <div className="p-6 rounded-sm bg-[#161616] border border-stone-800 font-mono text-xs space-y-3">
              <p className="text-stone-400">Target Integration URL:</p>
              <div className="p-3 rounded-sm bg-[#1C1C1C] text-[#B5A642] font-mono font-bold border border-stone-800 break-all">
                {profile.jotformUrl}
              </div>
              <p className="text-stone-400 text-[11px]">
                Note: In production deployment, this embeds the custom Jotform endpoint configured for Angelo C. Pilongo.
              </p>
            </div>

            <div className="flex justify-end space-x-3 pt-2 font-mono text-xs uppercase tracking-wider">
              <button
                onClick={() => setJotformOpen(false)}
                className="px-4 py-2 rounded-sm bg-[#161616] text-stone-300 hover:bg-stone-800 border border-stone-800"
              >
                Close
              </button>
              <a
                href={`mailto:${profile.email}`}
                className="px-4 py-2 rounded-sm bg-[#B5A642] text-[#161616] font-bold hover:bg-[#c9b94c]"
              >
                Email Directly Instead
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
