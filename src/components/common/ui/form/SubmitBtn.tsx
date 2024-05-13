import React from "react";

interface Props {
    btnText: string
    className?: string
}

export function SubmitBtn({btnText, className = ''}: Props) {
    return (
        <button type={'submit'} className={`${className} bg-green-200 text-white font-bold px-4 py-1 rounded-md`}>{btnText}</button>
    );
}