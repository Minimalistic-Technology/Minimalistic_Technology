'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const plans = [
  {
    name: "Architect",
    price: "2000",
    period: "initial sync",
    description: "Ideal for high-end boutique brands and creative studios.",
    features: [
      "Custom Engine Architecture",
      "8D Design System",
      "Advanced SEO Analytics",
      "Elite Component Library",
      "3 Month Hyper-Sync"
    ],
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "8000",
    period: "initial sync",
    description: "The gold standard for high-performance scale projects.",
    features: [
      "Unlimited Scale Capacity",
      "AI Design Integration",
      "Custom API Ecosystem",
      "Priority Logic Partner",
      "6 Month Hyper-Sync",
      "CMS Hub Integration"
    ],
    highlight: true,
    tag: "Most Popular",
  },
  {
    name: "Quantum",
    price: "6000",
    period: "custom focus",
    description: "Bespoke digital ecosystems for industry-disrupting platforms.",
    features: [
      "Quantum Load Protocol",
      "Global Edge Mesh",
      "Dedicated Logic Architect",
      "Infinite Node Sync",
      "Annual Priority Flux",
      "Security Hardening"
    ],
    highlight: false,
  },
];

const Pricing: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="section-spacing relative bg-[var(--background)]">
      <div className="site-container relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-clamp-title mb-6 text-[var(--text-main)]"
          >
            Choose Your <span className="text-gradient">Economic</span> Tier
          </motion.h2>

        </div>

        {/* Pricing Grid */}
        <div
          className="flex flex-row flex-wrap justify-center gap-8"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`flex flex-col p-8 rounded-[32px] border border-[var(--border)] transition-all duration-700 relative overflow-hidden group flex-1 min-w-[280px] max-w-[360px] ${plan.highlight ? 'bg-primary/5 border-primary/20 scale-[1.05] z-10' : 'bg-[var(--surface)] hover:bg-[var(--surface-hover)] shadow-xl'
                }`}
            >
              {plan.highlight && (
                <div className="absolute top-5 right-5 z-20">
                  <div className="relative px-4 py-2 rounded-full bg-primary text-black text-[10px] font-extrabold uppercase tracking-[0.2em] shadow-lg shadow-primary/30">
                    <span className="relative z-10">{plan.tag}</span>

                    {/* subtle glow ring */}
                    <div className="absolute inset-0 rounded-full border border-primary/40 animate-pulse" />
                  </div>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-[var(--text-main)] font-black text-lg uppercase tracking-tighter mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-[var(--text-main)]">₹{plan.price} </span>
                  <span className="text-dim text-[0.65rem] uppercase tracking-widest opacity-40">{plan.period}</span>
                </div>
              </div>

              <p className="text-dim text-[0.8rem] opacity-60 leading-relaxed mb-6 h-10">
                {plan.description}
              </p>

              <div className="h-[1px] w-full bg-white/5 mb-6" />

              <ul className="flex flex-col gap-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 group/item">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:bg-primary transition-colors duration-300">
                      <Check size={10} className="text-primary dark:group-hover/item:stroke-[var(--surface-hover)]" strokeWidth={4} />
                    </div>
                    <span className="text-[var(--text-main)]/80 text-[0.8rem] font-medium tracking-tight group-hover/item:text-[var(--text-main)] transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToForm}
                className="btn-premium w-full group text-base py-5 gap-2"
              >
                <span>Get Started</span>
                <ArrowRight
                  size={20}
                  className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section >
  );
};

export default Pricing;
