import React from 'react';
import { Award, PackageCheck, Building2, Headset, Users, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '@/config/business';

const HIGHLIGHTS = [
  {
    icon: Award,
    title: 'Quality Products',
    stat: '100% Pure',
    subtitle: 'Virgin Fiber & Zero Bleach',
  },
  {
    icon: PackageCheck,
    title: 'Bulk Orders',
    stat: BUSINESS_INFO.stats.dailyProduction,
    subtitle: 'Units Daily Capacity',
  },
  {
    icon: Building2,
    title: 'Corporate Supply',
    stat: BUSINESS_INFO.stats.happyClients,
    subtitle: 'Active Commercial Clients',
  },
  {
    icon: Headset,
    title: 'Customer Support',
    stat: '24/7 Dedicated',
    subtitle: 'Fast Response & Ordering',
  },
];

export const TrustHighlights: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-emerald-50/50 hover:bg-emerald-50 p-6 sm:p-8 rounded-3xl border border-emerald-100 text-center transition-all duration-300 transform hover:-translate-y-1 shadow-xs"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-emerald-100 flex items-center justify-center mx-auto mb-4 shadow-md shadow-emerald-700/20">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-950 tracking-tight">
                  {item.stat}
                </div>
                <div className="text-sm font-bold text-emerald-800 mt-1">
                  {item.title}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {item.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
