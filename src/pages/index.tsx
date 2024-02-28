import {Section} from "@/components/layouts";
import {Banner, FeaturedCategory, IconBox, MiniProductSlider, SimpleProductSlider} from "@/components";
import {popularProducts} from "@/mock/PopularProducts";
import {popularFruits} from "@/mock/PopularFruits";


export default function Home() {
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
                   <IconBox icon={"swiper-nav-left icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"} size={24}/>
                   <IconBox icon={"swiper-nav-right icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"} size={24}/>
               </div>
           </div>
           <SimpleProductSlider sliderData={popularProducts} prevEl={".swiper-nav-left"} nextEl={".swiper-nav-right"}/>
       </Section>
       <Section>
           <div className="flex justify-between mb-[50px]">
               <h2 className="text-heading3 text-blue-300">Popular Fruits</h2>
               <div className="flex items-center gap-3">
                   <IconBox icon={"swiper-nav-left2 icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"} size={24}/>
                   <IconBox icon={"swiper-nav-right2 icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white"} size={24}/>
               </div>
           </div>
           <SimpleProductSlider sliderData={popularFruits} prevEl={".swiper-nav-left2"} nextEl={".swiper-nav-right2"}/>
       </Section>
   </>
  );
}
