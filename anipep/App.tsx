
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ROICalculator from './components/ROICalculator';
import ReceptionistDemo from './components/ReceptionistDemo';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <Stats />

        <section id="results" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Calculate Your Potential Recovery</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">See exactly how much revenue you're leaving on the table and how Anipep can help you claw it back.</p>
            </div>
            <ROICalculator />
          </div>
        </section>

        <section id="demo" className="py-24 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                  Experience the <span className="text-emerald-600">Future</span> of Reception
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Our AI doesn't just "take messages." It understands intent, checks your EMR in real-time, and books appointments while your staff focuses on the patients in front of them.
                </p>
                <ul className="space-y-4">
                  {[
                    "Answers 100% of inbound calls 24/7",
                    "Integrated with major EMRs (Dentrix, Epic, etc.)",
                    "Automated no-show recovery campaigns",
                    "HIPAA compliant by design"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-lg text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <ReceptionistDemo />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
              <p className="text-xl text-slate-600">Setup is seamless. Results are immediate.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-2xl font-bold mb-4">Connect Your EMR</h3>
                <p className="text-slate-600 leading-relaxed">Securely connect your booking system. We support 50+ integrations out of the box.</p>
              </div>
              <div className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-16 h-16 bg-cyan-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-2xl font-bold mb-4">Customize Your Script</h3>
                <p className="text-slate-600 leading-relaxed">Anipep learns your clinic's procedures, pricing, and personality through our easy setup wizard.</p>
              </div>
              <div className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-2xl font-bold mb-4">Go Live in 72 Hours</h3>
                <p className="text-slate-600 leading-relaxed">Start capturing every call. Watch your no-show rate drop as our AI handles recovery calls.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <FAQ />

        <section className="py-24 hero-gradient text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Protect Your Practice?</h2>
            <p className="text-xl text-white/90 mb-10">Join 150+ clinics saving $6,000+ per month. Your first 14 days are on us.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 hover:bg-slate-100 px-10 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105">
                Start 14-Day Free Trial
              </button>
              <button className="border-2 border-white/50 hover:border-white px-10 py-4 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
