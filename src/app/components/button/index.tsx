import styles from './index.module.css';

interface ButtonProps {
    text: string;
    handleClick?: () => void;
    classes?: string;
}
export const Button = ({ classes, text, handleClick }: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${classes}`}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};
