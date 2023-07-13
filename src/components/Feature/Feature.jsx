import React from "react";

export const Feature = ({ title, description, icon }) => {
  return (
    <div className="flex gap-3 items-center">
      <img
        src={icon}
        alt="feature_img"
        style={{ width: "100px", height: "100px" }}
      />
      <div className="flex flex-col gap-1 w-[280px]">
        <h4>{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
