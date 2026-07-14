import { NextRequest, NextResponse } from "next/server";
import { sendIntakeEmail, type IntakeSection } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, sections } = body as {
      name?: string;
      email?: string;
      phone?: string;
      sections?: IntakeSection[];
    };

    if (!name || !email || !Array.isArray(sections) || sections.length === 0) {
      return NextResponse.json(
        { error: "Name, email, and form data are required." },
        { status: 400 }
      );
    }

    await sendIntakeEmail({ name, email, phone: phone || "", sections });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("Intake error:", err);
    return NextResponse.json({ error: "Failed to submit intake form." }, { status: 500 });
  }
}
