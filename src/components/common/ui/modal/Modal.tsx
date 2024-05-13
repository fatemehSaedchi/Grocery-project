import React from "react";
import {Portal} from "@/components";

interface Props {
    children: React.ReactNode
    title: string
    closeModal: () => void
}

export function Modal({children, title, closeModal}: Props) {
    return(
        <Portal onClose={closeModal}>
            <div className={" z-10 bg-white min-w-[100vw] md:min-w-[50vw] min-h-[100vh] md:min-h-[50vh] md:border-2 border-green-200 md:rounded-md"} onClick={(e)=>e.stopPropagation()}>
                <div className={"flex justify-between py-4 px-7 bg-green-50 md:rounded-t-md"}>
                    <div onClick={closeModal} className={"cursor-pointer"}>
                        <span className={"text-green-200 font-bold text-lg"}>X</span>
                    </div>
                    <h3 className={"text-green-200 font-bold"}>{title}</h3>
                </div>
                <div className={'h-[400px] py-4 px-7'}>
                    {children}
                </div>
            </div>
        </Portal>
    );
}