import React, {useContext, MouseEvent, Dispatch, SetStateAction} from "react";
import {BasketCardItem, IconBox, ImageView} from "@/components";
import {formatNumberWithCommas} from "@/utils/formatNumber";
import basketContext from "@/store/BasketContext";
import Link from "next/link";
import {useBasket} from "@/hooks/use-basket";
import {useQuery} from "@tanstack/react-query";
import {getOneProductsApiCall} from "@/api/Product";

interface Props {
    onClick: (e: MouseEvent) => void
    onClose: () => void
    setShowBasketCard: Dispatch<SetStateAction<boolean>>
}

export function BasketCard({onClick, onClose, setShowBasketCard}: Props) {

    const {basketItems} = useBasket()
    const isProduct = basketItems.length > 0


    return (
        <div onClick={onClick} className={`${(isProduct) ? 'fixed top-0 right-0 md:absolute md:top-12 md:right-0 lg:top-24 lg:right-5 md:shadow-2xl w-full md:w-[450px] h-[100vh] md:h-auto overflow-y-auto bg-white md:border md:border-green-150 md:rounded-xl p-3 pt-10 md:pt-7 flex flex-col gap-6 z-[99999]' : setShowBasketCard(false)}`}>
            <ul>
                {
                    basketItems.map((basketItem, index) => {

                        const isLast = index === basketItems.length - 1

                        return (
                           <BasketCardItem basketItem={basketItem} isLast={isLast}/>
                        )
                    })
                }
            </ul>
            <Link href={'/yourCart'} onClick={onClose} className={'bg-green-600 text-white font-bold rounded-3xl px-8 py-3 text-center'}>View Basket & Checkout</Link>
        </div>
    );
}