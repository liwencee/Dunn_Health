import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/ui/chat-widget";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dunn Behavioral Health | Kingsland, GA & Virtual Statewide",
  description:
    "Dunn Behavioral Health, led by Maggie Dunn LPC, NCC, CPCS, offers compassionate, evidence-based individual, teen, and family therapy in Kingsland, Georgia — plus virtual sessions across GA, self-pay telehealth in NC, and border FL.",
  keywords: [
    "behavioral health Kingsland GA",
    "therapy Kingsland Georgia",
    "counseling Camden County GA",
    "mental health services Kingsland",
    "TF-CBT therapist Georgia",
    "family counseling Kingsland",
    "anxiety depression treatment GA",
    "clinical supervision LPC Georgia",
    "Dunn Behavioral Health",
  ],
  openGraph: {
    title: "Dunn Behavioral Health | Kingsland, GA & Virtual Statewide",
    description:
      "Compassionate, evidence-based therapy for individuals, teens, and families in Kingsland, Georgia — and virtually across GA, NC, and border FL. Book your appointment today.",
    url: "https://dunnbehavioralhealth.us",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${nunito.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
