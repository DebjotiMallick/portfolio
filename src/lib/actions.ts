'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type ContactFormState = {
  status: 'success' | 'error' | null;
  message: string;
  errors: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Please correct the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would send an email or save to a database.
  console.log('New contact form submission:', validatedFields.data);

  return {
    status: 'success',
    message: 'Thank you for your message! I will get back to you soon.',
    errors: null,
  };
}
