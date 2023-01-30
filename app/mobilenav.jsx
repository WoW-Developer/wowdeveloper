"use client";
import { useState } from "react";
import React from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";

const mobilenav = () => {
  const [nav, setnav] = useState(false);

  const toggleNav = () => {
    setnav(!nav);

    !nav
      ? document.body.classList.add("fixed-position")
      : document.body.classList.remove("fixed-position");
  };

  return (
    <>
      <div className="text-white z-50 flex sm:hidden" onClick={toggleNav}>
        {nav ? <IoClose size={24} /> : <IoMenu size={24} />}
      </div>
      <div className={nav ? show : hide}>
        <ul className="flex justify-center items-center cursor-pointer h-screen w-screen bg-primary flex-col text-white">
          <li className={textstyle} onClick={toggleNav}>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li className={textstyle} onClick={toggleNav}>
            <Link href={"/support"}>Support</Link>
          </li>
          <li className={textstyle} onClick={toggleNav}>
            <Link href={"/request"}>Request</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

const show = `fixed top-0 right-0 z-[40] ease-in duration-400 left-0 overflow-hidden sm:hidden`;
const hide = `fixed top-[-1080px] right-0 opacity-0 ease-out duration-400 left-0 sm:hidden`;
const textstyle = `hover:text-white  text-xl hover:align-top p-2 rounded-lg`;
export default mobilenav;
