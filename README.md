# Canine Health Insights

This is a Next.js 14 (App Router) full-stack website presenting a group research project titled “Identifying Healthy Canine Tongue Characteristics Using Machine Learning Techniques.”

## Features

*   **Homepage:** Introduction, abstract, and CTAs.
*   **About Page:** Project motivation, problem, objectives, and scope.
*   **Methodology Page:** Details on image collection, preprocessing, feature extraction, and model training.
*   **System Architecture Page:** Overview of system modules.
*   **Results Page:** Evaluation metrics, confusion matrix (placeholder), and limitations.
*   **Literature Review Page:** Summary of relevant references.
*   **Team Page:** Profiles of students and supervisors.
*   **Future Work Page:** Potential improvements and development plans.
*   **Demo Page:** Image upload for mock classification using a GenAI model.
*   **Contact Page:** Contact form and social/email links.
*   **Responsive Design:** Optimized for mobile, tablet, and desktop.
*   **Dark Mode:** Toggle for light/dark theme.
*   **SEO:** Basic SEO tags implemented.

## Tech Stack

*   Next.js 14 (App Router)
*   React
*   TypeScript
*   Tailwind CSS
*   Shadcn/ui (for some UI components)
*   Lucide React (for icons)
*   Firebase (for potential backend services like Firestore, Storage, and Hosting)
*   Genkit (for AI flow execution)

## Getting Started

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm, yarn, or pnpm

### Local Development Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd canine-health-insights
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    Copy the `.env.example` file to a new file named `.env.local`:
    ```bash
    cp .env.example .env.local
    ```
    Fill in your Firebase project configuration details in `.env.local`. You can get these from your Firebase project settings in the Firebase console.
    If you plan to run or develop Genkit flows locally that use Google AI, also add your `GOOGLE_API_KEY`.

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    The application should now be running on [http://localhost:9002](http://localhost:9002) (or the port specified in your `package.json` dev script).

### Genkit AI Flows (Optional Local Dev)

If you need to run or test the Genkit AI flows locally (e.g., the tongue health prediction):

1.  Ensure you have `GOOGLE_API_KEY` in your `.env.local` if your flows use Google AI models.
2.  In a separate terminal, run the Genkit development server:
    ```bash
    npm run genkit:dev
    # or
    # npm run genkit:watch (to watch for changes in AI flows)
    ```
    This will start the Genkit developer UI, typically on `http://localhost:4000`.

## Building for Production

To create a production build:
```bash
npm run build
# or
yarn build
# or
pnpm build
```
This will create an optimized build in the `.next` folder.

## Deployment to Firebase Hosting

1.  **Install Firebase CLI:**
    If you haven't already, install the Firebase CLI globally:
    ```bash
    npm install -g firebase-tools
    ```

2.  **Login to Firebase:**
    ```bash
    firebase login
    ```

3.  **Initialize Firebase in your project (if not already done):**
    It's recommended to connect your local project to your Firebase project.
    ```bash
    firebase init hosting
    ```
    *   Select "Use an existing project" and choose your Firebase project.
    *   For your public directory, enter `.next` (or configure rewrites for Next.js if using SSR with Cloud Functions/App Hosting - this starter is configured for App Hosting).
    *   Configure as a single-page app (SPA): **No** (Next.js handles routing).
    *   Set up automatic builds and deploys with GitHub: **Optional**.

    This project is pre-configured with `apphosting.yaml` for Firebase App Hosting.

4.  **Deploy to Firebase App Hosting:**
    Ensure your project is linked to a Firebase project with App Hosting enabled.
    Commit your changes to your Git repository and push to a connected branch (e.g., `main`).
    Firebase App Hosting will automatically build and deploy your Next.js application based on `apphosting.yaml`.

    Alternatively, for manual deploys (if not using Git-connected deploys):
    ```bash
    firebase deploy --only hosting
    ```
    Or, if specifically using App Hosting and want to trigger a build from CLI (ensure your backend is setup in Firebase Console):
    This usually relies on `firebase apphosting:backends:create` and then Git pushes.
    The `apphosting.yaml` file suggests this project is intended for Firebase App Hosting, which typically uses Git-based deployments.

## Customization

*   **Theme:** Colors and fonts can be customized in `src/app/globals.css` and `tailwind.config.ts`.
*   **Content:** Update page content directly in the `src/app/**/page.tsx` files.
*   **Team Members & Navigation:** Modify data in `src/lib/constants.ts`.
*   **Firebase Integration:** Update Firebase configuration in `src/lib/firebase.ts` and `.env.local`. Extend server actions in `src/app/actions.ts` to interact with Firestore or other Firebase services.

## Code Structure

*   `src/app/`: Contains all routes (pages) and layout files, following Next.js App Router conventions.
    *   `layout.tsx`: Root layout.
    *   `page.tsx`: Homepage.
    *   `**/page.tsx`: Individual pages for different sections.
    *   `actions.ts`: Server actions for form submissions, etc.
*   `src/components/`: Reusable React components.
    *   `ui/`: Shadcn/ui components.
*   `src/lib/`: Utility functions, constants, Firebase config.
*   `src/ai/`: Genkit AI flows and configuration.
    *   `flows/`: Specific AI business logic.
*   `public/`: Static assets (images, etc.).

Feel free to explore and modify the code to suit your project's needs.
