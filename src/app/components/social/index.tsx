import Image from 'next/image';
import { Text } from '../text';
import styles from './index.module.css';

interface SocialProps {
    icon: any;
    red: string;
    linkName: string;
    linkAction: string;
}
export const Social = ({ icon, red, linkName, linkAction }: SocialProps) => {
    return (
        <div className={styles.social}>
            <Image
                src={icon}
                alt={red}
                className={styles.socialImage}
            />
            <div className={styles.socialDescription}>
                <Text
                    text={red}
                    classes={styles.socialName}
                />
                <Text
                    text={linkName}
                    classes={styles.socialLink}
                />
            </div>
        </div>
    );
};
