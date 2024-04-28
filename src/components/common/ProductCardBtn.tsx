import {IconBox} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {useContext} from "react";
import BasketContext from "@/store/BasketContext";

interface Props {
    productData: EntityType<ProductType>
}

export function ProductCardBtn({productData}: Props) {

    const basket = useContext(BasketContext)
    const currentProductInBasket = basket.getItem(productData.id)

    return (
        <div className="add-product">
            {
                currentProductInBasket ?
                    <div className="input-product__container  border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px] w-[60px] flex justify-between px-2">
                        <div className="flex flex-col justify-between">
                            <IconBox icon={"up icon-angle-small-up"} size={10} onClick={()=> basket.increaseItem(productData.id)}/>
                            <IconBox icon={"down icon-angle-small-down"} size={10} onClick={()=> basket.decreaseItem(productData.id)}/>
                        </div>
                        {
                            currentProductInBasket.quantity
                        }
                    </div> :
                    <button onClick={() => basket.addItem(productData)}
                            className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">Adds
                        +
                    </button>
            }


        </div>
    );
}