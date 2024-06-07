'use client';
import { Text } from '@/app/components/text';
import { Title } from '@/app/components/title';
import { TitleType } from '@/app/constants/text';
import { amiko700 } from '@/app/styles/fonts';
import emailjs from '@emailjs/browser';
import { FormEvent, useRef } from 'react';
import toast from 'react-hot-toast';
import styles from './index.module.css';

export const ContactUsSection = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!form.current) return;
        const formElement = form.current;

        emailjs
            .sendForm('service_iu4swog', 'template_23llmxd', form.current, {
                publicKey: 'user_sXnaVrj7W8RvuNT4eH87H',
            })
            .then(
                () => {
                    toast.success('Your message has been sent!');
                    formElement.reset();
                },
                (error) => {
                    toast.error('An error occurred while sending your message');
                    console.error(error.text);
                },
            );
    };

    return (
        <section id="contact" className={styles.contactUs}>
            <Title classes={styles.contactUsTitle} type={TitleType.H3} text={'Experience the TF Consulting LLC Edge'} />
            <Text
                classes={styles.contactUsDescription}
                text={`Ready to witness a transformation in your software journey? Join hands with TF Consulting LLC and open doors to innovation, expertise, and unparalleled triumph. Let's shape the future together.`}
            />
            <Text
                classes={styles.contactUsDescription}
                text={`Contact us now to infuse your projects with expertise and success. Your vision, our dedication - let's create brilliance!`}
            />
            <form className={styles.contactUsForm} ref={form} onSubmit={sendEmail}>
                <div className={styles.contactUsFormField}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                </div>
                <div className={styles.contactUsFormField}>
                    <label>Email</label>
                    <input type="email" name="user_email" />
                </div>
                <div className={styles.contactUsFormField}>
                    <label>Message</label>
                    <textarea name="message" />
                </div>
                <input className={`${styles.contactUsFormSubmit} ${amiko700.className}`} type="submit" value="SEND" />
            </form>
        </section>
    );
};
