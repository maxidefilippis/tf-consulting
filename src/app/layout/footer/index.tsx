import { Logo } from '@/app/components/logo';
import { Social } from '@/app/components/social';
import styles from './index.module.css';
import emailIcon from '/public/icons/email.svg';
import linkedInIcon from '/public/icons/linkedin.svg';
import phoneIcon from '/public/icons/phone.svg';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo
                classes={styles.footerLogo}
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
                    linkAction="mailto:contact@tfconsulting.net"
                />
                <Social
                    icon={phoneIcon}
                    red="PHONE"
                    linkName="+1 (482) 914-2319"
                    linkAction="https://api.whatsapp.com/send/?phone=14809142319&text=Hello%2C+I+need+information+about+the+service+your+company+provides.&type=phone_number&app_absent=0"
                />
            </div>
        </footer>
    );
};
