import { NextResponse } from 'next/server';
import { corporateContactSchema } from '@/app/lib/schemas';

export async function POST(request: Request): Promise<NextResponse> {
  const json = await request.json();
  const parsed = corporateContactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ success: false, errors: parsed.error.flatten() }, { status: 400 });
  }
  return NextResponse.json({ success: true, message: 'Corporate inquiry received.' });
}
