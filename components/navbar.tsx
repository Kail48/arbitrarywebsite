import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <ul className="text-primarywhite absolute top-0 z-50 font-nexaheavy text-lg w-full md:flex md:justify-end md:px-6 md:py-4 md:gap-x-8 ">
        
        <li className="hover:text-purple-300"><Link href='/'>About</Link></li>
        <li className="hover:text-purple-300"><Link href='/'>Team</Link></li>
        <li className="hover:text-purple-300"><Link href='/'>Contact</Link></li>
        <li className="hover:text-purple-300"><Link href='/'>Gallery</Link></li>
        
      </ul>
    </>
  );
}
