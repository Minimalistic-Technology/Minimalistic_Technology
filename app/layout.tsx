import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minimalistic Technology",
  description:
    "Minimalistic Technology provides cutting-edge digital solutions with a focus on simplicity, elegance, and performance. Discover how we bring ideas to life through minimal design and powerful tech.",
  keywords: [
    "Minimalistic Technology",
    "web development",
    "tech solutions",
    "digital agency",
    "minimal design",
    "UI/UX",
    "Next.js developers",
    "technology services",
    "React developers",
    "custom software development",
    "modern web apps",
    "responsive web design",
    "frontend development",
    "full stack development",
    "startup tech partner",
    "creative tech agency",
    "JavaScript experts",
    "performance optimization",
    "SEO-friendly websites",
    "clean design",
    "product design",
    "motion UI",
    "Framer Motion",
    "TypeScript developers",
    "SaaS development",
    "progressive web apps",
    "digital transformation",
    "cloud-first applications",
  ],
  authors: [
    {
      name: "Minimalistic Technology",
      url: "https://www.minimalistictechnology.com/",
    },
  ],
  creator: "Minimalistic Technology",
  metadataBase: new URL("https://www.minimalistictechnology.com"),
  openGraph: {
    title: "Minimalistic Technology",
    description:
      "Discover beautifully minimal, high-performance web solutions with Minimalistic Technology.",
    url: "https://www.minimalistictechnology.com",
    siteName: "Minimalistic Technology",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minimalistic Technology",
    description:
      "We build fast, elegant, and scalable web applications through minimalistic design and powerful technology.",
    creator: "@MinimalTech", // Twitter handle ?? to ask
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
