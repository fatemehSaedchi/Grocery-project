import {ImageView} from "@/components";
import Link from "next/link";

export default function ContactUs() {
    return (
        <>
            <div className={'container max-w-screen-xl text-lg mb-10 '}>
                <h1 className={'text-[#3BB77E] mb-4 font-medium'}>
                    How can help you ?
                </h1>
                <div className={'grid grid-cols-3'}>
                    <div className={''}>
                        <h2 className={'font-bold text-4xl mb-4 text-[#253D4E]'}>
                            let us know how we can help you
                        </h2>
                        <p className={'mb-3 text-sm font-lato text-[#7E7E7E]'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                            ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <p className={'mb-3 text-sm font-lato text-[#7E7E7E]'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                            ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    <ul className={'col-span-2 grid grid-cols-2 gap-y-10'}>
                        <li>
                            <h3 className={'text-[#253D4E] hover:text-[#3BB77E] hover:cursor-pointer mb-2'}>01. Visit
                                Feedback</h3>
                            <p className={'text-[#7E7E7E] text-sm'}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo.</p>
                        </li>
                        <li>
                            <h3 className={'text-[#253D4E] hover:text-[#3BB77E] hover:cursor-pointer mb-2'}>02. Employer
                                Services</h3>
                            <p className={'text-[#7E7E7E] text-sm'}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo.</p>
                        </li>
                        <li>
                            <h3 className={'text-[#253D4E] hover:text-[#3BB77E] hover:cursor-pointer mb-2'}>03. Billing
                                Inquiries</h3>
                            <p className={'text-[#7E7E7E] text-sm'}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo.</p>
                        </li>
                        <li>
                            <h3 className={'text-[#253D4E] hover:text-[#3BB77E] hover:cursor-pointer mb-2'}>04.General
                                Inquiries</h3>
                            <p className={'text-[#7E7E7E] text-sm'}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={'container p-0 rounded-2xl overflow-hidden mb-10'}>
                <ImageView width={2502} height={1313} alt={'google map'} src={'/assets/images/contactUs/googleMap.png'}/>

            </div>

            <ul className={'container max-w-screen-xl text-lg mb-10 flex gap-3 justify-between'}>
                <li>
                    <h3 className={'text-[#253D4E] text-2xl mb-3'}>Office</h3>
                    <p className={'font-lato text-sm text-[#7E7E7E]'}>205 North Michigan Avenue, Suite 810 Chicago,
                        60601, USA
                    </p>
                    <p className={'font-lato text-sm text-[#7E7E7E]'}>Phone: (123) 456-7890
                    </p>
                    <p className={'font-lato text-sm text-[#7E7E7E] mb-4'}>Email: contact@Evara.com</p>
                    <Link href={''} className={'text-sm py-2 px-4 bg-[#3BB77E] rounded text-white'}
                          children={'View map'}/>
                </li>
                <li>
                    <h3 className={'text-[#253D4E] text-2xl mb-3'}>Studio</h3>
                    <p className={'font-lato text-sm text-[#7E7E7E]'}>205 North Michigan Avenue, Suite 810 Chicago,
                        60601, USA

                    </p>
                    <p className={'font-lato text-sm text-[#7E7E7E]'}>Phone: (123) 456-7890
                    </p>
                    <p className={'font-lato text-sm text-[#7E7E7E] mb-4'}>Email: contact@Evara.com</p>
                    <Link href={''} className={'text-sm py-2 px-4 bg-[#3BB77E] rounded text-white'}
                          children={'View map'}/>
                </li>
                <li>
                    <h3 className={'text-[#253D4E] text-2xl mb-3'}>Shop</h3>
                    <p className={'font-lato text-sm text-[#7E7E7E]'}>205 North Michigan Avenue, Suite 810 Chicago,
                        60601, USA

                    </p>
                    <p className={'font-lato text-sm text-[#7E7E7E]'}>Phone: (123) 456-7890
                    </p>
                    <p className={'font-lato text-sm text-[#7E7E7E] mb-4'}>Email: contact@Evara.com</p>
                    <Link href={''} className={'text-sm py-2 px-4 bg-[#3BB77E] rounded text-white'}
                          children={'View map'}/>
                </li>
            </ul>
            <div className={'flex container max-w-screen-xl justify-between'}>
                <div className={'col-span-2 w-7/12'}>
                    <h2 className={'text-[#3BB77E] text-lg mb-4'}>Contact form</h2>
                    <h3 className={'text-[#253D4E] text-3xl mb-4'}>Drop Us a Line</h3>
                    <p className={'text-sm text-[#7E7E7E] mb-4'}>Your email address will not be published. Required fields
                        are marked *</p>
                    <form action="">
                        <div className={'grid grid-cols-2 gap-4 mb-6'}>
                            <input className={'p-4 rounded-lg border text-sm '} type="text" placeholder={'Your name *'} required={true}/>
                            <input className={'p-4 rounded-lg border text-sm '} type="email" placeholder={'Email *'} required={true}/>
                            <input className={'p-4 rounded-lg border text-sm '} type="number" placeholder={'Phone number *'} required={true}/>
                            <input className={'p-4 rounded-lg border text-sm '} type="text" placeholder={'Subject *'} required={true}/>
                            <textarea name="" id="" placeholder={'Message *'} className={'col-span-2 min-h-[244px] resize-none p-4 rounded-lg border text-sm'}/>
                        </div>
                        <input type="submit" value={'Send Message'} className={'text-white text-sm bg-[#253D4E] p-4 rounded-lg'}/>

                    </form>
                </div>
                <ImageView width={867} height={1300} alt={'women photo'} src={'/assets/images/contactUs/womenPhoto.png'}
                           classname={' w-[378px] h-[450px] rounded-2xl'}/>
            </div>
        </>
    )
}