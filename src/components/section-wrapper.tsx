import type { ReactNode } from 'react';

interface SectionWrapperProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ title, subtitle, children, className = '', id }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-8 md:py-12 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-6 md:mb-8 text-center">
          {title && <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-foreground mb-2">{title}</h2>}
          {subtitle && <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}
