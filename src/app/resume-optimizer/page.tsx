import { OptimizerClient } from './optimizer-client';

export default function ResumeOptimizerPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          AI-Powered Resume Optimizer
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Paste your project description below. Our AI will analyze it and suggest relevant SRE/DevOps keywords to help you stand out to recruiters.
        </p>
      </div>
      <OptimizerClient />
    </div>
  );
}
