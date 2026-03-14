import { NextResponse } from 'next/server';
import { contactSchema } from '@/app/lib/schemas';

export async function POST(request: Request): Promise<NextResponse> {
  const json = await request.json();
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ success: false, errors: parsed.error.flatten() }, { status: 400 });
  }
  return NextResponse.json({ success: true, message: 'Local inquiry received.' });
}
