import React from "react";
import IconAnimated from "./skillsIcon/IconAnimated.jsx";
import Icon from "./skillsIcon/Icon.jsx";


function Skills(){
    return(
        <div className="text-left flex flex-col text-wrap md:gap-7 gap-3 relative">
            <p className="p-3 text-base md:text-l bg-gray-900 md:p-7 rounded-2xl flex text-wrap">Though I'm a beginner, I genuinely enjoy solving problems through code — from crafting intuitive front-end interfaces to exploring the logic behind the back-end. The journey of building end-to-end solutions excites me every day.</p>
             <Icon />
            
        </div>
    )
}

export default Skills;