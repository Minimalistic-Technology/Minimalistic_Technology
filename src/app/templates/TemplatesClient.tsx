'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, Globe, Shield, Sparkles, Zap } from 'lucide-react';
import { useScroll, useTransform } from 'framer-motion';

const templates = [
    {
        id: 'basic',
        name: 'Basic Starter',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        tags: ['Minimal', 'Fast', 'Free']
    },
    {
        id: 'corporate',
        name: 'Elite Corporate',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop',
        tags: ['Professional', 'Multi-page', 'High-Trust']
    },
    {
        id: 'studio',
        name: 'Creative Studio',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2340&auto=format&fit=crop',
        tags: ['Cinematic', 'Artistic', 'Portfolio']
    },
    {
        id: 'saas',
        name: 'Nexus SaaS',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        tags: ['Dashboard', 'Clean', 'Modular']
    },
    {
        id: 'ecommerce',
        name: 'Velocity Store',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2340&auto=format&fit=crop',
        tags: ['E-commerce', 'Sales', 'Fast']
    },
    {
        id: 'wellness',
        name: 'Zen Wellness',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2440&auto=format&fit=crop',
        tags: ['Organic', 'Minimal', 'Health']
    }
];

export default function TemplatesClient() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const router = useRouter();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 800], [0, 300]);
    const y2 = useTransform(scrollY, [0, 800], [0, -200]);
    const rotate = useTransform(scrollY, [0, 800], [0, 15]);

   const handleSelectTemplate = () => {
    const selectedTemplate = templates[currentIndex];

    router.push(
        `/?templateId=${selectedTemplate.id}&templateName=${selectedTemplate.name}#contact-form`
    );
};

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % templates.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + templates.length) % templates.length);
    };

    const scrollToTemplates = () => {
        document.getElementById('website-templates')?.scrollIntoView({ behavior: 'smooth' });
    };

    const getCardIndex = (offset: number) => {
        return (currentIndex + offset + templates.length) % templates.length;
    };

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { delay, duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    });

    return (
        <div className="bg-[var(--background)] text-[var(--text-main)] min-h-screen">
            {/* ── Hero Section ── */}
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
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="hero-copy"
                        >
                            <h1 className="text-clamp-hero mb-6">
                                <span className="block text-[var(--text-main)]">Ready-to-Use</span>
                                <span className="text-gradient block">Templates</span>
                            </h1>
                            <motion.p
                                {...fadeUp(0.6)}
                                className="text-xl md:text-2xl text-[var(--text-main)] font-bold mb-4 opacity-90 tracking-tight"
                            >
                                Explore our hand-crafted collection made with clean code.
                            </motion.p>
                            <motion.p
                                {...fadeUp(0.7)}
                                className="text-lg text-dim mb-12 max-w-lg leading-relaxed opacity-50 font-medium"
                            >
                                Surgical precision | Elite performance | Modern architecture
                            </motion.p>
                            <motion.div {...fadeUp(0.8)}>
                                <button onClick={handleSelectTemplate} className="btn-premium flex items-center gap-3">
                                    Select Template <Check size={20} />
                                </button>
                            </motion.div>
                        </motion.div>

                        {/* ── Right: Visual Composite ── */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ delay: 0.9, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="hero-card-wrapper perspective-[2000px]"
                        >
                            <motion.div
                                style={{ rotate }}
                                className="relative rounded-[48px] overflow-hidden border border-[var(--border)] shadow-2xl bg-[var(--surface)]"
                            >
                                <img
                                    src={templates[currentIndex].image}
                                    alt="Modern Design"
                                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Templates Stack Section ── */}
            <section id="website-templates" className="py-24 relative overflow-hidden bg-[var(--background)]">
                <div className="site-container relative z-10">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-[#a3e635] font-black uppercase tracking-[0.4em] text-[0.7rem] mb-4 block"
                        >
                            PREMIUM DESIGNS
                        </motion.span>
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-[var(--text-main)]">
                            Website <span className="text-gradient">Templates</span>
                        </h2>
                    </div>

                    <div className="relative h-[600px] md:h-[700px] flex items-center justify-center perspective-[2000px]">
                        <div className="relative w-full max-w-[1400px] h-full flex items-center justify-center">
                            <AnimatePresence mode="popLayout" custom={direction}>
                                {[-1, 0, 1].map((offset) => {
                                    const index = getCardIndex(offset);
                                    const template = templates[index];
                                    const isCenter = offset === 0;

                                    return (
                                        <motion.div
                                            key={template.id}
                                            custom={direction}
                                            initial={{
                                                opacity: 0,
                                                scale: 0.8,
                                                x: offset === 0 ? 0 : offset * 500,
                                                zIndex: 0
                                            }}
                                            animate={{
                                                opacity: isCenter ? 1 : 0.4,
                                                scale: isCenter ? 1 : 0.85,
                                                x: offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 320),
                                                zIndex: isCenter ? 30 : 10,
                                                rotateY: offset * -15,
                                            }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                            className="absolute w-[85%] md:w-[520px] aspect-video cursor-pointer"
                                            onClick={() => {
                                                if (offset === 1) handleNext();
                                                if (offset === -1) handlePrev();
                                            }}
                                        >
                                            <div className="w-full h-full rounded-[48px] overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-[0_80px_160px_rgba(0,0,0,0.1)] group relative">
                                                <img
                                                    src={template.image}
                                                    alt={template.name}
                                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[1.1]"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />

                                                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                                                    <div className="flex gap-2 mb-4">
                                                        {template.tags.map(tag => (
                                                            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[0.6rem] font-black uppercase tracking-widest text-[#a3e635]">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <h3 className="text-3xl md:text-5xl font-black text-[var(--text-main)] mb-4 tracking-tighter transition-colors group-hover:text-[#a3e635]">{template.name}</h3>
                                                    {isCenter && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="flex flex-col gap-6"
                                                        >
                                                            <p className="text-lg text-[var(--text-dim)] font-medium leading-relaxed max-w-md">

                                                            </p>
                                                            <button
                                                                onClick={handleSelectTemplate}
                                                                className="w-fit btn-premium !py-3 !px-10 flex items-center gap-3 !rounded-2xl shadow-[0_20px_40px_rgba(163,230,53,0.2)]"
                                                            >
                                                                Select Template <Check size={18} />
                                                            </button>
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="mt-28 flex flex-col items-center gap-10">
                        <div className="flex items-center gap-12">
                            <motion.button
                                whileHover={{ scale: 1.1, x: -5 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handlePrev}
                                className="w-16 h-16 rounded-2xl bg-[var(--surface-hover)] border border-[var(--border-bright)] flex items-center justify-center text-[var(--text-main)] hover:text-[#a3e635] hover:border-[#a3e635]/30 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
                            >
                                <ArrowLeft size={28} />
                            </motion.button>

                            <div className="px-10 py-5 bg-[var(--surface)] rounded-[32px] border border-[var(--border)] backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
                                <span className="text-xl md:text-2xl font-black text-[var(--text-main)]">
                                    Page <span className="text-[#a3e635]">{currentIndex + 1}</span> <span className="text-[var(--text-dim)]/30 mx-2">/</span> {templates.length}
                                </span>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.1, x: 5 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleNext}
                                className="w-16 h-16 rounded-2xl bg-[#a3e635] flex items-center justify-center text-black shadow-[0_20px_40px_rgba(163,230,53,0.3)] transition-all"
                            >
                                <ArrowRight size={28} />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .perspective-2000 {
                    perspective: 2000px;
                }
            `}</style>
        </div>
    );
}
