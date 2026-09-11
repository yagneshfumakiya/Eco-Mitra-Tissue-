import React from 'react';
import { ShieldCheck, HeartHandshake, Building2, Truck, Leaf, Sparkles, CheckCircle } from 'lucide-react';
import { SectionTitle } from '@/components/common/SectionTitle';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Quality You Can Trust',
    description: 'Manufactured from 100% virgin pulp with stringent multi-stage quality checks. Outstanding absorbency, lint-free finish, and zero chemical residue.',
    color: 'emerald',
    badge: '100% Virgin Fiber',
  },
  {
    icon: HeartHandshake,
    title: 'Soft & Comfortable',
    description: 'Designed with micro-embossed cushioning for ultra-soft contact. Dermatologically safe and incredibly soft on delicate facial skin for everyday comfort.',
    color: 'teal',
    badge: 'Dermatologically Safe',
  },
  {
    icon: Building2,
    title: 'Bulk & Corporate Orders',
    description: 'Tailored solutions for hotels, restaurants, corporate offices, and catering services. Customized packaging and competitive wholesale pricing models.',
    color: 'emerald',
    badge: 'HORECA Special',
  },
  {
    icon: Truck,
    title: 'Reliable Supply Chain',
    description: 'Dependable logistics network ensuring uninterrupted delivery schedules. Guaranteed stock availability with flexible auto-replenishment options.',
    color: 'teal',
    badge: 'On-Time Delivery',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          pill="Why Choose Eco Mitra"
          title="Quality, Hygiene & Reliability"
          subtitle="Discover why hundreds of businesses and households trust Eco Mitra for their tissue paper needs."
        />

        {/* Feature Cards Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURES.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-slate-50/60 hover:bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Pill Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-700/20 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-emerald-100" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-900 border border-emerald-200">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Sub-check Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Eco Mitra Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
