import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GAWA — Hanap. Gawa. Tapos.",
  description:
    "Find skilled people, discover work, and rent the equipment you need. Connect, hire, and get the job done with GAWA.",
  icons: {
    icon: "/gawa-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
