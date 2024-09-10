import React, {ReactNode} from 'react';
import cls from './Button.module.scss'
export interface ButtonProps {
    children?: ReactNode
    className?: string
    disabled?: boolean
    type: 'button' | 'submit'
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
export const ButtonComponent = (props: ButtonProps) => {
    const { children, className, disabled, onClick, type, ...otherProps } = props
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type={type}
            className={`${cls.button} ${className}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};
