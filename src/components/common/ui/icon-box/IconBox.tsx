import React from "react";
import Link from "next/link";

interface Props {
    icon: string;
    size?: number;
    color?: string;
    align?: string;
    link?: string;
    title?: string;
    hideTitleOnMobile: boolean;
    badge: number
}

export function IconBox({icon, size = 22, color = "black", align, link, title, hideTitleOnMobile = false, badge = 0} :Props) {
    return (
        <>
            {
                badge ?
                    <div className={'relative'}>
                        <span className={'absolute -top-[10x] -right-[10x] w-[20px] bg-primary-300 rounded-full flex justify-center items-center text-sm'}>{badge}</span>
                        <a href={link ?? '#'}><i className={`${icon} text-[${size}px] text-${color} ${align}`}></i></a>
                    </div>
                    :
                    <a href={link ?? '#'}><i className={`${icon} text-[${size}px] text-${color} ${align}`}></i></a>
            }

            {title && <p className={` ${hideTitleOnMobile ? 'hidden sm:inline-block' : 'inline-block' } text-Igray-300 ml-2 sm:hover:text-black`}>{title}</p>}
        </>

    );
}
