import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Contact } from "@/models/Contact";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, service } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    await connectToDatabase();

    const contact = await Contact.create({ name, email, phone, message, service });

    return NextResponse.json({ success: true, id: contact._id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to submit message." }, { status: 500 });
  }
}
