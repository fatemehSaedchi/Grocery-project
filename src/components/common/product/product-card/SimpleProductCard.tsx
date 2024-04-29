import {Badge, IconBox, ImageView, Rating} from "@/components";
import Link from "next/link";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {formatNumberWithCommas} from "@/utils/formatNumber";
import {ProductCardBtn} from "@/components/common/ProductCardBtn";
import {useContext} from "react";
import basketContext from "@/store/BasketContext";

interface Props {
    data: EntityType<ProductType>
}

// interface Props {
//     data: {
//         title: string,
//         image: string,
//         category: string,
//         rate: number,
//         weight: number,
//         unit: string,
//         price: number,
//         sale_price: number,
//         label: string,
//         total?: number
//         sold?: number
//     }
// }

export function SimpleProductCard({data}: Props) {
    const sellPrice = formatNumberWithCommas({number: data.attributes.sell_price})
    const price = formatNumberWithCommas({number: data.attributes.price})
    const basket = useContext(basketContext)
    const currentProductInBasket = basket.getItem(data.id)

    return (
        <div className="group border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-2 sm:p-4 xl:pb-5 lg:pt-[65px] h-full">
            { data.attributes.label && <Badge badge={data.attributes.label} sale_price={data.attributes.sell_price} price={data.attributes.price}/>}
            <div className="mt-8 hidden group-hover:flex rounded-[5px] border-[1px] border-green-200 w-max absolute top-[100px] left-[50%] translate-x-[-50%] bg-white productAction cursor-pointer">
                <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
                    <IconBox icon={"icon-heart text-brand1"} size={15}/>
                </div>
                <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
                    <IconBox icon={"icon-shuffle"} size={15}/>
                </div>
                <div className="p-2.5 hover:bg-green-150">
                    <IconBox icon={"icon-eye"} size={15}/>
                </div>
            </div>
            <ImageView src={data.attributes.thumbnail?.data?.attributes.url} alt={'product'} width={210} height={168} classname={"m-auto w-full aspect-[3/2] mb-[28px]"}/>
            <div className="flex flex-col gap-2">
                {/*{ (data.attributes.categories?.data[0] ? <div className="text-gray-500 text-xsmall h-5">{data.attributes.categories?.data[0].attributes.title}</div> : <div className={'h-5'}></div>) }*/}
                <div className="text-gray-500 text-xsmall h-5">{data.attributes.categories?.data[0]?.attributes.title}</div>
                <Link href={'#'}><h3
                    className="text-heading-sm text-blue-300 h-[30px] mb-1 overflow-hidden overflow-ellipsis">{data.attributes.title}</h3></Link>
                <div className="flex gap-4">
                    <Rating rate={data.attributes.rate}/>
                </div>
                <div className="font-lato text-xsmall text-gray-500">{data.attributes.weight} {data.attributes.unit}</div>
            </div>

            {
                data.attributes.total && data.attributes.sold ?
                    <>
                        <div className="flex items-center justify-between mt-3">
                            {
                                data.attributes.sell_price ?
                                    <>
                                        <span className="text-heading5 text-green-200 mr-1">${sellPrice}</span>
                                        <span className="text-heading-sm line-through text-gray-500">${price}</span>
                                    </>
                                    :
                                    <span className="text-heading5 text-green-200">${price}</span>
                            }
                        </div>

                        <div className="mt-[15px] bg-gray-200 h-[4px] w-full rounded-[2px]">
                            <div style={{width: `${(data.attributes.sold / data.attributes.total) * 100}%`}}
                                 className="bg-green-200 h-[4px] rounded-[2px]"></div>
                        </div>
                        <div className="mt-2.5 font-lato text-blue-300 text-xsmall">Sold: {data.attributes.sold}/{data.attributes.total}</div>
                        <div className="mt-[23px]">
                            {
                                currentProductInBasket ?
                                    <button className="flex justify-between px-5 items-center gap-2 xl:text-heading-sm text-white border-[1px] w-full rounded-[4px] bg-yellow-100 py-2 lg:py-[14px]">
                                        <div className="flex flex-col justify-between">
                                            <IconBox icon={"up icon-angle-small-up"} size={10}
                                                     onClick={() => basket.increaseItem(data.id)}/>
                                            <IconBox icon={"down icon-angle-small-down"} size={10}
                                                     onClick={() => basket.decreaseItem(data.id)}/>
                                        </div>
                                        {currentProductInBasket.quantity}
                                    </button>
                                    :
                                    <button onClick={() => basket.addItem(data)} className="flex justify-center items-center gap-2 xl:text-heading-sm text-white border-[1px] w-full rounded-[4px] bg-green-200 hover:bg-yellow-100 px-2 py-2 lg:py-[14px]">
                                        <IconBox title={'Add To Card'} titleClassName={'text-heading-sm'}
                                                 icon={"icon-shopping-cart"} size={22}/>
                                    </button>
                            }
                        </div>
                    </>
                    :
                    <div className="flex items-center justify-between mt-3">
                        <div>
                            {
                                data.attributes.sell_price ?
                                    <>
                                        <span className="text-heading5 text-green-200 mr-1">${sellPrice}</span>
                                        <span
                                            className="text-heading-sm line-through text-gray-500">${price}</span>
                                    </>
                                    :
                                    <span className="text-heading5 text-green-200">${price}</span>
                            }
                        </div>
                        <ProductCardBtn productData={data}/>
                    </div>
            }
        </div>
    );
}