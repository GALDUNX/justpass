import React from "react";

const Soluloop = ({  title, description, title2 }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg p-5 bg-[#1F1F1F99]">
             <h4 className="font-semibold text-xl"><span className="text-[#52FF4F]">{title}</span> {title2}</h4>
      <p className="text-[#FFFFFFBF]">{description}</p>
    </div>
  );
};

export default Soluloop;
