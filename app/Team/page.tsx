"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
     {
      name: "Vyom Mehta",
      position: "Jr.Software developer",
      img: "/vyom.jpg",
    },
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
  ];

  return (
    <div
      className={`${poppins.className} flex flex-col min-h-screen bg-white  dark:bg-[#23272A]  text-[#87C732]`}
    >
      {/* Header */}
      <Navbar></Navbar>

      {/* Main Content */}
      <main className="flex-1 pt-28 px-4 md:px-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-black mb-4">
            Meet Our Team
          </h1>
          <p className="dark:text-[#fffacd] max-w-2xl mx-auto">
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
                className="bg-white  dark:bg-[#23272A] rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-white/50 transform transition duration-300"
              >
                <Image
                  src={person.img}
                  alt={person.name}
                  width={300}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold dark:text-white text-black">
                    {person.name}
                  </h3>
                  <p className="dark:text-gray-300 text-gray-600 text-sm">{person.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interns */}
        {/* <section className="mb-20">
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
        </section> */}
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Team;
