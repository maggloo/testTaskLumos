"use client";
import React, {useState} from 'react';
import {RadioGroupComponent} from "@/shared/ui/RadioGroup";
import {ButtonComponent} from "@/shared/ui/Button";
import {ModalComponent} from "@/shared/ui/Modal";
import {ModalForm} from "@/components/modalForm/ModalForm";
import cls from './Form.module.scss'


export type UserType = {
    name: {
        first: string,
        last: string
    }
    login: {
        uuid: string
    }
}

type FormPropsType = {
    users: UserType[]
}
const Form = ({users} : FormPropsType) => {
    const [open, setOpen] = useState(false)
    const [userId, setUserId] = useState('')

    const currentUser = users.find(el => el.login.uuid === userId)
    const onOpenChange = () => {
        setOpen(!open)
    }

    return (
        <div className={cls.wrapper} id={'getVPN'}>
            <h3 className={cls.title}> Millions of people trust us!</h3>
            <div className={cls.radio_wrapper}>
                <div className={cls.name}> Choose <span> your name </span></div>
                <RadioGroupComponent items={users} onClick={setUserId}/>
                <ModalComponent
                    onOpenChange={onOpenChange}
                    open={open}
                    title={'YOUR NAME'}
                    trigger={ <ButtonComponent type={"button"} className={cls.button}> Get VPN </ButtonComponent>}
                >
                    <ModalForm currentUser={currentUser} onOpenChange={onOpenChange}/>
                </ModalComponent>
            </div>
        </div>
    );
};

export default Form;
