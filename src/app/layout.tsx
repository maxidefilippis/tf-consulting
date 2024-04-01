import type { Metadata } from 'next';
import { Footer } from './layout/footer';
import { Header } from './layout/header';
import { amiko400 } from './styles/fonts';

import './globals.css';
import './styles/fonts.css';

export const metadata: Metadata = {
    title: 'TF Consulting',
    description: 'Elevate Your Projects with TF Consulting LLC. We are your passport to unlock unparalleled excellence in development.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={amiko400.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
