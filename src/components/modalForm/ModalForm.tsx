import React, {useState} from 'react';
import cls from "./ModalForm.module.scss";
import {InputComponent} from "@/shared/ui/Input";
import {ButtonComponent} from "@/shared/ui/Button";
import {UserType} from "@/components/form/Form";
import {CloseIcon} from "@/shared/icons/close";

type ModalFormPropsType = {
    currentUser: UserType | undefined
    onOpenChange: () => void
}
export const ModalForm = ({currentUser, onOpenChange} : ModalFormPropsType) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateEmail(email)) {
            console.log(email);
            setError('');
        } else {
            setError('Please enter a valid email!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={cls.modalContent}>
            <CloseIcon className={cls.icon} onClick={onOpenChange}/>
            <div className={cls.name}>{currentUser ? `${currentUser.name.first}  ${currentUser.name.last}` : 'Anonymous'}</div>
            <InputComponent
                type="text"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className={cls.note}>Your information is 100% secure. We don’t share your personal information.</div>
            <ButtonComponent type={"submit"} className={cls.button}>Continue</ButtonComponent>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};
