import { Title } from '@/app/components/title';
import { Text } from '@/app/components/text';
import styles from './index.module.css';
import Image from 'next/image';
import { TitleType } from '@/app/constants/text';
import employees from '/public/images/employees.webp';

export const AboutSection = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.aboutText}>
                <Title
                    text={'ABOUT US'}
                    type={TitleType.H2}
                />
                <Text
                    classes={styles.aboutTextDescription}
                    text={
                        'TF Consulting LLC is a company that provides staff augmentation to software enterprises located in different parts of the world. We offer B2B contracts to allow you to hire developers from South America at a very competitive rate. We will meet with you, understand your interview process, contractor’s benefits and verify the role description. We will search for a person that fulfill all your requirements, We will do a technical screening and if they are a good fit, will present the prospect to you with our price. Liability insurance will be included.'
                    }
                />
            </div>
            <div className={styles.aboutDevelopers}>
                <Image
                    src={employees}
                    alt="high skilled developers"
                    className={styles.aboutDevelopersImage}
                />
                <div className={styles.aboutDevelopersText}>
                    <div className={styles.aboutDevelopersFiftyPlus}>
                        <Text
                            text={'+'}
                            classes={styles.aboutDevelopersPlus}
                        />
                        <Text
                            text={'50'}
                            classes={styles.aboutDevelopersFifty}
                        />
                    </div>
                    <Text
                        text={'high skilled developers are waiting to work for you!'}
                        classes={styles.aboutDevelopersTextSkilled}
                    />
                </div>
            </div>
        </section>
    );
};
