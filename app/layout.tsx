import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const primaryFont = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Swasthya Hub",
  description: "Your Healthcare Data, Connected. Secure. Actionable.",
  keywords: ["healthcare", "data", "connect", "secure", "nhdm", "india-stack"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased",
          inter.variable,
          primaryFont.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <Toaster richColors />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
