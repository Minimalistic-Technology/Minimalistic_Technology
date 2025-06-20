"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const images = [
  {
    src: "/ourSrvc1.jpg",
    title: "Mobile Design",
    description:
      "Creating seamless and responsive mobile experiences for apps and websites.",
  },
  {
    src: "/ourSrvc.jpg",
    title: "Web Development",
    description:
      "Building fast, modern, and secure websites with the latest technologies.",
  },
  {
    src: "/ourSrvc2.jpg",
    title: "UI/UX Consulting",
    description:
      "Improving user experience through intuitive and elegant design strategies.",
  },
];

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Services", path: "/Services" },
  ];

  return (
    <div
      className={`min-h-screen ${poppins.className} bg-[#23272A] text-white`}
    >
      <header className="fixed top-0 left-0 w-full z-50 bg-[#23272A] text-white p-4">
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
            <div className="flex flex-col text-[#87C732] text-lg font-bold leading-tight">
              <span>Minimalistic</span>
              <span>Technology</span>
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
            className={`absolute top-full left-0 w-full bg-[#23272A] p-4 space-y-4 
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
              <button className="bg-[#7ED957] text-black font-bold py-3 px-9 rounded-md hover:bg-green-500 transition disabled:opacity-50">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div>
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-[#23272A] mt-7 text-white">
          <div className="text-center md:text-left md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-bold leading-tight capitalize"
            >
              We help <br />
              <span className="text-[#87C732]">Startups</span> <br />
              bring their ideas to life
            </motion.h1>

            <Link href="/#get-started-section">
              <button className="bg-[#7ED957] hover:bg-green-500 text-black font-bold py-2 px-9 rounded-md mt-6">
                Start Building
              </button>
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/aboutus.jpg"
                alt="Startup Illustration"
                width={500}
                height={350}
                className="w-full max-w-md mt-7 rounded-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="text-white text-center mt-10 p-8">
          <h2 className="text-white text-4xl font-bold m-6">Who we are</h2>
          <div className="text-white text-center mb-7 text-xl">
            Minimalistic Technology is a team of innovative web developers,
            <br />
            designers, and strategists dedicated to transforming ideas into
            <br />
            world-class digital products.
          </div>
          <div className="w-full mt-7 flex justify-center">
            <Image
              src="/weAre.jpg"
              alt="weAre"
              width={1200}
              height={700}
              className="w-[100%] md:w-[60%] lg:w-[60%] h-auto mt-10 rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* Services Section */}
        <section>
          <div className="text-center text-3xl mt-10">Our Services</div>
          <div className="flex justify-center overflow-x-auto lg:space-x-15 sm:space-x-15 p-4 mt-7 mb-7 scrollbar-hide w-full">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{
                  scale: index === activeIndex ? 1.1 : 0.9,
                  opacity: index === activeIndex ? 1 : 0.7,
                }}
                transition={{ duration: 0.5 }}
                onClick={() => setActiveIndex(index)}
                className="cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt="our services"
                  width={300}
                  height={100}
                  className="w-[80vw] sm:w-[350px] h-auto rounded-lg"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-white font-bold text-3xl text-center">
            {images[activeIndex].title}
            <p className="text-white text-xl mt-1">
              {images[activeIndex].description}
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="flex flex-col items-center justify-center text-center mt-10">
          <div className="w-full max-w-full bg-gradient-to-r from-[#23272A] to-[#87C732] py-10 shadow-lg">
            <p className="text-4xl text-white font-semibold">
              Let's build something amazing together
            </p>
            <a href="/#get-started-section">
              <button className="bg-[#87C732] text-xl text-black rounded-lg mt-10 py-3 px-6 shadow-md">
                Get Started
              </button>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#23272A] text-gray-300 mt-16">
          <div className="max-w-full mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  Minimalistic Technology
                </h3>
                <ul className="space-y-2">
                  <li className="hover:text-white cursor-pointer">
                    <Link href="/Team">Our Team</Link>
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
                </ul>
              </div>
            </div>
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

export default AboutUs;
