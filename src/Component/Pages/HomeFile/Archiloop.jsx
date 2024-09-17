import React from "react";

const  Archiloop = ({ title, description, title2 }) => {
  return (
    <div className="flex flex-col gap-4 bg-[#1F1F1F99] p-5 rounded-lg">
             <h4 className="font-semibold text-xl w-[50%]"><span className="text-[#52FF4F]">{title}</span> {title2}</h4>
      <p className="text-[#FFFFFFBF]">{description}</p>
    </div>
  );
};

export default Archiloop;
