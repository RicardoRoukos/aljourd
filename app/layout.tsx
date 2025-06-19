// app/layout.tsx

import "@/app/globals.css";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
<link
  href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Nunito:wght@300;400;600&display=swap"
  rel="stylesheet"
/>;

export const metadata = {
  title: "Al Jourd - Unique Mountain Camping Experience in Lebanon",
  description:
    "Experience nature's beauty in our serene camping retreat in the heart of Lebanon's mountains.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Nunito:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
