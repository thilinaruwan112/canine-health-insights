"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    // In a real application, you would save this to a database (e.g., Firestore)
    // or send an email.
    console.log("Contact form submission received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Simulate successful submission
    return {
      message: "Thank you for your message! We'll get back to you soon.",
      success: true,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      success: false,
    };
  }
}


// Server action for health prediction
import { generateHealthPrediction, type GenerateHealthPredictionInput, type GenerateHealthPredictionOutput } from '@/ai/flows/generate-health-prediction';

export type HealthPredictionState = {
    prediction?: GenerateHealthPredictionOutput;
    error?: string;
    isLoading: boolean;
};
  
export async function getHealthPrediction(
    input: GenerateHealthPredictionInput
  ): Promise<HealthPredictionState> {
    try {
      const result = await generateHealthPrediction(input);
      return { prediction: result, isLoading: false };
    } catch (e: any) {
      console.error("Error generating health prediction:", e);
      return { error: e.message || "Failed to generate prediction.", isLoading: false };
    }
}
