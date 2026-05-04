import { NextRequest, NextResponse } from "next/server";
import { sendAppointmentEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, preferredDate, preferredTime, sessionType, notes } = body;

    if (!name || !email || !phone || !service || !preferredDate || !preferredTime) {
      return NextResponse.json({ error: "All required fields must be filled." }, { status: 400 });
    }

    await sendAppointmentEmail({
      name, email, phone, service, notes,
      sessionType: sessionType || "in-person",
      preferredDate, preferredTime,
    });

    // Save to MongoDB if available (non-blocking)
    try {
      const { connectToDatabase } = await import("@/lib/mongodb");
      const { Appointment } = await import("@/models/Appointment");
      await connectToDatabase();
      await Appointment.create({
        name, email, phone, service, preferredDate, preferredTime,
        sessionType: sessionType || "in-person",
        notes,
      });
    } catch {
      // MongoDB unavailable — email already sent, continue
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("Appointment error:", err);
    return NextResponse.json({ error: "Failed to book appointment." }, { status: 500 });
  }
}
