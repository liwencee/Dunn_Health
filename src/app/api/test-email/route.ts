import { NextResponse } from "next/server";
import { sendAppointmentEmail } from "@/lib/email";

// Test endpoint — visit /api/test-email to verify email is working
// Remove this file after confirming emails work
export async function GET() {
  try {
    await sendAppointmentEmail({
      name: "Test Client",
      email: "info@dunnbehavioralhealth.us",
      phone: "+1 (252) 245-2590",
      service: "Individual Therapy",
      sessionType: "in-person",
      preferredDate: "05/20/2026",
      preferredTime: "10:00 AM",
      notes: "This is a test email to verify the chatbox email setup is working.",
    });
    return NextResponse.json({ success: true, message: "Test email sent to info@dunnbehavioralhealth.us" });
  } catch (err) {
    const error = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
