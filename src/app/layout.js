"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SelectedMovieProvider } from "@/hooks";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix Clone with Next.js" />
      </head>
      <QueryClientProvider client={queryClient}>
        <SelectedMovieProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </body>
        </SelectedMovieProvider>
      </QueryClientProvider>
    </html>
  );
}
