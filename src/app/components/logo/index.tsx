import Image from 'next/image';
import Link from 'next/link';
import fullLogo from '../../../../public/logoCompleto.png';
import webLogo from '../../../../public/logoweb.svg';

interface LogoProps {
    classes?: string;
    withText?: boolean;
}
export const Logo = ({ withText, classes = '' }: LogoProps) => {
    return (
        <Link href={'#home'}>
            <Image
                src={withText ? fullLogo : webLogo}
                alt="logo tf consulting"
                className={classes}
            />
        </Link>
    );
};
