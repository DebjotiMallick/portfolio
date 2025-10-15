'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/components/emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.RESEND_TO_EMAIL;

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
  
  if (!toEmail) {
    console.error('RESEND_TO_EMAIL is not set');
    return {
      status: 'error',
      message: 'Server configuration error. Please try again later.',
      errors: null,
    };
  }

  try {
    const { name, email, message } = validatedFields.data;
    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: toEmail,
      subject: 'New message from your portfolio',
      reply_to: email,
      react: ContactFormEmail({ name, email, message }),
    });

    return {
      status: 'success',
      message: 'Thank you for your message! I will get back to you soon.',
      errors: null,
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      status: 'error',
      message: 'Something went wrong. Please try again.',
      errors: null,
    };
  }
}
