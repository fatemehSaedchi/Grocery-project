import React from "react";
import Link from "next/link";

interface Props {
    icon: string;
    size?: number;
    link?: string;
    title?: string;
    hideTitleOnMobile?: boolean;
    badge?: number;
    titleClassName?: string;
    path?: number;
    linkClassName?: string
}



export function IconBox({icon, size = 22, link, title, hideTitleOnMobile = false, badge = 0, titleClassName = '', path = 0, linkClassName=''} :Props) {

    let span=[]
    for (let i=1 ; i<= path; i++){
        span.push(<span className={`path-${i}`}></span>)
    }

    if(link){
        return (
            <Link href={link ?? '#'} className={`flex flex-row items-center ${linkClassName}`}>
                {
                    badge ?
                        <div className={'relative'}>
                            <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
                            <i className={`${icon} text-[${size}px] ${linkClassName}`}>{span}</i>
                        </div>
                        :
                        <i className={`${icon} text-[${size}px]`}></i>
                }

                {title && <p className={`${hideTitleOnMobile ? 'hidden sm:inline-block' : 'inline-block'} ${titleClassName} ml-2`}>{title}</p>}
            </Link>

        );
    }else {
        return (
            <>
                {
                    badge ?
                        <div className={'relative'}>
                            <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
                            <i className={`${icon} text-[${size}px] ${linkClassName}`}>{span}</i>
                        </div>
                        :
                        <i className={`${icon} text-[${size}px]`}></i>
                }

                {title && <p className={`${hideTitleOnMobile ? 'hidden sm:inline-block' : 'inline-block'} ${titleClassName} ml-2`}>{title}</p>}
            </>
        );
    }

}
