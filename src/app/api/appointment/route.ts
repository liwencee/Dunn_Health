import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Appointment } from "@/models/Appointment";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, preferredDate, preferredTime, sessionType, insurance, notes } = body;

    if (!name || !email || !phone || !service || !preferredDate || !preferredTime) {
      return NextResponse.json({ error: "All required fields must be filled." }, { status: 400 });
    }

    await connectToDatabase();

    const appointment = await Appointment.create({
      name, email, phone, service, preferredDate, preferredTime,
      sessionType: sessionType || "in-person",
      insurance, notes,
    });

    return NextResponse.json({ success: true, id: appointment._id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to book appointment." }, { status: 500 });
  }
}
