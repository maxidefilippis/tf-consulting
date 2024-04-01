import { Logo } from '@/app/components/logo';
import { Text } from '@/app/components/text';
import { amiko700 } from '@/app/styles/fonts';
import styles from './index.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <nav className={`${styles.nav} ${amiko700.className}`}>
                <Text text="About us" />
                <Text text="Services" />
                <Text text="Contact" />
            </nav>
        </header>
    );
};
