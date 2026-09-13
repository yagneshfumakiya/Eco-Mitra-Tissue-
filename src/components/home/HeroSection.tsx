import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, CheckCircle2, Sparkles, Feather, Shield, Leaf } from 'lucide-react';
import { getWhatsAppLink } from '@/config/business';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-emerald-50/30 pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative Background Accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-900 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-600 fill-emerald-600/30" />
              <span>Premium Quality Tissue Paper Brand</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-emerald-950 tracking-tight leading-[1.15]">
              Softness You Can Trust.{' '}
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 bg-clip-text text-transparent block sm:inline">
                Care You Can Feel.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Eco Mitra brings quality tissue paper products designed for everyday comfort, hygiene, and convenience. Crafted for homes, restaurants, hotels, and corporate enterprises.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-emerald-900/15 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href={getWhatsAppLink('Hello Eco Mitra, I would like to inquire about tissue paper products for my business.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-4 border-t border-emerald-100/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Quality Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Bulk Orders Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Corporate Supply</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <div className="relative h-[380px] sm:h-[450px] w-full overflow-hidden bg-emerald-950">
                  <Image
                    src="/Eco_banner.png"
                    alt="Eco Mitra Premium Soft Tissue Paper"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent" />

                  {/* Text Overlay inside image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                    <span className="inline-block px-3 py-1 bg-emerald-500/90 backdrop-blur-md rounded-md text-[11px] font-bold tracking-wider uppercase">
                      Virgin Pulp
                    </span>
                    <h3 className="text-xl font-bold text-white">Premium Tissue Paper</h3>
                    <p className="text-xs text-emerald-100/90">Zero harsh chemicals, maximum softness for every touch.</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Ultra Soft Feather */}
              <div className="absolute -top-5 -left-5 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3 animate-float hidden sm:flex">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Feather className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Feather Soft</div>
                  <div className="text-sm font-extrabold text-emerald-950">Ultra Plush Texture</div>
                </div>
              </div>

              {/* Floating Badge 2: 100% Hygienic */}
              <div className="absolute -bottom-6 -right-5 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3 animate-float hidden sm:flex" style={{ animationDelay: '2s' }}>
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Hygienic Guarantee</div>
                  <div className="text-sm font-extrabold text-emerald-950">100% Safe & Pure</div>
                </div>
              </div>

              {/* Floating Badge 3: Eco Leaf */}
              {/* <div className="absolute bottom-16 -left-8 bg-emerald-900 text-white p-3.5 rounded-2xl shadow-xl border border-emerald-700 flex items-center gap-2.5 hidden md:flex">
                <Leaf className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-bold">Eco-Friendly Sourcing</span>
              </div> */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
