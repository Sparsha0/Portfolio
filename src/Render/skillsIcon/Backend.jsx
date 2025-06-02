import React from "react";


function Backend() {
  return (
    <section>
      {/* <h3 className="md:text-2xl text-xl font-semibold mb-2">Backend Technologies and other Tools:</h3> */}
      <div className="flex flex-wrap gap-4 pb-2  border-gray-300 md:p-4 p-3 rounded-2xl">
        {["nodejs-1", "npm", "express","ejs", "git", "github"].map((tech) => (
          <img
            key={tech}
            src={`icons/${tech}.svg`}
            alt={tech}
            className="md:h-22 md:w-22 h-18 w-18 rounded-xl shadow-md border p-2 bg-white"
          />
        ))}
      </div>

      {/* <h3 className="text-2xl font-semibold mt-6 mb-2">Templating & APIs</h3>
      <div className="flex overflow-x-auto gap-4 pb-2">
        <img
          src="../icons/ejs.svg"
          alt="EJS"
          className="h-24 w-24 flex-shrink-0 rounded-xl shadow-md border p-2 bg-white"
        />
      </div> */}
    </section>
  );
}

export default Backend;
