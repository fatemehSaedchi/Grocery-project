import React from 'react';
import {Logo} from "@/components";
import {IconBox} from "@/components";
import {SearchForm} from "@/components/layouts";
import {Menu} from "@/components/layouts";
import Link from "next/link";

export function Header() {
    // TODO replace i tags with IconBox component
    return (
        <>
            <header className={"container px-4 mx-auto relative mb-10"}>
                <div className="lg:h-40 bg-white flex flex-wrap justify-between items-center ">
                    <Logo/>
                    <div
                        className="flex flex-col items-end basis-1/2 lg:basis-full lg:w-full lg:h-[60px] lg:order-4 lg:mt-9 ">
                        <button id={"menu-btn"} className="flex flex-col justify-between py-[4px] lg:hidden w-[24px] h-[24px]">
                            <span className={'w-full h-[1.5px] bg-black inline-block rounded'}></span>
                            <span className={'w-full h-[1.5px] bg-black inline-block rounded'}></span>
                            <span className={'w-full h-[1.5px] bg-black inline-block rounded'}></span>
                        </button>
                        <div className="menu absolute top-0 left-0 w-4/5 lg:w-full h-screen lg:h-full z-[9999] bg-white lg:bg-transparent rounded-tr-3xl rounded-br-3xl lg:translate-x-0 lg:flex justify-between items-start lg:relative">
                            <Menu/>
                            <div className="hidden lg:flex lg:flex-row lg:basis-1/4 lg:justify-end lg:items-center">
                                <IconBox icon={"icon-headset self-end text-Iteel-200"} size={22}/>
                                <div className="flex flex-col items-center ml-2">
                                    <Link href={"tel:19008888"} className="text-xl font-bold text-primary-300">1900 - 8888</Link>
                                    <p className="text-xs text-Igray-300">24/7 Support Center</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SearchForm/>
                    <ul className="flex gap-2 basis-1/2 lg:basis-1/4 justify-end items-center">
                        <li className={"flex gap-2 cursor-pointer"}>
                            <IconBox icon={"fa-user"} link={"#"} title={"Account"} hideTitleOnMobile={true} titleClassName={"text-Iteal-200"}/>
                        </li>
                        <li className={"flex gap-2 cursor-pointer"}>
                            <IconBox icon={"fa-cart-shopping"} link={"#"} title={"Cart"} hideTitleOnMobile={true} badge={4} titleClassName={"text-Iteal-200"}/>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

