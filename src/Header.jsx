import React, {useState} from "react";
import About from "./Render/About";
import Contact from "./Render/Contact";
import Resume from "./Render/Resume";
import Portfolio from "./Render/Portfolio.jsx";
import Skills from "./Render/Skills.jsx";

function Header(){

    const [active, setActive]=useState("About");
    function renderContent(){
        switch(active){
            case "About":
                return <About />;
            case "Skills":
                return <Skills />;    
            case "Resume":
                return <Resume />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            default:
                return <About />;
            
        }
    }
    return(
        <div>
        <div className="hidden md:flex md:flex-col w-full">
            <div className="flex flex-col md:flex-row w-full box-border md:justify-between md:items-center">
                <p className=" flex-1 text-lg sm:text-xl md:text-3xl font-bold  underline decoration-blue-500 md:inline-block text-left">{active}</p>  
                <div className="flex font-semibold sm:text-sm md:text-base text-xs">
                    <button onClick={() => setActive("About")}>About</button>
                    <button onClick={() => setActive("Skills")}>Skills</button>
                    <button onClick={() => setActive("Resume")}>Resume</button>
                    <button onClick={() => setActive("Portfolio")}>Portfolio</button>
                    <button onClick={() => setActive("Contact")}>Contact</button>
                </div>
            </div>
            <div className="hidden p-5">
                {renderContent()}

            </div>
        </div>

        <div className="text-sm fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-700 flex justify-around items-center py-2 md:hidden z-50">
            <button onClick={() => setActive("About")} className="flex-1 text-xs px-1 py-2 hover:bg-gray-800 rounded">About</button>
            <button onClick={() => setActive("Skills")} className="flex-1 text-xs px-1 py-2 hover:bg-gray-800 rounded">Skills</button>
            <button onClick={() => setActive("Resume")} className="flex-1 text-xs px-1 py-2 hover:bg-gray-800 rounded">Resume</button>
            <button onClick={() => setActive("Portfolio")} className="flex-1 text-xs px-1 py-2 hover:bg-gray-800 rounded">Portfolio</button>
            <button onClick={() => setActive("Contact")} className="flex-1 text-xs px-1 py-2 hover:bg-gray-800 rounded">Contact</button>
        </div>
        <div className="p-5">
                {renderContent()}

            </div>

        </div>



    );
}

export default Header;