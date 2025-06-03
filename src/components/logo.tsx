import Link from 'next/link';
import { Dog } from 'lucide-react';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 text-2xl font-headline font-bold text-primary hover:text-accent transition-colors">
      <Dog className="h-8 w-8" />
      <span>Canine Health Insights</span>
    </Link>
  );
}
