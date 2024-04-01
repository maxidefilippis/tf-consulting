import fullLogo from '../../../../public/logoCompleto.png';
import webLogo from '../../../../public/logoweb.svg';
import Image from 'next/image';

interface LogoProps {
    classes?: string;
    withText?: boolean;
}
export const Logo = ({ withText, classes = '' }: LogoProps) => {
    return (
        <Image
            src={withText ? fullLogo : webLogo}
            alt="logo tf consulting"
            className={classes}
        />
    );
};
