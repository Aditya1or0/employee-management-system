import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] bg-[#6B8E23] h-full rounded-xl px-5 py-3 flex flex-col justify-between">
      <div>
        <div className="py-3 flex justify-between items-center">
          <h3 className="bg-gray-600 text-sm px-3 rounded py-1 font-semibold">
            {data.category}
          </h3>
          <h4 className="text-sm font-semibold">{data.date}</h4>
        </div>
        <h2 className="mt-1.5 text-xl font-bold">
          <u>{data.title}</u>
        </h2>
        <p className="mt-2 text-sm">{data.description}</p>
      </div>
      <div className="mt-2">
        <button className="bg-emerald-700  w-full px-2 py-1 rounded-md text-sm font-semibold  text-[black] ">
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
