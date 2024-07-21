import {IconBox, ImageView} from "@/components";
import {Section} from '@/components/layouts'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import AnimateValue from "@/components/common/animateValue/AnimateValue";

interface Props {

}

export default function About({}: Props) {
    return (
        <>
            <Section>
                <div className={'md:flex gap-10 w-full'}>
                    <ImageView src={'/assets/images/about/Rectangle25.jpg'} alt={'Rectangle'} width={646} height={736}
                               classname={'w-full md:w-1/2 max-w-[400px] md:max-w-none mx-auto object-center object-cover'}/>
                    <div className={'md:w-1/2'}>
                        <div
                            className={'text-xl sm:text-2xl xl:text-[40px] font-bold text-blue-300 py-7 xl:py-12'}>Welcome
                            to NestMart
                        </div>
                        <p className={'text-xs xl:text-base pb-5 text-gray-500'}>Lorem ipsum dolor sit amet, consectetur
                            adipiscing
                            elit, sed do eiusmod
                            tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate id est laborum.
                        </p>
                        <p className={'text-xs xl:text-base text-gray-500'}>Ius ferri velit sanctus cu, sed at soleat
                            accusata.
                            Dictas prompta et Ut placerat legendos
                            interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet
                            orci
                            eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus.
                            Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in
                            reprehenderit
                            in voluptate id est laborum.
                        </p>
                        <div className={'relative'}>
                            <Swiper
                                // spaceBetween={30}
                                slidesPerView={3}
                                modules={[Navigation]}
                                className={'mt-10 w-full'}
                                navigation={{
                                    nextEl: '.swiper-button-next-custom',
                                    prevEl: '.swiper-button-prev-custom'
                                }}
                                breakpoints={{
                                    0: {
                                        spaceBetween: 10
                                    },
                                    640: {
                                        spaceBetween: 30
                                    }
                                }}
                            >
                                <SwiperSlide>
                                    <ImageView src={'/assets/images/about/Rectangle26.jpg'} alt={'Rectangle26'}
                                               width={182}
                                               height={224}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ImageView src={'/assets/images/about/Rectangle27.jpg'} alt={'Rectangle27'}
                                               width={182}
                                               height={224}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ImageView src={'/assets/images/about/Rectangle28.jpg'} alt={'Rectangle28'}
                                               width={182}
                                               height={224}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ImageView src={'/assets/images/about/Rectangle26.jpg'} alt={'Rectangle26'}
                                               width={182}
                                               height={224}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ImageView src={'/assets/images/about/Rectangle27.jpg'} alt={'Rectangle27'}
                                               width={182}
                                               height={224}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ImageView src={'/assets/images/about/Rectangle28.jpg'} alt={'Rectangle28'}
                                               width={182}
                                               height={224}/>
                                </SwiperSlide>
                            </Swiper>
                            <IconBox
                                icon={'icon-angle-small-left swiper-button-next-custom w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gray-50 text-green-200 hover:bg-green-200 hover:text-gray-50 flex justify-center items-center absolute z-50 top-[40%] left-0 -translate-x-[50%] cursor-pointer'}/>
                            <IconBox
                                icon={'icon-angle-small-right swiper-button-prev-custom w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gray-50 text-green-200 hover:bg-green-200 hover:text-gray-50 flex justify-center items-center absolute z-50 top-[40%] right-0 translate-x-[50%] cursor-pointer'}/>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <div className={'flex flex-col items-center justify-center gap-3 xl:gap-6 mb-10 lg:mb-16'}>
                    <div className={'text-blue-300 font-bold text-xl md:text-3xl xl:text-[48px]'}>What We Provide?</div>
                    <ImageView src={'/assets/images/about/Wave.png'} alt={'waveIcon'} width={150} height={15}
                               classname={'w-[100px] xl:w-[150px]'}/>
                </div>
                <div className={'flex flex-wrap items-center justify-center gap-5'}>
                    <div
                        className={'border border-gray-200 rounded-[15px] flex flex-col gap-4 xl:gap-5 items-center p-9 w-[290px] xl:w-[390px] hover:shadow-c-xl'}>
                        <ImageView src={'/assets/images/about/005-sale.png'} alt={'sale'} width={100} height={100}
                                   classname={'h-16 w-16 xl:h-[80px] xl:w-[80px]'}/>
                        <div className={'text-blue-300 font-bold text-lg xl:text-xl'}>Best Prices & Offers</div>
                        <p className={'text-gray-500 text-xs text-center xl:text-base'}>There are many variations of
                            passages of
                            Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <span className={'text-sm text-green-200 cursor-pointer xl:text-base'}>Read more</span>
                    </div>
                    <div
                        className={'border border-gray-200 rounded-[15px] flex flex-col gap-4 xl:gap-5 items-center p-9 w-[290px] xl:w-[390px] hover:shadow-c-xl'}>
                        <ImageView src={'/assets/images/about/005-sale.png'} alt={'sale'} width={100} height={100}
                                   classname={'h-16 w-16 xl:h-[80px] xl:w-[80px]'}/>
                        <div className={'text-blue-300 font-bold text-lg xl:text-xl'}>Best Prices & Offers</div>
                        <p className={'text-gray-500 text-xs text-center xl:text-base'}>There are many variations of
                            passages of
                            Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <span className={'text-sm text-green-200 cursor-pointer xl:text-base'}>Read more</span>
                    </div>
                    <div
                        className={'border border-gray-200 rounded-[15px] flex flex-col gap-4 xl:gap-5 items-center p-9 w-[290px] xl:w-[390px] hover:shadow-c-xl'}>
                        <ImageView src={'/assets/images/about/005-sale.png'} alt={'sale'} width={100} height={100}
                                   classname={'h-16 w-16 xl:h-[80px] xl:w-[80px]'}/>
                        <div className={'text-blue-300 font-bold text-lg xl:text-xl'}>Best Prices & Offers</div>
                        <p className={'text-gray-500 text-xs text-center xl:text-base'}>There are many variations of
                            passages of
                            Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <span className={'text-sm text-green-200 cursor-pointer xl:text-base'}>Read more</span>
                    </div>
                    <div
                        className={'border border-gray-200 rounded-[15px] flex flex-col gap-4 xl:gap-5 items-center p-9 w-[290px] xl:w-[390px] hover:shadow-c-xl'}>
                        <ImageView src={'/assets/images/about/005-sale.png'} alt={'sale'} width={100} height={100}
                                   classname={'h-16 w-16 xl:h-[80px] xl:w-[80px]'}/>
                        <div className={'text-blue-300 font-bold text-lg xl:text-xl'}>Best Prices & Offers</div>
                        <p className={'text-gray-500 text-xs text-center xl:text-base'}>There are many variations of
                            passages of
                            Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <span className={'text-sm text-green-200 cursor-pointer xl:text-base'}>Read more</span>
                    </div>
                    <div
                        className={'border border-gray-200 rounded-[15px] flex flex-col gap-4 xl:gap-5 items-center p-9 w-[290px] xl:w-[390px] hover:shadow-c-xl'}>
                        <ImageView src={'/assets/images/about/005-sale.png'} alt={'sale'} width={100} height={100}
                                   classname={'h-16 w-16 xl:h-[80px] xl:w-[80px]'}/>
                        <div className={'text-blue-300 font-bold text-lg xl:text-xl'}>Best Prices & Offers</div>
                        <p className={'text-gray-500 text-xs text-center xl:text-base'}>There are many variations of
                            passages of
                            Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <span className={'text-sm text-green-200 cursor-pointer xl:text-base'}>Read more</span>
                    </div>
                    <div
                        className={'border border-gray-200 rounded-[15px] flex flex-col gap-4 xl:gap-5 items-center p-9 w-[290px] xl:w-[390px] hover:shadow-c-xl'}>
                        <ImageView src={'/assets/images/about/005-sale.png'} alt={'sale'} width={100} height={100}
                                   classname={'h-16 w-16 xl:h-[80px] xl:w-[80px]'}/>
                        <div className={'text-blue-300 font-bold text-lg xl:text-xl'}>Best Prices & Offers</div>
                        <p className={'text-gray-500 text-xs text-center xl:text-base'}>There are many variations of
                            passages of
                            Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <span className={'text-sm text-green-200 cursor-pointer xl:text-base'}>Read more</span>
                    </div>
                </div>
            </Section>

            <Section>
                <div className={'flex flex-wrap lg:flex-nowrap items-center gap-3 justify-center'}>
                    <ImageView src={'/assets/images/about/Rectangle30.jpg'} alt={'Rectangle30'} width={325} height={438} classname={'rounded-[15px] w-[150px] md:w-[200px] lg:w-[250px] xl:w-[325px]'}/>
                    <ImageView src={'/assets/images/about/Rectangle 31.jpg'} alt={'Rectangle 31'} width={426} height={575} classname={'rounded-[15px] w-[180px] md:w-[240px] lg:w-[330px] xl:w-[426px]'}/>
                    <div className={'justify-self-start flex flex-col gap-6 mt-7 lg:mt-2 lg:pl-5 lg:basis-[45%] xl:basis-2/6'}>
                        <span className={'text-gray-500 font-bold text-xl xl:text-2xl'}>Our performance</span>
                        <h1 className={'text-blue-300 font-bold text-3xl xl:text-5xl xl:leading-[56px]'}>Your Partner for <br/> e-commerce grocery solution</h1>
                        <p className={'text-sm xl:text-base text-gray-500'}>Ed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                            quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                        <p className={'text-sm xl:text-base text-gray-500'}>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                    </div>
                </div>
            </Section>

            <Section>
                <div className={'flex flex-wrap gap-6 justify-between w-full'}>
                    <div className={'md:basis-[30%]'}>
                        <div className={'text-blue-300 font-bold text-xl lg:text-2xl xl:text-3xl pb-4'}>Who we are</div>
                        <p className={'text-gray-500 text-sm xl:text-base'}>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                            mattis enim ut tellus eros donec ac
                            odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
                    </div>
                    <div className={'md:basis-[30%]'}>
                        <div className={'text-blue-300 font-bold text-xl lg:text-2xl xl:text-3xl pb-4'}>Who we are</div>
                        <p className={'text-gray-500 text-sm xl:text-base'}>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                            mattis enim ut tellus eros donec ac
                            odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
                    </div>
                    <div className={'md:basis-[30%]'}>
                        <div className={'text-blue-300 font-bold text-xl lg:text-2xl xl:text-3xl pb-4'}>Who we are</div>
                        <p className={'text-gray-500 text-sm xl:text-base'}>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                            mattis enim ut tellus eros donec ac
                            odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
                    </div>
                </div>
            </Section>

            <Section>
                {/*<div className={`w-full h-[170px] lg:h-[230px] rounded-[20px] bg-about-bg bg-cover bg-center max-w-7xl`}>*/}
                {/*    <div className={'w-full h-full bg-green-650 rounded-[20px] bg-opacity-70'}>*/}
                {/*        <div className={'h-full flex text-white font-bold items-center justify-between px-4 md:px-8 lg:px-16'}>*/}
                {/*            <div className={'text-center'}>*/}
                {/*                <span className={'text-xl sm:text-3xl lg:text-5xl'}>12+</span>*/}
                {/*                <div className={'text-[8px] sm:text-xs lg:text-base pt-1'}>Glorious years</div>*/}
                {/*            </div>*/}
                {/*            <div className={'text-center'}>*/}
                {/*                <span className={'text-xl sm:text-3xl lg:text-5xl'}>360+</span>*/}
                {/*                <div className={'text-[8px] sm:text-xs lg:text-base pt-1'}>Happy clients</div>*/}
                {/*            </div>*/}
                {/*            <div className={'text-center'}>*/}
                {/*                <span className={'text-xl sm:text-3xl lg:text-5xl'}>580+</span>*/}
                {/*                <div className={'text-[8px] sm:text-xs lg:text-base pt-1'}>Projects complete</div>*/}
                {/*            </div>*/}
                {/*            <div className={'text-center'}>*/}
                {/*                <span className={'text-xl sm:text-3xl lg:text-5xl'}>160+</span>*/}
                {/*                <div className={'text-[8px] sm:text-xs lg:text-base pt-1'}>Team advisor</div>*/}
                {/*            </div>*/}
                {/*            <div className={'text-center'}>*/}
                {/*                <span className={'text-xl sm:text-3xl lg:text-5xl'}>48+</span>*/}
                {/*                <div className={'text-[8px] sm:text-xs lg:text-base pt-1'}>Products Sale</div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <AnimateValue/>
            </Section>
        </>

    );
}

