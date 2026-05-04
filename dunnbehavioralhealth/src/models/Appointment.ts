import { Schema, model, models } from "mongoose";

export interface IAppointment {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  sessionType: "in-person" | "telehealth";
  insurance?: string;
  notes?: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true },
    service: { type: String, required: true },
    preferredDate: { type: String, required: true },
    preferredTime: { type: String, required: true },
    sessionType: { type: String, enum: ["in-person", "telehealth"], default: "in-person" },
    insurance: { type: String },
    notes: { type: String },
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  },
  { timestamps: true }
);

export const Appointment = models.Appointment || model<IAppointment>("Appointment", AppointmentSchema);
