'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/config/business';

interface WhatsAppButtonProps {
  customMessage?: string;
  className?: string;
  label?: string;
  isFloating?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  customMessage,
  className = '',
  label,
  isFloating = true,
}) => {
  const link = getWhatsAppLink(customMessage);

  if (isFloating) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Eco Mitra on WhatsApp"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-pulse-gentle group ${className}`}
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-current text-white transition-transform group-hover:rotate-6" />
        </div>
        <span className="hidden sm:inline font-semibold text-sm tracking-wide pr-1">
          Chat with Us
        </span>
      </a>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-98 ${className}`}
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span>{label || 'Chat on WhatsApp'}</span>
    </a>
  );
};
