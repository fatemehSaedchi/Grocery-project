import React, {useId} from "react";
import {FieldErrors, UseFormRegisterReturn} from "react-hook-form";
import {ErrorMessage} from "@/components/common/ui/form/ErrorMessage";

interface Props extends React.HTMLAttributes<HTMLInputElement>{
    label?: string
    type?: 'text' | 'password' | 'email' | 'tel' | 'number'
    register: UseFormRegisterReturn<any>
    errors?: FieldErrors<any>
}

export function Input({label, type = 'text', register, errors, ...rest}: Props) {

    const id = useId()
    const name = register.name
    let hasError = false
    if (errors && errors[name]){
        hasError = true
    }

    return (
        <div className={'mb-4'}>
            <div className={'flex flex-row items-center mb-1'}>
                {label && <label htmlFor={id} className={'text-green-700 font-bold basis-1/4'}>{label}</label>}
                <input className={`w-full px-3 py-2 rounded-md ${(hasError) ? 'outline-red' : 'outline-green-200'}`} type={type} id={id} {...register} {...rest}/>
            </div>
            <ErrorMessage name={name} errors={errors} register={register}/>
        </div>
    );
}