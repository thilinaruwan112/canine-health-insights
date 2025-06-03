import type { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export default function PageWrapper({ children, title, className = '' }: PageWrapperProps) {
  return (
    <div className={`container mx-auto px-4 py-8 sm:px-6 lg:px-8 ${className}`}>
      {title && (
        <h1 className="text-3xl sm:text-4xl font-headline font-bold mb-8 text-primary">
          {title}
        </h1>
      )}
      {children}
    </div>
  );
}
