import PageWrapper from '@/components/page-wrapper';
import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, HelpCircle, ListChecks, Focus } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About the Project',
  description: 'Learn about the motivation, research problem, objectives, and scope of the Canine Health Insights project.',
};

const aboutSections = [
  {
    icon: <HelpCircle className="h-12 w-12 text-primary mb-4" />,
    title: 'Motivation',
    content: "The health and well-being of companion animals, particularly dogs, are of paramount concern to owners and veterinary professionals. Early detection of health issues can significantly improve treatment outcomes and quality of life. The canine tongue, much like in traditional human medicine, can offer visual cues about an animal's systemic health. However, interpreting these signs often requires expert knowledge and can be subjective. This project is motivated by the need for accessible, objective, and non-invasive tools to aid in preliminary health assessment for dogs, potentially empowering pet owners and supporting veterinarians.",
  },
  {
    icon: <Target className="h-12 w-12 text-primary mb-4" />,
    title: 'Research Problem',
    content: "The core research problem is to determine if machine learning models can accurately classify canine tongue images based on visual characteristics indicative of health status (e.g., 'Healthy' vs. 'Pale'). This involves addressing challenges such as variability in image quality, lighting conditions, dog breeds, and the subtle nature of some visual cues. The project aims to establish a foundational methodology for this type of analysis.",
  },
  {
    icon: <ListChecks className="h-12 w-12 text-primary mb-4" />,
    title: 'Objectives',
    content: [
      'To curate a diverse dataset of canine tongue images, categorized by veterinary professionals.',
      'To develop and implement image preprocessing techniques suitable for standardizing tongue images.',
      'To investigate and apply feature extraction methods to capture relevant visual information from the images.',
      'To train and evaluate machine learning models (specifically XGBoost) for classifying tongue health characteristics.',
      'To analyze the performance of the developed system and identify its limitations and potential for future development.',
    ],
  },
  {
    icon: <Focus className="h-12 w-12 text-primary mb-4" />,
    title: 'Scope',
    content: "This project focuses on the binary classification of canine tongues as 'Healthy' or 'Pale' based on color and texture features discernible from digital images. The scope includes image acquisition strategies, data preprocessing, feature engineering, model training with XGBoost, and performance evaluation. It does not aim to provide a definitive medical diagnosis but rather a preliminary screening tool. The study will primarily use a dataset collected specifically for this research. While the long-term vision includes a broader range of classifications and integration into a mobile application, this phase concentrates on establishing the proof-of-concept for the binary classification task.",
  },
];

export default function AboutPage() {
  return (
    <PageWrapper title="About Our Research">
      {aboutSections.map((section, index) => (
        <SectionWrapper key={index} className={index > 0 ? "pt-8" : "pt-0"}>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center text-center">
              {section.icon}
              <CardTitle className="font-headline text-2xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-6 md:px-8 pb-6 md:pb-8">
              {Array.isArray(section.content) ? (
                <ul className="list-disc list-inside space-y-2 text-md text-foreground/90 leading-relaxed">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-md text-foreground/90 leading-relaxed">{section.content}</p>
              )}
            </CardContent>
          </Card>
        </SectionWrapper>
      ))}
    </PageWrapper>
  );
}
