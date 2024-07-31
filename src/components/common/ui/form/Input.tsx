import React, {useId, useState} from "react";
import {FieldErrors, UseFormRegisterReturn} from "react-hook-form";
import {ErrorMessage} from "@/components/common/ui/form/ErrorMessage";
import {twMerge} from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    label?: string
    type?: 'text' | 'password' | 'email' | 'tel' | 'number' | 'confirmPassword' | 'checkbox'
    register: UseFormRegisterReturn<any>
    errors?: FieldErrors<any>
    className?: string
}

export function Input({label, type = 'text', register, errors, className, ...rest}: Props) {

    const id = useId()
    const name = register.name
    let hasError = false
    if (errors && errors[name]) {
        hasError = true
    }

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className={'mb-4'}>
            <div className={'flex flex-row items-center mb-1'}>

                {
                    type === "checkbox" ?
                        <label className="flex items-center cursor-pointer">
                            <input type="checkbox"
                                   className="w-[18px] h-[18px] mr-3 cursor-pointer checked:bg-red"/>
                            <span className="text-small text-gray-500">{label}</span>
                        </label>
                        :
                        <>
                            {
                                label && <label htmlFor={id}
                                                className={'text-green-700 font-bold basis-1/3 xl:basis-1/4'}>{label}</label>}
                            {
                                type === 'password' ?
                                    <div className={'flex gap-2 justify-between w-full justify-items-center text-medium mb-6'}>
                                        <input
                                            className={twMerge(` border rounded-xl px-9 py-6 w-full ${(hasError) ? 'outline-red' : 'outline-green-200'}`, className)}
                                            type={type === 'password' ? showPassword ? 'text' : 'password' : type}
                                            id={id} {...register} {...rest}/>
                                        <div onClick={() => setShowPassword((prevState) => !prevState)}
                                             className={`border rounded-xl px-2 py-6 w-min text-center cursor-pointer shadow-md drop-shadow-lg font-lato ${showPassword ? 'bg-rose-100' : 'bg-green-150 '} `}> {showPassword ? 'Hide Password' : 'Show Password'}
                                        </div>
                                    </div>
                                    :
                                    <input
                                        className={twMerge(`text-medium border rounded-xl px-9 py-6 w-full mb-6 ${(hasError) ? 'outline-red' : 'outline-green-200'}`, className)}
                                        type={type}
                                        id={id} {...register} {...rest}/>
                            }
                        </>
            }
        </div>
    <ErrorMessage name={name} errors={errors}/>
</div>
)
    ;
}