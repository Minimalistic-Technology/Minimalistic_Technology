
"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar")); 

export default function ClientNavbarWrapper() {
  return <Navbar />;
}
