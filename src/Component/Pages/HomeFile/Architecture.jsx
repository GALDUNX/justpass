import Archiloop from "./Archiloop";
import image from '../../Images/et_linegraph.png'
import image2 from '../../Images/Group 5.png'
import image3 from '../../Images/Ellipse 13.png'

function Architecture() {
  const services = [
    {
      title: "Admission ",
      title2: 'Solution',
      description:"Users begin by submitting their Solana address to Solpass",
    },
    {
       title: "Verification ",
      title2: 'Via Reclaim',
      description:"complete a series of verification steps, such as biometric verification or social media linking, via Reclaim",
    },
    {
       title: "Identity",
      title2: 'Scoring',
      description:'Upon successful completion, users receive a verification score stored in their Solana accoun',
    },
    {
       title: "SDK/API",
      title2: 'Query',
      description:
        "dApps can query this score using the Solpass SDK or API to determine how human address",
    },
  ];

  return (
    <section className="p-14 bg-black text-white relative">
        <img src={image3} alt="name" className="absolute bottom-0 left-0"/>
      <div className="container max-w-7xl">
        <div className="mb-10">
          <h3 className="text-4xl font-bold text-white">Architecture </h3>
        </div>

        <div className="flex justify-between">
          <div className="p-5 rounded-lg bg-[#0A0A0A] w-[48%]">
            <h3 className="text-3xl text-center font-bold text-white mb-10">Architecture </h3>

             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Archiloop
              description={service.description}
              icon={service.icon}
              title={service.title}
              key={service.title}
            />
          ))}
        </div>
          </div>


           <div className="p-5 rounded-lg bg-[#0A0A0A] w-[48%] relative">
                <h3 className="text-3xl text-center font-bold text-white mb-10">Decentralized Data Storage </h3>

                <p className="text-[#FFFFFFBF]">
                    All verification data is stored off-chain through decentralized storage networks, ensuring users' privacy and security. 
                    Only the verification score is stored on-chain, associated with the user's Solana address
                </p>
            <img src={image2} alt="image" className="absolute bottom-0 right-0"/>
             <img src={image} alt="image" className="absolute bottom-0 left-0"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;