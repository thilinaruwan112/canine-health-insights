import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '@/components/page-wrapper';
import SectionWrapper from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, FlaskConical, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center bg-gradient-to-br from-primary/10 via-background to-background rounded-xl shadow-inner">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold mb-6 text-primary">
            Canine Health Insights
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Identifying Healthy Canine Tongue Characteristics Using Machine Learning Techniques
          </p>
          <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/demo">Try Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <SectionWrapper title="Project Abstract" id="abstract">
        <Card className="shadow-lg">
          <CardContent className="p-6 md:p-8">
            <p className="text-md md:text-lg leading-relaxed text-foreground/90">
              This research project explores the application of machine learning techniques to identify characteristics of a healthy canine tongue from digital images. The tongue is a vital indicator of a dog&apos;s overall health, and subtle changes in its appearance can signify underlying medical conditions. By developing an automated system for analyzing tongue images, we aim to provide a non-invasive, accessible tool that could aid in early health screening for dogs. This study involves collecting a dataset of canine tongue images, preprocessing these images, extracting relevant features, and training a classification model (e.g., XGBoost) to distinguish between healthy and potentially unhealthy tongue characteristics. The findings from this project could contribute to advancing veterinary diagnostic tools and promoting proactive pet healthcare.
            </p>
          </CardContent>
        </Card>
      </SectionWrapper>

      {/* Key Features Section */}
      <SectionWrapper title="Key Aspects of Our Research" id="features">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                <Lightbulb className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-xl">Innovative Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Utilizing cutting-edge machine learning to analyze canine tongue images for health indicators.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                <FlaskConical className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-xl">Scientific Methodology</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Rigorous data collection, preprocessing, feature extraction, and model training processes.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                <Users className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-xl">Collaborative Effort</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                A multidisciplinary team of students and supervisors dedicated to advancing canine health.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>
      
      {/* Call to Action Section */}
      <SectionWrapper className="text-center">
         <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-foreground mb-4">
            Explore Our Research
          </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Dive deeper into our methodology, findings, and the future of this exciting project.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/methodology">Discover Our Methods</Link>
        </Button>
      </SectionWrapper>
    </PageWrapper>
  );
}
