import React, {useId} from "react";
import {UseFormRegisterReturn} from "react-hook-form";

interface Props {
    label?: string
    type?: string
    register: UseFormRegisterReturn<any>
    placeholder?: string
}

export function Input({label, type = 'text', register, placeholder =''}: Props) {

    const id = useId()

    return (
        <div className={'grid gap-1 grid-cols-1 mb-2'}>
            {label && <label htmlFor={id} className={'text-green-700 font-bold'}>{label}</label>}
            <input className={'px-3 py-2 rounded-md outline-green-200'} type={type}
                   id={id} {...register} placeholder={placeholder}/>
        </div>
    );
}