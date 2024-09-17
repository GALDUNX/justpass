import React from "react";
import { CiUser } from "react-icons/ci";
import { AiOutlineIdcard } from "react-icons/ai";
import { GoCodeSquare } from "react-icons/go";
import Soluloop from "./Soluloop";

function Solution() {
  const services = [
    {
      title: "Verifiable ",
      title2: 'Identity Scores',
      description:
        'Once a user verifies their identity, they are assigned an address-specific score, representing how trustworthy and "human" their Solana address is. Developers and dApps can use this score to adjust user access, grant permissions, or provide additional benefits (e.g., access to token sales, DAOs, or premium features)',
      icon: <CiUser className="text-[#52FF4F] text-3xl" />,
    },
    {
       title: "Human ",
      title2: 'Verification Via Reclaim',
      description:
        "Solpass leverages Reclaim's decentralized identity protocol, enabling users to verify their identity while maintaining full control over their data. Users complete various verification steps, such as phone verification, social media linking, or government ID verification. Based on these verifications, users are assigned points that reflect their identity's reliability.",
      icon: <AiOutlineIdcard className="text-[#52FF4F] text-3xl" />,
    },
    {
       title: "SDK and API",
      title2: 'Integration',
      description:
        "Solpass provides developers with an easy-to-integrate SDK and API that enables any Solana-based application to assess the human verification score of an address. This allows developers to filter out bot interactions, enhance user onboarding, and protect their platform from malicious actors.",
           icon: <GoCodeSquare className="text-[#52FF4F] text-3xl" />,
    },
  ];

  return (
    <section className="p-14 bg-black text-white">
      <div className="container max-w-7xl">
        <div className="mb-10">
          <h3 className="text-4xl font-bold text-[#52FF4F]">Solpass Solution </h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Soluloop
              description={service.description}
              icon={service.icon}
              title={service.title}
              title2 = {service.title2}
              key={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solution;
