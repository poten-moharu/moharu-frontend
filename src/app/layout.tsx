import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import Header from './_components/header/header';
import NavigationBar from './_components/navigation-bar/navigation-bar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '모하루',
  description:
    '휴일이나 여가시간에 즐길 수 있는 오프라인 취미 활동 추천 서비스',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} relative mx-auto flex h-full max-w-md flex-col shadow-md`}
      >
        <Header />
        <div className="flex-auto overflow-auto">{children}</div>
        <NavigationBar />
      </body>
    </html>
  );
}
