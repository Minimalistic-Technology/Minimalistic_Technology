"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  X,
  Menu,
  ArrowRight,
  Cpu,
  Layout,
  Rocket,
  Headset,
  Mail,
  Phone,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const pathname = usePathname();

  const steps = [
    {
      src: "/srvcimg1.jpg",
      label: "Launch",
      title: "Launch Your Idea",
      description:
        "Quickly get your concept off the ground with our streamlined setup tools.",
    },
    {
      src: "/srvcimg2.jpg",
      label: "Design",
      title: "Design Seamlessly",
      description: "Customize layouts, themes, and components effortlessly.",
    },
    {
      src: "/srvcimg3.jpg",
      label: "Development",
      title: "Build with Power",
      description:
        "Use AI-powered tools and expert help to bring your ideas to life.",
    },
    {
      src: "/srvcimg4.jpg",
      label: "Learn",
      title: "Grow & Learn",
      description:
        "Access learning resources and tutorials to enhance your skills.",
    },
  ];
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Services", path: "/Services" },
  ];

  return (
    <div
      className={`${poppins.className} bg-[#23272A] min-h-screen text-white`}
    >
      <header className="fixed top-0 left-0 w-full z-50 bg-[#23272A] text-white p-4 md:flex-auto md:justify-between md:items-center">
        <div className="flex justify-between items-center max-w-full 7xl">
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
          {/* Nav Menu */}
          <nav
            className={`absolute top-full left-0 w-full p-4 space-y-4 bg-[#23272A]
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
                              : "border-transparent text-white group-hover:text-[#87C732] group-hover:border-[#87C732]"
                          }
                        `}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </li>
                );
              })}

              {/* Get Started Button (Mobile) */}
              <li className="md:hidden">
                <Link href="/#get-started-section">
                  <button className="w-full px-9 py-3 bg-[#7ED957] text-black rounded-md hover:bg-green-500 transition">
                    Get Started
                  </button>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Get Started Button (Desktop Only) */}
          <div className="hidden md:flex space-x-2">
            <Link href="/#get-started-section">
              <button className="bg-[#7ED957] text-black font-bold py-3 px-9 rounded-md hover:bg-green-500 transition disabled:opacity-50">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div>
        <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4 text-white pt-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-bold mb-4"
          >
            Build Websites Effortlessly
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg mt-5 mb-2"
          >
            From idea to Live Website - We Make It Seamless
          </motion.p>

          <p className="text-sm mt-3 mb-6">
            No coding needed | Super user-friendly | Fast deployment
          </p>
          <Link href="/#get-started-section">
            <button className="bg-[#7ED957] hover:bg-green-500 text-black font-bold py-2 px-9 rounded-md mt-6">
              Start Building
            </button>
          </Link>
        </section>

        <div className="w-full flex justify-center">
          <div className="overflow-x-auto whitespace-nowrap py-8 px-4 flex gap-4 items-center scrollbar-hide">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`inline-block w-64 flex-shrink-0 cursor-pointer ${
                    activeStep === index ? "scale-105" : "opacity-80"
                  } transition-transform`}
                  onClick={() => setActiveStep(index)}
                >
                  <Image
                    src={step.src}
                    alt={step.label}
                    width={256}
                    height={300}
                    className="rounded-xl w-full h-50 object-cover mb-2"
                  />
                  <p className="text-center text-white font-semibold">
                    {step.label}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="mx-2 text-white">
                    <ArrowRight size={30} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center px-6 mt-6">
          <h3 className="text-3xl font-bold text-white mb-2">
            {steps[activeStep].title}
          </h3>
          <p className="text-lg text-gray-300">
            {steps[activeStep].description}
          </p>
        </div>

        <div className="bg-[#DAEEBF] text-center text-[#1C1C1E] rounded-xl px-6 py-4 mx-auto w-full max-w-4xl mt-8 sm:w-3/4">
          <p className="text-lg font-medium">Trusted by:</p>
          <p className="text-base mt-1">
            Agencies, Developers, and Entrepreneurs around the world
          </p>
          <div className="flex justify-center items-center gap-1 mt-3 mb-5 text-xl">
            <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
          </div>
        </div>

        {/* What We Offer Section */}
        <section className="text-white text-center mt-30 p-8">
          <h2 className="text-4xl font-bold mt-22 mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-32 gap-8">
            {[
              {
                Icon: Cpu,
                title: "AI Powered Website Builder",
                desc: "Generate layout tailored to your needs",
              },
              {
                Icon: Layout,
                title: "Custom UI/UX Design",
                desc: "Crafted by expert designers",
              },
              {
                Icon: Rocket,
                title: "Fast Deployment",
                desc: "Get your site live in 6 weeks",
              },
              {
                Icon: Headset,
                title: "24/7 Support",
                desc: "Were here whenever you need help",
              },
            ].map((offer, index) => (
              <div key={index} className="flex flex-col items-center">
                <offer.Icon size={40} className="bg-white text-black" />
                <h3 className="text-lg font-semibold mt-2">{offer.title}</h3>
                <p className="text-gray-400 text-sm">{offer.desc}</p>
              </div>
            ))}
          </div>
          <Link href="#get-started-section">
            <button className="mt-30 bg-[#7ED957] hover:bg-green-500 text-black font-bold py-2 px-9 rounded-md">
              Try it Now
            </button>
          </Link>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-between p-8 rounded-lg relative">
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl font-semibold mb-4">Get Started Today</h2>
            <p className="text-md text-gray-300 mb-6">
              Join 1000+ businesses using minimalistic technology to build their
              dream website.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-green-300">
                <Mail size={20} />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hi@minimalistictechnology.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  hi@minimalistictechnology.com
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex justify-end w-full sm:w-3/4 md:w-1/2 mt-6 md:mt-0">
            <div className="absolute -top-4 -bottom-8 -right-10 w-[80%] h-[100%] bg-green-200 rounded-lg"></div>
            <Image
              src="/meeting.jpg"
              alt="Team working on laptops"
              width={550}
              height={100}
              className="relative z-10 translate-x-1 translate-y-1"
            />
          </div>
        </section>

        <footer className="bg-[#23272A] text-gray-300 mt-10">
          <div className="max-w-full mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  Minimalistic Technology
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      About Us
                    </a>
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
                  {/* <li>
                    <a href="#" className="hover:text-white transition">
                      Domain Name
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Support
                    </a>
                  </li> */}
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
    </div>
  );
};

export default Services;
