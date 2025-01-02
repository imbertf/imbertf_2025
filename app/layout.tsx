import type { Metadata } from 'next';

import './globals.css';
import Layout from '@/components/common/Layout';
import { genosFont } from './fonts/fonts';

export const metadata: Metadata = {
  title: 'Florian Imbert - Full Stack Developer',
  description: 'Fullstack developer present in both web2 and web3 worlds.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${genosFont.className} antialiased margin-0 `}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
