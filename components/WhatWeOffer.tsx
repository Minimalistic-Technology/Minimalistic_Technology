'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Palette, Zap, Headset, ArrowRight } from 'lucide-react';

const WhatWeOffer: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const offerings = [
    {
      icon: <Cpu size={32} />,
      title: "Ready to Use Template",
      description: "Generate layout tailored to your needs"
    },
    {
      icon: <Palette size={32} />,
      title: "Custom UI/UX Design",
      description: "Crafted by expert designers"
    },
    {
      icon: <Zap size={32} />,
      title: "Fast Deployment",
      description: "Get your site live in 6 weeks"
    },
    {
      icon: <Headset size={32} />,
      title: "24/7 Support",
      description: "We're here whenever you need help"
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="site-container">
        <h2 className="text-[2.5rem] font-black text-[var(--text-main)] mb-24 text-center max-[768px]:text-[2rem]">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 text-[var(--text-main)] mb-6">
                {offering.icon}
              </div>
              <h3 className="text-[1.1rem] font-black text-[var(--text-main)] mb-3 tracking-tight">
                {offering.title}
              </h3>
              <p className="text-dim opacity-50 text-[0.85rem] leading-relaxed font-medium">
                {offering.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 pb-12">
          <button
            onClick={scrollToForm}
            className="btn-premium"
          >
            Try Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
