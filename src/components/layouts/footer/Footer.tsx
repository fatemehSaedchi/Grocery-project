import React from 'react';
import {ImageView} from "@/components/common/image-view";
import Link from "next/link";
import {Logo} from "@/components/common/ui/logo";
import {IconBox} from "@/components/common/ui/icon-box";

export function Footer(props) {
    return (
        <footer>
            <div className="w-full h-52 xl:h-[382px] bg-no-repeat bg-primary-100 rounded-xl flex relative">
                <div className="w-[60%] h-full text-primary-400 pl-8 lg:pl-16 pt-5 flex flex-col sm:justify-center">
                    <p className="text-xl lg:leading-10 xl:leading-[50px] sm:text-[22px] md:text-[28px] lg:text-[38px] xl:text-[50px] font-bold">
                        Stay home & get your daily needs from our shop
                    </p>
                    <p className="hidden sm:inline-block text-xs lg:text-base mt-3 md:mt-5">Start Your Daily Sopping with Nest Mart</p>
                </div>
                <ImageView src="/assets/images/delivery section/Screenshot 2024-02-22 220143.png" alt="delivery-man" width={600} height={100} classname={"hidden md:block md:absolute md:right-0  md:bottom-0 h-full w-[300px]"}/>
            </div>
            <div className="md:flex md:flex-wrap justify-between border-b-2 border-Iteal-50">
                <div className="text-Iteal-200 border-b-2 xl:border-none md:w-full xl:w-[322px]">
                    <Logo/>
                    <p className="my-5">Pellentesque posuere orci lobortis</p>
                    <div className="flex flex-col gap-3 mb-10">
                        <div className="flex items-start">
                            <IconBox icon={"location-dot text-primary-300 pt-1.5 pr-2"}/>
                            <p><span className="font-bold">Address:</span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                        </div>
                        <div className="flex items-start">
                            <IconBox icon={"headset text-primary-300 pt-1.5 pr-2"}/>
                            <p><span className="font-bold">Call Us:</span> Call Us: (+91) - 540-025-124553 </p>
                        </div>
                        <div className="flex items-start">
                            <IconBox icon={"paper-plane text-primary-300 pt-1.5 pr-2"}/>
                            <p><span className="font-bold">Email:</span> contact@nestmart.com</p>
                        </div>
                        <div className="flex items-start">
                            <IconBox icon={"clock text-primary-300 pt-1.5 pr-2"}/>
                            <p><span className="font-bold">Hours:</span> 10:00 - 18:00, Mon - Sat </p>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 xl:border-none pl-6 md:w-1/3 py-2 relative xl:w-auto">
                    <div className="text-sm">
                        <h3 className="font-bold text-Iteal-200 inline-block h-[44px] flex items-center cursor-pointer">
                            Company <IconBox icon={"chevron-down text-Igray-300 md:hidden"}/>
                        </h3>
                        <div className="hidden md:inline-block md:w-auto md:overflow-visible md:max-h-[500px]">
                            <ul className="flex flex-col gap-2 text-Iteal-200">
                                <li className="hover:text-blue-800">
                                    <Link href="#">About Us</Link>
                                </li>
                                <li className="hover:text-blue-800">
                                    <Link href="#">Delivery Information</Link>
                                </li>
                                <li className="hover:text-blue-800">
                                    <Link href="#">Privacy Policy</Link>
                                </li>
                                <li className="hover:text-blue-800">
                                    <Link href="#">Terms & Conditions</Link>
                                </li>
                                <li className="hover:text-blue-800">
                                    <Link href="#">Contact Us</Link>
                                </li>
                                <li className="hover:text-blue-800">
                                    <Link href="#">Support center</Link>
                                </li>
                                <li className="hover:text-blue-800">
                                    <Link href="#">Careers</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 xl:border-none pl-6 md:w-1/3 py-2 relative xl:w-auto">
                    <div className="text-sm">
                        <h3 className="font-bold text-Iteal-200 inline-block h-[44px] flex items-center cursor-pointer">
                            Information <IconBox icon={"chevron-down text-Igray-300 md:hidden"}/>
                        </h3>
                        <div className="hidden md:inline-block md:w-auto md:overflow-visible md:max-h-[500px]">
                            <ul className="flex flex-col gap-2 text-Iteal-200">
                                <li className="hover:text-blue-800">
                                    <Link href="#">Search Terms</Link>
                                </li>
                                <li className="hover:text-blue-800">
                                    <Link href="#">Advanced Search</Link>
                                </li>
                                <li className="hover:text-blue-800">
                                    <Link href="#">Help & FAQ's</Link>
                                </li>
                                <li className="hover:text-blue-800">
                                    <Link href="#">Store Location</Link>
                                </li>
                                <li className="hover:text-blue-800">
                                    <Link href="#">Orders & Returns</Link>
                                </li>
                                <li className="hover:text-blue-800">
                                    <Link href="#">Feedback for us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pt-6 flex flex-col gap-4 w-full pb-6 md:w-1/3  xl:w-[281px]">
                    <h3 className="text-Iteal-200 font-bold">App & Payment</h3>
                    <p className="text-sm text-Igray-300">Install NetMart App from App Store or Google Play</p>
                    <div className="w-full flex gap-4 justify-center">
                        <Link href="#">
                            <ImageView src={"/assets/images/footer/11111.png"} alt={"appStore"} width={129} height={39}/>
                        </Link>
                        <Link href="#">
                            <ImageView src={"/assets/images/footer/22222.png"} alt={"googlePlat"} width={129} height={39}/>
                        </Link>
                    </div>
                    <p className="text-sm text-Igray-300">Secured Payment Gateways</p>
                    <Link href="#">
                        <ImageView src={"/assets/images/footer/33333.png"} alt={"googlePlat"} width={225} height={33} classname={"mx-auto"}/>
                    </Link>
                </div>
            </div>
            <div className="text-center font-bold text-Iteal-200 pt-8 pb-6">All rights reserved</div>
        </footer>
    );
}

