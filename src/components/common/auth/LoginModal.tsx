import {Modal} from "@/components";
import React from "react";

interface Props {
    onClose: () => void
}

export function LoginModal({onClose}: Props) {
    return (
        <Modal title={"Login"} closeModal={onClose}>
            <form>

            </form>
        </Modal>
    );
}