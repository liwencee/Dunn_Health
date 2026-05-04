import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
  title: "Dunn Behavioral Health | Kingsland, GA",
  description:
    "Dunn Behavioral Health offers compassionate, evidence-based behavioral health services including individual therapy, couples counseling, family therapy, and more in Kingsland, Georgia.",
  keywords: [
    "behavioral health Kingsland GA",
    "therapy Kingsland Georgia",
    "counseling Camden County GA",
    "mental health services Kingsland",
    "couples therapy Georgia",
    "family counseling Kingsland",
    "anxiety depression treatment GA",
    "Dunn Behavioral Health",
  ],
  openGraph: {
    title: "Dunn Behavioral Health | Kingsland, GA",
    description:
      "Compassionate behavioral health services for individuals, couples, and families in Kingsland, Georgia. Book your appointment today.",
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
      </body>
    </html>
  );
}
