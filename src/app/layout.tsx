'use client';
import React from 'react';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { usePathname } from 'next/navigation'; // Import only usePathname
import { SpeedInsights } from '@vercel/speed-insights/next';

// Define a type for the component's props
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname(); // Use usePathname hook

  const isHomepage = pathname === '/';

  return (
    <html lang="en" data-theme="sunset">
      <head>
        <title>Chore Tracker</title>
        <meta
          name="description"
          content="Chore Tracker chores management app for kids"
        />
        <meta name="theme-color" content="#000" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body>
        {!isHomepage && <Navbar />}
        {children}
        <SpeedInsights />
      </body>
      <Footer />
    </html>
  );
}
