import { Button } from '@/app/components/button';
import { Text } from '@/app/components/text';
import { Title } from '@/app/components/title';
import { appointments } from '@/app/constants/globals';
import { TitleType } from '@/app/constants/text';
import { amiko700 } from '@/app/styles/fonts';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import computer from '/public/images/computer.svg';

export const HomeSection = () => {
    return (
        <section className={styles.home}>
            <div className={styles.homeText}>
                <Title
                    type={TitleType.H1}
                    classes={styles.homeTitle}
                    text="Elevate Your Projects with TF Consulting LLC"
                />
                <Text text="Seeking a game-changing boost for your software projects? Look no further than TF Consulting LLC! We are your passport to unlock unparalleled excellence in development." />
                <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href={appointments}
                >
                    <Button
                        text={'BOOK A CALL'}
                        classes={amiko700.className}
                    />
                </Link>
            </div>
            <div className={styles.homeImageContainer}>
                <Image
                    src={computer}
                    alt="Elevate Your Projects"
                    className={styles.homeImage}
                />
            </div>
        </section>
    );
};
