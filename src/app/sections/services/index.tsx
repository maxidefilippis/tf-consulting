import { ServiceCard } from '@/app/components/cards/service';
import { Title } from '@/app/components/title';
import { TitleType } from '@/app/constants/text';
import styles from './index.module.css';

export const ServicesSection = () => {
    return (
        <>
            <section
                id="services"
                className={styles.services}
            >
                <Title
                    text={'SERVICES'}
                    type={TitleType.H2}
                />
                <ServiceCard
                    number="01"
                    title="Staff Augmentation"
                />
                <ServiceCard
                    number="02"
                    title="Team Assembly for Specific Projects"
                />
            </section>
        </>
    );
};
