"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/Services" },
    { name: "Templates", path: "/Templates" },
    { name: "About Us", path: "/AboutUs" },
  ];

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-white text-black dark:bg-[#23272A] dark:text-white p-6.5">
        <div className="flex justify-between items-center mx-auto">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full bg-[#23272A]"
            />
            <div className="flex flex-wrap text-[#87C732] text-lg font-bold leading-tight gap-x-2">
              <p>Minimalistic</p>
              <p>Technology</p>
            </div>
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Nav Menu */}
          <nav
            className={`absolute top-full left-0 w-full bg-white text-black dark:bg-[#23272A] dark:text-white p-4 space-y-4 
      md:static md:w-auto md:p-0 md:flex md:space-x-6 md:space-y-0 
      ${isOpen ? "block" : "hidden"}`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.name} className="relative group">
                    <Link href={link.path}>
                      <span
                        className={`pb-1 border-b-2 transition-all duration-300 
                    ${
                      isActive
                        ? "text-[#87C732] border-[#87C732]"
                        : "border-transparent dark:text-white text-black group-hover:text-[#87C732] group-hover:border-[#87C732]"
                    }`}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </li>
                );
              })}

              {/* Get Started Button (Mobile) */}
              <li className="md:hidden">
                <a href="/#get-started-section">
                  <button className="w-full px-9 py-3 bg-[#7ED957] text-black rounded-md hover:bg-green-500 transition">
                    Get Started   
                  </button>
                </a>
              </li>
            </ul>
          </nav>

          {/* Get Started Button (Desktop) */}
          <div className="hidden md:flex space-x-2">
            <Link href="/#get-started-section">
              <button className="bg-[#7ED957] text-black font-bold py-3 px-9 rounded-md hover:bg-green-500 transition disabled:opacity-50 cursor-pointer">
                Get Started
              </button>
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
