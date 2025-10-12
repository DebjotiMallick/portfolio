'use server';

import { resumeKeywordSuggestions } from '@/ai/flows/resume-keyword-suggestions';
import { z } from 'zod';

const schema = z.object({
  projectDescription: z.string().min(20, "Project description must be at least 20 characters long."),
});

type OptimizerState = {
  status: 'success' | 'error' | 'idle';
  message: string;
  suggestions: string[] | null;
  errors: {
    projectDescription?: string[];
  } | null;
}

export async function getKeywordSuggestions(prevState: OptimizerState, formData: FormData): Promise<OptimizerState> {
  const validatedFields = schema.safeParse({
    projectDescription: formData.get('projectDescription'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Invalid input.',
      suggestions: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await resumeKeywordSuggestions({
      projectDescription: validatedFields.data.projectDescription,
    });
    
    const keywords = result.keywordSuggestions.split(',').map(k => k.trim()).filter(Boolean);

    return {
      status: 'success',
      message: 'Suggestions generated successfully!',
      suggestions: keywords,
      errors: null,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 'error',
      message: 'An unexpected error occurred while generating suggestions. Please try again.',
      suggestions: null,
      errors: null,
    };
  }
}
