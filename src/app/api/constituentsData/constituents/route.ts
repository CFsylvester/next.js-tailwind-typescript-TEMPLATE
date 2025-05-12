import { NextResponse } from 'next/server';
import {
  getConstituentByEmail,
  removeConstituent,
} from '@/models/ConstituentsData/lib/queries/constituents';

import {
  createConstituent,
  updateConstituent,
  getAllConstituents,
} from '@/controllers/ConstituentsData/constituents';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const email = url.searchParams.get('email');

  if (email) {
    const row = await getConstituentByEmail(email); // optional: wrap in controller
    return NextResponse.json(row);
  }

  const all = await getAllConstituents(); // ← this is the camelCase one
  return NextResponse.json(all);
}

export async function POST(req: Request) {
  try {
    const input = await req.json();
    const created = await createConstituent(input);
    return NextResponse.json(created, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function PUT(req: Request) {
  try {
    const { email, ...updates } = await req.json();
    const updated = await updateConstituent(email, updates);
    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function DELETE(req: Request) {
  const { email } = await req.json();
  await removeConstituent(email);
  return NextResponse.json(null, { status: 204 });
}
