import {Section} from "@/components/layouts";
import {
    Banner,
    BestSellersSlider, DealsOfTheDaysSlider,
    FeaturedCategory,
    IconBox,
    MiniProductSlider,
    SimpleProductSlider, TopsAndTrendingSlider
} from "@/components";
import {getAllProductsApiCall} from "@/api/Product";
import {dehydrate, QueryClient, useQuery} from "@tanstack/react-query";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";
import Link from "next/link";
import {getMenuApiCall} from "@/api/menu";


export default function Home() {

    const {data: popularProductsData} = useQuery<ApiResponseType<ProductType>>({
        queryKey:[getAllProductsApiCall.name , 'popular_product'],
        queryFn:()=> getAllProductsApiCall({populate:["categories","thumbnail"], filters:{is_popular: {$eq: true}}}),
        // initialData: props.products
    })

    const {data: popularFruitsData} = useQuery<ApiResponseType<ProductType>>({
        queryKey:[getAllProductsApiCall.name, 'popular_fruit'],
        queryFn:()=> getAllProductsApiCall({populate:["categories","thumbnail"], filters:{is_popular_fruit: {$eq: true}}})
    })

    const {data: bestSellersData} = useQuery<ApiResponseType<ProductType>>({
        queryKey:[getAllProductsApiCall.name, 'best-sellers'],
        queryFn:()=> getAllProductsApiCall({populate:["categories","thumbnail"], filters:{is_best_seller: {$eq: true}}}) })

    const {data: dealsOfDayData} = useQuery<ApiResponseType<ProductType>>({
        queryKey:[getAllProductsApiCall.name, 'deals-of-day'],
        queryFn:()=> getAllProductsApiCall({populate:["categories","thumbnail"], filters:{discount_expire_date: {$notNull: true}}}) })


    return (
        <>
            <Section className={"mb-[75px]"}>
                <Banner
                    title={"Don’t miss amazing grocery deals"}
                    subtitle={"Sign up for the daily newsletter"}
                    bgImage={"/assets/images/banner_bg.png"}
                    image={"/assets/images/fresh-apples.png"}/>
            </Section>
            <Section>
                <div className="hidden sm:flex mb-[50px]">
                    <h2 className="text-heading3 text-blue-300">Featured Categories</h2>
                </div>
                <FeaturedCategory/>
            </Section>
            <Section>
                <MiniProductSlider/>
            </Section>
            <Section>
                <div className="flex justify-between mb-[50px]">
                    <h2 className="text-heading3 text-blue-300">Popular Products</h2>
                    <div className="flex items-center gap-3">
                        <IconBox
                            icon={"swiper-nav-left icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"}
                            size={24}/>
                        <IconBox
                            icon={"swiper-nav-right icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"}
                            size={24}/>
                    </div>
                </div>
                { popularProductsData && <SimpleProductSlider sliderData={popularProductsData.data} prevEl={".swiper-nav-left"} nextEl={".swiper-nav-right"}/> }
            </Section>
            <Section>
                <div className="flex justify-between mb-[50px]">
                    <h2 className="text-heading3 text-blue-300">Popular Fruits</h2>
                    <div className="flex items-center gap-3">
                        <IconBox
                            icon={"swiper-nav-left2 icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"}
                            size={24}/>
                        <IconBox
                            icon={"swiper-nav-right2 icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"}
                            size={24}/>
                    </div>
                </div>
                {popularFruitsData && <SimpleProductSlider sliderData={popularFruitsData.data} prevEl={".swiper-nav-left2"} nextEl={".swiper-nav-right2"}/>}
            </Section>
            <Section>
                <div className="flex justify-between mb-[50px]">
                    <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">Best Sellers</h2>
                </div>
                <div className="flex gap-[24px]">
                    <div className="bg-[url('/assets/images/bg-leaf.png')] bg-no-repeat bg-bottom bg-[#3BB77E] rounded-[10px] shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] p-12 pt-[38px] self-stretch flex-col justify-between max-w-[370px] hidden xl:flex">
                        <h3 className="text-heading2 text-blue-300">Bring nature into your home</h3>
                        <Link href="#" className="mt-6 pl-[15px] pr-2.5 py-2 bg-yellow-100 hover:bg-green-200 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                            <div className="text-xsmall text-white">Shop now</div>
                            <IconBox icon={'icon-arrow-small-right'} size={24}/>
                        </Link>
                    </div>
                    { bestSellersData && <div className={'flex-grow'}><BestSellersSlider sliderData={bestSellersData.data}/></div>}
                </div>
            </Section>
            <Section>
                <div className="flex justify-between items-center mb-[50px]">
                    <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">Deals
                        Of The Days</h2>
                    <Link className="flex items-center" href="#">All Deals
                        <IconBox icon={'icon-angle-small-right'} size={24}/>
                    </Link>
                </div>
                {dealsOfDayData && <DealsOfTheDaysSlider sliderData={dealsOfDayData.data}/>}
            </Section>
            <Section>
                <TopsAndTrendingSlider/>
            </Section>
        </>
    );
}


// SSR by InitialData
// export async function getServerSideProps() {
//     const products = await getAllProductsApiCall({populate:["categories","thumbnail"], filters:{is_popular: {$eq: true}}})
//     return { props: { products } }
// }


export async function getServerSideProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: [getMenuApiCall.name],
        queryFn: getMenuApiCall,
    })

    await queryClient.prefetchQuery({
        queryKey: [getAllProductsApiCall.name , 'popular_product'],
        queryFn: ()=> getAllProductsApiCall({populate:["categories","thumbnail"], filters:{is_popular: {$eq: true}}})
    })

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}


