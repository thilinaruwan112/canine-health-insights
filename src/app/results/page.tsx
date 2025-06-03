import PageWrapper from '@/components/page-wrapper';
import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle, Target, AlertTriangle, Info } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Results and Evaluation',
  description: 'Presents the evaluation metrics, confusion matrix, and limitations of the Canine Health Insights project.',
};

const evaluationMetrics = [
  { metric: 'Accuracy', value: '88%', description: 'Overall correctness of the model.' },
  { metric: 'Precision (Healthy)', value: '90%', description: 'Of those predicted Healthy, how many actually were.' },
  { metric: 'Recall (Healthy)', value: '92%', description: 'Of all actual Healthy cases, how many were identified.' },
  { metric: 'F1-Score (Healthy)', value: '91%', description: 'Harmonic mean of Precision and Recall for Healthy.' },
  { metric: 'Precision (Pale)', value: '85%', description: 'Of those predicted Pale, how many actually were.' },
  { metric: 'Recall (Pale)', value: '80%', description: 'Of all actual Pale cases, how many were identified.' },
  { metric: 'F1-Score (Pale)', value: '82%', description: 'Harmonic mean of Precision and Recall for Pale.' },
];

export default function ResultsPage() {
  return (
    <PageWrapper title="Results and Evaluation">
      <SectionWrapper title="Model Performance Metrics" id="metrics">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline flex items-center">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              Evaluation Metrics
            </CardTitle>
            <CardDescription>
              The following metrics were obtained from evaluating the XGBoost model on the held-out test dataset.
              (Note: These are representative values for demonstration.)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {evaluationMetrics.map((item) => (
                  <TableRow key={item.metric}>
                    <TableCell className="font-medium">{item.metric}</TableCell>
                    <TableCell>{item.value}</TableCell>
                    <TableCell className="text-muted-foreground">{item.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </SectionWrapper>

      <SectionWrapper title="Confusion Matrix" id="confusion-matrix">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline flex items-center">
              <Target className="h-6 w-6 text-blue-500 mr-2" />
              Visualizing Performance
            </CardTitle>
            <CardDescription>
              The confusion matrix provides a detailed breakdown of correct and incorrect classifications for each class.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image
              src="https://placehold.co/500x350.png"
              alt="Confusion Matrix"
              width={500}
              height={350}
              className="rounded-md border shadow-md"
              data-ai-hint="confusion matrix chart"
            />
            <p className="text-sm text-muted-foreground mt-4">
              (Illustrative confusion matrix. Rows typically represent actual classes, columns predicted classes.)
            </p>
          </CardContent>
        </Card>
      </SectionWrapper>

      <SectionWrapper title="Discussion and Limitations" id="limitations">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline flex items-center">
              <Info className="h-6 w-6 text-yellow-500 mr-2" />
             Interpretation of Results
            </CardTitle>
             <CardDescription>
             The results indicate a promising capability of the model to differentiate between healthy and pale canine tongues. The F1-scores suggest a reasonable balance between precision and recall for both classes.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <AlertTriangle className="h-5 w-5 text-destructive mr-2" />
                Limitations
              </h3>
              <ul className="list-disc list-inside space-y-1 text-md text-foreground/90 leading-relaxed">
                <li><strong>Dataset Size and Diversity:</strong> The current dataset, while carefully curated, may not encompass the full spectrum of canine breeds, ages, or lighting conditions. A larger, more diverse dataset would improve model generalization.</li>
                <li><strong>Image Quality Dependency:</strong> Model performance is sensitive to the quality of input images. Poor lighting, focus, or obstructions can negatively impact accuracy.</li>
                <li><strong>Subjectivity in Labeling:</strong> While efforts were made for consistent labeling, some inherent subjectivity may exist in visual assessment, even by experts.</li>
                <li><strong>Binary Classification Scope:</strong> The current model performs binary classification ('Healthy' vs. 'Pale'). It does not identify specific diseases or a wider range of conditions.</li>
                <li><strong>Not a Diagnostic Tool:</strong> This system is intended as a preliminary screening aid and should not replace professional veterinary diagnosis.</li>
              </ul>
            </div>
             <p className="text-md text-foreground/90 leading-relaxed pt-4 border-t">
              Future work will aim to address these limitations by expanding the dataset, refining image preprocessing techniques, exploring more complex models, and potentially incorporating a wider range of health indicators.
            </p>
          </CardContent>
        </Card>
      </SectionWrapper>
    </PageWrapper>
  );
}
