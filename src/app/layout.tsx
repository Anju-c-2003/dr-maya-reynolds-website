import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
  description:
    "Warm, grounded, evidence-based therapy for adults in Santa Monica, California and statewide California telehealth. Specializing in anxiety, panic, trauma, EMDR, burnout, and perfectionism.",
  keywords: [
    "Therapist in Santa Monica, California",
    "Anxiety therapy in Santa Monica",
    "Trauma-informed therapy for adults",
    "Online therapy for California residents",
    "EMDR therapy Santa Monica",
    "Burnout psychologist California",
  ],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist | Santa Monica, CA",
    description:
      "Warm, collaborative, and grounded therapy for adults navigating anxiety, panic, trauma, and professional burnout. In-person in Santa Monica and secure California telehealth.",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%235E8A85'/><text x='50%' y='58%' dominant-baseline='middle' text-anchor='middle' font-family='serif' font-size='50' fill='%23ffffff'>M</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/fsc1wsd.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,700&family=Mulish:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#FAF8F5] text-brand-dark selection:bg-brand-sand selection:text-brand-dark">
        {children}
      </body>
    </html>
  );
}
