import React from "react";


function Resume(){
    return(
   <div className="text-left gap-8 flex flex-col">
            <div className="flex gap-7 items-start relative bg-gray-900 rounded-2xl p-5 mr-5">
                {/* Timeline Icon */}
                <div className="flex flex-col items-center">
                    <ion-icon name="school-outline" class="text-3xl"></ion-icon>
                    {/* Vertical line */}
                    <div className="w-1 bg-blue-400 h-42 mt-1 rounded-full relative">
                        <span className="absolute left-1/2 -translate-x-1/2 top-7 w-4 h-4 bg-blue-400 border-4 border-white rounded-full z-10"></span>
                        <span className="absolute left-1/2 -translate-x-1/2 top-34 w-4 h-4 bg-blue-400 border-4 border-white rounded-full z-10"></span>
                    </div>
                </div>
                {/* Education Content */}
                <div>
                    <p className="md:text-2xl text-xl font-semibold">Education</p>
                    {/* Add your timeline items here */}
                    <div className="mt-5 space-y-6">
                        <div>
                            <p className="font-bold">B.E. Electronics & Communication</p>
                            <p className="text-blue-50">2018-2022,</p>
                            <p className="text-gray-400 md:text-l text-base">Goa University</p>
                        </div>
                        {/* Add more timeline items as needed */}
                        <div>
                            <p className="font-bold">GATE Compute Science Preparation</p>
                            <p className="text-blue-50 text-base">Dedicated full-time to preparing for the GATE (Graduate Aptitude Test in Engineering) </p>
                            <p className="text-gray-400 md:text-l text-base">Computer Science, focusing on subjects like Data Structures & Algorithms, Discrete Mathematics, Operating Systems, DBMS, Computer Networks, and Theory of Computation</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex gap-6 items-start relative bg-gray-900 rounded-2xl p-5 mr-5">
                {/* Timeline Icon */}
                <div className="flex flex-col items-center">
                    <ion-icon name="business-outline"></ion-icon>
                    {/* Vertical line */}
                    <div className="w-1 bg-blue-400 h-26 mt-1 rounded-full relative">
                        <span className="absolute left-1/2 -translate-x-1/2 top-7 w-4 h-4 bg-blue-400 border-4 border-white rounded-full z-10"></span>
                    </div>
                </div>
                {/* Education Content */}
                <div>
                    <p className="md:text-2xl text-xl font-semibold">Experience</p>
                    {/* Add your timeline items here */}
                    <div className="mt-5 space-y-6">
                        <div>
                            <p className="font-bold">Quality Analyst</p>
                            <p className="text-blue-50">InBetween Software solutions, Goa <span>Sept-2022 to March-2023</span></p>
                            <p className="text-gray-400 md:text-l text-base">-Conducted manual testing for web and mobile applications. - Identified bugs, created detailed test cases, and collaborated with the development team to ensure software quality</p>
                            <p className="text-gray-400 md:text-l text-base">- Gained strong understanding of software development life cycle (SDLC) and quality assurance principles.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 items-start relative">
                {/* Timeline Icon */}
                <div className="flex flex-col items-center">
                   <ion-icon name="download-outline"></ion-icon>
                    {/* Vertical line */}
                </div>
                {/* Education Content */}
                <div className="">
                    <a className="md:text-2xl text-xl font-semibold  text-blue-500" href="./resume/Sparsha-Sawant.pdf">Download resume</a>
                </div>
            </div>
        </div>);
}

export default Resume;