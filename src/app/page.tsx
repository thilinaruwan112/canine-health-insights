
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '@/components/page-wrapper';
import SectionWrapper from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, FlaskConical, Users, Sparkles, BrainCircuit, BarChartBig } from 'lucide-react';

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

      {/* Our Vision Section */}
      <SectionWrapper title="Our Vision for Canine Health" id="vision">
        <Card className="shadow-lg overflow-hidden">
          <div className="md:flex items-center">
            <div className="md:w-1/3">
              <Image
                src="https://images.unsplash.com/photo-1556866261-8763a7662333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8ZG9nc3xlbnwwfHx8fDE3NDg5Mzk2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthy dog looking alert"
                width={600}
                height={400}
                className="object-cover w-full h-48 md:h-full"
                data-ai-hint="data analysis chart"
              />
            </div>
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="flex items-center mb-3">
                <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-2xl text-primary">Our Vision for Canine Health</h3>
              </div>
              <p className="text-md text-foreground/90 leading-relaxed mb-4">
                We envision a future where technology empowers pet owners and veterinarians with accessible, non-invasive tools for early health detection. Our research aims to translate complex visual data from a dog&apos;s tongue into actionable insights, fostering a proactive approach to canine wellness and ultimately enhancing the bond between pets and their families.
              </p>
              <Button asChild variant="link" className="px-0 text-accent">
                <Link href="/about">Learn About Our Vision <span aria-hidden="true" className="ml-1">→</span></Link>
              </Button>
            </div>
          </div>
        </Card>
      </SectionWrapper>
      
      {/* Key Discoveries Section */}
      <SectionWrapper title="Key Discoveries & Innovations" id="discoveries">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Card className="text-left hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-primary/10 text-primary p-3 rounded-full mr-3">
                  <BrainCircuit className="h-7 w-7" />
                </div>
                <CardTitle className="font-headline text-xl">AI-Powered Tongue Analysis</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-3">
                Our system leverages advanced machine learning models to interpret subtle visual cues in canine tongue images, identifying patterns that may correlate with health status.
              </CardDescription>
              <Button asChild variant="outline" size="sm">
                <Link href="/methodology">Explore Methodology</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="text-left hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-primary/10 text-primary p-3 rounded-full mr-3">
                  <BarChartBig className="h-7 w-7" />
                </div>
                <CardTitle className="font-headline text-xl">Promising Classification Accuracy</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-3">
                Initial findings demonstrate the model&apos;s capability to distinguish between 'Healthy' and 'Pale' tongue characteristics with encouraging accuracy, paving the way for a reliable screening tool.
              </CardDescription>
              <Button asChild variant="outline" size="sm">
                <Link href="/results">View Results</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Original Key Aspects Section - re-using for core values */}
      <SectionWrapper title="Core Values of Our Research" id="features">
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
              <CardTitle className="font-headline text-xl">Scientific Rigor</CardTitle>
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
              <CardTitle className="font-headline text-xl">Collaborative Spirit</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                A multidisciplinary team dedicated to advancing canine health through shared expertise.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>
      
      {/* Meet the Team CTA Section */}
      <SectionWrapper className="text-center bg-muted/50 py-12 md:py-16 rounded-lg">
         <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
            <Users className="h-10 w-10" />
          </div>
         <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-foreground mb-3">
            Meet the Minds Behind the Mission
          </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Our dedicated team of researchers, students, and supervisors is passionate about making a difference in veterinary science.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/team">Discover Our Team</Link>
        </Button>
      </SectionWrapper>
    </PageWrapper>
  );
}
