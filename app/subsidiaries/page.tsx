import Navbar from "@/components/navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Arbitrary subsidiaries ',
  description: 'Subsidiaries and branches of arbitrary group nepal',
}

export default function Subsidiaries() {
  const subsidiaryData = [
    {
      name: "Arbitrary Events",
      logo: "/image/arbitraryEventsLogo.png",
      intro: "Event Management / Organizing Company",
    },
    {
      name: "Channel Arbitrary",
      logo: "/image/arbitraryChannelsLogo.png",
      intro: "YouTube Channel",
    },
    {
      name: "Arbitrary Records",
      logo: "/image/arbitraryRecordLogo.png",
      intro: "Record Label Company",
    },
    {
      name: "Arbitrary Productions",
      logo: "/image/arbitraryProductionLogo.png",
      intro: "Audio/Video Production Company",
    },
    {
      name: "Arbitrary Digital Marketing",
      logo: "/image/arbitraryDigitalLogo.png",
      intro: "Digital Marketing Company",
    },
  ];
  return (
    <div className="h-screen bg-white">
      <div className="relative h-[115px] w-[175px] left-2 top-2 hover:animate-pulse">
        <Link href="/">
          <Image src={"/image/logoBlack.png"} alt="logo" fill={true} />
        </Link>
      </div>
      <div className="flex flex-col w-full justify-center items-center md:mt-2 md:gap-y-0">
        <div className="w-5/12 pl-4">
          <h1 className="text-3xl text-black font-nexalight font-[800]">
            Our Subsidiaries
          </h1>
          <div className="relative h-4 w-48 ml-2">
            <Image
              priority
              fill={true}
              src={"/image/lineVector.svg"}
              alt="line"
            />
          </div>
          <h1 className="text-black font-nexalight md:text-xl font-[400] md:mt-2">
            The <span className="font-[700]">Arbitrary Group</span> is composed
            of 5 subsidiaries.
          </h1>
          <p className="text-black font-nexalight font-[700] md:text-sm md:mt-2 text-justify">
            A local approach, around t’s 5 trades. The TECHNA Group can
            therefore offer a response tailored to the global market, taking
            into account specific local characteristics.
          </p>
        </div>
      </div>
      <div className="flex md:mt-8 px-4 py-2 justify-around">
       {
        subsidiaryData.map((data)=>(
            <div key={data.name} className="text-black font-nexalight flex flex-col justify-center items-center">
            <div className="relative md:w-48 md:h-48 rounded-md p-2 border-2 border-grey">
              <Image fill={true} alt="logo" src={data.logo} />
            </div>
            <h1 className="font-[800] mt-2">{data.name}</h1>
            <h1 className="text-sm mt-2">{data.intro}</h1>
          </div>
        ))
       }
      </div>
    </div>
  );
}
