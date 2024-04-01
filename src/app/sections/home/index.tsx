import { Button } from '@/app/components/button';
import { Text } from '@/app/components/text';
import { Title } from '@/app/components/title';
import { TitleType } from '@/app/constants/text';
import { amiko700 } from '@/app/styles/fonts';
import Image from 'next/image';
import computer from '/public/images/computer.png';
import styles from './index.module.css';

export const HomeSection = () => {
    return (
        <section className={styles.home}>
            <div className={styles.homeText}>
                <Title
                    type={TitleType.H1}
                    text="Elevate Your Projects with TF Consulting LLC"
                />
                <Text text="Seeking a game-changing boost for your software projects? Look no further than TF Consulting LLC! We are your passport to unlock unparalleled excellence in development." />
                <Button
                    text={'CONTACT US'}
                    classes={amiko700.className}
                />
            </div>
            <div className={styles.homeImage}>
                <Image
                    src={computer}
                    alt="Elevate Your Projects"
                    width={900}
                />
            </div>
        </section>
    );
};