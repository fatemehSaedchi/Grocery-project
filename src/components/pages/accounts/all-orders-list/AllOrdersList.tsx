import {allOrdersHeader} from "@/mock/AllOrdersHeader";
import {allOrdersItem} from "@/mock/AllOrdersItem";
import {it} from "node:test";

interface Props {

}

export function AllOrdersList({}: Props) {
    return (
        <div className="flex flex-col items-start">
            <div className="text-heading3 font-quickSand text-blue-300 mb-[22px]">Your Orders</div>
            <div className="flex flex-wrap bg-gray-100 justify-start items-start gap-32 rounded-2xl mb-[24px] py-[19px] px-[30px]">
                {
                    allOrdersHeader &&
                    allOrdersHeader.map((item, index)=>{
                        return (
                            <div key={index} className="text-heading6 text-blue-300 font-quickSand gap">{item}</div>
                        )
                    })
                }
            </div>
            {
                allOrdersItem &&
                allOrdersItem.map((item, index)=>{
                    return (
                        <div className="flex flex-wrap justify-between items-start gap-20 mb-[30px] rounded-2xl px-[30px]">
                            <div className="text-medium text-gray-500">#{item.id}</div>
                            <div className="text-medium text-gray-500">{item.date}</div>
                            <div className="text-medium text-yellow-200">{item.status}</div>
                            <div className="text-medium text-gray-500">{item.total}</div>
                            <button className="text-medium text-green-200">{item.actions}</button>
                        </div>
                    )
                })
            }
        </div>
    );
}