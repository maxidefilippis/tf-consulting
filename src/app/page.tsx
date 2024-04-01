import { AboutSection } from './sections/about';
import { ContactUsSection } from './sections/contact';
import { HomeSection } from './sections/home';
import { ServicesSection } from './sections/services';
import { WhySection } from './sections/why';

export default function Home() {
    return (
        <>
            <HomeSection />
            <AboutSection />
            <ServicesSection />
            <WhySection />
            <ContactUsSection />
        </>
    );
}
