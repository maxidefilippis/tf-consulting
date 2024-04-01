import fullLogo from '../../../../public/logoCompleto.png';
import webLogo from '../../../../public/logoweb.svg';
import Image from 'next/image';

interface LogoProps {
    withText?: boolean;
    width: number;
}
export const Logo = ({ withText, width }: LogoProps) => {
    return (
        <Image
            src={withText ? fullLogo : webLogo}
            alt="logo tf consulting"
            width={width}
        />
    );
};
