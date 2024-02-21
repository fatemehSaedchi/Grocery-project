import {ImageView} from "@/components/common/image-view";
import React from "react";
import Link from "next/link";

export function Logo(props) {
    return (
        <Link href="#" className="flex items-center basis-1/2 lg:basis-1/4">
            <ImageView src={'/assets/images/egg-logo.svg'} alt={"eggLogo"} width={85} height={20}
                       classname={"w-[60px] lg:w-[85px] pr-1 self-end"}/>
            <div className="flex flex-col justify-center items-center">
                <p className="text-[45px] lg:text-[68px] text-primary-300">Nest</p>
                <p className="text-[9px] lg:text-sm -mt-3.5 lg:-mt-5">
                    MART & GROCERY</p>
            </div>
        </Link>
    );
}
