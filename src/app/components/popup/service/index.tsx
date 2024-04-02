import Image, { StaticImageData } from 'next/image';
import { Text } from '@/app/components/text';
import styles from './index.module.css';
import closeIcon from '/public/icons/close.svg';
import { amiko400 } from '@/app/styles/fonts';

interface ServicePopUpProps {
    number: string;
    title: string;
    description: string;
    image: StaticImageData;
    onClosePopUp: () => void;
}
export const ServicePopUp = ({ number, title, description, image, onClosePopUp }: ServicePopUpProps) => {
    return (
        <>
            <article className={styles.servicePopUp}>
                <Image
                    className={styles.servicePopUpClose}
                    src={closeIcon}
                    alt="close"
                    onClick={onClosePopUp}
                />
                <div className={styles.servicePopUpTitle}>
                    <Text
                        text={number}
                        classes={styles.servicePopUpNumber}
                    />
                    <Text
                        text={title}
                        classes={styles.servicePopUpText}
                    />
                </div>
                <div className={styles.servicePopUpContent}>
                    <Text
                        text={description}
                        classes={`${styles.servicePopUpDescription} ${amiko400.className}`}
                    />
                    <Image
                        className={styles.servicePopUpImage}
                        src={image}
                        alt={title}
                    />
                </div>
            </article>
            <div className={styles.servicePopUpOverlay} />
        </>
    );
};
