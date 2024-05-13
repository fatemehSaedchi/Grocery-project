import {Modal} from "@/components";
import React from "react";
import {useModal} from "@/store/ModalContext";

interface Props {
    onClose: () => void
}

export function LoginModal({onClose}: Props) {
    const {openModal} = useModal()
    return (
        <Modal title={"Login"} closeModal={onClose}>
            <span className={'text-green-700 font-bold'} onClick={()=>openModal('register')}>Register now</span>
        </Modal>
    );
}