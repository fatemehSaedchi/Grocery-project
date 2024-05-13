import {Modal} from "@/components";
import React, {Dispatch, SetStateAction} from "react";

interface Props {
    onClose: () => void
    setShowModal: Dispatch<SetStateAction<null|'register'|'login'>>
}

export function LoginModal({onClose, setShowModal}: Props) {
    return (
        <Modal title={"Login"} closeModal={onClose}>
            <form>

            </form>
            <span onClick={()=>setShowModal('register')}>Register now</span>
        </Modal>
    );
}