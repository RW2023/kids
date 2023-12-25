'use client';
import React from 'react';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { usePathname } from 'next/navigation'; // Import only usePathname

// Define a type for the component's props
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname(); // Use usePathname hook

  const isHomepage = pathname === '/';

  return (
    <html lang="en" data-theme="dim">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {!isHomepage && <Navbar />}
        {children}
      </body>
      <Footer />
    </html>
  );
}
