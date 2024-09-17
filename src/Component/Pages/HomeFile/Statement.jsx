import React from "react";
import image from '../../Images/Rectangle 1.png'

export default function Statement() {
  return (
    <section className="p-14 bg-black text-white">
      <div className="container">
        <div className=" flex justify-between items-center flex-col md:flex-row gap-8">
          <div className="w-[100%] md:w-[50%]">
            <img src={image} alt="a programmer" className="w-full rounded-lg" />
          </div>
          <div className="w-[100%] md:w-[50%]">
            <h4 className="text-2xl font-bold mb-3">
              Problem Statement
            </h4>
            <p className="mb-4 text-[#FFFFFFBF] text-[15px]">
            Bots and fake accounts can manipulate decentralised ecosystems, exploit vulnerabilities,
             and undermine trust. While various projects attempt to solve this problem through centralized 
             Know Your Customer (KYC) processes, they introduce privacy risks and data handling issues. Additionally, 
             KYC processes often hinder the user experience, creating barriers for new users entering the ecosystem. 
             Solpass offers a decentralized, user-friendly 
            alternative that ensures privacy, reduces friction, and enables more fluid interaction between real users and dApps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
