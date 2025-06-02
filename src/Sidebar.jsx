import React, { useState } from "react";
import Footer from "./Footer";
import Details from "./Details";


function Sidebar() {
    const [showInfo, setShowInfo] = useState(false);
  

    return (
        <div className="flex flex-col rounded-2xl relative">
            <div className="flex flex-row md:flex-col md:items-center px-2 sm:px-4 gap-3 p-4 ">
                <img src="/images/sparsha.png" className="w-20 h-24 sm:w-24 sm:h-38 md:w-38 md:h-52 md:mt-14 border-gray-900 rounded-2xl shadow-2xl" alt="sparsha sawant" />
                <div className="flex flex-col space-x-1 gap-1">
                    <p className=" text-base sm:text-lg md:text-2xl md:mt-3 font-bold text-shadow-lg text-warp">Sparsha Sawant</p>
                    <p className="text-xs sm:text-sm ring-white border-2 md:px-5 rounded-md md:text-l bg-gray-900 md:mt-3 text-wrap">Web developer</p>

                </div>
                <div className="show-info-btn top-0 right-0 absolute ">
                    <button
                className="md:hidden  bg-gray-900 rounded border-blue-500  text-wrap text-xs"
                onClick={() => setShowInfo(!showInfo)}
            >
                {showInfo ? "Less Info" : "More Info"}
            </button>

                </div>
                
            </div>
            
            {/* Button to toggle Details and Footer on small screens */}
            
            {/* Show Details and Footer only if showInfo is true on small screens */}
            <div className={`${showInfo ? "block" : "hidden"} md:block`}>
                <hr className=" border-gray-500 my-4 mb-7 md:w-3/4 md:ml-10 " />
                <Details />
                <Footer />
            </div>
            {/* Navigation and content for small screens */}
            
        </div>
    );
}

export default Sidebar;