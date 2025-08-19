"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full pt-32 px-6 sm:px-16">
        <div className="max-w- text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl sm:text-6xl font-bold"
          >
            Build Websites Effortlessly
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-base mt-2 sm:text-lg"
          >
            From Idea to Live Website - We Make It Seamless
          </motion.p>

          <div className="text-xs sm:text-sm text-gray-400 mt-4">
            <span>No coding needed</span> | <span>AI powered design</span> |{" "}
            <span>Fast deployment</span>
          </div>
          <Link href="#get-started-section">
            <button className="bg-[#7ED957] hover:bg-green-500 text-black font-bold py-2 px-9 rounded-md mt-6 cursor-pointer">
              Start Building
            </button>
          </Link>
        </div>

        <div className="rounded flex justify-end w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/hero.jpg"
              alt="Hero"
              width={500}
              height={400}
              className="rounded-2xl mt-4 shadow-2xl dark:shadow-none"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
