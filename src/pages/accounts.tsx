// @ts-ignore
import {Section} from '@/components/layouts'
interface Props {
    
}

export default function Accounts({}: Props) {
    return (
        <>
            <Section className="lg:mt-[100px] sm:mt-4 font-lato mb-[239px]">
                <div className="flex flex-wrap justify-center items-center">
                    <div
                        className="flex flex-col gap-2.5 font-quickSand text-gray-500 text-heading6 lg:mr-[73px] sm:mr-0 sm:mb-10">
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

                    <div className="flex flex-col items-start">
                        <div className="text-heading3 font-quickSand text-blue-300 mb-[22px]">Your Orders</div>
                        <div
                            className="flex flex-wrap bg-gray-100 justify-start items-start gap-32 rounded-2xl mb-[24px] py-[19px] px-[30px]">
                            <div className="text-heading6 text-blue-300 font-quickSand gap">Order ID</div>
                            <div className="text-heading6 text-blue-300 font-quickSand">Date</div>
                            <div className="text-heading6 text-blue-300 font-quickSand">Status</div>
                            <div className="text-heading6 text-blue-300 font-quickSand">Total</div>
                            <div className="text-heading6 text-blue-300 font-quickSand">Actions</div>
                        </div>
                        <div
                            className="flex flex-wrap justify-between items-start gap-20 mb-[30px] rounded-2xl px-[30px]">
                            <div className="text-medium text-gray-500">#1357</div>
                            <div className="text-medium text-gray-500">March 15, 2021</div>
                            <div className="text-medium text-yellow-200">Processing</div>
                            <div className="text-medium text-gray-500">$125.00 for 2 item</div>
                            <button className="text-medium text-green-200">View</button>
                        </div>
                        <div
                            className="flex flex-wrap justify-between items-start gap-20 rounded-2xl mb-[30px] px-[30px]">
                            <div className="text-medium text-gray-500">#1357</div>
                            <div className="text-medium text-gray-500">March 15, 2021</div>
                            <div className="text-medium text-green-300">Completed</div>
                            <div className="text-medium text-gray-500">$125.00 for 2 item</div>
                            <button className="text-medium text-green-200">View</button>
                        </div>
                        <div
                            className="flex flex-wrap justify-between items-start gap-20 rounded-2xl mb-[30px] px-[30px]">
                            <div className="text-medium text-gray-500">#1357</div>
                            <div className="text-medium text-gray-500">March 15, 2021</div>
                            <div className="text-medium text-green-300">Completed</div>
                            <div className="text-medium text-gray-500">$125.00 for 2 item</div>
                            <button className="text-medium text-green-200">View</button>
                        </div>
                        <div
                            className="flex flex-wrap justify-between items-start gap-20 rounded-2xl mb-[30px] px-[30px]">
                            <div className="text-medium text-gray-500">#1357</div>
                            <div className="text-medium text-gray-500">March 15, 2021</div>
                            <div className="text-medium text-green-300">Completed</div>
                            <div className="text-medium text-gray-500">$125.00 for 2 item</div>
                            <button className="text-medium text-green-200">View</button>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}