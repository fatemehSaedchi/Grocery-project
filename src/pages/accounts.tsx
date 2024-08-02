// @ts-ignore
import {Section} from '@/components/layouts'
import {YourCartTable} from "@/components";
import {AllOrdersList} from "@/components/pages/accounts";
interface Props {
    
}

export default function Accounts({}: Props) {
    return (
        <>
            <Section className="lg:mt-[100px] sm:mt-4 font-lato mb-[239px]">
                <div className="flex flex-wrap justify-center items-center">
                    <div className="flex flex-col gap-2.5 font-quickSand text-gray-500 text-heading6 lg:mr-[73px] sm:mr-0 sm:mb-10">
                        <div
                            className="flex cursor-pointer gap-3.5 text-black px-4 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                            <img src="/assets/images/accounts/fi-rs-settings%201.svg" alt="image" width="26" height="24"/>
                            <div className="text-medium">Browse All Categories</div>
                        </div>

                        <div
                            className="flex cursor-pointer gap-3.5 text-black px-4 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                            <img src="/assets/images/accounts/fi-rs-settings 1.svg" alt="image" width="26" height="24"/>
                            <div className="text-medium">Browse All Categories</div>
                        </div>

                        <div
                            className="flex cursor-pointer gap-3.5 text-black px-4 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                            <img src="/assets/images/accounts/fi-rs-shopping-bag.svg" alt="image" width="26" height="24"/>

                            <div className="text-medium">Browse All Categories</div>
                        </div>

                        <div
                            className="flex cursor-pointer gap-3.5 text-black px-4 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                            <img src="/assets/images/accounts/fi-rs-marker.svg" alt="image" width="26" height="24"/>
                            <div className="text-medium">Browse All Categories</div>
                        </div>

                        <div
                            className="flex cursor-pointer gap-3.5 text-black px-4 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                            <img src="/assets/images/accounts/fi-rs-user.svg" alt="image" width="26" height="24"/>
                            <div className="text-medium">Browse All Categories</div>
                        </div>

                        <div
                            className="flex cursor-pointer gap-3.5 text-black px-4 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                            <img src="/assets/images/accounts/fi-rs-sign-out 1.svg" alt="image" width="26" height="24"/>
                            <div className="text-medium">Browse All Categories</div>
                        </div>
                    </div>


                    <AllOrdersList/>
                </div>
            </Section>
        </>
    );
}