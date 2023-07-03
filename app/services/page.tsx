import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCamera, FaVideo, FaImage, FaFilm } from "react-icons/fa";

export default function Page() {
  return (
    <div className="bg-white h-screen text-black">
      <div className="relative h-[115px] w-[175px] left-2 top-2 hover:animate-pulse">
        <Link href="/">
          <Image
            src={"/image/logoBlack.png"}
            alt="logo"
            fill={true}
            loading="lazy"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative h-[185px] w-[578px] ">
          <Image
            src={"/image/serviceImage.png"}
            alt="logo"
            fill={true}
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex justify-around gap-x-12 md:mt-6 px-6">
        <div className="flex flex-col items-center">
          <FaCamera className="text-black text-5xl md:mb-4" />
          <h1 className="font-nexaheavy md:text-xl text-black md:mb-2">
            PHOTOGRAPHY
          </h1>
          <p className="font-nexalight text-justify">
            We supply everything a brand requires to make their product pop or
            their events shine including lighting packages, backdrops, studio
            hire as well as advanced post-processing and photo editing.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaVideo className="text-black text-5xl md:mb-4" />
          <h1 className="font-nexaheavy md:text-xl text-black md:mb-2">
            COMMERCIAL ADS & TVCs
          </h1>
          <p className="font-nexalight text-justify">
            It makes sense to have one supplier for both photography and video
            production. By offering both services, we can ensure the brand
            remains consistent and their experience as seamless and efficient as
            possible
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <FaImage className="text-black text-5xl md:mb-4" />
          <h1 className="font-nexaheavy md:text-xl text-black md:mb-2">
            GRAPHIC DESIGN
          </h1>
          <p className="font-nexalight text-justify">
            We don't want our clients to ride a design trend that fades into
            obscurity and we don't want our clients to be irrelevant by never
            adapting. By providing this service we aim to place you in a
            position where your designs will be current relevant.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaFilm className="text-black text-5xl md:mb-4" />
          <h1 className="font-nexaheavy md:text-xl text-black md:mb-2">
            VIDEO EDITING
          </h1>
          <p className="font-nexalight text-justify">
            Ranging from cinematography to post production, we have proficiency
            in more than handful video projects and styles. Get professional
            video post production services in the style that suits your brand.
          </p>
        </div>
      </div>
    </div>
  );
}
