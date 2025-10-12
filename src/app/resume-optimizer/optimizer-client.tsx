'use client';

import { useFormState, useFormStatus } from 'react-dom';

import { getKeywordSuggestions } from './actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Loader2 } from 'lucide-react';
import { Label } from '@/components/ui/label';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analyzing...
        </>
      ) : (
        'Generate Keywords'
      )}
    </Button>
  );
}

export function OptimizerClient() {
  const [state, formAction] = useFormState(getKeywordSuggestions, {
    status: 'idle',
    message: '',
    suggestions: null,
    errors: null,
  });

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <form action={formAction} className="space-y-4">
            <div>
              <Label htmlFor="projectDescription" className="sr-only">Project Description</Label>
              <Textarea
                id="projectDescription"
                name="projectDescription"
                placeholder="e.g., Developed a scalable microservices architecture on Kubernetes, utilizing Terraform for infrastructure-as-code and a CI/CD pipeline for automated deployments..."
                rows={8}
              />
              {state.errors?.projectDescription && (
                <p className="text-sm text-destructive mt-2">{state.errors.projectDescription[0]}</p>
              )}
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
      
      {state.status !== 'idle' && (
        <div className="mt-8">
          {state.status === 'success' && state.suggestions && state.suggestions.length > 0 && (
            <Card className="bg-accent/20 border-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-accent">
                  <Lightbulb />
                  Suggested Keywords
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {state.suggestions.map((keyword, index) => (
                    <Badge key={index} variant="default" className="bg-accent text-accent-foreground hover:bg-accent/80">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {state.status === 'error' && (
             <Card className="border-destructive">
               <CardHeader>
                 <CardTitle className="text-destructive font-headline">Error</CardTitle>
               </CardHeader>
               <CardContent>
                <p>{state.message}</p>
               </CardContent>
             </Card>
          )}
        </div>
      )}
    </div>
  );
}
