import React from 'react';
import InfoItem from "@/components/infoItems/info/InfoItem";
import cls from './InfoItems.module.scss'
import {LocationIcon} from "@/shared/icons/location";
import {HierarchyIcon} from "@/shared/icons/hierarchy";

const items = [
    {
        id: 1,
        icon: <LocationIcon />,
        number: '50+',
        text: 'Locations'
    },
    {
        id: 2,
        icon: <HierarchyIcon />,
        number: '1000+',
        text: 'Servers'
    },
]

export const InfoItems = () => {
    return (
        <div className={cls.wrapper}>
            {items.map(el => (
                <InfoItem icon={el.icon} key={el.id}>
                    <div className={cls.item}>
                        <span className={cls.title}>{el.number}</span>
                        <span className={cls.text}>{el.text}</span>
                    </div>
                </InfoItem>
            ))}
        </div>
    );
};

