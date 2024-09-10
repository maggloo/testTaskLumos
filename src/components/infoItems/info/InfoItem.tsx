import React, {ReactElement} from 'react';
import cls from './InfoItem.module.scss'

type InfoItemPropsType = {
    icon: ReactElement
    children: React.ReactNode
}
const InfoItem = ({icon, children}: InfoItemPropsType) => {
    return (
        <div className={cls.item}>
            {icon}
            {children}
        </div>
    );
};

export default InfoItem;
