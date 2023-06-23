
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden object-cover">
      <Navbar />
      <video
        autoPlay
        loop
        muted
        src={"/video/bgvideo.mp4"}
        className="absolute top-0 z-10 w-full h-full object-cover"
      />
      <div className="absolute pt-6 top-0 z-20 flex flex-col justify-center items-center w-screen h-full">
        <div className="relative w-48 h-48 md:w-96 md:h-96">
          <Image
            src={"/image/heroLogo.png"}
            priority
            fill={true}
            quality={100}
            alt="Logo"
          />
        </div>
        <h1 className="text-xl md:text-3xl text-primarywhite text-nexalight text-center">
          We are Providing Best service in Town
        </h1>
      </div>
    </div>
  );
}
