import Image from 'next/image';
import competitiveEdgeIcon from '../../public/icons/competitiveEdge.svg';
import emailIcon from '../../public/icons/email.svg';
import linkedInIcon from '../../public/icons/linkedin.svg';
import phoneIcon from '../../public/icons/phone.svg';
import tailoredSolutionsIcon from '../../public/icons/tailoredSolutions.svg';
import topTalentIcon from '../../public/icons/topTalent.svg';
import transparencyAndConfidenceIcon from '../../public/icons/transparencyAndConfidence.svg';
import turnkeyBrillianceIcon from '../../public/icons/turnkeyBrilliance.svg';
import computer from '../../public/images/computer.png';
import employees from '../../public/images/employees.png';
import { Button } from './components/button';
import { ServiceCard } from './components/cards/service';
import { WhyCard } from './components/cards/why';
import { Logo } from './components/logo';
import { Social } from './components/social';
import { Text } from './components/text';
import { Title } from './components/title';
import { TitleType } from './constants/text';
import styles from './page.module.css';
import { amiko700 } from './styles/fonts';

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <header className={styles.header}>
                    <Logo width={250} />
                    <nav className={`${styles.nav} ${amiko700.className}`}>
                        <Text text="About us" />
                        <Text text="Services" />
                        <Text text="Contact" />
                    </nav>
                </header>
                <section className={styles.elevate}>
                    <div className={styles.elevateText}>
                        <Title
                            type={TitleType.H1}
                            text="Elevate Your Projects with TF Consulting LLC"
                        />
                        <Text text="Seeking a game-changing boost for your software projects? Look no further than TF Consulting LLC! We are your passport to unlock unparalleled excellence in development." />
                        <Button
                            text={'CONTACT US'}
                            classes={amiko700.className}
                        />
                    </div>
                    <div className={styles.elevateImage}>
                        <Image
                            src={computer}
                            alt="Elevate Your Projects"
                            width={900}
                        />
                    </div>
                </section>
                <section className={styles.about}>
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
                            width={550}
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
                <section className={styles.services}>
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
                <section className={styles.why}>
                    <Title
                        text={'Why TF Consulting LLC?'}
                        type={TitleType.H3}
                        classes={styles.whyTitle}
                    />
                    <div className={styles.whyCardsContainer}>
                        <div className={styles.whyItem}>
                            <WhyCard
                                icon={topTalentIcon}
                                title="Top Talent from South America"
                                description="Our professionals network from South America brings fresh perspectives and
 top-notch skills to your projects. Stay ahead in the ever-evolving tech landscape with our exceptional team."
                            />
                        </div>
                        <div className={styles.whyItem}>
                            <WhyCard
                                icon={tailoredSolutionsIcon}
                                title="Tailored
                    Solutions"
                                description="Whether you are augmenting your team or need a custom squad for a specific venture, we have the tailor-made solution that fits your query. Flexibility is our forte, ensuring a seamless fit for your unique needs."
                            />
                        </div>
                        <div className={styles.whyItem}>
                            <WhyCard
                                icon={turnkeyBrillianceIcon}
                                title="Turnkey
                    Brilliance"
                                description="Dreaming of hassle-free project completion? Dream no more. Our turnkey solutions are designed to deliver excellence from conception to completion, taking your vision to the finish line."
                            />
                        </div>

                        <div className={styles.whyItem}>
                            <WhyCard
                                icon={transparencyAndConfidenceIcon}
                                title="Transparency
                    and Confidence"
                                description="Transparent communication is our foundation. As your trusted partner, we have got your back. Plus, our comprehensive liability insurance offers peace of mind, allowing you to focus on your business without worrying about administrative tasks."
                            />
                        </div>

                        <div className={styles.whyItem}>
                            <WhyCard
                                icon={competitiveEdgeIcon}
                                title="Competitive
                    Egde"
                                description="Elevate your projects without defying your budget. Our B2B contracts and competitive rates redefine value, letting you achieve more without compromise. "
                            />
                        </div>
                    </div>
                </section>
                <section className={styles.contactUs}>
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
                    <Button
                        text={'CONTACT US'}
                        classes={amiko700.className}
                    />
                </section>
            </main>
            <footer className={styles.social}>
                <Logo
                    width={300}
                    withText
                />
                <div className={styles.socialContainer}>
                    <Social
                        icon={linkedInIcon}
                        red="LINKEDIN"
                        linkName="Tf Consulting"
                        linkAction="https://www.linkedin.com/company/tf-consulting-llc-usa/"
                    />
                    <Social
                        icon={emailIcon}
                        red="EMAIL"
                        linkName="contact@tfconsulting.net"
                        linkAction=""
                    />
                    <Social
                        icon={phoneIcon}
                        red="PHONE"
                        linkName="+1 (482) 914-2319"
                        linkAction="https://api.whatsapp.com/send/?phone=14809142319&text=Hello%2C+I+need+information+about+the+service+your+company+provides.&type=phone_number&app_absent=0"
                    />
                </div>
            </footer>
        </>
    );
}
