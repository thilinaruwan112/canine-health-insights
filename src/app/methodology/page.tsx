import PageWrapper from '@/components/page-wrapper';
import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, ScanSearch, Settings2, BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Methodology',
  description: 'Details on the image collection, preprocessing, feature extraction, and model training methodology used in the Canine Health Insights project.',
};

const methodologySteps = [
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: 'Image Collection',
    content: "A dataset of canine tongue images was ethically sourced from various veterinary clinics and consenting pet owners. Efforts were made to capture images under consistent lighting conditions where possible, though variability is an expected challenge. Each image was labeled by veterinary professionals as 'Healthy' or 'Pale', forming the ground truth for our supervised learning model. Metadata such as breed, age, and lighting conditions were also recorded when available to aid in analysis.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "dog tongue collection",
  },
  {
    icon: <Settings2 className="h-10 w-10 text-primary" />,
    title: 'Image Preprocessing',
    content: "Raw images undergo several preprocessing steps to standardize them and enhance relevant features. This includes resizing to a uniform dimension, noise reduction using filters (e.g., Gaussian blur), and color space conversion. We are particularly exploring conversions to color spaces like HSV (Hue, Saturation, Value) or Lab, as these can be more robust to lighting variations and may better represent color information relevant to health assessment compared to the standard RGB space.",
    codeSnippet: `import cv2
# Example: Convert RGB to HSV
img_rgb = cv2.imread('tongue_image.jpg')
img_hsv = cv2.cvtColor(img_rgb, cv2.COLOR_BGR2HSV)`,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "image processing",
  },
  {
    icon: <ScanSearch className="h-10 w-10 text-primary" />,
    title: 'Feature Extraction',
    content: "From the preprocessed images, a set of quantitative features are extracted. These features aim to capture the visual characteristics of the tongue related to its health. Examples include: color histograms (to represent the distribution of colors), statistical measures of color channels (mean, standard deviation in specific color spaces like Lab), and potentially texture descriptors (e.g., Local Binary Patterns - LBP, Haralick textures) if initial analysis suggests texture is a significant differentiator. The selection of features is an iterative process, guided by domain knowledge and feature importance analysis.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "data analysis chart",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Model Training (XGBoost)',
    content: "The extracted features form the input for our machine learning model. We have chosen XGBoost (Extreme Gradient Boosting) as our primary classification algorithm due to its high performance in many classification tasks, robustness to overfitting (with proper tuning), and its ability to handle various types of data. The dataset is split into training and testing sets. The XGBoost model is trained on the training set, with hyperparameter tuning performed using techniques like grid search or randomized search with cross-validation to optimize its predictive accuracy. The model's performance is then evaluated on the unseen test set.",
    codeSnippet: `from xgboost import XGBClassifier
# Example: Initialize XGBoost model
model = XGBClassifier(use_label_encoder=False, eval_metric='logloss')
model.fit(X_train, y_train)`,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "machine learning model",
  },
];

export default function MethodologyPage() {
  return (
    <PageWrapper title="Our Methodology">
      {methodologySteps.map((step, index) => (
        <SectionWrapper key={index} className={index > 0 ? "pt-10" : "pt-0"}>
          <Card className="overflow-hidden shadow-lg">
            <div className="md:flex">
              {index % 2 === 0 ? (
                <>
                  {step.image && (
                     <div className="md:w-1/2">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                        data-ai-hint={step.dataAiHint}
                      />
                    </div>
                  )}
                  <div className={`p-6 md:p-8 ${step.image ? 'md:w-1/2' : 'md:w-full'}`}>
                    <div className="flex items-center mb-4">
                      {step.icon}
                      <CardTitle className="font-headline text-2xl ml-3">{step.title}</CardTitle>
                    </div>
                    <CardContent className="pl-0">
                      <p className="text-md text-foreground/90 leading-relaxed mb-4">{step.content}</p>
                      {step.codeSnippet && (
                        <div className="bg-muted p-4 rounded-md shadow-inner">
                          <pre><code className="font-code text-sm text-foreground/80 block whitespace-pre-wrap">{step.codeSnippet}</code></pre>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </>
              ) : (
                <>
                  <div className={`p-6 md:p-8 ${step.image ? 'md:w-1/2' : 'md:w-full'}`}>
                    <div className="flex items-center mb-4">
                      {step.icon}
                      <CardTitle className="font-headline text-2xl ml-3">{step.title}</CardTitle>
                    </div>
                    <CardContent className="pl-0">
                      <p className="text-md text-foreground/90 leading-relaxed mb-4">{step.content}</p>
                      {step.codeSnippet && (
                        <div className="bg-muted p-4 rounded-md shadow-inner">
                          <pre><code className="font-code text-sm text-foreground/80 block whitespace-pre-wrap">{step.codeSnippet}</code></pre>
                        </div>
                      )}
                    </CardContent>
                  </div>
                   {step.image && (
                     <div className="md:w-1/2">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                        data-ai-hint={step.dataAiHint}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </Card>
        </SectionWrapper>
      ))}
    </PageWrapper>
  );
}
