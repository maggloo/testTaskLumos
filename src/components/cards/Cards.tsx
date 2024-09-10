import React from 'react';
import Card from "@/components/cards/card/Card";

import cls from './Cards.module.scss'
import {EyeIcon} from "@/shared/icons/eye";
import {SpeedIcon} from "@/shared/icons/speed";
import {LocationIconType} from "@/shared/icons/location_type";
import {BlockedIcon} from "@/shared/icons/blocked";


const cardsInfo = [
    {
        id: 1,
        icon: <EyeIcon />,
        title: 'Unlimited access to content',
        content: 'Enjoy unlimited bandwidth to stay connected to the world\'s best shows, apps, and games!'
    },
    {
        id: 2,
        icon: <SpeedIcon />,
        title: 'Flashing connecting speed',
        content: 'VPN Lumos offers unlimited bandwidth for faster loading and no buffering!'
    },
    {
        id: 3,
        icon: <LocationIconType />,
        title: 'Hide your location',
        content: 'Get your own unique IP for added security and access to restricted sites, apps, and services!'
    },
    {
        id: 4,
        icon: <BlockedIcon />,
        title: 'Bypass blocked sites',
        content: 'Access any website safely and anonymously!'
    },
]

const Cards = () => {
    return (
        <div className={cls.wrapper}>
            {
                cardsInfo.map(el => (
                    <Card key={el.id} icon={el.icon} title={el.title} content={el.content} />
                ))
            }
        </div>
    );
};

export default Cards;
