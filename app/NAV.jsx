"use client";
import React, { useEffect, useState } from "react";

const NAV = () => {
  const [xcolor, setXcolor] = useState("rgba(0,0,0,1)");
  useEffect(() => {
    const UPDNAV = () => {
      if (window.scrollY > 40) {
        setXcolor("rgba(0,0,0,1)");
      } else {
        setXcolor("rgba(0,0,0,0.5)");
      }
    };
    window.addEventListener("scroll", UPDNAV);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${xcolor}` }}
      className="w-full fixed top-0 z-10 background"
    >
      <div className="w-full w-max-[1240px] flex items-center justify-center h-14">
        <h1 className="text-white pl-4 pr-4  text-2xl sm:text-4xl mx-auto ">
          WoW Developer
        </h1>
      </div>
    </div>
  );
};

export default NAV;
