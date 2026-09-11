import React from 'react';
import { Leaf } from 'lucide-react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  pill?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  pill,
  centered = true,
  light = false,
  className = '',
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {pill && (
        <div
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5 transition-colors ${
            light
              ? 'bg-emerald-800/60 text-emerald-200 border border-emerald-700/50'
              : 'bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-xs'
          }`}
        >
          <Leaf className="w-3.5 h-3.5 text-emerald-600" />
          <span>{pill}</span>
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
          light ? 'text-white' : 'text-emerald-950'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-emerald-100/90' : 'text-slate-600'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
