
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
              </div>
              <span className="text-2xl font-black">Anipep</span>
            </div>
            <p className="text-slate-400 max-w-sm text-lg leading-relaxed">
              Empowering modern medical practices with AI-driven patient communication and no-show recovery.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Product</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-emerald-400 transition">How it Works</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Integrations</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-emerald-400 transition">HIPAA Compliance</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Security Audit</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-bold">
          <p>© 2026 Anipep AI. Built for better healthcare.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
