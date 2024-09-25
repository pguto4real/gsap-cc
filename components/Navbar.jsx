"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { animations } = useGlobalContext();
  return (
    <nav className="bg-blue-400">
      <ul className="flex justify-center space-x-4 p-3 text-xl !text-white">
        {animations.map((animation, index) => (
          <Link key={index} href={animation.path}>
            <li>{animation.title}</li>
          </Link>
        ))}

        <input placeholder="search" />
      </ul>
    </nav>
  );
};

export default Navbar;
