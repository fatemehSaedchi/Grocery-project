import {MiniProductCard} from "@/components";
import {PopulateType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {
    title: string
    data: PopulateType<ProductType>
}

export function ProductVerticalList({data, title}: Props) {

    return (
        <>
            <h3 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300 mb-[30px]">{title}</h3>
            <div className="flex flex-col gap-6">
                {
                    data.data.map((item,index)=>{
                        return(
                            <MiniProductCard key={index} data={item}/>
                        )
                    })
                }

            </div>
        </>
    );
}