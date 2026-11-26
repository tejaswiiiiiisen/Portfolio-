import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tejaswi Sen | Full-Stack & Creative Developer",
  description:
    "Portfolio of Tejaswi Sen, a developer focused on building applications, designing APIs, integrating modern technologies, and creating reliable solutions.",
  keywords: ["Tejaswi Sen", "MERN Stack", "Next.js", "React", "Node.js", "Full-Stack Developer", "Creative Developer"],
  authors: [{ name: "Tejaswi Sen", url: "https://tejaswisen.dev" }],
  openGraph: {
    title: "Tejaswi Sen — Developer Portfolio",
    description: "Building applications, designing APIs, and creating reliable solutions through clean code.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#030303] text-[#ededed] antialiased selection:bg-sky-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
