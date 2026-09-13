import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  Building2, 
  UtensilsCrossed, 
  Coffee, 
  Hotel, 
  PartyPopper, 
  HeartPulse, 
  Store, 
  Printer, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  PackageCheck, 
  FileText, 
  Palette, 
  Truck, 
  Star,
  Layers,
  PhoneCall
} from 'lucide-react';
import { getWhatsAppLink } from '@/config/business';

export const CustomLogoTissueSection: React.FC = () => {
  const customPrintingWhatsappMsg = 'Hello Eco Mitra, I am interested in Custom Logo Printed Tissue Paper. Please share MOQ, pricing, printing options, and other details.';
  const franchiseWhatsappMsg = 'Hello Eco Mitra, I am interested in exploring a franchise or business partnership opportunity. Please share more details.';

  const targetIndustries = [
    { icon: UtensilsCrossed, name: 'Restaurants', badge: 'High Volume' },
    { icon: Coffee, name: 'Cafes', badge: 'Popular' },
    { icon: Hotel, name: 'Hotels', badge: 'Premium' },
    { icon: Building2, name: 'Corporate Offices', badge: 'Executive' },
    { icon: PartyPopper, name: 'Events & Catering', badge: 'Custom Packaging' },
    { icon: HeartPulse, name: 'Hospitals', badge: 'Hygienic Grade' },
    { icon: Store, name: 'Retailers & Distributors', badge: 'B2B Partner' },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Share Your Logo',
      description: 'Send us your business logo, preferred tissue size, and printing requirements.',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Approve the Design',
      description: 'Review and approve your customized digital mockup and packaging specifications.',
      icon: Palette,
    },
    {
      step: '03',
      title: 'Get Your Branded Tissue',
      description: 'Receive your high-quality, professionally printed custom tissue paper order at your doorstep.',
      icon: Truck,
    },
  ];

  return (
    <section id="custom-printing" className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/40 to-slate-50 border-t border-emerald-100/80">
      {/* Decorative Background Glows & Shapes */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

        {/* ------------------------------------------------------------- */}
        {/* TOP SPLIT SECTION: USP + MOQ COMPARISON (LEFT) & MOCKUP (RIGHT) */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Tag / Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/90 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-600 fill-emerald-600/30" />
              <span>Low MOQ Custom Printing Advantage</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black text-emerald-950 tracking-tight leading-[1.15]">
                Put Your Brand in Every Customer's Hand.
              </h2>
              <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent">
                Custom Logo Printed Tissue Paper — Now Available with Low MOQ.
              </p>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Turn every tissue packet into a branding opportunity. Eco Mitra helps restaurants, hotels, cafes, corporates, and businesses create customized tissue packaging featuring their own logo and brand identity.
            </p>

            {/* Safe Marketing Opportunity Statement */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-900/5 border-l-4 border-emerald-600 text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
              <p className="font-semibold text-emerald-950 mb-1">🌿 Flexible Branding Opportunity</p>
              A flexible low-MOQ opportunity for businesses looking to create their own branded tissue packaging without locking capital into massive bulk inventory.
            </div>

            {/* LOW MOQ HIGHLIGHT & COMPARISON CARD */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 p-6 sm:p-8 text-white shadow-2xl border border-emerald-800/50">
              {/* Subtle background glow inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>Low MOQ Advantage</span>
                  </div>
                  <span className="text-xs text-emerald-200/80 font-medium">B2B Special Offer</span>
                </div>

                {/* Hero Stat: 1,500 PACKETS */}
                <div className="space-y-2">
                  <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-200">
                    Custom Logo Printing Starting From Just
                  </div>
                  <div className="text-4xl sm:text-6xl font-black tracking-tight text-white flex flex-wrap items-baseline gap-2">
                    <span className="bg-gradient-to-r from-emerald-200 via-emerald-100 to-amber-200 bg-clip-text text-transparent drop-shadow-sm">
                      1,500
                    </span>
                    <span className="text-2xl sm:text-4xl font-extrabold text-emerald-300">
                      PACKETS
                    </span>
                  </div>
                </div>

                {/* VISUAL COMPARISON: Traditional 7,000+ vs Eco Mitra 1,500 */}
                <div className="pt-4 border-t border-emerald-800/80">
                  <div className="text-xs font-bold text-emerald-200/90 uppercase tracking-wider mb-3">
                    MOQ Market Comparison
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    
                    {/* Traditional Market Box */}
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                      <div className="text-xs font-medium text-slate-300">Traditional Market MOQ</div>
                      <div className="text-xl sm:text-2xl font-bold text-red-300 line-through opacity-80 mt-1">
                        7,000+ Packets
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">High financial risk & space demand</div>
                    </div>

                    {/* Eco Mitra Box */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 border border-emerald-400/40 shadow-lg flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-amber-400 text-emerald-950 font-black text-[10px] uppercase">
                        ECO MITRA
                      </div>
                      <div className="text-xs font-bold text-emerald-100">Eco Mitra Low MOQ</div>
                      <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                        1,500 Packets
                      </div>
                      <div className="text-[11px] text-emerald-100 font-semibold mt-1">Start small, grow faster</div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* 4 CORE BENEFITS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5 text-emerald-700" />
                  </div>
                  <h4 className="font-extrabold text-emerald-950 text-base">Your Brand Identity</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Get your business logo printed on premium tissue packaging for maximum visual visibility.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5 text-emerald-700" />
                  </div>
                  <h4 className="font-extrabold text-emerald-950 text-base">Low MOQ Entry</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Start custom logo branding from just 1,500 packets without huge upfront commitments.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  </div>
                  <h4 className="font-extrabold text-emerald-950 text-base">Professional Branding</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Elevate customer perception for your restaurant, hotel, cafe, or corporate establishment.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <PackageCheck className="w-5 h-5 text-emerald-700" />
                  </div>
                  <h4 className="font-extrabold text-emerald-950 text-base">Bulk Supply Support</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Reliable production & reordering schedule for all business and commercial requirements.
                </p>
              </div>

            </div>

            {/* PRIMARY & SECONDARY CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={getWhatsAppLink(customPrintingWhatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-lg shadow-emerald-700/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Get Your Logo Printed</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-emerald-950 hover:bg-emerald-900 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-center"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Talk to Our Team</span>
              </Link>
            </div>

          </div>

          {/* RIGHT SIDE: PREMIUM PRODUCT MOCKUP DISPLAY */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-teal-400/20 to-emerald-700/10 rounded-3xl blur-2xl transform rotate-3" />

              {/* Main Mockup Card Container */}
              <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 p-6 sm:p-8 text-white shadow-2xl border-4 border-white">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6 border-b border-emerald-800/60 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                      Custom Mockup Preview
                    </span>
                  </div>
                  <span className="text-[11px] bg-emerald-800/80 px-2.5 py-1 rounded-md text-emerald-200 font-medium">
                    100% Virgin Pulp
                  </span>
                </div>

                {/* TISSUE PACKET MOCKUP GRAPHIC */}
                <div className="relative rounded-2xl bg-gradient-to-br from-emerald-900/60 via-slate-800/80 to-emerald-950/80 p-6 sm:p-8 border border-emerald-700/40 text-center shadow-inner overflow-hidden space-y-6">
                  
                  {/* Floating tissue sheet effect */}
                  <div className="absolute top-2 right-4 text-emerald-300/30 text-6xl select-none font-serif animate-float pointer-events-none">
                    🧻
                  </div>

                  {/* Sample Branding Display Card */}
                  <div className="mx-auto max-w-xs bg-white text-slate-900 rounded-2xl p-6 shadow-2xl border-2 border-emerald-300 transform hover:scale-[1.02] transition-transform duration-300 relative">
                    
                    {/* Simulated Packaging Label */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                      Your Logo Here
                    </div>

                    <div className="py-4 px-2 space-y-3">
                      {/* Logo Placeholder Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-emerald-50 border-2 border-dashed border-emerald-600/60 text-emerald-700 flex flex-col items-center justify-center mx-auto shadow-inner">
                        <Printer className="w-7 h-7 text-emerald-600" />
                        <span className="text-[9px] font-black uppercase text-emerald-800 mt-1">YOUR LOGO</span>
                      </div>

                      <div className="space-y-1">
                        <div className="text-base font-extrabold text-emerald-950 uppercase tracking-wide">
                          YOUR BRAND NAME
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          Premium Soft Tissue Packaging
                        </div>
                      </div>

                      {/* Mockup details */}
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold text-slate-600">
                        <span>High-Speed Flexo Print</span>
                        <span>Food-Grade Ink</span>
                      </div>
                    </div>
                  </div>

                  {/* Second Packet Layer (Depth Effect) */}
                  <div className="mx-auto max-w-xs bg-emerald-50/90 text-emerald-950 rounded-xl p-3 shadow-md border border-emerald-200/80 flex items-center justify-between text-xs font-bold opacity-90 -mt-2">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-emerald-600" />
                      <span>Custom Color Options</span>
                    </div>
                    <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-md">
                      27x27 & 27x30 CM
                    </span>
                  </div>

                  {/* Mockup Callout Highlights */}
                  <div className="grid grid-cols-2 gap-3 text-left pt-2">
                    <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/60">
                      <div className="text-[10px] uppercase text-emerald-300 font-bold">Minimum Order</div>
                      <div className="text-sm font-extrabold text-white">1,500 Packets</div>
                    </div>
                    <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/60">
                      <div className="text-[10px] uppercase text-emerald-300 font-bold">Printing Method</div>
                      <div className="text-sm font-extrabold text-white">Precision Flexo</div>
                    </div>
                  </div>

                </div>

                {/* Floating Badge 1: 1,500 MOQ */}
                <div className="absolute -top-4 -left-4 bg-amber-400 text-emerald-950 font-black px-4 py-2 rounded-xl shadow-xl text-xs flex items-center gap-1.5 border border-amber-300 animate-float hidden sm:flex">
                  <Star className="w-4 h-4 fill-emerald-950" />
                  <span>MOQ ONLY 1,500 PACKETS</span>
                </div>

                {/* Floating Badge 2: Brand Recognition */}
                <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white font-bold px-4 py-2.5 rounded-xl shadow-xl text-xs flex items-center gap-2 border border-emerald-400 animate-float hidden sm:flex" style={{ animationDelay: '2.5s' }}>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Boost Brand Visibility</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ------------------------------------------------------------- */}
        {/* TARGET AUDIENCE SECTION: PERFECT FOR YOUR BUSINESS */}
        {/* ------------------------------------------------------------- */}
        <div className="space-y-8 pt-6 border-t border-emerald-100">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Target Commercial Sectors</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
              Perfect for Your Business
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Custom logo printed tissues create a clean, memorable brand touchpoint across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {targetIndustries.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white hover:bg-emerald-900 rounded-2xl p-4 text-center border border-slate-200/80 hover:border-emerald-700 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-800 text-emerald-700 group-hover:text-emerald-200 flex items-center justify-center mb-3 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-950 group-hover:text-white transition-colors">
                    {item.name}
                  </div>
                  <span className="mt-2 text-[10px] font-semibold text-emerald-700 group-hover:text-emerald-300 bg-emerald-100/60 group-hover:bg-emerald-950 px-2 py-0.5 rounded-md transition-colors">
                    {item.badge}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

        {/* ------------------------------------------------------------- */}
        {/* CUSTOM PRINTING PROCESS: 3 SIMPLE STEPS */}
        {/* ------------------------------------------------------------- */}
        <div className="space-y-10 pt-4">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Easy Workflow</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
              Your Custom Tissue in 3 Simple Steps
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Get your custom logo printed tissues delivered hassle-free with our streamlined ordering workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-emerald-400 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-700/20 group-hover:scale-110 transition-transform">
                        <StepIcon className="w-7 h-7 text-emerald-100" />
                      </div>
                      <span className="text-3xl font-black text-emerald-200 group-hover:text-emerald-600 transition-colors">
                        {step.step}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                      Step {idx + 1}: {step.title}
                    </h4>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Quality Assurance Included</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ------------------------------------------------------------- */}
        {/* FRANCHISE / BUSINESS PARTNERSHIP SECTION: GROW WITH ECO MITRA */}
        {/* ------------------------------------------------------------- */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 p-8 sm:p-12 lg:p-14 text-white shadow-2xl border-2 border-emerald-600/40">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Franchise & Commercial Expansion</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Grow With Eco Mitra
              </h3>
              <p className="text-base sm:text-xl text-emerald-200 font-semibold">
                We are always open to exploring franchise and business partnership opportunities.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Whether you are interested in custom logo printed tissue paper or plain tissue paper distribution, Eco Mitra welcomes potential franchise partners, distributors, and business collaborations across regions.
              </p>
            </div>

            {/* 2 HIGHLIGHT CARDS: CUSTOM PRINTING vs TISSUE DISTRIBUTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Custom Printing Partnership */}
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-emerald-400/50 transition-all space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xl">
                    🖨️
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 font-mono">PARTNERSHIP 01</span>
                    <h4 className="text-lg font-bold text-white">Custom Logo Printed Tissue</h4>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Partner with Eco Mitra to explore business opportunities in customized tissue paper solutions for restaurants, hotels, cafes, corporates, and commercial customers.
                </p>
              </div>

              {/* Card 2: Plain Tissue Paper Distribution */}
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-emerald-400/50 transition-all space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xl">
                    🧻
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 font-mono">PARTNERSHIP 02</span>
                    <h4 className="text-lg font-bold text-white">Plain Tissue Paper Business</h4>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Explore franchise, distribution, and business partnership opportunities for regular and plain tissue paper products with competitive wholesale margins.
                </p>
              </div>

            </div>

            {/* FRANCHISE CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppLink(franchiseWhatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-base px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 text-center"
              >
                <span>Explore Franchise Opportunity</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-6 py-4 rounded-2xl border border-white/20 transition-all text-center"
              >
                <span>Inquire via Contact Form</span>
              </Link>
            </div>

          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* SUBTLE TRUST & DISCLAIMER INFORMATION NOTE */}
        {/* ------------------------------------------------------------- */}
        <div className="text-center pt-2">
          <p className="text-xs text-slate-500 max-w-3xl mx-auto leading-relaxed italic">
            * MOQ, printing options, colors, packaging specifications, and pricing may vary depending on customization requirements. Contact us for a customized quotation.
          </p>
        </div>

      </div>
    </section>
  );
};
