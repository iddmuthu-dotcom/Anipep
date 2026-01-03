
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ROICalculator: React.FC = () => {
  const [patients, setPatients] = useState(200);
  const [noShowRate, setNoShowRate] = useState(18);
  const [avgRev, setAvgRev] = useState(75);

  const data = useMemo(() => {
    const monthlyMissed = patients * (noShowRate / 100);
    const monthlyLoss = monthlyMissed * avgRev;
    
    // Anipep reduces no-shows by 60% on average (from 18% to ~7.2%)
    const anipepNoShowRate = noShowRate * 0.4;
    const anipepMissed = patients * (anipepNoShowRate / 100);
    const anipepLoss = anipepMissed * avgRev;
    const monthlyRecovery = monthlyLoss - anipepLoss;

    return {
      monthlyLoss,
      monthlyRecovery,
      chartData: [
        { name: 'Current Monthly Loss', value: monthlyLoss, fill: '#ef4444' },
        { name: 'Loss with Anipep', value: anipepLoss, fill: '#10b981' },
      ]
    };
  }, [patients, noShowRate, avgRev]);

  return (
    <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-4 flex justify-between">
              Patients per Month <span>{patients}</span>
            </label>
            <input 
              type="range" min="50" max="1000" step="10" 
              value={patients} onChange={(e) => setPatients(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-900 mb-4 flex justify-between">
              Current No-Show Rate (%) <span>{noShowRate}%</span>
            </label>
            <input 
              type="range" min="5" max="40" step="1" 
              value={noShowRate} onChange={(e) => setNoShowRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-900 mb-4 flex justify-between">
              Avg Revenue per Appt ($) <span>${avgRev}</span>
            </label>
            <input 
              type="range" min="50" max="500" step="25" 
              value={avgRev} onChange={(e) => setAvgRev(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          <div className="pt-8 border-t border-slate-200">
            <div className="bg-emerald-600 p-6 rounded-2xl text-white shadow-lg">
              <div className="text-sm font-bold uppercase tracking-wider mb-2 opacity-80">Estimated Monthly Recovery</div>
              <div className="text-4xl font-black">${Math.round(data.monthlyRecovery).toLocaleString()}</div>
              <p className="text-xs mt-3 opacity-80">*Based on 60% reduction in your current no-show rate.</p>
            </div>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600 }} />
              <YAxis hide />
              <Tooltip 
                cursor={{ fill: 'transparent' }} 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                formatter={(value: number) => [`$${Math.round(value).toLocaleString()}`, 'Amount']}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={60}>
                {data.chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="text-center mt-6">
            <p className="text-slate-600 font-medium">Anipep recovers <span className="text-emerald-600 font-bold">${Math.round(data.monthlyRecovery).toLocaleString()}</span> monthly for your clinic.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
