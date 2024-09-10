import React, {ComponentPropsWithoutRef, ReactNode} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import cls from './Modal.module.scss';

type RadioGroupDemoPropsType = {
    trigger: ReactNode,
    title: string,
    children: ReactNode
} & ComponentPropsWithoutRef<typeof Dialog.Root>
export const ModalComponent = ({ trigger, children, title, ...rest }: RadioGroupDemoPropsType) => (
    <Dialog.Root {...rest}>
        <Dialog.Trigger asChild>
            {trigger}
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className={cls.overlay}>
            <Dialog.Content className={cls.content}>
                <Dialog.Title className={cls.title}>{title}</Dialog.Title>
                {children}
            </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    </Dialog.Root>
);

