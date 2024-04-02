import { Logo } from '@/app/components/logo';
import { amiko700 } from '@/app/styles/fonts';
import Link from 'next/link';
import styles from './index.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <nav className={`${styles.nav} ${amiko700.className}`}>
                <Link href={'#about'}>About us</Link>
                <Link href={'#services'}>Services</Link>
                <Link href={'#contact'}>Contact</Link>
            </nav>
        </header>
    );
};
