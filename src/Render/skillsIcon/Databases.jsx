import React from "react";

function Databases() {
  return (
    <section>
      {/* <h3 className="md:text-2xl text-xl font-semibold mb-2 ">Databases:</h3> */}
      <div className="flex flex-wrap gap-4 pb-2 box border-gray-300  md:p-4
       p-3 rounded-2xl">
        {["mysql", "postgresql", "mongodb"].map((db) => (
          <img
            key={db}
            src={`../icons/${db}.svg`}
            alt={db}
            className="md:h-22 md:w-22  h-18 w-18 rounded-xl shadow-md border-gray-500 p-2 bg-black"
          />
        ))}
      </div>
    </section>
  );
}

export default Databases;