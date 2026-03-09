"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Rocket,
  Palette,
  Code,
  GraduationCap,
  Cpu,
  Zap,
  Headset,
  Mail,
  ArrowRight,
  Star,
  Globe,
  Shield,
} from "lucide-react";
import { useScroll, useTransform } from "framer-motion";

export default function ServicesClient() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 300]);
  const y2 = useTransform(scrollY, [0, 800], [0, -200]);
  const rotate = useTransform(scrollY, [0, 800], [0, 15]);

  const scrollToForm = () => {
    router.push("/#contact-form");
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay,
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  });

  const steps = [
    {
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
      label: "Launch",
    },
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
      label: "Development",
    },
  ];

  return (
    <div className="bg-[var(--background)] text-[var(--text-main)]">
      {/* ── Hero Synchronized with Home ── */}
      <section className="hero-section relative overflow-hidden">
        {/* Immersive Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="hero-bg-grid opacity-10" />

          {/* Massive Mesh Gradients */}
          <motion.div
            style={{ y: y1 }}
            className="absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px]"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute top-[40%] -left-[10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"
          />
        </div>

        <div className="site-container relative z-10 w-full min-h-screen flex items-center pt-20 lg:pt-32">
          <div className="hero-grid py-20 w-full">
            {/* ── Left: Copy ── */}
            <div className="hero-copy">
              <motion.h1 className="text-clamp-hero mb-6">
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="block text-[var(--text-main)]"
                >
                  Build Websites
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="text-gradient block"
                >
                  Effortlessly
                </motion.span>
              </motion.h1>

              <motion.p
                {...fadeUp(0.6)}
                className="text-xl md:text-2xl text-[var(--text-main)] font-bold mb-4 opacity-90 tracking-tight"
              >
                From Idea to Live Website — We Make It Seamless
              </motion.p>

              <motion.p
                {...fadeUp(0.7)}
                className="text-lg text-dim mb-12 max-w-lg leading-relaxed opacity-50 font-medium"
              >
                No coding needed | AI powered design | Fast deployment
              </motion.p>

              <motion.div
                {...fadeUp(0.8)}
                className="flex items-center gap-8 flex-wrap"
              >
                <button onClick={scrollToForm} className="btn-premium group">
                  Start Building
                  <ArrowRight
                    size={20}
                    className="ml-3 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </motion.div>
            </div>

            {/* ── Right: Visual Composite ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                delay: 0.9,
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="hero-card-wrapper perspective-[2000px]"
            >
              <motion.div
                style={{ rotate }}
                className="relative rounded-[48px] overflow-hidden border border-[var(--border)] shadow-2xl aspect-[16/11]"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                  alt="Elite Workspace"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process Steps (Mockup 1 Refined) ── */}
      <section className="py-20">
        <div className="site-container">
          <div className="flex justify-center gap-8 mb-20 max-w-[900px] mx-auto">
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1 max-w-[400px]"
                >
                  <div className="aspect-[16/9] rounded-[24px] overflow-hidden mb-6 border border-[var(--border)] group">
                    <img
                      src={step.img}
                      alt={step.label}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-center text-[var(--text-main)] font-bold text-lg tracking-tight">
                    {step.label}
                  </h3>
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="flex items-center text-white/20">
                    <ArrowRight size={24} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Launch Your Idea Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-[800px] mx-auto mb-16"
          >
            <h2 className="text-[2.5rem] font-black text-[var(--text-main)] mb-4">
              Launch Your Idea
            </h2>
            <p className="text-[var(--text-dim)] text-lg mb-12 font-medium">
              Quickly get your concept off the ground with our streamlined setup
              tools.
            </p>

            {/* Trusted Badge */}
          </motion.div>
        </div>
      </section>

      {/* ── Get Started Today (Mockup 2 Refined) ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[4rem] font-black text-[var(--text-main)] leading-tight mb-8">
                Get Started Today
              </h2>
              <p className="text-[var(--text-dim)] text-lg mb-12 font-medium leading-relaxed max-w-md">
                Join 1000+ businesses using minimalistic technology to build
                their dream website.
              </p>
              <a
                href="mailto:hi@minimalistictechnology.com"
                className="inline-flex items-center gap-3 text-[#a3e635] text-xl font-bold hover:gap-5 transition-all"
              >
                <Mail size={24} />
                <span>hi@minimalistictechnology.com</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group lg:max-w-[450px] lg:ml-auto"
            >
              <div className="absolute -inset-4 bg-[#a3e635]/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden border border-[#a3e635]/30">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
