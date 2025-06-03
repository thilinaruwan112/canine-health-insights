'use server';

/**
 * @fileOverview Predicts the health classification of a dog's tongue based on an image.
 *
 * - generateHealthPrediction - A function that handles the health prediction process.
 * - GenerateHealthPredictionInput - The input type for the generateHealthPrediction function.
 * - GenerateHealthPredictionOutput - The return type for the generateHealthPrediction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHealthPredictionInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a dog's tongue, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateHealthPredictionInput = z.infer<
  typeof GenerateHealthPredictionInputSchema
>;

const GenerateHealthPredictionOutputSchema = z.object({
  healthPrediction: z
    .string()
    .describe("The predicted health classification of the dog's tongue."),
});
export type GenerateHealthPredictionOutput = z.infer<
  typeof GenerateHealthPredictionOutputSchema
>;

export async function generateHealthPrediction(
  input: GenerateHealthPredictionInput
): Promise<GenerateHealthPredictionOutput> {
  return generateHealthPredictionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHealthPredictionPrompt',
  input: {schema: GenerateHealthPredictionInputSchema},
  output: {schema: GenerateHealthPredictionOutputSchema},
  prompt: `You are an expert veterinarian specializing in canine health.

You will use this image of a dog\'s tongue to determine its health.

Based on the image, classify the tongue as either 'Healthy' or 'Pale'.

Photo: {{media url=photoDataUri}}

Health Prediction: `,
});

const generateHealthPredictionFlow = ai.defineFlow(
  {
    name: 'generateHealthPredictionFlow',
    inputSchema: GenerateHealthPredictionInputSchema,
    outputSchema: GenerateHealthPredictionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
