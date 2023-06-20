"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <ul className="hidden text-primarywhite absolute top-0 z-50 font-nexaheavy text-lg w-full md:flex md:justify-end md:px-6 md:py-4 md:gap-x-8 ">
        <li className="hover:text-purple-300 hover:animate-wiggle">
          <Link href="/">About</Link>
        </li>
        <li className="hover:text-purple-300 hover:animate-wiggle">
          <Link href="/">Team</Link>
        </li>
        <li className="hover:text-purple-300 hover:animate-wiggle">
          <Link href="/">Contact</Link>
        </li>
        <li className="hover:text-purple-300 hover:animate-wiggle">
          <Link href="/">Gallery</Link>
        </li>
      </ul>

      <div
        onClick={() => {
          setShowNav(!showNav);
        }}
        className={` md:hidden space-y-2 absolute z-50 top-4 cursor-pointer right-2 `}
      >
        {showNav ? (
          <>
            <div className="relative inline-block">
              <div className="w-6 h-6 border border-gray-500 rounded-full cursor-pointer hover:bg-gray-200 flex items-center justify-center">
                <div className="w-6 h-6 bg-primarywhite rounded-full"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
          </>
        )}
      </div>

      <ul
        className={`${
          showNav ? "" : "hidden"
        } text-primarywhite absolute right-2 top-20 tracking-wider text-right z-50 font-nexaheavy space-y-6 md:text-lg md:w-full md:hiddden`}
      >
        <li className="hover:text-purple-300 animate-dropdown ">
          <Link href="/">About</Link>
        </li>
        <li className="hover:text-purple-300 animate-dropdown animate-delay-1000">
          <Link href="/">Team</Link>
        </li>
        <li className="hover:text-purple-300 animate-dropdown ">
          <Link href="/">Contact</Link>
        </li>
        <li className="hover:text-purple-300 animate-dropdown ">
          <Link href="/">Gallery</Link>
        </li>
      </ul>
    
    </>
  );
}
