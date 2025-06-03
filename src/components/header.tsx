"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './logo';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { NAV_LINKS, type NavLink } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false); // Close mobile menu on path change
  }, [pathname]);

  if (!isMounted) {
    return null; // Avoid hydration mismatch
  }

  const renderNavLinks = (isMobile = false) =>
    NAV_LINKS.map((link: NavLink) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          "transition-colors hover:text-primary",
          pathname === link.href ? "text-primary font-semibold" : "text-foreground/80",
          isMobile ? "block py-2 text-lg" : "text-sm"
        )}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        {link.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          {renderNavLinks()}
        </nav>
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-6">
                <div className="flex flex-col space-y-6">
                  <div className="flex justify-between items-center">
                     <Logo />
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {renderNavLinks(true)}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
