import React from 'react';
import Link from 'next/link';
import { Leaf, Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Truck, Award } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '@/config/business';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 pt-16 pb-8 border-t border-emerald-900 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/80">

          {/* Brand & About Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-900/40">
                <Leaf className="w-6 h-6 text-emerald-200 fill-emerald-200/20" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white">
                  ECO MITRA
                </span>
                <span className="text-xs font-medium text-emerald-400">
                  {BUSINESS_INFO.tagline}
                </span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md pt-1">
              Eco Mitra is a premier tissue paper brand committed to delivering exceptional softness, maximum absorbency, and uncompromised hygiene. Engineered for everyday comfort and high-volume commercial supply.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-emerald-300 font-semibold">
              <div className="flex items-center gap-1.5 bg-emerald-900/60 px-3 py-1.5 rounded-lg border border-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Hygienic</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-900/60 px-3 py-1.5 rounded-lg border border-emerald-800">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>Bulk Supply</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-900/60 px-3 py-1.5 rounded-lg border border-emerald-800">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold uppercase tracking-wider text-emerald-400">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Our Products</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Target Segments */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold uppercase tracking-wider text-emerald-400">
              Industries Served
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">🍽 Restaurants & Cafes</li>
              <li className="flex items-center gap-2">🏨 Luxury Hotels</li>
              <li className="flex items-center gap-2">🏢 Corporate Offices</li>
              <li className="flex items-center gap-2">🏥 Hospitals & Clinics</li>
              <li className="flex items-center gap-2">🎉 Catering Services</li>
              <li className="flex items-center gap-2">🛒 Wholesale & Retail</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold uppercase tracking-wider text-emerald-400">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-start gap-3 hover:text-emerald-300 transition-colors group"
              >
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-start gap-3 hover:text-emerald-300 transition-colors group"
              >
                <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-xs">{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink('Hello Eco Mitra, I would like to make an inquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs px-4 py-2.5 rounded-xl shadow-md transition-all"
              >
                <span>Bulk Inquiry via WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400">
          <p>© 2026 Eco Mitra. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Softness with Nature's Care</span>
            <span>•</span>
            <span>Bulk & Corporate Orders</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
