"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Team = () => {
  const [isOpen, setIsOpen] = useState(false);

  const highAuthorities = [
    {
      name: "Harsh",
      position: "Chief Executive Officer (CEO),Founder",
      img: "/harsh.jpg",
    },
    {
      name: "Parth",
      position: "Chief Technology Officer (CTO),Founder",
      img: "/harsh.jpg",
    },
    // { name: "Priyal", position: "Chief Operating Officer (COO)", img: "/women.jpg" },
    { name: "Sumit borate", position: "data scientist", img: "/sumeet.jpg" },
    { name: "pops", position: "UI/UX developer", img: "/pops.jpg" },
    { name: "Harsh Bhavsar", position: "Digital Marketing", img: "/DM.jpg" },
    { name: "Sneha", position: "Manager", img: "/harsh.jpg" },
    {
      name: "Tushar Shukla",
      position: "Jr.Software developer",
      img: "/tushar.jpg",
    },
    { name: "Manikanta", position: "Jr.Software developer", img: "/mani.jpg" },
    {
      name: "Sadhashiv Zore",
      position: "Jr.Software developer",
      img: "/Sadhashiv.jpg",
    },
    {
      name: "Manan Doshi",
      position: "Jr.Software developer",
      img: "/fool.jpg",
    },
    {
      name: "Pallavi Kumari",
      position: "Jr.Software developer",
      img: "/harsh.jpg",
    },
    {
      name: "Dr. Jagruti Sancheti",
      position: "Marketing and Product Manager",
      img: "/drJagruti.jpg",
    },
  ];

  const interns = [
    // { name: "Sadhashiv Zore", position: "Jr.Software developer", img: "/Sadhashiv.jpg" },
    // { name: "Manan Doshi", position: "Jr.Software developer", img: "/fool.jpg" },
    {
      name: "Varshini Varma",
      position: "Jr.Software developer",
      img: "/varshini varma.jpg",
    },
    {
      name: "Sandip Baranwal",
      position: "Jr.Software developer",
      img: "/majdoor.jpg",
    },
    {
      name: "Sunny Radhakrishana",
      position: "Jr.Software developer",
      img: "/leone.jpg",
    },
    {
      name: "Mahesh Kumar",
      position: "Jr.Software developer",
      img: "/maheshT.jpg",
    },
  ];

  return (
    <div
      className={`${poppins.className} flex flex-col min-h-screen bg-[#23272A] text-[#87C732]`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#23272A]/90 backdrop-blur-md text-white p-4">
        <div className="flex justify-between items-center max-w-full mx-auto">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full bg-[#23272A]"
            />
            <div className="flex flex-col text-[#87C732] text-lg font-bold leading-tight">
              <span>Minimalistic</span>
              <span>Technology</span>
            </div>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Menu */}
          <nav
            className={`absolute top-full left-0 w-full bg-[#23272A] p-4 space-y-4 
      md:static md:w-auto md:p-0 md:flex md:space-x-6 md:space-y-0 
      ${isOpen ? "block" : "hidden"}`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <li className="hover:text-green-600 cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-green-600 cursor-pointer">
                <Link href="/AboutUs">About Us</Link>
              </li>
              <li className="hover:text-green-600 cursor-pointer">
                <Link href="/Services">Services</Link>
              </li>

              {/* Get Started Button (Mobile Only) */}
              <li className="md:hidden">
                <Link href="/getstrted">
                  <button className="w-full px-4 py-2 bg-[#87C732] text-white rounded-lg hover:bg-green-500 transition">
                    Get Started
                  </button>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Get Started Button (Desktop Only) */}
          <div className="hidden md:flex space-x-2">
            <Link href="/getstrted">
              <button className="px-4 py-2 bg-[#87C732] text-white rounded-lg hover:bg-green-500 transition">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-28 px-4 md:px-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Meet Our Team
          </h1>
          <p className="text-[#fffacd] max-w-2xl mx-auto">
            Our team of passionate leaders and young talents drive innovation
            and excellence every day.
          </p>
        </section>

        {/* High Authorities */}
        <section className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {highAuthorities.map((person, index) => (
              <div
                key={index}
                className="bg-[#2c2c2c] rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-white/50 transform transition duration-300"
              >
                <Image
                  src={person.img}
                  alt={person.name}
                  width={300}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {person.name}
                  </h3>
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
                className="bg-[#2c2c2c] rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-white/50 transform transition duration-300"
              >
                <Image
                  src={intern.img}
                  alt={intern.name}
                  width={300}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {intern.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{intern.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#23272A] text-gray-300">
        <div className="max-w-full mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Minimalistic Technology
              </h3>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">
                  <Link href="/AboutUs">AboutUs</Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/#get-started-section"
                    className="hover:text-white transition"
                  >
                    Book a Service
                  </a>
                </li>
                {/* <li><a href="#" className="hover:text-white transition">Domain Name</a></li>
                  <li><a href="#" className="hover:text-white transition">Support</a></li> */}
              </ul>
            </div>
          </div>
          {/* <div className="absolute left-0 right-0 border-b-2 border-gray-700"></div> */}
          <div className="text-white text-sm mt-6">
            © 2025 Minimalistic Technology. All Rights Reserved.
          </div>
          <div className="flex space-x-4 justify-end mt-4 mb-5">
            <a
              href="https://x.com/TechMinimalists"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white transition"
            >
              <FaTwitter size={24} />
            </a>

            <a
              href="https://www.instagram.com/minimalistictechnology?utm_source=qr&igsh=MTRucHg5bm5wNDBnYg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white transition"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.linkedin.com/showcase/minimalistictechnology/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Team;
