import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF,FaYoutube,FaUser,FaEnvelope } from "react-icons/fa";
export default function page() {
  return (
    <div className="bg-white h-screen">
      <div className="relative h-[115px] w-[175px] left-2 top-2">
        <Link href="/">
          <Image src={"/image/logoBlack.png"} alt="logo" fill={true} />
        </Link>
      </div>
      <h1 className="text-black font-nexaheavy text-center md:text-5xl">
        Contact Us
      </h1>
      <div className="flex flex-col justify-center items-center">
        <div className="hidden md:block mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9882471317214!2d85.2955529746119!3d27.686758126400825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cba89d7bf5%3A0x131df7c674751484!2sThe%20Arbitrary%20Group!5e0!3m2!1sen!2snp!4v1687345091197!5m2!1sen!2snp"
            width="600"
            height="300"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex text-black font-nexalight font-[700] gap-x-12 md:mt-6">
            <div>
                <div className="flex items-center justify-center gap-x-2">
                    <FaUser className="text-4xl"/>
                    <div>
                        <h1>MD: Bipin Nakarmi</h1>
                        <h1>ED: Abiral Shakya</h1>
                    </div>
                </div>
                <Link href='https://www.youtube.com/@ChannelArbitrary'>
                <div className="flex items-center  gap-x-2 mt-2">
                    <FaYoutube className="text-3xl text-red-600 hover:animate-bounce"/>
                    <h1 className="hover:animate-pulse">Channel Arbitrary</h1>
                </div>
                </Link>
            </div>

            <div>
            <div className="flex items-center justify-center gap-x-2">
                    <FaEnvelope className="text-4xl hover:animate-wiggle"/>
                    <div className="w-min-content">
                    <a href = "mailto: bipinakabpm@gmail.com"><h1>bipinakabpm@gmail.com</h1></a>
                    <a href = "mailto: bizsabiralshakya@gmail.com"><h1>bizsabiralshakya@gmail.com</h1></a>
                    </div>
                </div>
                <Link href='https://www.facebook.com/arbitrary.group/'>
                <div className="flex items-center  gap-x-2 mt-2">
                    <FaFacebookF className="text-3xl text-blue-600 hover:animate-bounce"/>
                    <h1 className="hover:animate-pulse">@Arbitrary_Group</h1>
                </div>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
