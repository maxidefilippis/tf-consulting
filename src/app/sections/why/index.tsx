import { WhyCard } from '@/app/components/cards/why';
import { Title } from '@/app/components/title';
import { TitleType } from '@/app/constants/text';
import styles from './index.module.css';
import competitiveEdgeIcon from '/public/icons/competitiveEdge.svg';
import tailoredSolutionsIcon from '/public/icons/tailoredSolutions.svg';
import topTalentIcon from '/public/icons/topTalent.svg';
import transparencyAndConfidenceIcon from '/public/icons/transparencyAndConfidence.svg';
import turnkeyBrillianceIcon from '/public/icons/turnkeyBrilliance.svg';

export const WhySection = () => {
    return (
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
    );
};
