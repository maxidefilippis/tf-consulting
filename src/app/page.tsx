import { AboutSection } from './sections/about';
import { ContactUsSection } from './sections/contact';
import { HomeSection } from './sections/home';
import { ServicesSection } from './sections/services';
import { WhySection } from './sections/why';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.sectionsContainer}>
            <HomeSection />
            <AboutSection />
            <ServicesSection />
            <WhySection />
            <ContactUsSection />
        </div>
    );
}
