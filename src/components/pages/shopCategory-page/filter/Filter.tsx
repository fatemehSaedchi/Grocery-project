import {IconBox, ImageView} from "@/components";

interface Props {
    
}

export function Filter({}: Props) {
    return (
            <div className="flex flex-col border-[1px] border-gray-200 rounded-[10px] px-[30px] pt-7 mb-[55px] pb-4">
                <p className="text-heading4 font-quickSand mb-[14px] pb-[14px] border-b-2">Filter items</p>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex">
                        <p className="font-lato text-heading6 font-normal text-gray-400 mb-[31px] mr-[22px]">Price
                            Range:</p>
                        <span className="font-quickSand text-heading5 text-green-200">$16 - $173</span>
                    </div>
                </div>
                <div className="mt-[15px] bg-gray-200 h-[4px] w-full rounded-[2px] mb-[35px]">
                    <div className="bg-green-200 h-[4px] w-3/4 rounded-[2px]"></div>
                </div>
                <p className="font-lato text-heading6 font-normal text-gray-400 mb-[21px]">Used for:</p>
                <div className="flex flex-col items-start mb-[30px]">
                    <div className="flex mb-[10px] items-center justify-center">
                        <IconBox icon={'icon-play mr-[10px]'} size={16}/>
                        <p className="text-medium text-gray-400 hover:text-blue-300">Appetizer</p>
                    </div>
                    <div className="flex mb-[10px] items-center justify-center">
                        <IconBox icon={'icon-play mr-[10px]'} size={16}/>
                        <p className="text-medium text-gray-400 hover:text-blue-300">Salad</p>
                    </div>
                    <div className="flex mb-[10px] items-center justify-center">
                        <IconBox icon={'icon-play mr-[10px]'} size={16}/>
                        <p className="text-medium text-gray-400 hover:text-blue-300">Eat fresh</p>
                    </div>
                    <div className="flex mb-[10px] items-center justify-center">
                        <IconBox icon={'icon-play mr-[10px]'} size={16}/>
                        <p className="text-medium text-gray-400 hover:text-blue-300">Juice</p>
                    </div>
                    <div className="flex mb-[10px] items-center justify-center">
                        <IconBox icon={'icon-play mr-[10px]'} size={16}/>
                        <p className="text-medium text-gray-400 hover:text-blue-300">Smoothie</p>
                    </div>
                </div>

                <p className="font-lato text-heading6 font-normal text-gray-400 mb-[21px]">Brand:</p>
                <div className="flex flex-col items-start mb-[30px]">
                    <div className="flex mb-[10px] items-center justify-center">
                        <IconBox icon={'icon-play mr-[10px]'} size={16}/>
                        <p className="text-medium text-gray-400 hover:text-blue-300">Cobblestone</p>
                    </div>
                    <div className="flex mb-[10px] items-center justify-center">
                        <IconBox icon={'icon-play mr-[10px]'} size={16}/>
                        <p className="text-medium text-gray-400 hover:text-blue-300">McVitie's</p>
                    </div>
                    <div className="flex mb-[10px] items-center justify-center">
                        <IconBox icon={'icon-play mr-[10px]'} size={16}/>
                        <p className="text-medium text-gray-400 hover:text-blue-300">Tastykake</p>
                    </div>
                    <div className="flex mb-[10px] items-center justify-center">
                        <IconBox icon={'icon-play mr-[10px]'} size={16}/>
                        <p className="text-medium text-gray-400 hover:text-blue-300">Warburtons</p>
                    </div>
                    <div className="flex mb-[10px] items-center justify-center">
                        <IconBox icon={'icon-play mr-[10px]'} size={16}/>
                        <p className="text-medium text-gray-400 hover:text-blue-300">Wonder Bread</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <button className="rounded bg-green-100 px-[32px] py-[14px] text-green-200 flex justify-center items-center">Filter</button>
                    <ImageView src={"/assets/images/fresh-chinese-cabbage.png"} alt={'fresh-chinese-cabbage'} classname={"hidden md:block"} width={204} height={173}/>
                </div>
            </div>
    );
}