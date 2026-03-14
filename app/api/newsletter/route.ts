import { NextResponse } from 'next/server';
import { newsletterSchema } from '@/app/lib/schemas';

export async function POST(request: Request): Promise<NextResponse> {
  const json = await request.json();
  const parsed = newsletterSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ success: false, errors: parsed.error.flatten() }, { status: 400 });
  }
  return NextResponse.json({ success: true, message: 'Subscribed.' });
}
