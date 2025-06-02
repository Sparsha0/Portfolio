import React from "react";

function Frontend() {
  return (
    <section>
      {/* <h3 className="md:text-2xl text-xl font-semibold mb-2">Frontend Technologies:</h3> */}
      <div className="w-full">
        <div className="flex flex-wrap gap-4 pb-2 border-gray-300 md:p-4 p-3 rounded-2xl min-w-[340px]">
          {["html", "css", "javascript", "bootstrap", "jquery", "react", "tailwindcss"].map((tech) => (
            <img
              key={tech}
              src={`/icons/${tech}.svg`}
              alt={tech}
              className="md:h-22 md:w-22 h-18 w-18 rounded-xl shadow-md border-gray-500 p-2 bg-gray-950"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Frontend;

