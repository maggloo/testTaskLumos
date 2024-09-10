import React, {ReactElement} from 'react';
import cls from './Card.module.scss'

type CardPropsType = {
    icon: ReactElement
    title: string
    content: string
}
const Card = ({icon, title, content} : CardPropsType) => {
    const [firstWord, ...rest] = title.split(' ');
    const textWIthNoFirstWord = rest.join(' ');

    return (
        <div className={cls.card}>
            {icon}
            <h4>
                <div className={cls.accent}> {firstWord} </div>
                <span className={cls.text}>{textWIthNoFirstWord} </span>
            </h4>
            <div className={cls.content}>{content}</div>
        </div>
    );
};

export default Card;
