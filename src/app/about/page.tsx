import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { SectionTitle } from '@/components/common/SectionTitle';
import { getWhatsAppLink } from '@/config/business';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  CheckCircle2, 
  Leaf, 
  Award, 
  ArrowRight, 
  MessageCircle, 
  User, 
  Quote, 
  Target, 
  Globe2, 
  TrendingUp, 
  Compass,
  Building2,
  PhoneCall
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Eco Mitra | Our Story & Vision',
  description: 'Discover the story and vision behind Eco Mitra, inspired by a commitment towards quality, hygiene, accessibility, and meaningful business relationships.',
};

const JOURNEY_STAGES = [
  {
    stage: '01',
    title: 'Understanding the Need',
    description: 'Years of understanding the business, customer requirements, and the importance of reliable hygiene products helped create a strong foundation.',
    icon: Compass,
  },
  {
    stage: '02',
    title: 'A Clear Vision',
    description: 'The idea developed around making quality hygiene products more accessible at practical and reasonable pricing.',
    icon: Target,
  },
  {
    stage: '03',
    title: 'Building the Foundation',
    description: 'Experience, market understanding, and a commitment towards quality helped transform the vision into a focused business journey.',
    icon: Building2,
  },
  {
    stage: '04',
    title: 'Eco Mitra',
    description: 'Today, Eco Mitra continues to grow with the same core belief — delivering quality tissue paper solutions while building meaningful relationships with customers and business partners.',
    icon: TrendingUp,
  },
];

const OUR_PROMISES = [
  {
    icon: Award,
    title: 'Quality That Matters',
    description: 'We focus on delivering products designed around practical quality, softness, and everyday requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygiene With Purpose',
    description: 'Our products represent the importance of cleanliness and better hygiene practices in daily life.',
  },
  {
    icon: HeartHandshake,
    title: 'Value for Business',
    description: 'We aim to provide practical solutions with a focus on reasonable, competitive, and transparent pricing.',
  },
  {
    icon: TrendingUp,
    title: 'Growing Together',
    description: 'We believe strong customer and business relationships are an important part of long-term sustainable growth.',
  },
];

