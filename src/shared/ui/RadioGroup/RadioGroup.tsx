import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import cls from './RadioGroup.module.scss';
import {UserType} from "@/components/form/Form";

type RadioGroupDemoPropsType = {
    items: UserType[]
    onClick: (value: string) => void
}
export const RadioGroupComponent = ({items, onClick }: RadioGroupDemoPropsType) => {
    const onClickHandler = (id: string) => {
        onClick(id)
    }

    return <RadioGroup.Root className={cls.RadioGroupRoot} defaultValue={items[0].login.uuid} aria-label="View density">
        {items.map(el => (
            <label className={cls.Label} htmlFor={el.login.uuid} key={el.login.uuid}>
            <div className={cls.item_wrapper}>
                <RadioGroup.Item className={cls.RadioGroupItem} value={el.login.uuid} id={el.login.uuid} onClick={() => onClickHandler(el.login.uuid)}>
                    <RadioGroup.Indicator className={cls.RadioGroupIndicator}> ✓ </RadioGroup.Indicator>
                </RadioGroup.Item>
                    {el.name.first} {el.name.last}
            </div>
            </label>
        ))}

    </RadioGroup.Root>
};

