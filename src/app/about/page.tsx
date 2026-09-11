import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '@/components/common/SectionTitle';
import { BUSINESS_INFO, getWhatsAppLink } from '@/config/business';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  CheckCircle2, 
  Utensils, 
  Hotel, 
  Coffee, 
  Hospital, 
  Building2, 
  PartyPopper, 
  ShoppingBag, 
  Boxes,
  Leaf,
  Award,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Eco Mitra - Softness with Nature\'s Care',
  description: 'Learn about Eco Mitra\'s commitment to quality tissue paper products, hygiene, reliability, and business supply for HORECA and corporate clients.',
};

const VALUES = [
  {
    icon: Award,
    title: 'Uncompromised Quality',
    description: 'We source 100% pure virgin pulp and adhere to ultra-strict quality benchmarks to ensure high absorbency and softness in every sheet.',
  },
  {
    icon: ShieldCheck,
    title: 'Highest Hygiene Standards',
    description: 'Our manufacturing process operates under automated untouched hygienic conditions, ensuring zero harmful chemicals or artificial whiteners.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Satisfaction',
    description: 'We prioritize customer satisfaction through reliable order fulfillment, responsive support, and customized packaging options.',
  },
  {
    icon: CheckCircle2,
    title: 'Supply Reliability',
    description: 'Whether it is a single retail pack or a multi-ton corporate contract, we maintain steady inventory and guaranteed timely delivery.',
  },
];

const WHO_WE_SERVE = [
  { icon: Utensils, label: 'Restaurants', desc: 'Custom embossed table napkins and dispenser tissues for dining excellence.' },
  { icon: Hotel, label: 'Hotels & Resorts', desc: 'Luxury extra-soft facial tissues and bathroom rolls for guest comfort.' },
  { icon: Coffee, label: 'Cafes & Bakeries', desc: 'Compact high-absorbency tissue pulls for quick service counters.' },
  { icon: Hospital, label: 'Hospitals & Clinics', desc: 'Hypoallergenic sanitised tissue options for clinical cleanliness.' },
  { icon: Building2, label: 'Corporate Offices', desc: 'Premium washroom & desk tissue dispensers for executive hubs.' },
  { icon: PartyPopper, label: 'Catering Businesses', desc: 'High-volume party rolls & event napkins tailored to banquet needs.' },
  { icon: ShoppingBag, label: 'Retailers & Stores', desc: 'Attractively packaged retail boxes ready for supermarket shelves.' },
  { icon: Boxes, label: 'Wholesale Buyers', desc: 'Bulk carton supply with direct factory tier pricing for distributors.' },
];

export default function AboutPage() {
  return (
    <div className="space-y-0">
      
      {/* 1. ABOUT HERO */}
      <section className="bg-gradient-eco text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs sm:text-sm font-semibold mb-6">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span>Discover Eco Mitra</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            About Eco Mitra
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto font-normal">
            Bringing softness, hygiene, and quality together for homes and businesses.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Our Heritage & Journey</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight leading-tight">
                Crafted for Superior Comfort and Hygiene
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Eco Mitra was established with a singular commitment: to elevate daily tissue paper standards by blending natural fiber softness with uncompromised hygiene.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                We specialize in manufacturing and supplying a comprehensive range of tissue paper products tailored for both everyday household comfort and heavy-duty commercial demands. From fine dining restaurants and boutique hotels to corporate headquarters and healthcare facilities, Eco Mitra has earned trust through consistent product quality and authentic customer service.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
                  <div className="text-2xl font-black text-emerald-900">100%</div>
                  <div className="text-xs font-bold text-emerald-700">Pure Virgin Pulp</div>
                </div>
                <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
                  <div className="text-2xl font-black text-emerald-900">0%</div>
                  <div className="text-xs font-bold text-emerald-700">Harsh Artificial Bleach</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <div className="relative h-[400px] sm:h-[480px] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1000&auto=format&fit=crop"
                    alt="Eco Mitra Tissue Paper Quality Production"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Softness with Nature's Care
                    </span>
                    <h3 className="text-xl font-bold">Hygiene You Can Rely On</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR MISSION */}
      <section className="py-16 bg-gradient-to-b from-emerald-50/50 to-white border-y border-emerald-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-xl max-w-4xl mx-auto text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-700 text-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
              <Leaf className="w-7 h-7 text-emerald-200" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950">
              Our Mission
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At Eco Mitra, our mission is to provide reliable, highly absorbent, and environmentally conscientious tissue paper products for homes, commercial establishments, and institutions across India. We aim to empower businesses with efficient bulk supply while assuring everyday consumers of gentle, hygienic softness.
            </p>
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            pill="Core Principles"
            title="Our Values"
            subtitle="The fundamental values that guide our product development and client partnerships."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-white p-8 rounded-3xl border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-700 text-emerald-100 flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950 mb-3">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WHO WE SERVE */}
      <section className="py-16 sm:py-24 bg-emerald-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            pill="Target Segments"
            title="Who We Serve"
            subtitle="Eco Mitra delivers tailored tissue paper solutions tailored for diverse business needs."
            light={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO_WE_SERVE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 transition-all duration-300 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {item.label}
                  </h3>
                  <p className="text-emerald-100/80 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href={getWhatsAppLink('Hello Eco Mitra, I want to discuss tissue paper supply for my business.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Discuss Business Supply via WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
