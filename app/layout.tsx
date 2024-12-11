import type { Metadata } from 'next';
import Provider from '../components/Provider/Provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Test Page',
  description: 'Тестовое задание frontend',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
