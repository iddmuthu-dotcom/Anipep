
import React, { useState } from 'react';

const FAQS = [
  {
    q: "Is Anipep HIPAA compliant?",
    a: "Absolutely. We are fully HIPAA compliant with BAA included for all plans. All voice data is encrypted at rest and in transit, and we maintain rigorous security audits."
  },
  {
    q: "How does the AI handle medical questions?",
    a: "Anipep is trained on your specific clinic knowledge base. It can answer scheduling questions, office policies, and directions. For clinical questions, it is programmed to automatically transfer the call to your staff."
  },
  {
    q: "Can I use my existing phone number?",
    a: "Yes. We work with RingRx to seamlessly forward your calls to our AI receptionist. You keep your number, and we simply act as your 24/7 answering and outbound service."
  },
  {
    q: "How long does setup take?",
    a: "Our white-glove onboarding team handles everything. Most clinics are fully live within 3-5 business days including EMR integration and staff training."
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Got Questions?</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border-2 rounded-3xl transition-all duration-300 cursor-pointer overflow-hidden ${openIdx === idx ? 'border-emerald-500 bg-emerald-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900">{faq.q}</h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIdx === idx ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed font-medium animate-fade-in-down">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
