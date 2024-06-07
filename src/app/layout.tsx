import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { Footer } from './layout/footer';
import { Header } from './layout/header';
import { amiko400 } from './styles/fonts';

import './globals.css';
import './styles/fonts.css';

export const metadata: Metadata = {
    title: 'TF Consulting - Elevate your projects',
    description:
        'We are a company that provides staff augmentation to software enterprises located in different parts of the world. We offer B2B contracts to allow you to hire developers from South America at a very competitive rate.',
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
                <Toaster />
            </body>
        </html>
    );
}
