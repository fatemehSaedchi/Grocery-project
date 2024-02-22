import React from "react";
import Link from "next/link";

interface Props {
    icon: string;
    size?: number;
    color?: string;
    align?: string;
    link?: string;
    title?: string;
    hideTitleOnMobile?: boolean;
    badge?: number;
    titleClassName?: string;
    path?: number;
    linkClassName?: string
}



export function IconBox({icon, size = 22, color = "black", align, link, title, hideTitleOnMobile = false, badge = 0, titleClassName = '', path = 0, linkClassName=''} :Props) {

    let span=[]
    for (let i=1 ; i<= path; i++){
        span.push(<span className={`path-${i}`}></span>)
    }

    return (
        <Link href={link ?? '#'} className={`flex flex-row items-center ${linkClassName}`}>
            {
                badge ?
                    <div className={'relative'}>
                        <span className={'absolute -top-[10x] -right-[10x] w-[20px] bg-primary-300 rounded-full flex justify-center items-center text-sm'}>{badge}</span>
                      <i className={`${icon} text-[${size}px] text-${color} ${align} ${linkClassName}`}>
                            {span}
                      </i>
                    </div>
                    :
                    <i className={`${icon} text-[${size}px] text-${color} ${align}`}></i>
            }

            {title && <p className={`${hideTitleOnMobile ? 'hidden sm:inline-block' : 'inline-block'} ${titleClassName} ml-2`}>{title}</p>}
        </Link>

    );
}
