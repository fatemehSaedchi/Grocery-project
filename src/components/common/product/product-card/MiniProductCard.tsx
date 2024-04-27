import {ImageView, Rating} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {formatNumberWithCommas} from "@/utils/formatNumber";

interface Props {
    data: EntityType<ProductType>
}

export function MiniProductCard({data}: Props) {
    const price = formatNumberWithCommas({number: data.attributes.price})
    return (
        <div className="flex gap-3 lg:gap-5">
            <ImageView classname={"w-[50px] h-[50px]"} src={data.attributes.thumbnail?.data?.attributes.url} alt={'product'} width={data.attributes.thumbnail?.data?.attributes.width} height={data.attributes.thumbnail?.data?.attributes.height}/>
            <div className="flex flex-col justify-between">
                <div>
                    <div className="text-heading6 text-blue-300 mb-1 h-10">{data.attributes.title} </div>
                    <div className="flex gap-4">
                       <Rating rate={data.attributes.rate}/>
                    </div>
                </div>
                {
                    data.attributes.sell_price ?
                        <>
                            <span className="text-heading5 text-green-200">${data.attributes.sell_price}</span>
                            <span
                                className="text-heading-sm line-through text-gray-500">${price}</span>
                        </>
                        :
                        <span className="text-heading5 text-green-200 mb-4">${price}</span>
                }
            </div>
        </div>
    );
}