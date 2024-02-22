import {ImageView} from "@/components/common/image-view";
import {IconBox} from "@/components/common/ui/icon-box";
import React from "react";
import {browsCategoryMock} from "@/mock/browsCategory"
import {menuMock} from "@/mock/menu";
import Link from "next/link";

export function Menu(props) {
    return (
        <>
            <div className="pt-5 lg:pt-0 lg:basis-1/4 relative">
                <div
                    className="bg-primary-300 inline-block w-64 py-3 flex items-center justify-center rounded cursor-pointer">
                    <IconBox icon={'icon-apps'} title={'Browse All Categories'} size={24} link={'#'}
                             titleClassName={"white text-white font-bold ml-2"}/>
                    <IconBox icon={"fa-chevron-down"} size={24}/>
                </div>
                <div className="hidden lg:rounded-lg lg:absolute lg:top-[53px] bg-white mt-2 lg:mt-0">
                    <div
                        className="flex flex-wrap lg:items-center gap-2 lg:gap-4 lg:w-[493px] h-auto lg:rounded-lg lg:border lg:border-primary-50 lg:p-6">

                        {
                            browsCategoryMock.map((item, index) => {
                                return (
                                    <IconBox key={index} icon={item.icon} size={30} title={item.title} link={item.link}
                                             titleClassName={"font-medium text-sm"}
                                             linkClassName={"gap-3 font-bold text-sm text-Iteal-200 lg:w-52 lg:h-[48px] lg:pl-6 lg:border lg:border-Igray-50 lg:hover:border-primary-50 lg:hover:shadow-shadow-2 rounded"}
                                             path={item.iconPath}/>
                                )
                            })
                        }

                        <a href="#"
                           className="hidden lg:flex justify-center items-center gap-2 w-52 h-12 mx-auto mt-4">
                            <button
                                className="rounded-full border border-2 border-primary-300 flex items-center w-6 h-6 justify-center text-center text-primary-300 font-bold text-lg ">
                                +
                            </button>
                            <p className="text-Igray-300 font-bold">More Category</p>
                        </a>
                    </div>
                </div>
            </div>
            <nav id={'main-menu'}>
                <ul className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:basis-2/4 lg:h-full font-bold lg:font-normal text-Iteal-200">

                    {
                        menuMock.map((item, index)=>{
                            return(
                                <li>
                                    {
                                        item.icon ? <IconBox {...item} size={24}/>
                                            : <Link href={item.link}>{item.title}</Link>
                                    }
                                </li>
                            )
                        })
                    }

                </ul>
            </nav>
        </>
    );
}
