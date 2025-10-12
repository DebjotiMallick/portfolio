'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting resume keyword improvements based on project descriptions.
 *
 * The flow takes a project description as input and returns suggestions for improvement.
 * - resumeKeywordSuggestions - A function that handles the resume keyword suggestions process.
 * - ResumeKeywordSuggestionsInput - The input type for the resumeKeywordSuggestions function.
 * - ResumeKeywordSuggestionsOutput - The return type for the resumeKeywordSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeKeywordSuggestionsInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The description of the project for which to suggest keywords.'),
});
export type ResumeKeywordSuggestionsInput = z.infer<
  typeof ResumeKeywordSuggestionsInputSchema
>;

const ResumeKeywordSuggestionsOutputSchema = z.object({
  keywordSuggestions: z
    .string()
    .describe(
      'A list of keyword suggestions to improve the project description for better job applications.'
    ),
});
export type ResumeKeywordSuggestionsOutput = z.infer<
  typeof ResumeKeywordSuggestionsOutputSchema
>;

export async function resumeKeywordSuggestions(
  input: ResumeKeywordSuggestionsInput
): Promise<ResumeKeywordSuggestionsOutput> {
  return resumeKeywordSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'resumeKeywordSuggestionsPrompt',
  input: {schema: ResumeKeywordSuggestionsInputSchema},
  output: {schema: ResumeKeywordSuggestionsOutputSchema},
  prompt: `You are an AI resume optimization tool. Your goal is to analyze a project description and suggest keywords that would improve its chances of matching relevant job descriptions.

  Project Description: {{{projectDescription}}}

  Suggest keywords that are commonly found in SRE and DevOps job descriptions that would be relevant to this project. Provide only the keywords, comma separated.`,
});

const resumeKeywordSuggestionsFlow = ai.defineFlow(
  {
    name: 'resumeKeywordSuggestionsFlow',
    inputSchema: ResumeKeywordSuggestionsInputSchema,
    outputSchema: ResumeKeywordSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
