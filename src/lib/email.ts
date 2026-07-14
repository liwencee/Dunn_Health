import nodemailer from "nodemailer";

const ADMIN_EMAIL = "info@dunnbehavioralhealth.us";

// Titan Email (Hostinger) SMTP transporter.
// Set EMAIL_USER / EMAIL_PASS in your environment (see .env.local.example).
// EMAIL_USER should be a real mailbox created in hPanel (e.g. info@dunnbehavioralhealth.us).
// NOTE: this mailbox is a Titan Email account, so the host is smtp.titan.email
// (NOT smtp.hostinger.com — that one returns "535 authentication failed").
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.titan.email",
    port: Number(process.env.EMAIL_PORT) || 465,
    secure: true, // SSL on port 465
    auth: {
      user: process.env.EMAIL_USER || ADMIN_EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });
}

export interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  service: string;
  sessionType: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export async function sendAppointmentEmail(data: AppointmentData) {
  const transporter = createTransporter();
  const fromAddress = process.env.EMAIL_USER || ADMIN_EMAIL;

  const adminHtml = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
      <div style="background:#2563EB;padding:24px 28px;">
        <h2 style="color:#fff;margin:0;font-size:1.3rem;">New Appointment Request</h2>
        <p style="color:rgba(255,255,255,0.75);margin:4px 0 0;font-size:0.9rem;">Dunn Behavioral Health</p>
      </div>
      <div style="padding:28px;">
        <table style="width:100%;border-collapse:collapse;">
          ${[
            ["Client Name", data.name],
            ["Email", data.email],
            ["Phone", data.phone],
            ["Service Requested", data.service],
            ["Session Type", data.sessionType],
            ["Preferred Date", data.preferredDate],
            ["Preferred Time", data.preferredTime],
            ["Notes", data.notes || "None"],
          ].map(([label, value]) => `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#718096;font-size:0.85rem;width:40%;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;">${label}</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#2d3748;font-size:0.92rem;">${value}</td>
            </tr>
          `).join("")}
        </table>
        <div style="margin-top:24px;padding:16px;background:#f7f9fc;border-radius:6px;font-size:0.85rem;color:#718096;">
          Reply to this email or call the client at <strong>${data.phone}</strong> to confirm their appointment.
        </div>
      </div>
    </div>
  `;

  const clientHtml = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
      <div style="background:#2563EB;padding:24px 28px;">
        <h2 style="color:#fff;margin:0;font-size:1.3rem;">Appointment Request Received</h2>
        <p style="color:rgba(255,255,255,0.75);margin:4px 0 0;font-size:0.9rem;">Dunn Behavioral Health</p>
      </div>
      <div style="padding:28px;">
        <p style="color:#2d3748;font-size:1rem;">Hi <strong>${data.name.split(" ")[0]}</strong>,</p>
        <p style="color:#4a5568;line-height:1.7;">Thank you for reaching out to Dunn Behavioral Health. I've received your appointment request and will be in touch shortly to confirm your booking.</p>
        <div style="background:#f7f9fc;border-left:4px solid #9333EA;padding:16px 20px;border-radius:0 6px 6px 0;margin:20px 0;">
          <p style="margin:0 0 8px;font-weight:700;color:#2563EB;">Your Request Summary</p>
          <p style="margin:4px 0;color:#4a5568;font-size:0.9rem;"><strong>Service:</strong> ${data.service}</p>
          <p style="margin:4px 0;color:#4a5568;font-size:0.9rem;"><strong>Date:</strong> ${data.preferredDate} at ${data.preferredTime}</p>
          <p style="margin:4px 0;color:#4a5568;font-size:0.9rem;"><strong>Type:</strong> ${data.sessionType}</p>
        </div>
        <p style="color:#4a5568;line-height:1.7;">If you have any questions, please contact us:</p>
        <p style="color:#4a5568;">
          <strong>📞</strong> <a href="tel:+19128485335" style="color:#2563EB;">(912) 848-5335</a><br/>
          <strong>✉️</strong> <a href="mailto:${ADMIN_EMAIL}" style="color:#2563EB;">${ADMIN_EMAIL}</a>
        </p>
        <p style="color:#718096;font-size:0.85rem;margin-top:24px;border-top:1px solid #e2e8f0;padding-top:16px;">
          © ${new Date().getFullYear()} Dunn Behavioral Health · 140 The Lakes Blvd Suite 218, Kingsland GA 31548
        </p>
      </div>
    </div>
  `;

  await Promise.all([
    transporter.sendMail({
      from: `Dunn Behavioral Health <${fromAddress}>`,
      to: ADMIN_EMAIL,
      replyTo: data.email,
      subject: `New Appointment Request — ${data.name} (${data.service})`,
      html: adminHtml,
    }),
    transporter.sendMail({
      from: `Dunn Behavioral Health <${fromAddress}>`,
      to: data.email,
      subject: "We received your appointment request — Dunn Behavioral Health",
      html: clientHtml,
    }),
  ]);
}
