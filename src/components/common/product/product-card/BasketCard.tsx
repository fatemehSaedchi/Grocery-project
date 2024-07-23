import React, {useContext, MouseEvent, Dispatch, SetStateAction} from "react";
import {IconBox, ImageView} from "@/components";
import {formatNumberWithCommas} from "@/utils/formatNumber";
import basketContext from "@/store/BasketContext";
import Link from "next/link";

interface Props {
    onClick: (e: MouseEvent) => void
    onClose: () => void
    setShowBasketCard: Dispatch<SetStateAction<boolean>>
}

export function BasketCard({onClick, setShowBasketCard}: Props) {
    const basket = useContext(basketContext)
    const isProduct = basket.basketItems.length > 0


    return (
        <div onClick={onClick} className={`${(isProduct) ? 'fixed top-0 right-0 md:absolute md:top-12 md:right-0 lg:top-24 lg:right-5 md:shadow-2xl w-full md:w-[450px] h-[100vh] md:h-auto overflow-y-auto bg-white md:border md:border-green-150 md:rounded-xl p-3 pt-10 md:pt-7 flex flex-col gap-6 z-[99999]' : setShowBasketCard(false)}`}>
            <ul>
                {
                    basket.basketItems.map((basketItem, index) => {

                        const price = formatNumberWithCommas({number: basketItem.price * basketItem.quantity})
                        const sell_price = formatNumberWithCommas({number: (basketItem.sell_price ?? 0) * basketItem.quantity})
                        const isLast = index === basket.basketItems.length - 1

                        return (
                            <li className={`flex gap-x-4 items-center py-2 ${isLast ? 'border-b-0' : 'border-b border-b-green-150'}`}>
                                <ImageView src={basketItem.img} alt={basketItem.title} width={basketItem.width}
                                           height={basketItem.height} classname={'w-[50px] h-[50px]'}/>
                                <p className={'w-full text-sm'}>{basketItem.title}</p>
                                {
                                    basketItem.sell_price
                                        ? <span className={'text-center'}>${sell_price}</span>
                                        : <span className={'text-center'}>${price}</span>
                                }
                                <div
                                    className="input-product__container  border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px] w-[60px] flex justify-between">
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
            <Link href={'#'}
                  className={'bg-green-600 text-white font-bold rounded-3xl px-8 py-3 text-center'}>View Basket & Checkout</Link>
        </div>
    );
}