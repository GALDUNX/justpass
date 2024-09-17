import React from "react";
import logo from '../../Images/whitelogo.png'
export default function UseCases() {
  return (
    <section className="p-14 bg-black text-white">
        <div className="mb-10">
          <h3 className="text-4xl font-bold text-[#52FF4F] text-center"><span className="text-white">Use</span> Cases </h3>
        </div>
        <div className="w-full bg-[#52FF4F] rounded-xl py-20 flex flex-col justify-center items-center relative">
            <img src={logo} alt="name" className="absolute top-3 left-3"/>
            <img src={logo} alt="name" className="absolute bottom-3 right-3"/>
                <p  className="w-[60%] text-center text-black mb-5">
                    Solpass aims to establish trust and accountability in the Solana ecosystem 
                    by providing a decentralized and privacy-focused human verification solution.
                     By enabling seamless integration with dApps and empowering developers with verifiable identity scores, 
                    Solpass enhances the legitimacy and security of decentralized platforms.
                </p>
                <div className="flex gap-5">
                      <button className="h-11 px-5 text-white rounded-3xl  bg-black">Connect Wallet</button> 
                      <button className="h-11 px-5  rounded-3xl border-2 border-black text-black  bg-transparent">Documentation</button>
                </div>
        </div>
    </section>
  );
}
