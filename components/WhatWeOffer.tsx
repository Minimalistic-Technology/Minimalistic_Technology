"use client";
import React from 'react'
import Link from 'next/link';
import {
  Cpu,
  Layout,
  Rocket,
  Headset,
} from "lucide-react";
const WhatWeOffer = () => {
  return (
    <div>
      <section className="bg-white text-black dark:bg-[#23272A] dark:text-white text-center mt-30 p-8">
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
              <offer.Icon
                size={40}
                className="bg-white text-black dark:bg-[#23272A] dark:text-white"
              />
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
    </div>
  )
}

export default WhatWeOffer
