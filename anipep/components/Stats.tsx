
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Reduction in No-Shows', value: '22%', color: 'text-emerald-600' },
    { label: 'Revenue Protected / Mo', value: '$6,750', color: 'text-cyan-600' },
    { label: 'Avg Confirmation Rate', value: '45%', color: 'text-emerald-600' },
    { label: 'Go-Live Time', value: '3 Days', color: 'text-slate-900' },
  ];

  return (
    <div className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className={`text-4xl md:text-5xl font-extrabold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-slate-400 font-medium text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
