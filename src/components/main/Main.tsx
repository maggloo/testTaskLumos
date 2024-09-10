import React from 'react';
import Image from 'next/image'
import img from '../../shared/images/image_main.png'
import cls from './Main.module.scss'
import {ButtonComponent} from "@/shared/ui/Button";
import {InfoItems} from "@/components/infoItems/InfoItems";
import {LeftIcon} from "@/shared/icons/left";
import {RightIcon} from "@/shared/icons/right";


export const Main = () => {
    return (
        <>
            <div className={cls.wrapper}>
                <h1 className={cls.title}>
                    Access <span className={cls.accent}> everything securely </span> with <div>VPN</div>
                </h1>
                <Image src={img}
                       alt={'image'}
                       height={209}
                       priority
                       width={428}
                />
                <ButtonComponent className={cls.button} type={"button"}>
                    Get VPN
                </ButtonComponent>
                <div className={cls.users_number}>
                    <LeftIcon />
                        <div className={cls.text}>
                            <div className={cls.note}>Trusted by </div>
                            <div className={cls.accent}>50M+ Users </div>
                        </div>
                    <RightIcon />
                </div>
                <InfoItems />
                <div className={cls.small_text}> VPN-your <span className={cls.small_accent}> ultimate </span> solution for a private and secure online experience! </div>
            </div>
        </>

    );
};


