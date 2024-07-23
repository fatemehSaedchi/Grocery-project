import {IconBox, ImageView} from "@/components";

interface Props {

}

export default function singleProduct({}: Props) {

    // const router = useRouter();
    // const { id } = router.query;

    return (
        <>
            <section className={"flex flex-col items-center mb-[68px]"}>
                <div className="flex flex-row justify-center w-4/5">
                    <div className="w-1/2 mr-[28px]">
                        <div className="w-full mb-[28px] p-[40px] border-[1px] border-gray-200 rounded-2xl">
                            <div className="top-0 left-0 flex justify-end">
                                <IconBox icon={'icon-search text-gray-200 mb-20'} size={24}/>
                            </div>
                            <ImageView alt={'mango Image'} src={'/assets/images/products/mango.png'}
                                       classname={'w-11/12'}
                                       height={202} width={145}/>
                        </div>
                        <div className="flex flex-row gap-[25px] justify-center items-center">
                            <div className="bg-green-200 rounded-full flex flex-row-reverse items-center p-2">
                                <IconBox icon={'icon-arrow-small-right rotate-180'} size={24}/>
                            </div>
                            <div className="w-1/4 border border-green-200 rounded-2xl p-2">
                                <ImageView alt={''} src={'/assets/images/products/tanjerin.png'} width={210}
                                           height={168}
                                           classname={"w-full"}/>
                            </div>
                            <div className="w-1/4 border rounded-xl p-2">
                                <ImageView alt={''} src={'/assets/images/zppb2xd1%201.png'} width={79} height={79}
                                           classname={"w-full"}/>
                            </div>
                            <div className="w-1/4 border rounded-xl p-2">
                                <ImageView alt={''} src={'/assets/images/6%201.png'} width={97} height={86}
                                           classname={"w-full"}/>
                            </div>
                            <div className="w-1/4 border rounded-xl p-2">
                                <ImageView alt={''} src={'/assets/images/products/lemon.png'} width={220} height={154}
                                           classname={"w-full"}/>
                            </div>
                            <div className="bg-green-200 rounded-full flex items-center p-2">
                                <IconBox icon={'icon-arrow-small-right'} size={24}/>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <span className={'text-green-200 text-sm mb-2 bg-green-100 p-2 rounded font-bold inline-block'}>
                            In Stock
                        </span>
                        <h2 className={'text-blue-300 text-4xl mb-5 font-bold'}>
                            Seeds of Change Organic Quinoa, Brown
                        </h2>

                        <div className={'flex align-baseline items-center mb-4'}>
                            <IconBox icon={'icon-star-full'} size={12}/>
                            <IconBox icon={'icon-star-full'} size={12}/>
                            <IconBox icon={'icon-star-full'} size={12}/>
                            <IconBox icon={'icon-star-full'} size={12}/>
                            <IconBox icon={'icon-star-empty'} size={12}/>

                            <span className={'text-xs ml-2'}>
                           (4.0)
                        </span>
                        </div>

                        <div className={'flex items-baseline gap-4 mb-5'}>
                        <span className={'text-green-200 text-7xl font-bold'}>
                            $38
                        </span>
                            <span className={'text-gray-400 text-3xl line-through font-bold'}>
                            $42
                        </span>
                        </div>

                        <p className={'mb-4 font-lato text-medium text-gray-500'}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti
                            reiciendis
                            minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque
                            facere
                            quia. Voluptatum, accusantium!
                        </p>
                        <p className={'mb-10 font-lato text-medium text-gray-500'}>
                            Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes
                            off far
                            quetzal goodness and from for grimaced goodness.
                        </p>

                        <form action="" className={'grid grid-cols-5 w-1/2 gap-4 mb-10'}>
                            <input type="number" defaultValue={1}
                                   className={'border rounded py-2 px-4 max col-span-2'}/>
                            <div className={'flex gap-2 py-2 px-4 bg-green-200 w-fit rounded col-span-3'}>
                                <IconBox icon={'icon-shopping-cart text-white font-bold '} size={14}/>
                                <input type="submit" value={'Add to card'}
                                       className={'text-white text-sm font-bold w-min inline-block text-center '}/>
                            </div>
                        </form>

                        <p>
                            SKU: FWM15VKT
                        </p>

                    </div>
                </div>
            </section>

            <section className={'container max-w-screen-xl border border-gray-50 rounded-lg p-10'}>
                <ul className={'flex gap-10 text-lg text-gray-500 font-bold mb-10'}>
                    <li className={'text-green-200 border rounded-full py-2 px-8 shadow-lg'}>Description</li>
                    <li className={'border rounded-full py-2 px-8'}>Additional info</li>
                    <li className={'border rounded-full py-2 px-8'}>Reviews (3)</li>
                </ul>

                <div className={'text-gray-500 text-medium font-lato flex flex-col gap-5'}>
                    <p>
                        Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off
                        far
                        quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly
                        crucial
                        scallop tightly neurotic hungrily some and dear furiously this apart.
                    </p>
                    <p>
                        Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed
                        that alas
                        rethought much decently richly and wow against the frequent fluidly at formidable acceptably
                        flapped
                        besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness
                        gnashed a
                        jellyfish and one however because.
                    </p>

                    <h3 className={'text-blue-300 font-bold text-xl'}>
                        Packaging & Delivery
                    </h3>
                    <p>
                        Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while
                        thus
                        cackled sheepishly rigid after due one assenting regarding censorious while occasional or this
                        more
                        crane went more as this less much amid overhung anathematic because much held one exuberantly
                        sheep
                        goodness so where rat wry well concomitantly.
                    </p>
                    <ul className={'list-disc ml-4 w-1/3 flex flex-col gap-4'}>
                        <li >
                            <div className={'grid grid-cols-2'}>
                                Type Of Packing
                                <span>
                                Paper wrapping
                            </span>
                            </div>
                        </li>
                        <li>
                            <div className={'grid grid-cols-2'}>
                                Color
                                <span>
                                Green, Pink, Brown
                            </span>
                            </div>
                        </li>
                        <li >
                            <div className={'grid grid-cols-2'}>
                                Quantity Per Case
                                <span>
                                500g
                            </span>

                            </div>
                        </li>
                        <li >
                            <div className={'grid grid-cols-2'}>
                                Fat percentage
                                <span>
                                56%
                            </span>
                            </div>
                        </li>
                        <li >
                            <div className={'grid grid-cols-2'}>
                                Piece In One
                                <span>
                               Carton
                            </span>
                            </div>
                        </li>
                    </ul>
                    <p>
                        Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake
                        contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled
                        dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively
                        fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively
                        dachshund.
                    </p>
                    <h3 className={'text-blue-300 font-bold text-xl'}>
                        Suggested Use
                    </h3>
                    <ul>
                        <li>
                            Refrigeration not necessary.
                        </li>
                        <li>
                            Stir before serving
                        </li>
                    </ul>
                    <h3 className={'text-blue-300 font-bold text-xl'}>
                        Other Ingredients
                    </h3>
                    <ul>
                        <li>
                            Organic raw pecans, organic raw cashews.
                        </li>
                        <li>
                            This butter was produced using a LTG (Low Temperature Grinding) process.
                        </li>
                        <li>
                            Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy.
                        </li>
                    </ul>
                    <h3 className={'text-blue-300 font-bold text-xl'}>
                        Warnings
                    </h3>
                    <p>
                        Oil separation occurs naturally. May contain pieces of shell.
                    </p>
                </div>

            </section>
        </>

    )
}