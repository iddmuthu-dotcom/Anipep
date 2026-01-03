
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-cyan-100/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm mb-8 border border-emerald-100 animate-fade-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            HIPAA Compliant AI Receptionist
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8">
            Stop Losing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
              $6,000 / Month
            </span> <br />
            to No-Shows
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            The only AI voice receptionist that answers inbound calls <span className="font-bold text-slate-900 italic">and</span> performs outbound recovery campaigns to claw back missed appointments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3">
              Get Started for Free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </button>
            <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
              Watch 90s Demo
            </button>
          </div>

          <div className="mt-16 pt-12 border-t border-slate-200">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by 150+ Progressive Clinics</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              <img src="https://picsum.photos/id/1/120/40" alt="Clinic Logo" className="h-8" />
              <img src="https://picsum.photos/id/10/120/40" alt="Clinic Logo" className="h-8" />
              <img src="https://picsum.photos/id/20/120/40" alt="Clinic Logo" className="h-8" />
              <img src="https://picsum.photos/id/30/120/40" alt="Clinic Logo" className="h-8" />
              <img src="https://picsum.photos/id/40/120/40" alt="Clinic Logo" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
