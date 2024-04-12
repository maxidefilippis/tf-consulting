import { ServiceCard } from '@/app/components/cards/service';
import { Title } from '@/app/components/title';
import { TitleType } from '@/app/constants/text';
import styles from './index.module.css';

export const ServicesSection = () => {
    return (
        <>
            <section
                id="services"
                className={styles.services}
            >
                <Title
                    text={'SERVICES'}
                    type={TitleType.H2}
                />
                <ServiceCard
                    number="01"
                    title="Staff Augmentation"
                    image={'/images/staffAugmentation.png'}
                    description={`TF Consulting offers staff augmentation services, primarily focusing on providing developers, quality consultants, bussines analysts, DBAs, etc., to other companies through B2B contracts. This involves identifying the right candidates based on the client's requirements, conducting technical screenings, and presenting prospects along with competitive prices. This service allows companies to enhance their teams with skilled professionals from South America.`}
                />
                <ServiceCard
                    number="02"
                    title="Team Assembly for Specific Projects"
                    image={'/images/teamAssemblySpecificProjects.png'}
                    description={
                        'Another service that the company offers is assembling teams for specific development projects. This can be done through turnkey projects or on an hourly basis. This service provides a comprehensive solution for companies looking to complete particular software development projects by leveraging the expertise of your assembled teams.'
                    }
                />
            </section>
        </>
    );
};
