import React from "react";
import portfolioInfo from "./portfolioInfo.js"

function display(item){
    return(
        <div className="bg-gray-900 p-3 rounded-xl md:rounded-2xl">
             <a href={item.href}>
                <img src={item.src} alt={item.name} className=" h-34 w-50 border-gray-400  rounded-xl md:rounded-2xl shadow-2xl"></img>
            </a>
            <p className="hidden md:block">{item.name}</p>
        </div>
    );
}


function Portfoliorender(props){
    const filteredItems = portfolioInfo.filter(item=> item.category === props.cate);
    return(
        <div className="flex flex-row flex-wrap md:gap-4 gap-2">
            {filteredItems.map(display)}
        </div>
        
    );
}




export default Portfoliorender;