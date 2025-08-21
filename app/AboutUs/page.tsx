"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div><Navbar></Navbar>
    <div
      className={`min-h-screen ${poppins.className} bg-white text-black dark:bg-[#23272A] dark:text-white`}
    >
      

      <div>
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between w-full pt-32 px-6 sm:px-16 bg-white text-black dark:bg-[#23272A] dark:text-white">
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
              <button className="bg-[#7ED957] hover:bg-green-500 text-black font-bold py-2 px-9 rounded-md mt-6 cursor-pointer">
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
        <section className=" text-black  dark:text-white text-center mt-10 p-8">
          <h2 className=" text-black  dark:text-white text-4xl font-bold m-6">
            Who we are
          </h2>
          <div className="text-black  dark:text-white text-center mb-7 text-xl">
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
          <div className=" text-black  dark:text-white font-bold text-3xl text-center">
            {images[activeIndex].title}
            <p className=" text-black  dark:text-white text-xl mt-1">
              {images[activeIndex].description}
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="flex flex-col items-center justify-center text-center my-10">
          <div className="w-full max-w-full bg-gradient-to-r from-[#23272A] to-[#87C732] py-10 shadow-lg">
            <p className="text-4xl dark:text-white text:black font-semibold">
              Let's build something amazing together
            </p>
            <a href="/#get-started-section">
              <button className="bg-[#87C732] hover:bg-green-600 cursor-pointer text-xl text-black rounded-lg mt-10 py-3 px-6 shadow-md">
                Get Started
              </button>
            </a>
          </div>
        </div>

        
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
