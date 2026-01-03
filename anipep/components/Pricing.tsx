
import React from 'react';
import { PricingPlan } from '../types';

const PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: 297,
    description: 'Perfect for solo practices.',
    features: ['Inbound AI Receptionist', 'Standard Scripts', 'Email Support', 'HIPAA Compliant', '500 Calls/Mo']
  },
  {
    name: 'Pro',
    price: 597,
    description: 'Our most popular for scaling clinics.',
    features: ['Inbound + Outbound AI', 'Custom CRM Integration', 'Priority Support', '3 Clinic Locations', 'Unlimited Calls'],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large health systems.',
    features: ['Dedicated Account Manager', 'Custom Workflows', 'SLA Guarantee', 'Unlimited Locations', 'SSO/SAML Support']
  }
];

const Pricing: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-600">Flat monthly rate. No hidden setup fees.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((p) => (
            <div 
              key={p.name} 
              className={`relative p-10 rounded-[2.5rem] bg-white border-2 transition-all duration-300 ${p.recommended ? 'border-emerald-500 shadow-2xl scale-105 z-10' : 'border-slate-200 hover:border-slate-300 shadow-lg'}`}
            >
              {p.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{p.name}</h3>
                <p className="text-slate-500 text-sm font-medium">{p.description}</p>
              </div>
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-5xl font-black text-slate-900">{typeof p.price === 'number' ? `$${p.price}` : p.price}</span>
                {typeof p.price === 'number' && <span className="text-slate-400 font-bold">/mo</span>}
              </div>
              <ul className="space-y-4 mb-10">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${p.recommended ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-200' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}>
                {p.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>*RingRx costs billed separately ($49-69/mo per clinic). All plans include 14-day free trial.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
