import PageWrapper from '@/components/page-wrapper';
import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, Quote } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Literature Review',
  description: 'A summary of references and background studies related to canine health, tongue analysis, and machine learning in veterinary medicine.',
};

const literatureEntries = [
  {
    title: "Canine Oral Health and Systemic Disease",
    authors: "Smith, J. et al.",
    journal: "Journal of Veterinary Dentistry, 2020",
    summary: "This paper provides an overview of the links between oral health in dogs and various systemic diseases, highlighting the importance of oral examination as a diagnostic indicator. It underscores the relevance of assessing tongue and gum health.",
    category: "Canine Health",
  },
  {
    title: "Machine Learning Applications in Veterinary Medicine: A Review",
    authors: "Lee, K. & Park, S.",
    journal: "Computers and Electronics in Agriculture, 2021",
    summary: "A comprehensive review of how machine learning is being applied across different areas of veterinary medicine, including diagnostics, image analysis, and epidemiology. Discusses challenges and future prospects.",
    category: "Machine Learning in Veterinary Science",
  },
  {
    title: "Color and Texture Analysis for Medical Image Diagnosis",
    authors: "Chen, H. et al.",
    journal: "IEEE Transactions on Medical Imaging, 2019",
    summary: "Focuses on techniques for extracting color and texture features from medical images for diagnostic purposes. While not specific to canine tongues, the methodologies for feature engineering are highly relevant to this project.",
    category: "Image Analysis & Feature Extraction",
  },
  {
    title: "XGBoost: A Scalable Tree Boosting System",
    authors: "Chen, T. & Guestrin, C.",
    journal: "Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 2016",
    summary: "The foundational paper on XGBoost, detailing its algorithm, scalability, and effectiveness. This justifies its selection as a primary model for our classification task due to its proven performance.",
    category: "Machine Learning Models",
  },
  {
    title: "The Canine Tongue as a Diagnostic Indicator in Traditional Chinese Veterinary Medicine (TCVM)",
    authors: "Xie, H. & Preast, V.",
    journal: "American Journal of Traditional Chinese Veterinary Medicine, 2018",
    summary: "Explores the principles of tongue diagnosis in TCVM, detailing how tongue color, coating, and shape are interpreted to assess a dog's health. Provides valuable domain knowledge for feature selection.",
    category: "Canine Health & Diagnostics",
  },
];

export default function LiteratureReviewPage() {
  return (
    <PageWrapper title="Literature Review">
      <SectionWrapper subtitle="Our research builds upon existing knowledge in canine health, medical image analysis, and machine learning. Below is a summary of key background studies and references that have informed our work.">
        <div className="space-y-6">
          {literatureEntries.map((entry, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="font-headline text-xl">{entry.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {entry.authors} - <em>{entry.journal}</em>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="border-l-4 border-accent pl-4 py-2 bg-accent/10 rounded-r-md">
                  <Quote className="h-5 w-5 text-accent/70 mb-1 inline-block transform -scale-x-100" />
                  <p className="text-md text-foreground/90 italic leading-relaxed">{entry.summary}</p>
                </blockquote>
                <p className="mt-3 text-xs text-muted-foreground">Category: {entry.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
