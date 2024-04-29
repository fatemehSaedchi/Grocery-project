import React, {useContext, MouseEvent, useEffect} from "react";
import {IconBox, ImageView} from "@/components";
import {formatNumberWithCommas} from "@/utils/formatNumber";
import basketContext from "@/store/BasketContext";
import Link from "next/link";

interface Props {
    onClick: (e: MouseEvent)=> void
}

export function BasketCard({onClick}: Props) {
    const basket = useContext(basketContext)
    const showMobileBasket = true

    useEffect(() => {
        if (showMobileBasket){
            document.body.style.overflowY = 'hidden'
        }else {
            document.body.style.overflowY = 'auto'
        }
        return()=>{
            document.body.style.overflowY = 'auto'
        }
    }, [showMobileBasket]);

    return (
        <div onClick={onClick} className={`${showMobileBasket ? 'fixed top-0 w-[400px] h-[100vh] overflow-y-scroll bg-white border-b border-b-green-200 rounded-sm  p-3 right-0 flex flex-col gap-6 pt-10' : ''}`}>
            <ul>
                {
                    basket.basketItems.map((basketItem, index) => {

                        const price = formatNumberWithCommas({number: basketItem.price * basketItem.quantity})
                        const sell_price = formatNumberWithCommas({number: (basketItem.sell_price ?? 0) * basketItem.quantity})
                        const isLast = index === basket.basketItems.length - 1

                        return (
                            <li className={`flex gap-x-4 items-center py-2 ${isLast ? 'border-b-0' : 'border-b border-b-green-150'}`}>
                                <ImageView src={basketItem.img} alt={basketItem.title} width={basketItem.width} height={basketItem.height} classname={'w-[50px] h-[50px]'}/>
                                <p className={'w-full text-sm'}>{basketItem.title}</p>
                                {
                                    basketItem.sell_price
                                        ? <span className={'text-center'}>${sell_price}</span>
                                        : <span className={'text-center'}>${price}</span>
                                }
                                <div className="input-product__container  border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px] w-[60px] flex justify-between">
                                    <div className="flex flex-col justify-between">
                                        <IconBox icon={"up icon-angle-small-up"} size={10}
                                                 onClick={() => basket.increaseItem(basketItem.productId)}/>
                                        <IconBox icon={"down icon-angle-small-down"} size={10}
                                                 onClick={() => basket.decreaseItem(basketItem.productId)}/>
                                    </div>
                                    {basketItem.quantity}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <Link href={'#'} className={'bg-green-600 text-white font-bold rounded-lg px-8 py-1 text-center'}>Pay</Link>
        </div>
    );
}