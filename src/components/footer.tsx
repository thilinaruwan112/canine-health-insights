
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import type { SocialLink } from '@/lib/constants';
import { FOOTER_PAGE_LINKS } from '@/lib/constants';
import Logo from './logo';

const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/example/canine-health-insights', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/example-research', icon: Linkedin },
  { name: 'Email', href: 'mailto:info@caninehealthinsights.example.com', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 text-muted-foreground">
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-xs">&copy; {new Date().getFullYear()} Canine Health Insights. All rights reserved.</p>
            <p className="text-xs mt-1">Dedicated to advancing veterinary science through technology.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_PAGE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors p-1"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
             <p className="mt-4 text-xs">
              Have questions or want to collaborate? 
              <Link href="/contact" className="text-primary hover:underline ml-1">
                Get in touch.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
