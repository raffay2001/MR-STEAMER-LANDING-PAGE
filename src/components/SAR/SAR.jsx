import React from "react";

export const SAR = ({ title, description }) => {
  return (
    <div
      className="bg-[#F7F7F7] flex flex-col justify-center items-center pt-10 pb-2 px-4 gap-4 h-[25rem]"
      style={{ borderTopLeftRadius: "50px", borderBottomRightRadius: "50px" }}
    >
      <h1 className="text-5xl" style={{ fontWeight: 600 }}>
        {title}
      </h1>
      <div className="bg-white p-8 flex flex-col gap-10 justify-center items-center mb-4 rounded-lg">
        <ul>
          {description.map((descItem, index) => (
            <li key={`${descItem}-${index}`}>{descItem}</li>
          ))}
        </ul>
        <button
          className="border-none flex justify-center px-16 py-3 text-white cursor-pointer rounded-3xl"
          style={{
            background: "linear-gradient(131deg, #000 0%, #2C4694 100%)",
          }}
        >
          <p>Subscribe</p>
        </button>
      </div>
    </div>
  );
};
