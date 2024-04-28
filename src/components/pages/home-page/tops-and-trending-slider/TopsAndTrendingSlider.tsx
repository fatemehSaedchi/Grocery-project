import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductVerticalList} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {getAllProductsApiCall} from "@/api/Product";
import { InView } from 'react-intersection-observer'


export function TopsAndTrendingSlider() {

    const {data: topSellingData} = useQuery({queryKey: [getAllProductsApiCall.name, 'topSellingData'], queryFn:()=> getAllProductsApiCall({
            populate: ["thumbnail"],
            filters:{ is_top_selling: {$eq: true}},
            pagination: {
                page: 1,
                pageSize: 3
            }
        }),
        enabled: false
    })
    // console.log("topSellingData", topSellingData)

    const {data: TrendingProductsData} = useQuery({queryKey: [getAllProductsApiCall.name, 'TrendingProductsData'], queryFn:()=> getAllProductsApiCall({
            populate: ["thumbnail"],
            filters:{ is_trending: {$eq: true}},
            pagination: {
                page: 1,
                pageSize: 3
            }
        }),
        enabled: false
    })
    // console.log("TrendingProductsData", TrendingProductsData)

    const {data: RecentlyAddedData} = useQuery({queryKey: [getAllProductsApiCall.name, 'RecentlyAddedData'], queryFn:()=> getAllProductsApiCall({
            populate: ["thumbnail"],
            filters:{ is_popular: {$eq: true}},
            pagination: {
                page: 1,
                pageSize: 3
            }
        }),
        enabled: false
    })
    // console.log("RecentlyAddedData", RecentlyAddedData)

    const {data: topRatedData,refetch} = useQuery({queryKey: [getAllProductsApiCall.name, 'topRatedData'], queryFn:()=> getAllProductsApiCall({
            populate: ["thumbnail"],
            sort: ["rate:desc"],
            pagination: {
                page: 1,
                pageSize: 3
            }
        }),
        enabled: false
    })
    // console.log("topRatedData", topRatedData)

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
                <InView as="div" onChange={(inView, entry) => inView && refetch()}>
                {topSellingData && <ProductVerticalList title={'Top Selling'} data={topSellingData}/>}
                </InView>
            </SwiperSlide>

            <SwiperSlide>
                <InView as="div" onChange={(inView, entry) => inView && refetch()}>
                {TrendingProductsData && <ProductVerticalList title={'Trending Products'} data={TrendingProductsData}/>}
                </InView>
            </SwiperSlide>


            <SwiperSlide>
                <InView as="div" onChange={(inView, entry) => inView && refetch()}>
                {RecentlyAddedData && <ProductVerticalList title={'Recently added'} data={RecentlyAddedData}/>}
                </InView>
            </SwiperSlide>


            <SwiperSlide>
                <InView as="div" onChange={(inView, entry) => inView && refetch()}>
                {topRatedData && <ProductVerticalList title={'Top Rated'} data={topRatedData}/>}
                </InView>
            </SwiperSlide>

        </Swiper>
    );
}