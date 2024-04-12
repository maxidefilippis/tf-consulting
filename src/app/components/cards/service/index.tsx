'use client';
import { ServicePopUp } from '@/app/components/popup/service';
import { Text } from '@/app/components/text';
import Image from 'next/image';
import { useState } from 'react';
import styles from './index.module.css';
import more from '/public/icons/more.svg';

interface ServiceCardProps {
    number: string;
    title: string;
    description: string;
    image: string;
}
export const ServiceCard = ({ number, title, description, image }: ServiceCardProps) => {
    const [showPopUp, setShowPopUp] = useState<boolean>(false);

    const handleShowPopUp = () => setShowPopUp(!showPopUp);

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
            <div
                className={styles.serviceCardMore}
                onClick={handleShowPopUp}
            >
                <Image
                    src={more}
                    alt={'see more'}
                />
            </div>
            {showPopUp && (
                <ServicePopUp
                    number={number}
                    title={title}
                    description={description}
                    image={image}
                    onClosePopUp={handleShowPopUp}
                />
            )}
        </article>
    );
};
