import PageWrapper from '@/components/page-wrapper';
import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Camera, Settings2, ScanSearch, Brain, LayoutDashboard, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System Architecture',
  description: 'Overview of the system architecture for the Canine Health Insights project, detailing each module.',
};

const architectureModules = [
  {
    icon: <Camera className="h-8 w-8 text-primary" />,
    title: 'Image Acquisition Module',
    description: 'Responsible for capturing or receiving canine tongue images. This can be from a mobile app interface or direct uploads. Ensures basic image quality checks.',
  },
  {
    icon: <Settings2 className="h-8 w-8 text-primary" />,
    title: 'Preprocessing Module',
    description: 'Standardizes incoming images. Includes resizing, noise filtering, color space conversion (e.g., RGB to HSV/Lab) to prepare images for feature extraction.',
  },
  {
    icon: <ScanSearch className="h-8 w-8 text-primary" />,
    title: 'Feature Extraction Module',
    description: 'Extracts quantifiable features from preprocessed images. This includes color histograms, statistical color features, and potentially texture descriptors.',
  },
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: 'Classification Module',
    description: 'Utilizes the trained XGBoost model (or other ML models) to classify the tongue based on extracted features, predicting "Healthy" or "Pale".',
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    title: 'Prediction Interface Module',
    description: 'Presents the classification result to the user (e.g., on a web page or mobile app). Provides clear output and any relevant confidence scores if available.',
  },
];

export default function SystemArchitecturePage() {
  return (
    <PageWrapper title="System Architecture">
      <SectionWrapper subtitle="Our system is designed as a modular pipeline, allowing for flexibility and scalability. Each module performs a specific task in the process of analyzing canine tongue images.">
        <div className="relative mt-12">
          {/* Visual flow indication (simplified) */}
          <div className="hidden md:flex absolute top-1/2 left-0 right-0 items-center justify-around -translate-y-1/2 z-0">
            {architectureModules.slice(0, -1).map((_, index) => (
              <ArrowRight key={`arrow-${index}`} className="h-8 w-8 text-muted-foreground/50 mx-4" />
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {architectureModules.map((module, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="flex-row items-center space-x-4 pb-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    {module.icon}
                  </div>
                  <CardTitle className="font-headline text-xl">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-md leading-relaxed">
                    {module.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center mt-12 text-muted-foreground">
            This modular design facilitates independent development and testing of each component, and allows for easier integration of future enhancements.
          </p>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
