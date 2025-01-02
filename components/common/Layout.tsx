'use client';
import React from 'react';
import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:px-[10%] lg:px-[12%] xl:px-[15%] 2xl:px-[23%]">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
