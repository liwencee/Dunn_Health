import mongoose, { Schema, model, models } from "mongoose";

export interface IContact {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, trim: true },
    message: { type: String, required: true },
    service: { type: String },
  },
  { timestamps: true }
);

export const Contact = models.Contact || model<IContact>("Contact", ContactSchema);
