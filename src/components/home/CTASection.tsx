import React from 'react';
import Link from 'next/link';
import { MessageCircle, PhoneCall, Building2, Truck, ShieldCheck, Check } from 'lucide-react';
import { getWhatsAppLink } from '@/config/business';

export const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-eco text-white">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs sm:text-sm font-semibold">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>B2B & Wholesale Supply Solutions</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Looking for Bulk Tissue Paper Supply?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-xl text-emerald-100/90 leading-relaxed font-normal">
              We provide tailored tissue paper solutions for restaurants, hotels, cafes, corporate offices, hospitals, and commercial distributors with high-volume competitive pricing.
            </p>

            {/* Value checklist */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-emerald-200">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Custom Logo Packaging</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>GST Billing Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Express Doorstep Delivery</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-emerald-950 hover:bg-emerald-50 font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-5 h-5 text-emerald-700" />
                <span>Contact Us</span>
              </Link>

              <a
                href={getWhatsAppLink('Hello Eco Mitra, I would like to request a bulk quotation for my commercial requirement.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
