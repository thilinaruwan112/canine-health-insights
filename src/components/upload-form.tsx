
"use client";

import { useState, useRef, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, UploadCloud, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { getHealthPrediction, type HealthPredictionState } from "@/app/actions";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<HealthPredictionState | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null); // Reset result when new file is selected
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!file || !previewUrl) {
      setResult({ error: "Please select an image file.", isLoading: false });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      // Ensure previewUrl is a data URI string
      if (typeof previewUrl !== 'string' || !previewUrl.startsWith('data:')) {
        throw new Error("Invalid image data format.");
      }
      
      const predictionResult = await getHealthPrediction({ photoDataUri: previewUrl });
      setResult(predictionResult);
    } catch (e: any) {
      setResult({ error: e.message || "An unexpected error occurred.", isLoading: false });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
    setPreviewUrl(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Tongue Health Demo</CardTitle>
        <CardDescription>Upload an image of a dog&apos;s tongue to get a health prediction.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="tongue-image">Dog&apos;s Tongue Image</Label>
            <Input
              id="tongue-image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:rounded-lg file:px-3 file:py-2 file:border-0"
            />
          </div>

          {previewUrl && (
            <div className="mt-4 relative group">
              <Image
                src={previewUrl}
                alt="Tongue preview"
                width={400}
                height={300}
                className="rounded-md object-cover mx-auto border"
              />
              <Button 
                variant="destructive" 
                size="sm" 
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Remove
              </Button>
            </div>
          )}

          {isLoading && (
            <Alert className="bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300">
              <Loader2 className="h-5 w-5 animate-spin mr-2" />
              <AlertTitle>Processing...</AlertTitle>
              <AlertDescription>
                Analyzing the image. This may take a moment.
              </AlertDescription>
            </Alert>
          )}

          {result && !isLoading && (
            <div className="mt-6">
              {result.error && ( // Handle action errors first
                <Alert variant="destructive">
                  <XCircle className="h-5 w-5" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{result.error}</AlertDescription>
                </Alert>
              )}
              {result.prediction && !result.error && ( // Only show prediction if no action error
                <>
                  {result.prediction.isDogTongue && result.prediction.healthPrediction ? (
                    <Alert
                      className={`${
                        result.prediction.healthPrediction === "Healthy"
                          ? "bg-green-50 border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300"
                          : "bg-yellow-50 border-yellow-300 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-700 dark:text-yellow-300"
                      }`}
                    >
                      {result.prediction.healthPrediction === "Healthy" ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <AlertTriangle className="h-5 w-5" />
                      )}
                      <AlertTitle>Prediction Result</AlertTitle>
                      <AlertDescription>
                        The predicted tongue health is: <span className="font-bold">{result.prediction.healthPrediction}</span>.
                        {result.prediction.analysisNotes && (
                          <p className="text-sm mt-1">Notes: {result.prediction.analysisNotes}</p>
                        )}
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <Alert variant="default" className="bg-orange-50 border-orange-200 text-orange-700 dark:bg-orange-900/30 dark:border-orange-700 dark:text-orange-300">
                      <AlertTriangle className="h-5 w-5" />
                      <AlertTitle>Image Analysis Result</AlertTitle>
                      <AlertDescription>
                        {result.prediction.analysisNotes || "The uploaded image was not identified as a dog's tongue suitable for health prediction, or the analysis was inconclusive."}
                      </AlertDescription>
                    </Alert>
                  )}
                </>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={!file || isLoading} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Predicting...
              </>
            ) : (
              <>
                <UploadCloud className="mr-2 h-4 w-4" />
                Get Prediction
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
