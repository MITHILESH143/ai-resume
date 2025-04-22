"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {


  return (
   <>
<Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white"> Home </Link>
<Link href="/resume" className="text-2xl font-bold text-gray-800 dark:text-white"> Resume </Link>
  </>
)
 
};

export default Navbar;
