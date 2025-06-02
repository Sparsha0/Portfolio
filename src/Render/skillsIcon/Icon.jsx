import React, {useState} from "react";
import Frontend from "./Frontend.jsx";
import Backend from "./Backend.jsx";
import Databases from "./Databases.jsx";

function Icon(){
    const [active, setActive]=useState("All")
    function renderContent(){
     if(active==="All"){
            return (
                <><Frontend />
                <Backend />
                <Databases />
                </>
                
            )
        }
     else if(active==="Frontend"){
            return (<Frontend />)
        }
        else if(active==="Backend"){
            return (<Backend />)
        }
        else if(active==="Databases"){
            return(<Databases />)
        }
            
        
    }
    return (
        <div>
            <div className="flex md:flex-row md:justify-between gap-3">
                <h3 className="font-semibold text-lg md:text-xl text-wrap hidden md:block"></h3>
            <select value={active}
            onChange={e=>setActive(e.target.value)}
            className="w-2/5 p-1 md:p-2 md:text-lg text-sm md:rounded-lg rounded bg-gray-900 h-8/12 text-center">
                <option value="All">Technologies I Use</option>
                <option value="Frontend">Frontend Technologies</option>
                <option value="Backend">Backend Technologies</option>
                <option value="Databases">Databases</option>

            </select>

            </div>
            
            <div>
                {renderContent()}
            </div>
        </div>
    );
}


export default Icon;