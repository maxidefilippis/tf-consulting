import { createElement } from 'react';
import { TitleType } from '@/app/constants/text';
import styles from './index.module.css';

interface TitleProps {
    type: TitleType;
    text: string;
    classes?: string;
}
export const Title = ({ type, text, classes = '' }: TitleProps) => {
    return createElement(type, { className: `${styles.title} ${classes}` }, text);
};
