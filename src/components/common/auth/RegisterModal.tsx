import {Modal} from "@/components";

interface Props {
    onClose : () => void
}

export function RegisterModal({onClose}: Props) {
    return (
        <Modal title={'Register'} closeModal={onClose}>
            <div>

            </div>
        </Modal>
    );
}