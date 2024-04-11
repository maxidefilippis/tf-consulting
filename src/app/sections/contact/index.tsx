import { Button } from '@/app/components/button';
import { Text } from '@/app/components/text';
import { Title } from '@/app/components/title';
import { TitleType } from '@/app/constants/text';
import { amiko700 } from '@/app/styles/fonts';
import Link from 'next/link';
import styles from './index.module.css';

export const ContactUsSection = () => {
    return (
        <section
            id="contact"
            className={styles.contactUs}
        >
            <Title
                classes={styles.contactUsTitle}
                type={TitleType.H3}
                text={'Experience the TF Consulting LLC Edge'}
            />
            <Text
                classes={styles.contactUsDescription}
                text={`Ready to witness a transformation in your software journey? Join hands with TF Consulting LLC and open doors to innovation, expertise, and unparalleled triumph. Let's shape the future together.`}
            />
            <Text
                classes={styles.contactUsDescription}
                text={`Contact us now to infuse your projects with expertise and success. Your vision, our dedication - let's create brilliance!`}
            />
            <Link
                rel="noopener noreferrer"
                target="_blank"
                href={
                    'https://api.whatsapp.com/send/?phone=14809142319&text=Hello%2C+I+need+information+about+the+service+your+company+provides.&type=phone_number&app_absent=0'
                }
            >
                <Button
                    text={'CONTACT US'}
                    classes={amiko700.className}
                />
            </Link>
        </section>
    );
};
