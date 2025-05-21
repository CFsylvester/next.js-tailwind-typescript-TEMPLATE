// import { NextResponse } from 'next/server';
// import {
//   createConstituent,
//   updateConstituent,
//   getAllConstituents,
//   getConstituentByEmail,
//   deleteConstituents,
// } from '@/controllers/constituents';

// export async function GET(req: Request) {
//   try {
//     const url = new URL(req.url);
//     const email = url.searchParams.get('email');

//     if (email) {
//       const row = await getConstituentByEmail(email);
//       return row
//         ? NextResponse.json(row)
//         : NextResponse.json({ error: 'Not found' }, { status: 404 });
//     }

//     const all = await getAllConstituents();
//     return NextResponse.json(all);
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// export async function POST(req: Request) {
//   try {
//     const input = await req.json();
//     const created = await createConstituent(input);
//     return NextResponse.json(created, { status: 201 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }

// export async function PUT(req: Request) {
//   try {
//     const { email, ...updates } = await req.json();
//     if (!email) {
//       return NextResponse.json({ error: 'Email is required for update' }, { status: 400 });
//     }
//     const updated = await updateConstituent(email, updates);
//     return NextResponse.json(updated);
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 404 });
//   }
// }

// export async function DELETE(req: Request) {
//   try {
//     const { emails } = await req.json();
//     if (!Array.isArray(emails) || emails.length === 0) {
//       return NextResponse.json({ error: 'No emails provided' }, { status: 400 });
//     }

//     const result = await deleteConstituents(emails);
//     return NextResponse.json(result, { status: 200 }); // include { success, failed }
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }
