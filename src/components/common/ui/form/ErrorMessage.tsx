import {FieldErrors, UseFormRegisterReturn} from "react-hook-form";

interface Props {
    errors?: FieldErrors<any>
    name: string
    register: UseFormRegisterReturn<any>
}

export function ErrorMessage({errors, name, register}: Props) {

    return (
        errors && errors[name] && (
            <div className="text-red pl-28">
                {errors[name]?.message ? errors[name]?.message as string : `Enter your ${register.name} please`}
            </div>
        )
    )
}
