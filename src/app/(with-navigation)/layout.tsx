import React from 'react';
import MainHeader from '../_components/header/main-header';
import '../globals.css';
import NavigationBar from './_components/navigation-bar/navigation-bar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      <main className="flex-auto overflow-auto">{children}</main>
      <NavigationBar />
    </>
  );
}
