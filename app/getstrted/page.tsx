"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Menu, X } from "lucide-react";

// Optional Google Font (Poppins)
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Get: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`min-h-screen ${poppins.className} bg-[#222222] text-white`}>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#222222]/50 backdrop-blur-md text-white p-4 md:flex md:justify-between md:items-center">
        {/* Logo Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="Logo" className="backdrop-blur-2xl bg-[#222222]" width={40} height={40} />
            <div className="flex flex-col text-green-600 text-xl font-bold">
              <span>Minimilistic</span>
              <span>Technology</span>
            </div>
          </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`absolute top-full left-0 w-full bg-/50 p-4 space-y-4 md:static md:w-auto md:p-0 md:flex md:space-x-6 md:space-y-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <li className="hover:text-green-400 cursor-pointer"><Link href="/">Home</Link></li>
          <li className="hover:text-green-600 cursor-pointer">
            <Link href="/AboutUs">About Us</Link>
          </li>
          <li className="hover:text-green-400 cursor-pointer"><Link href="/Services">Services</Link></li>
        </ul>
      </nav>

      {/* Buttons (Login & Get Started) */}
      <div className="hidden md:flex space-x-2">
        {/* <button className="px-4 py-2 border bg-[#222222] text-green-500 rounded-lg hover:bg-green-400 hover:text-white transition">
          Log In
        </button> */}
        {/* <button className="px-4 py-2 bg-[#7ED957] text-gray-900 rounded-lg hover:bg-green-500 transition">
          Get Started
        </button> */}
      </div>
    </header>


    <section className="mt-32 text-bklack  text-center px-4">
        <h2 className="text-3xl md:text-3xl font-bold">Pricing Plan</h2>

        <div className="mt-7 flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Starter Plan */}
          <div className="bg-[#DAEEBF] text-black p-6 rounded-2xl hover:xl: w-full sm:w-3/4 md:w-1/4 shadow-lg">
            <h3 className="text-xl font-semibold ">Starter plan</h3>
            <p className="text-2xl font-bold ">₹1,000 (One-Time) <span className="text-sm"></span></p>
            <button className="mt-4 bg-green-500 text-white hover:text-black px-2 py-2 rounded-lg w-full">
              Get Started
            </button>
            <ul className="mt-4 text-left space-y-2">
              <li> Up to 3-page static website</li>
              <li> Mobile-friendly & SEO-ready</li>
              <li> Basic contact form </li>
              <li> Lightweight, fast-loading design</li>
              <li> customized page</li>
            </ul>
          </div>

          {/* Professional Plan */}
          <div className="bg-[#87C732] text-black p-6  rounded-2xl w-64 sm:w-3/4 md:w-1/5 shadow-lg relative">
          <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-[#87C732] text-white px-3 py-1 text-sm rounded-lg">
          Most Popular
            </div>
            <h3 className="text-xl font-semibold">Professional Plan</h3>
            <p className="text-2xl font-bold"> ₹4,000 <span className="text-sm">/month</span></p>
            <button className="mt-4 bg-white text-black hover:text-black px-4 py-2 rounded-lg w-full">
              Get Started
            </button>
            <ul className="mt-4 text-left space-y-2">
              <li> Mobile, SEO & speed optimized</li>
              <li> Blog & social media integration</li>
              <li> Standard hosting (1 year include)</li>
              <li> 3 months of free maintenance</li>
              <li> Priority support</li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#DAEEBF] text-black p-6 rounded-2xl w-full sm:w-3/4 md:w-1/4 shadow-lg">
            <h3 className="text-xl font-semibold">Enterprise Plan</h3>
            <p className="text-2xl font-bold">₹10,000 <span className="text-sm">/month</span></p>
            <button className="mt-4 bg-green-500 text-white hover:text-amber-50 px-4 py-2 rounded-lg w-full">
              Get Started
            </button>
            <ul className="mt-4 text-left space-y-2">
              <li> E-commerce,custom web app</li>
              <li> API integrations & automation</li>
              <li> Premium hosting (1 year include)</li>
              <li> 5 months of free maintenance</li>
              <li> Dedicated manager,24/7 support</li>
            </ul>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-[#222222] text-gray-300 mt-40">
        <div className="border-b-2 w-full border-gray-500"></div>
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Minimalistic Learning</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Services</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Contact Us</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">Book a Service</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Domain Name</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Support</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-b-2 border-gray-700 my-4"></div>

          <div className="text-white text-sm md:flex md:justify-between md:items-center">
            <p>@ 2025 Minimalistic Technology. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* <a href="#" className="hover:text-white transition">
                <FaFacebook size={24} />
              </a> */}
              <a
                href="https://x.com/TechMinimalists"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/minimalistictechnology?utm_source=qr&igsh=MTRucHg5bm5wNDBnYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/showcase/minimalistictechnology/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaLinkedin size={24} />
              </a>
              {/* <a href="#" className="hover:text-white transition">
                <FaYoutube size={24} />
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Get;
