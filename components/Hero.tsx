'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Globe, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 300]);
  const y2 = useTransform(scrollY, [0, 800], [0, -200]);
  const rotate = useTransform(scrollY, [0, 800], [0, 15]);

  const scrollToForm = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  });

  const pills = [
    { icon: <Zap size={13} />, label: 'Ultra Fast' },
    { icon: <Globe size={13} />, label: 'Edge Scale' },
    { icon: <Shield size={13} />, label: 'Elite Security' },
  ];

  return (
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

      <div className="site-container relative z-10 w-full min-h-screen flex items-center">
        <div className="hero-grid py-20">

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

            <motion.div {...fadeUp(0.8)} className="flex items-center gap-8 flex-wrap">
              <button
                onClick={scrollToForm}
                className="btn-premium group"
              >
                Start Building
                <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* ── Right: Visual Composite ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.9, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="hero-card-wrapper perspective-[2000px]"
          >
            <motion.div
              style={{ rotate }}
              className="relative rounded-[48px] overflow-hidden border border-[var(--border)] shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop"
                alt="Elite Engineering"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
