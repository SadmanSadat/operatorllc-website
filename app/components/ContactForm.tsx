'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { contactSchema } from '@/app/lib/schemas';
import type { z } from 'zod';

type FormData = z.infer<typeof contactSchema>;

export default function ContactForm({ endpoint, inquiryType }: { endpoint: string; inquiryType: 'corporate' | 'local' }): JSX.Element {
  const [status, setStatus] = useState<string>('');
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { inquiryType }
  });

  const onSubmit = async (data: FormData): Promise<void> => {
    const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, inquiryType }) });
    setStatus(res.ok ? 'Message sent successfully.' : 'Unable to send your message.');
    if (res.ok) reset({ inquiryType });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 rounded-2xl border border-operator-steel/20 bg-white/5 p-4">
      <input {...register('name')} placeholder="Name" className="w-full rounded bg-white px-3 py-2 text-black" />
      <input {...register('email')} placeholder="Email" className="w-full rounded bg-white px-3 py-2 text-black" />
      <input {...register('company')} placeholder="Company (required for corporate)" className="w-full rounded bg-white px-3 py-2 text-black" />
      <textarea {...register('message')} placeholder="How can we help?" className="w-full rounded bg-white px-3 py-2 text-black" rows={4} />
      <input type="hidden" {...register('inquiryType')} value={inquiryType} />
      {(errors.name || errors.email || errors.message) && <p className="text-xs text-red-400">Please fill all required fields correctly.</p>}
      <button disabled={isSubmitting} className="rounded-full bg-operator-orange px-4 py-2 text-white">{isSubmitting ? 'Sending...' : 'Send Inquiry'}</button>
      {status && <p className="text-xs text-operator-cream">{status}</p>}
    </form>
  );
}
