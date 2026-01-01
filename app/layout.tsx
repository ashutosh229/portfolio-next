import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ClientProviders } from "./provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashutosh's Portfolio",
  description:
    "Full Stack Developer & AI Enthusiast - Portfolio showcasing projects, skills, and experience",
  openGraph: {
    title: "Ashutosh's Portfolio",
    description: "Full Stack Developer & AI Enthusiast",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ashutoshkj0390",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  icons: {
    icon: "/favicons/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.jpeg" sizes="any" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        ></link>
      </head>
      <body className={inter.className}>
        <ClientProviders>
          <div className="app-container">{children}</div>
        </ClientProviders>
      </body>
    </html>
  );
}