export default function AboutPage() {
  const whatsappMsg = 'Hello Eco Mitra, I read about your story and vision. I would like to inquire about business partnership opportunities.';

  return (
    <div className="space-y-0 text-slate-800">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO BANNER */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-gradient-eco text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs sm:text-sm font-semibold mb-2">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span>Discover Eco Mitra</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            About Eco Mitra
          </h1>

          <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto font-normal leading-relaxed">
            Bringing softness, hygiene, accessibility, and purpose together for homes and commercial establishments across India.
          </p>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. CORE BRAND STORY & FOUNDER'S VISION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: FOUNDER PHOTO / VISUAL PLACEHOLDER */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative shadow layer */}
                <div className="absolute inset-0 bg-emerald-600/15 rounded-3xl blur-2xl transform -rotate-2" />

                {/* Main Founder Card Container */}
                <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 p-8 text-white shadow-2xl border-4 border-white">
                  
                  {/* Founder Visual Frame */}
                  <div className="relative rounded-2xl bg-gradient-to-br from-emerald-900/60 via-slate-800/80 to-emerald-950/80 p-8 border border-emerald-700/40 text-center space-y-6">
                    
                    {/* Founder Image Placeholder Graphic */}
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-emerald-900/80 border-4 border-emerald-400/40 flex flex-col items-center justify-center mx-auto shadow-xl relative overflow-hidden group">
                      <User className="w-16 h-16 text-emerald-200 opacity-90" />
                      <div className="absolute inset-0 bg-emerald-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                        <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider">
                          Kanubhai Jinabhai Fumakiya
                        </span>
                      </div>
                    </div>

                    {/* Founder Name & Title */}
                    <div className="space-y-1.5">
                      <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-bold uppercase tracking-wider">
                        Founder & Visionary
                      </div>
                      <h3 className="text-2xl font-black text-white tracking-tight">
                        Kanubhai Jinabhai Fumakiya
                      </h3>
                      <p className="text-xs text-emerald-200/80 font-medium">
                        The Driving Vision Behind Eco Mitra
                      </p>
                    </div>

                    <div className="pt-4 border-t border-emerald-800/80 text-[11px] text-slate-300 italic leading-relaxed">
                      "Built around experience, persistence, customer needs, and a long-term commitment to quality."
                    </div>

                  </div>

                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: BRAND STORY */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>THE STORY BEHIND ECO MITRA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-950 tracking-tight leading-tight">
                A Vision Beyond Business
              </h2>

              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                <p className="font-semibold text-emerald-950 text-lg sm:text-xl">
                  Every journey begins with a thought. For Kanubhai Jinabhai Fumakiya, the journey was inspired by a simple belief — <span className="bg-emerald-100 text-emerald-950 px-1.5 py-0.5 rounded font-bold">better hygiene should be within everyone's reach.</span>
                </p>

                <p>
                  For years, his understanding of the business and the practical needs of customers helped shape a clear vision: quality hygiene products should not always come with an unreasonable price tag. He believed that businesses and everyday households deserve access to products offering the right balance of softness, comfort, reliability, and true value.
                </p>

                <p>
                  That belief became more than just an idea — it became a direction. A direction towards creating tissue paper solutions that support daily hygiene needs while remaining accessible to restaurants, hotels, cafes, corporates, and homes alike.
                </p>

                <p>
                  The objective was never simply to manufacture tissue paper. The larger purpose was to build a brand that stands for:
                </p>
              </div>

              {/* Core Brand Pillars Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2 text-xs font-bold text-emerald-950">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Better Hygiene</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2 text-xs font-bold text-emerald-950">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Consistent Quality</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2 text-xs font-bold text-emerald-950">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Reasonable Pricing</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2 text-xs font-bold text-emerald-950">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Reliable Supply</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2 text-xs font-bold text-emerald-950">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Genuine Trust</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2 text-xs font-bold text-emerald-950">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Long-Term Growth</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. HIGHLIGHTED VISION STATEMENT SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE CORE VISION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Hygiene Should Be Accessible to Everyone.
            </h2>

            <p className="text-emerald-100/90 text-base sm:text-xl leading-relaxed">
              The vision behind Eco Mitra is to make quality tissue paper products accessible to a wider range of customers and businesses at reasonable and practical pricing.
            </p>
          </div>

          {/* 6 Value Pillars Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-4 border-t border-emerald-800/80">
            {[
              'Quality',
              'Hygiene',
              'Accessibility',
              'Reliability',
              'Fair Pricing',
              'Long-Term Relationships'
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center gap-2 hover:bg-white/15 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-white">
                  {pillar}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. FOUNDER'S QUOTE CARD */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-emerald-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl bg-white p-8 sm:p-12 border border-emerald-200/80 shadow-xl space-y-6">
            
            {/* Quote Icon Accent */}
            <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md">
              <Quote className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                The philosophy behind the vision:
              </p>
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-emerald-950 leading-relaxed italic">
                “A better hygiene experience should not be a luxury. When quality, accessibility, and the right intention come together, even a simple product can make a meaningful difference.”
              </blockquote>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="text-lg font-black text-emerald-950">
                  Kanubhai Jinabhai Fumakiya
                </h4>
                <p className="text-xs font-semibold text-slate-500">
                  The Vision Behind Eco Mitra
                </p>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
                Eco Mitra Philosophy
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. THE JOURNEY TIMELINE */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            pill="Progressive Stages"
            title="The Journey of Eco Mitra"
            subtitle="How a simple belief evolved into a dedicated commitment to quality hygiene solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {JOURNEY_STAGES.map((item, idx) => {
              const StageIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-200 hover:border-emerald-400 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <StageIcon className="w-6 h-6 text-emerald-100" />
                      </div>
                      <span className="text-3xl font-black text-emerald-200 group-hover:text-emerald-600 transition-colors">
                        {item.stage}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Stage Milestone</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. INDIA VISION SECTION: ONE VISION. A WIDER REACH. */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 text-white relative overflow-hidden">
        
        {/* Subtle India Network Map Background Accents */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
              <Globe2 className="w-4 h-4 text-emerald-400" />
              <span>Nationwide Perspective</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              One Vision. A Wider Reach.
            </h2>

            <p className="text-base sm:text-xl text-emerald-100/90 leading-relaxed font-normal">
              Eco Mitra was built with a vision that goes beyond a single location. The goal is to continuously grow, reach more businesses and customers, and contribute towards better hygiene practices through reliable and accessible tissue paper solutions.
            </p>
          </div>

          {/* Abstract Growth Node Grid representing Reach */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center space-y-1 min-h-[120px]">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">Growth</div>
              <div className="text-xs text-slate-300">Continuous expansion</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center space-y-1 min-h-[120px]">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">Reach</div>
              <div className="text-xs text-slate-300">Commercial accessibility</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center space-y-1 min-h-[120px]">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">Partnership</div>
              <div className="text-xs text-slate-300">Long-term collaboration</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center space-y-1 min-h-[120px]">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">Opportunity</div>
              <div className="text-xs text-slate-300">Value creation</div>
            </div>
          </div>

          {/* Prominent Vision Quote Box */}
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-emerald-900/40 border border-emerald-500/30 text-center shadow-2xl">
            <blockquote className="text-base sm:text-lg lg:text-xl font-bold text-emerald-100 leading-relaxed">
              “With a vision that looks beyond boundaries, Eco Mitra is committed to growing its reach and building meaningful relationships with customers and business partners across India.”
            </blockquote>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. LEGACY AND EXPERIENCE SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>FOUNDATION & KNOWLEDGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
            Built on Experience. Driven by Vision.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            The journey behind Eco Mitra is supported by years of business understanding, market experience, and a close awareness of customer requirements. This experience has helped shape a practical approach towards quality, pricing, supply, and long-term business relationships. Eco Mitra carries forward this foundation with a fresh vision for the future.
          </p>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 8. OUR PROMISE (4 CARDS) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-emerald-50/40 border-t border-emerald-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            pill="Core Values"
            title="Our Promise"
            subtitle="The fundamental commitments that guide our daily operations and client relationships."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {OUR_PROMISES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white hover:bg-emerald-50/50 p-8 rounded-3xl border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-emerald-100 flex items-center justify-center mb-6 shadow-md shadow-emerald-700/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-950 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 9. FINAL EMOTIONAL CTA SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-eco text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl max-w-4xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Join Our Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              The Vision Started With One Simple Belief.
            </h2>

            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 border border-white/15 text-lg sm:text-2xl font-extrabold text-emerald-200">
              “Quality and better hygiene should be accessible to more people.”
            </div>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-2xl mx-auto">
              What began with a vision continues today through Eco Mitra — a journey focused on quality, accessibility, meaningful relationships, and continuous growth. The journey is still moving forward. And every customer, partner, and business relationship becomes a part of the story.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-emerald-950 hover:bg-emerald-50 font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-5 h-5 text-emerald-700" />
              </Link>

              <a
                href={getWhatsAppLink(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Partner With Eco Mitra</span>
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
