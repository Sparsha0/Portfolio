import React from "react";
import Moto from "./Moto.jsx"


function About(){
    return(
        <div className="w-full" >
            <div className="space-y-2 md:space-y-4 text-base md:text-lg leading-relaxed bg-gray-900 text-white py-3 px-4 sm:px-8  rounded-2xl mx-auto tracking-wider text-left text-wrap">
                <p>
                    Hi, I’m <span className="font-semibold text-blue-200">Sparsha Sawant</span>, 
                    a self-taught Developer with a background in Electronics and Communication Engineering.
                    I started my career as a Manual QA but soon discovered my passion for building user-friendly web interfaces using HTML, CSS, JavaScript, and React.
                </p>
                <p>
                    I’m currently enhancing my skills through real-world projects. I enjoy combining design with logic to create clean, responsive, and accessible web applications.
                </p>
                <p>
                    Outside of coding, I love playing chess, learning new concepts, and focusing on personal growth. I’m actively seeking opportunities to contribute and grow as a developer.
                </p>

            </div>
        </div>
    );
}

export default About;