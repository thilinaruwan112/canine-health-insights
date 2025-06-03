import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import type { SocialLink } from '@/lib/constants';

const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Email', href: 'mailto:info@example.com', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Canine Health Insights. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <link.icon className="h-5 w-5" />
              <span className="sr-only">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
