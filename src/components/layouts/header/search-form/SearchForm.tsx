import React from "react";
import {IconBox} from "@/components/common/ui/icon-box";

export function SearchForm(props) {
    // TODO should implement form
    return (
        <>
            <div className="basis-1/2 lg:basis-2/4 flex relative xs:mt-4 border border-primary-100 hover:border-primary-300">
                <form action="#" name={"search-form"} className={"w-full flex items-center px-5"}>
                    <input type="text" name={"search_text"} placeholder="Search for items"
                           className="outline-none sm:block basis-3/4 h-12 text-sm"/>
                    <button type="submit">
                        <IconBox icon={"fa-magnifying-glass"} size={22} color={"Iteal-200"}/>
                    </button>
                </form>
            </div>
        </>
    );
}

