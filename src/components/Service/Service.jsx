import React from "react";

export const Service = ({ title, description, icon }) => {
  return (
    <>
      <div className="hidden md:block bg-[#F0F0F0] h-[140px] w-full rounded-xl relative">
        <div className="bg-white h-[260px] w-full rounded-xl absolute -top-3 left-4">
          <div className="relative w-full h-full">
            <img
              src={icon}
              alt={title}
              className="w-[400px] absolute -top-40 left-8"
            />
            <div className="absolute top-[5.5rem] left-8 flex flex-col gap-1">
              <p className="text-md font-[800]">{title}</p>
              <p className="text-md">{description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full rounded-[20px] md:hidden">
        <img src={icon} alt={title} className="w-full" />
        <div className="p-4 flex flex-col gap-1">
          <p className="text-md font-[800]">{title}</p>
          <p className="text-md">{description}</p>
        </div>
      </div>
    </>
  );
};
