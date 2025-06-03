import PageWrapper from '@/components/page-wrapper';
import SectionWrapper from '@/components/section-wrapper';
import ContactForm from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Canine Health Insights project team. We welcome inquiries and collaborations.',
};

const contactDetails = [
  { icon: <Mail className="h-5 w-5 text-primary" />, text: 'info@caninehealthinsights.example.com', href: 'mailto:info@caninehealthinsights.example.com' },
  { icon: <Phone className="h-5 w-5 text-primary" />, text: '+1 (555) 123-4567 (Research Dept.)', href: 'tel:+15551234567' },
  { icon: <MapPin className="h-5 w-5 text-primary" />, text: '123 University Avenue, Tech City, TC 54321' },
];

const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/example/canine-health-insights', icon: <Github className="h-6 w-6"/>, dataAiHint: "github logo" },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/example-research', icon: <Linkedin className="h-6 w-6"/>, dataAiHint: "linkedin logo"  },
    { name: 'Twitter', href: 'https://twitter.com/caninehealthres', icon: <Twitter className="h-6 w-6"/>, dataAiHint: "twitter logo"  },
];


export default function ContactPage() {
  return (
    <PageWrapper title="Contact Us">
      <SectionWrapper subtitle="We welcome questions, feedback, and potential collaborations. Please use the form below or reach out via our contact details.">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 mt-1">{item.icon}</span>
                    {item.href ? (
                      <a href={item.href} className="text-md text-foreground/90 hover:text-primary transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-md text-foreground/90">{item.text}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-6">
                    {socialLinks.map((link) => (
                        <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                            aria-label={link.name}
                            data-ai-hint={link.dataAiHint}
                        >
                            {link.icon}
                        </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
