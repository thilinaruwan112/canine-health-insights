import type { Metadata } from 'next';
import { Inter, PT_Sans, Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});
const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-source-code-pro',
});

export const metadata: Metadata = {
  title: {
    default: 'Canine Health Insights',
    template: '%s | Canine Health Insights',
  },
  description: 'A research project on identifying healthy canine tongue characteristics using machine learning techniques.',
  openGraph: {
    title: 'Canine Health Insights',
    description: 'A research project on identifying healthy canine tongue characteristics using machine learning techniques.',
    url: 'https://your-app-url.com', // Replace with your actual URL
    siteName: 'Canine Health Insights',
    images: [
      {
        url: 'https://placehold.co/1200x630.png?text=Canine+Health+Insights', // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'Canine Health Insights OG Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canine Health Insights',
    description: 'A research project on identifying healthy canine tongue characteristics using machine learning techniques.',
    images: ['https://placehold.co/1200x630.png?text=Canine+Health+Insights'], // Replace with your actual OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Keeping existing font links as per guidelines, though next/font is typically preferred */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${ptSans.variable} ${sourceCodePro.variable} font-body antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
