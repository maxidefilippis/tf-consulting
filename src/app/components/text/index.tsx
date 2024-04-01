import { TextType } from '@/app/constants/text';
import styles from './index.module.css';

interface TextProps {
    text: string;
    type?: TextType;
    classes?: string;
}
export const Text = ({ text, type = TextType.P, classes = '' }: TextProps) => {
    const textStyles = `${styles.text} ${classes}`;
    if (type === TextType.P) return <p className={textStyles}>{text}</p>;
    if (type === TextType.SPAN) return <span className={textStyles}>{text}</span>;
};
