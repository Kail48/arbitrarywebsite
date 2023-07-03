import React from "react";
import Link from "next/link";
import Image from "next/image";
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
        <div className="relative h-72 w-96 ">
          <Image
            src={"/image/arbitraryEventMain.png"}
            alt="logo"
            fill={true}
            loading="lazy"
          />
        </div>
      </div>
      <h1 className="font-nexalight md:text-xl text-center -translate-y-16 font-[600]">
        Make Your Event Best Event For Life{" "}
      </h1>
      <div className="flex font-nexalight md:text-xl items-center justify-center gap-x-6">
        <Link href="/"><button className="bg-black text-primarywhite md:px-10 md:py-2 rounded-md">Public</button></Link>
        <Link href="/"><button className="bg-gray-400 text-black md:px-10 md:py-2 rounded-md">Corporate</button></Link>
      </div>
    </div>
  );
}
