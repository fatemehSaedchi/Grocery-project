import {Input, Modal} from "@/components";
import React from "react";
import {useForm} from "react-hook-form";
import {SubmitBtn} from "@/components/common/ui/form/SubmitBtn";

interface Props {
    onClose : () => void
}

interface formData {
    username: string;
    email: string;
    password: string
}

export function RegisterModal({onClose}: Props) {
    const {register, handleSubmit, formState:{errors}} = useForm<formData>()
    const onSubmit = (data : formData) => {
        console.log(data)
    }
    return (
        <Modal title={'Register'} closeModal={onClose}>
            <form onSubmit={handleSubmit(onSubmit)} className={'w-4/5 mx-auto py-8'}>
                <Input register={register('username', {required: true})} type={'text'} label={'Username :'}/>
                <Input register={register('email', {required: "enter your email please"})} type={"email"} label={"Email :"}/>
                <Input register={register('password', {required: "enter  your password please", minLength: {value: 4, message: "Password must be at least 4 characters"}})} type={'password'} label={'Password :'}/>
                <SubmitBtn btnText={'Submit'} className={'mt-4'}/>
            </form>
        </Modal>
    );
}