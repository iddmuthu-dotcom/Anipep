
import React from 'react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. James Wilson',
    role: 'Clinic Owner',
    clinic: 'Smile Family Dental, CO',
    quote: "We went from 18% no-shows to 6% in 60 days. That's an extra $4,500/month in our pocket. Best investment we've made.",
    initials: 'JW',
    color: 'bg-emerald-100 text-emerald-700'
  },
  {
    id: 2,
    name: 'Dr. Ramesh Patel',
    role: 'Managing Partner',
    clinic: 'Advanced Ortho, 3 locations',
    quote: "My receptionist freed up 2 hours a day. She now focuses on patient experience while the AI handles 500+ calls flawlessly.",
    initials: 'RP',
    color: 'bg-cyan-100 text-cyan-700'
  },
  {
    id: 3,
    name: 'Dr. Sarah Martinez',
    role: 'Lead Dentist',
    clinic: 'Peak Dental Studio, TX',
    quote: "Setup was 3 days. No disruption. We tripled our inbound appointment bookings. It's like having a perfect receptionist for 1/10th the cost.",
    initials: 'SM',
    color: 'bg-slate-100 text-slate-700'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted by Leading Practices</h2>
          <p className="text-xl text-slate-600">Actual feedback from clinic owners who've reclaimed their schedules.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-slate-700 mb-8 italic text-lg leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full font-bold flex items-center justify-center ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-none">{t.name}</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{t.role} • {t.clinic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
