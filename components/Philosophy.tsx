'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, ShieldCheck } from 'lucide-react';

const Philosophy: React.FC = () => {
    const values = [
        { icon: <Cpu size={20} />, text: "Next-Gen Engineering" },
        { icon: <Layers size={20} />, text: "Sleek Minimalism" },
        { icon: <ShieldCheck size={20} />, text: "Absolute Reliability" },
    ];

    return (
        <div className="philosophy-section">
            <div className="site-container">
                <div className="philosophy-grid">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="philosophy-item"
                        >
                            <div className="philosophy-icon">
                                {v.icon}
                            </div>
                            <span className="philosophy-text">
                                {v.text}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Philosophy;
