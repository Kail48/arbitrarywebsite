import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF,FaYoutube,FaUser,FaEnvelope } from "react-icons/fa";
import Map from "@/components/map";

export const metadata = {
  title: 'Arbitrary contact page',
  description: 'contact page for arbitrary nepal, office location, email address and links',
}

export default function page() {
  return (
    <div className="bg-white h-screen">
      <div className="relative h-[115px] w-[175px] left-2 top-2 hover:animate-pulse">
        <Link href="/">
          <Image src={"/image/logoBlack.png"} alt="logo" fill={true} />
        </Link>
      </div>
      <h1 className="text-black font-nexaheavy text-center text-2xl mt-6 md:text-5xl md:mt-2">
        Contact Us
      </h1>
      <div className="flex flex-col justify-center items-center">
        <Suspense fallback={<h1 className="text-black text-center
        ">loading....</h1>}>
          <Map/>
        </Suspense>
        <div className="flex flex-col  gap-y-4 justify-center items-start md:flex-row text-black font-nexalight font-[700] gap-x-12 md:mt-6">
            <div>
                <div className="flex mt-12 md:mt-0 items-center justify-center gap-x-2">
                    <FaUser className="text-4xl"/>
                    <div>
                        <h1>MD: Bipin Nakarmi</h1>
                        <h1>ED: Abiral Shakya</h1>
                    </div>
                </div>
                <Link href='https://www.youtube.com/@ChannelArbitrary'>
                <div className="flex items-center  gap-x-2 mt-2 group">
                    <FaYoutube className="text-4xl text-red-600 group-hover:animate-bounce"/>
                    <h1 className="group-hover:animate-pulse">Channel Arbitrary</h1>
                </div>
                </Link>
            </div>

            <div>
            <div className="flex items-center justify-center gap-x-2 group">
                    <FaEnvelope className="text-4xl group-hover:animate-wiggle"/>
                    <div className="w-min-content">
                    <a href = "mailto: bipinakabpm@gmail.com"><h1>bipinakabpm@gmail.com</h1></a>
                    <a href = "mailto: bizsabiralshakya@gmail.com"><h1>bizsabiralshakya@gmail.com</h1></a>
                    </div>
                </div>
                <Link href='https://www.facebook.com/arbitrary.group/'>
                <div className="flex items-center  gap-x-2 mt-2 group">
                    <FaFacebookF className="text-4xl text-blue-600 group-hover:animate-bounce"/>
                    <h1 className="group-hover:animate-pulse">@Arbitrary_Group</h1>
                </div>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
