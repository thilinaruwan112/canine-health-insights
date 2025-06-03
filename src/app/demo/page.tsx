import PageWrapper from '@/components/page-wrapper';
import SectionWrapper from '@/components/section-wrapper';
import UploadForm from '@/components/upload-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - Canine Tongue Analysis',
  description: 'Try the demo of our canine tongue health prediction tool. Upload an image and get a mock classification.',
};

export default function DemoPage() {
  return (
    <PageWrapper title="Project Demo">
      <SectionWrapper subtitle="Experience a simplified version of our tongue analysis system. Upload an image of a dog's tongue to see a mock classification. This demo uses our GenAI model to predict if the tongue appears 'Healthy' or 'Pale'.">
        <UploadForm />
        <div className="mt-8 p-4 border border-yellow-300 bg-yellow-50 text-yellow-700 rounded-md dark:bg-yellow-900/30 dark:border-yellow-700 dark:text-yellow-300">
          <h3 className="font-semibold mb-2">Disclaimer:</h3>
          <p className="text-sm">
            This demo is for illustrative purposes only and uses a model trained on a specific dataset.
            The prediction should not be considered a medical diagnosis. Always consult a qualified veterinarian
            for any health concerns regarding your pet. Image quality, lighting, and other factors can significantly
            affect the outcome.
          </p>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
