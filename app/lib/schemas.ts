import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
  inquiryType: z.enum(['corporate', 'local'])
});

export const corporateContactSchema = contactSchema.extend({
  company: z.string().min(2, 'Company is required for corporate inquiries')
});

export const newsletterSchema = z.object({
  email: z.string().email()
});
