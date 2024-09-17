import React from "react";

const Soluloop = ({ icon, title, description, title2 }) => {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
             <h4 className="font-semibold text-xl w-[50%]"><span className="text-[#52FF4F]">{title}</span> {title2}</h4>
        <div className="border-2 border-[#91FF6A66]  rounded-full p-2">
             <div className="border-2 border-[#91FF6A66] rounded-full p-2">
                 <div className="border-2 border-[#91FF6A66] rounded-full p-2">
                     {icon}
                 </div>
       
        </div>
      </div>
     
        </div>
   
      <p className="text-[#FFFFFFBF]">{description}</p>
    </div>
  );
};

export default Soluloop;
