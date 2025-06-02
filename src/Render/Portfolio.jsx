import React, {useState} from"react";
import Portfoliorender from "./folioDOC/Portfoliorender";


function Portfolio(){

    const [active, setActive]= useState("All")
    function renderContent(){
        if(active === "All"){
            return(
                <div className="flex flex-col gap-5">
                    <Portfoliorender cate="webdesign" />

                    <Portfoliorender cate="webdevelopment" />
                </div>
            );
        }else{
            return (<Portfoliorender cate={active} />);
        }
        
        

    }


    return(
        <div className="flex flex-col">
            <div className="hidden md:flex md:justify-items-start gap-2">
                <button onClick={()=>setActive("All")}>All</button>
                <button onClick={()=>setActive("webdesign")}>Web Design</button>
                <button onClick={()=>setActive("webdevelopment")}>Web Development</button>
            </div>
            {/* Dropdown for small screens */}
            <div className="md:hidden mb-2">
                <select value={active}
                    onChange={e=> setActive(e.target.value)}
                    className ="w-full p-2 text-xs rounded border bg-gray-900">
                    <option value="All">All</option>
                    <option value="webdesign">Web Design</option>
                    <option value="webdevelopment">Web Development</option>
                    
                </select>

            </div>
            <div className="md:mt-4 mt-2 md:transition-all md:duration-500">
                {renderContent()} 
            </div>
        </div>
    );
}

export default Portfolio;