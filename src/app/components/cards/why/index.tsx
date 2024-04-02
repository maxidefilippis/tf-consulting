import { TitleType } from '@/app/constants/text';
import Image from 'next/image';
import { Text } from '../../text';
import { Title } from '../../title';
import styles from './index.module.css';

interface WhyCardProps {
    icon: any;
    title: string;
    description: string;
}
export const WhyCard = ({ icon, title, description }: WhyCardProps) => {
    return (
        <article className={styles.whyCard}>
            <Image
                src={icon}
                alt={title}
                className={styles.whyCardIcon}
            />
            <Title
                type={TitleType.H3}
                text={title}
                classes={styles.whyCardTitle}
            />
            <Text
                text={description}
                classes={styles.whyCardDescription}
            />
        </article>
    );
};
