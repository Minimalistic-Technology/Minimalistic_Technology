"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Team = () => {
  const [isOpen, setIsOpen] = useState(false);

  const highAuthorities = [
    { name: "Harsh", position: "Chief Executive Officer (CEO)", img: "/men.jpg" },
    { name: "Parth", position: "Chief Technology Officer (CTO)", img: "/men1.jpg" },
    { name: "Priyal", position: "Chief Operating Officer (COO)", img: "/women.jpg" },
    { name: "Sumeet", position: "Data Science", img: "/sameer.jpg" },
    { name: "Sneha", position: "Technical Lead", img: "/sneha.jpg" },
  ];

  const interns = [
    { name: "Sadhashiv Zore", position: "Jr.Software developer", img: "/Sadashiv.jpg" },
    { name: "Manan Doshi", position: "Jr.Software developer", img: "/manan.jpg" },
    { name: "Sandip Baranwal", position: "Jr.Software developer", img: "/sandip.jpg" },
    { name: "Sunny Radhakrishana", position: "Jr.Software developer", img: "/sunny.jpg" },
    { name: "Mahesh Kumar", position: "Jr.Software developer", img: "/Mahesh.jpg" },
  ];

  return (
    <div className={`${poppins.className} flex flex-col min-h-screen bg-[#000080] text-[#FFD700]`}>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#222222]/10 backdrop-blur-xl p-4 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="Logo" className="backdrop-blur-2xl bg-[#222222]" width={40} height={40} />
            <div className="flex flex-col text-[#FFD700] text-xl font-bold">
              <span>Minimilistic</span>
              <span>Technology</span>
            </div>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        <nav
          className={`absolute top-full left-0 w-full bg-[#000080] p-4 space-y-4 md:static md:w-auto md:p-0 md:flex md:space-x-6 md:space-y-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li className="hover:text-yellow-400 cursor-pointer"><Link href="/">Home</Link></li>
            <li className="hover:text-yellow-400 cursor-pointer"><Link href="/AboutUs">About Us</Link></li>
            <li className="hover:text-yellow-400 cursor-pointer">Services</li>
          </ul>
        </nav>

        <div className="hidden md:flex space-x-2">
          {/* <button className="px-4 py-2 border bg-[#222222] text-[#FFD700] rounded-lg hover:bg-yellow-400 hover:text-black transition">
            Log In
          </button> */}
          <button className="px-4 py-2 border bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 hover:text-white transition">
            Get Started
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-28 px-4 md:px-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">Meet Our Team</h1>
          <p className="text-[#fffacd] max-w-2xl mx-auto">
            Our team of passionate leaders and young talents drive innovation and excellence every day.
          </p>
        </section>

        {/* High Authorities */}
        <section className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {highAuthorities.map((person, index) => (
              <div
                key={index}
                className="bg-[#2c2c2c] rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-yellow-400/50 transform transition duration-300"
              >
                <Image
                  src={person.img}
                  alt={person.name}
                  width={300}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-yellow-400">{person.name}</h3>
                  <p className="text-gray-300 text-sm">{person.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interns */}
        <section className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {interns.map((intern, index) => (
              <div
                key={index}
                className="bg-[#2c2c2c] rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-yellow-400/50 transform transition duration-300"
              >
                <Image
                  src={intern.img}
                  alt={intern.name}
                  width={300}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-yellow-400">{intern.name}</h3>
                  <p className="text-gray-300 text-sm">{intern.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2c2c2c] text-yellow-300 text-center py-4">
        © 2025 <span className="text-yellow-400 font-bold">Minimilistic Technology</span>. All rights reserved.
      </footer>
    </div>
  );
};

export default Team;
