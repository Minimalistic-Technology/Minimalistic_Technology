'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import Pricing from './Pricing';
import ContactForm from './ContactForm';
import WhatWeOffer from './WhatWeOffer';

export default function HomeClient() {
    const revealScale = {
        initial: { opacity: 0, y: 100 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    };

    return (
        <div className="flex flex-col">
            <Hero />

            <div className="section-spacing">
                <WhatWeOffer />
            </div>


            <motion.div {...revealScale}>
                <Pricing />
            </motion.div>

            <motion.div {...revealScale}>
                <ContactForm />
            </motion.div>
        </div>
    );
}
