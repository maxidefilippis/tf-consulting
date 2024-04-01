import { TextType } from '@/app/constants/text';
interface TextProps {
    text: string;
    type?: TextType;
    classes?: string;
}
export const Text = ({ text, type = TextType.P, classes = '' }: TextProps) => {
    if (type === TextType.P) return <p className={classes}>{text}</p>;
    if (type === TextType.SPAN) return <span className={classes}>{text}</span>;
};
