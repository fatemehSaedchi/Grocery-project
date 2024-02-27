import {Section} from "@/components/layouts";
import {Banner, FeaturedCategory} from "@/components";


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
   </>
  );
}
