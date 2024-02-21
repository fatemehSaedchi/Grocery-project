import React from 'react';
import {ImageView} from "@/components/common/image-view";
import {Logo} from "@/components/common/ui/logo";
import {IconBox} from "@/components/common/ui/icon-box";
import {SearchForm} from "@/components/layouts/header/search-form/SearchForm";

export function Header(props) {
    // TODO replace i tags with IconBox component
    return (
        <>
            <header className="header relative">
                <div className="lg:h-40 bg-white flex flex-wrap justify-between items-center ">
                    <Logo/>
                    <div
                        className="flex flex-col items-end basis-1/2 lg:basis-full lg:w-full lg:h-[60px] lg:order-4 lg:mt-9 ">
                        <button className="menu-btn lg:hidden"><IconBox icon={"icon-bars"} size={22}/></button>
                        <nav
                            className="menu absolute top-0 left-0 w-4/5 lg:w-full h-screen lg:h-full z-[9999] bg-white lg:bg-transparent rounded-tr-3xl rounded-br-3xl lg:translate-x-0 lg:flex justify-between items-start lg:relative">
                            <div className="accordion pt-5 lg:pt-0 lg:basis-1/4 relative" id="accordionMenu">
                                <div className="accordion__item">
                                    <div
                                        className="accordion__header flex font-bold bg-primary-300 text-white inline-block w-64 h-11 flex items-center justify-center rounded cursor-pointer">
                                        <ImageView src={"/assets/images/fi-rs-apps.png"} alt={"appIcon"} width={200}
                                                   height={100}/>
                                        &nbsp;Browse All Categories &nbsp;
                                        <IconBox icon={"fa-chevron-down"} size={22}/>
                                    </div>
                                    <div
                                        className="accordion__body lg:rounded-lg lg:absolute lg:top-[53px] bg-white mt-2 lg:mt-0">
                                        <div
                                            className="lg:rounded-lg lg:border lg:border-primary-50 lg:p-6 lg:w-[493px] h-auto">
                                            <ul className="flex flex-col lg:items-center lg:gap-4 lg:flex-wrap gap-2 lg:h-[304px]">
                                                <li className="text-Iteal-200 lg:w-52 lg:h-[48px] lg:border lg:border-Igray-50 lg:rounded lg:flex lg:items-center lg:pl-6 lg:hover:border-primary-50 lg:hover:shadow-shadow-2">
                                                    <a href="#"
                                                          className="flex items-center gap-3 font-bold text-sm text-Iteal-200">
                                                        <ImageView src={"/assets/images/grocery%20Vector/milks.svg"}
                                                                   alt={'milkPic'} width={36} height={36}
                                                                   classname={"w-6 h-6"}/>
                                                        Milk
                                                        and
                                                        Dairies
                                                    </a>
                                                </li>
                                                <li className="text-Iteal-200 lg:w-52 lg:h-12 lg:border lg:border-Igray-50 lg:rounded lg:flex lg:items-center lg:pl-6 lg:hover:border-primary-50 lg:hover:shadow-shadow-2">
                                                    <a href="#"
                                                          className="flex items-center gap-3 font-bold text-sm text-Iteal-200">
                                                        <ImageView src={"/assets/images/grocery%20Vector/dress.svg"}
                                                                   alt={'dressPic'} width={36} height={36}
                                                                   classname={"w-6 h-6"}/>
                                                        Clothing
                                                        &
                                                        beauty
                                                    </a>
                                                </li>
                                                <li className="text-Iteal-200 lg:w-52 lg:h-12 lg:border lg:border-Igray-50 lg:rounded lg:flex lg:items-center lg:pl-6 lg:hover:border-primary-50 lg:hover:shadow-shadow-2">
                                                    <a href="#"
                                                          className="flex items-center gap-3 font-bold text-sm text-Iteal-200">
                                                        <ImageView src={"/assets/images/grocery%20Vector/PetFood.svg"}
                                                                   alt={'PetFoodPic'} width={36} height={36}
                                                                   classname={"w-6 h-6"}/>
                                                        Pet
                                                        Foods &
                                                        Toy
                                                    </a>
                                                </li>
                                                <li className="text-Iteal-200 lg:w-52 lg:h-12 lg:border lg:border-Igray-50 lg:rounded lg:flex lg:items-center lg:pl-6 lg:hover:border-primary-50 lg:hover:shadow-shadow-2">
                                                    <a href="#"
                                                          className="flex items-center gap-3 font-bold text-sm text-Iteal-200">
                                                        <ImageView
                                                            src={"/assets/images/grocery%20Vector/bakingMaterial.svg"}
                                                            alt={'bakingMaterialPic'} width={36} height={36}
                                                            classname={"w-6 h-6"}/>
                                                        Baking
                                                        material
                                                    </a>
                                                </li>
                                                <li className="text-Iteal-200 lg:w-52 lg:h-12 lg:border lg:border-Igray-50 lg:rounded lg:flex lg:items-center lg:pl-6 lg:hover:border-primary-50 lg:hover:shadow-shadow-2">
                                                    <a href="#"
                                                          className="flex items-center gap-3 font-bold text-sm text-Iteal-200">
                                                        <ImageView src={"/assets/images/grocery%20Vector/fruit.svg"}
                                                                   alt={'fruitPic'} width={36} height={36}
                                                                   classname={"w-6 h-6"}/>
                                                        Fresh
                                                        Fruit
                                                    </a>
                                                </li>
                                                <li className="text-Iteal-200 lg:w-52 lg:h-12 lg:border lg:border-Igray-50 lg:rounded lg:flex lg:items-center lg:pl-6 lg:hover:border-primary-50 lg:hover:shadow-shadow-2">
                                                    <a href="#"
                                                          className="flex items-center gap-3 font-bold text-sm text-Iteal-200">
                                                        <ImageView src={"/assets/images/grocery%20Vector/wines.png"}
                                                                   alt={'winesPic'} width={36} height={36}
                                                                   classname={"w-6 h-6"}/>
                                                        Wines &
                                                        Drinks
                                                    </a>
                                                </li>
                                                <li className="text-Iteal-200 lg:w-52 lg:h-12 lg:border lg:border-Igray-50 lg:rounded lg:flex lg:items-center lg:pl-6 lg:hover:border-primary-50 lg:hover:shadow-shadow-2">
                                                    <a href="#"
                                                          className="flex items-center gap-3 font-bold text-sm text-Iteal-200">
                                                        <ImageView src={"/assets/images/grocery%20Vector/seeFood.svg"}
                                                                   alt={'seeFoodPic'} width={36} height={36}
                                                                   classname={"w-6 h-6"}/>
                                                        Fresh
                                                        Seafood
                                                    </a>
                                                </li>
                                                <li className="text-Iteal-200 lg:w-52 lg:h-12 lg:border lg:border-Igray-50 lg:rounded lg:flex lg:items-center lg:pl-6 lg:hover:border-primary-50 lg:hover:shadow-shadow-2">
                                                    <a href="#"
                                                          className="flex items-center gap-3 font-bold text-sm text-Iteal-200">
                                                        <ImageView
                                                            src={"/assets/images/grocery%20Vector/fastFood.svg"}
                                                            alt={'fastFoodPic'} width={36} height={36}
                                                            classname={"w-6 h-6"}/>
                                                        Fast
                                                        food
                                                    </a>
                                                </li>
                                                <li className="text-Iteal-200 lg:w-52 lg:h-12 lg:border lg:border-Igray-50 lg:rounded lg:flex lg:items-center lg:pl-6 lg:hover:border-primary-50 lg:hover:shadow-shadow-2">
                                                    <a href="#"
                                                          className="flex items-center gap-3 font-bold text-sm text-Iteal-200">
                                                        <ImageView
                                                            src={"/assets/images/grocery%20Vector/vegetables.svg"}
                                                            alt={'vegetablesPic'} width={36} height={36}
                                                            classname={"w-6 h-6"}/>
                                                        Vegetables
                                                    </a>
                                                </li>
                                                <li className="text-Iteal-200 lg:w-52 lg:h-12 lg:border lg:border-Igray-50 lg:rounded lg:flex lg:items-center lg:pl-6 lg:hover:border-primary-50 lg:hover:shadow-shadow-2">
                                                    <a href="#"
                                                          className="flex items-center gap-3 font-bold text-sm text-Iteal-200">
                                                        <ImageView
                                                            src={"/assets/images/grocery%20Vector/juice-bread.svg"}
                                                            alt={'juice-bread'} width={36} height={36}
                                                            classname={"w-6 h-6"}/>
                                                        Bread and
                                                        Juice
                                                    </a>
                                                </li>
                                            </ul>
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
                            </div>
                            <hr className="mt-1"/>
                            <ul className="menu-list lg:flex justify-center items-center gap-5 lg:basis-2/4 lg:w-full lg:h-full">
                                <li className="flex items-start gap-2 font-bold mb-3 mt-6 lg:mt-0 ">
                                    <ImageView src={"/assets/images/hot%20Deals.png"} alt={'hot Deals'} width={20}
                                               height={20} classname={"w-5 h-5"}/>
                                    <a href="#">Hot Deals</a>
                                </li>
                                <li className="font-bold lg:font-normal text-Iteal-200 mb-3">
                                    <a href="#">Home</a>
                                </li>
                                <li className="lg:hidden font-bold lg:font-normal text-Iteal-200 mb-3"><a
                                    href="#">Food <IconBox icon={"fa-chevron-down"} size={22}/></a>
                                </li>
                                <li className="font-bold lg:font-normal text-Iteal-200 mb-3"><a
                                    href="#">Vegetables  <IconBox icon={"fa-chevron-down"} size={22}/></a></li>
                                <li className="font-bold lg:font-normal text-Iteal-200 mb-3"><a href="#">Drink</a>
                                </li>
                                <li className="lg:hidden font-bold lg:font-normal text-Iteal-200 mb-3"><a
                                    href="#">Cookies</a></li>
                                <li className="lg:hidden font-bold lg:font-normal text-Iteal-200 mb-3"><a href="#">Meat
                                    & Seafood  <IconBox icon={"fa-chevron-down"} size={22}/></a></li>
                                <li className="lg:hidden font-bold lg:font-normal text-Iteal-200 mb-3"><a
                                    href="#">Bakery</a></li>
                            </ul>
                            <div
                                className="hidden lg:block lg:basis-1/4 lg:flex lg:flex-row lg:justify-end lg:items-center">
                                <IconBox icon={"fa-headset"} size={22} color={"Iteel-200"} align={"self-end"}/>
                                <div className="flex flex-col items-center ml-2">
                                    <p className="text-xl font-bold text-primary-300">1900 - 8888</p>
                                    <p className="text-xs text-Igray-300">24/7 Support Center</p>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <SearchForm/>
                    <ul className="flex gap-2 basis-1/2 lg:basis-1/4 justify-end items-center">
                        <li className={"flex gap-2 cursor-pointer"}>
                            <IconBox icon={"fa-user"} color={"Iteal-200"} link={"#"} title={"Account"} hideTitleOnMobile={true}/>
                        </li>
                        <li className={"flex gap-2 cursor-pointer"}>
                            <IconBox icon={"fa-cart-shopping"} color={"Iteal-200"} link={"#"} title={"Cart"} hideTitleOnMobile={true} badge={4}/>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

