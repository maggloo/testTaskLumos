import Link from "next/link";
import cls from './Header.module.scss';
import {ButtonComponent} from "@/shared/ui/Button";
import {LogoIcon} from "@/shared/icons/logo";
export const Header = () => {
    return (
        <header className={cls.header}>
            <div className={cls.headerContainer}>
                <Link className={cls.link} href={'/'}>
                    <LogoIcon />
                    <span>VPN</span>
                </Link>
                <Link className={cls.link} href={'#getVPN'}>
                    <ButtonComponent type={"button"} className={cls.button}> Get VPN </ButtonComponent>
                </Link>
            </div>
        </header>
    )
}
