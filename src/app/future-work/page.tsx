import PageWrapper from '@/components/page-wrapper';
import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb, Layers, Smartphone, DatabaseZap, Users2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Future Work and Development',
  description: 'Outlining future improvements, research directions, and application development plans for Canine Health Insights.',
};

const futureWorkItems = [
  {
    icon: <DatabaseZap className="h-8 w-8 text-primary" />,
    title: 'Expand Dataset and Feature Set',
    description: 'Continuously enlarge and diversify the image dataset, covering more breeds, ages, and health conditions. Explore more sophisticated feature extraction techniques, potentially incorporating deep learning features (e.g., from CNNs) for enhanced pattern recognition.',
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: 'Multi-Class Classification',
    description: 'Move beyond binary classification ("Healthy" vs. "Pale") to identify a wider range of tongue characteristics or specific conditions (e.g., cyanosis, inflammation, lesions), providing more granular insights.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: 'Mobile Application Development',
    description: 'Develop a user-friendly mobile application for pet owners and veterinarians. This app would allow easy image capture, provide instant (preliminary) feedback, and potentially integrate with veterinary telemedicine services or electronic health records.',
  },
  {
    icon: <Users2 className="h-8 w-8 text-primary" />,
    title: 'Longitudinal Studies and Personalization',
    description: 'Conduct longitudinal studies to track changes in a dog\'s tongue over time, potentially personalizing health assessments based on an individual dog\'s baseline characteristics and history.',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Integration with Other Health Indicators',
    description: 'Explore possibilities of combining tongue analysis with other non-invasive health indicators (e.g., activity levels from wearables, changes in appetite recorded by owners) for a more holistic health assessment.',
  },
   {
    icon: <FlaskConical className="h-8 w-8 text-primary" />,
    title: 'Clinical Validation and Trials',
    description: 'Collaborate with veterinary clinics to conduct formal clinical validation studies to rigorously assess the system\'s real-world accuracy and utility in a clinical setting.',
  },
];

export default function FutureWorkPage() {
  return (
    <PageWrapper title="Future Work and Development">
      <SectionWrapper subtitle="Our vision for Canine Health Insights extends beyond the current research. We aim to continually refine the technology and explore new avenues for its application in promoting canine well-being.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {futureWorkItems.map((item, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex-row items-center space-x-4 pb-4">
                 <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    {item.icon}
                  </div>
                <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-md leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
