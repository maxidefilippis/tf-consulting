import { Text } from '@/app/components/text';
import Image from 'next/image';
import more from '../../../../../public/icons/more.svg';
import styles from './index.module.css';

interface ServiceCardProps {
    number: string;
    title: string;
}
export const ServiceCard = ({ number, title }: ServiceCardProps) => {
    return (
        <article className={styles.serviceCard}>
            <Text
                text={number}
                classes={styles.serviceCardNumber}
            />
            <Text
                text={title}
                classes={styles.serviceCardText}
            />
            <div className={styles.serviceCardMore}>
                <Image
                    src={more}
                    alt={'See more'}
                />
            </div>
        </article>
    );
};
