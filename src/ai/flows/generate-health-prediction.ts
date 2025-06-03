
'use server';

/**
 * @fileOverview Predicts the health classification of a dog's tongue based on an image,
 * after verifying the image indeed contains a dog's tongue.
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
      "A photo, purported to be of a dog's tongue, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateHealthPredictionInput = z.infer<
  typeof GenerateHealthPredictionInputSchema
>;

const GenerateHealthPredictionOutputSchema = z.object({
  isDogTongue: z.boolean().describe("True if the image is identified as clearly showing a dog's tongue, false otherwise."),
  healthPrediction: z.string().optional().describe("The predicted health classification ('Healthy' or 'Pale') of the dog's tongue. This field is only present if isDogTongue is true."),
  analysisNotes: z.string().describe("A brief explanation. If isDogTongue is false, this explains why (e.g., 'Image does not contain a dog's tongue', 'Image is of a cat'). If isDogTongue is true, this might contain brief supporting notes for the prediction."),
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
  prompt: `You are an expert veterinarian specializing in canine health. Your task is to analyze an image.

Your primary goal is to determine if the provided image clearly shows a dog's tongue and, if so, to classify its health.

1.  **Identify the subject:** Examine the photo carefully.
    *   If the image clearly shows a dog's tongue, set \`isDogTongue\` to true.
    *   If the image does NOT clearly show a dog's tongue (e.g., it's another animal, an object, too blurry, or irrelevant), set \`isDogTongue\` to false.

2.  **Provide analysis:**
    *   **If \`isDogTongue\` is true:**
        *   Classify the tongue's health as either 'Healthy' or 'Pale'. Set this value to the \`healthPrediction\` field.
        *   In the \`analysisNotes\` field, provide a very brief note supporting your classification (e.g., "Good coloration and texture." or "Appears significantly lighter than typical.").
    *   **If \`isDogTongue\` is false:**
        *   The \`healthPrediction\` field should be omitted or null.
        *   In the \`analysisNotes\` field, explain why the image was not identified as a dog's tongue (e.g., "The image appears to be of a cat's paw.", "The image is too blurry to make a determination.", "The subject is an inanimate object.").

Provide your response in the specified output format.

Photo: {{media url=photoDataUri}}
`,
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
