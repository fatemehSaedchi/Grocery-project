import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductVerticalList, SimpleProductCard} from "@/components";
import {TopSellingMock} from "@/mock/TopSelling";
import {TopRatedMock} from "@/mock/TopRated";
import {TrendingProductsMock} from "@/mock/TrendingProducts";
import {RecentlyAddedMock} from "@/mock/RecentlyAdded";

interface Props {
    
}

export function TopsAndTrendingSlider({}: Props) {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={true}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 18
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 18
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 22
                }
            }}
        >
            <SwiperSlide>
                <ProductVerticalList title={'Top Selling'} data={TopSellingMock}/>
            </SwiperSlide>

            <SwiperSlide>
                <ProductVerticalList title={'Trending Products'} data={TrendingProductsMock}/>
            </SwiperSlide>

            <SwiperSlide>
                <ProductVerticalList title={'Recently added'} data={RecentlyAddedMock}/>
            </SwiperSlide>

            <SwiperSlide>
                <ProductVerticalList title={'Top Rated'} data={TopRatedMock}/>
            </SwiperSlide>

        </Swiper>
    );
}