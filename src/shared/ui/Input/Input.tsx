import React from 'react';
import cls from './Input.module.scss'
export interface ButtonProps {
    type: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputComponent = (props: ButtonProps) => {
    const { type, value, placeholder, onChange, ...otherProps } = props
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={cls.input}
            {...otherProps}
        />
    );
};
