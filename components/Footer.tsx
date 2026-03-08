'use client';

import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-main">
      <div className="site-container">
        {/* Top row */}
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <div className="footer-logo-icon">MT</div>
              <span className="text-[var(--text-main)] font-bold text-xl tracking-tight">Minimalistic <span className="animate-color-change">Technology</span></span>
            </Link>
            <p className="footer-desc">
              Premium web design and development. From idea to live website in weeks.
            </p>
            <div className="footer-socials">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" }
              ].map((item, i) => (
                <a key={i} href={item.href} className="footer-social-link">
                  <item.Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h5 className="footer-col-title">Company</h5>
            <ul className="footer-link-list">
              {[['About Us', '/about'], ['Our Team', '/team'], ['Services', '/services'], ['Templates', '/templates']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="footer-link">
                    {label}
                    <ArrowUpRight size={12} className="footer-link-arrow" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="footer-col-title">Services</h5>
            <ul className="footer-link-list">
              {[['Web Design', '/services'], ['Development', '/services'], ['AI Builder', '/services'], ['UI/UX Design', '/services']].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="footer-link">
                    {label}
                    <ArrowUpRight size={12} className="footer-link-arrow" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="footer-col-title">Contact</h5>
            <ul className="footer-link-list">
              <li>
                <a href="mailto:hi@minimalistictechnology.com" className="footer-link">
                  hi@minimalistictechnology.com
                </a>
              </li>
              <li>
                <Link href="/#contact-form" className="footer-link">
                  Get in Touch
                  <ArrowUpRight size={12} className="footer-link-arrow" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom */}
        <div className="footer-bottom">
          <span className="footer-copyright">© {new Date().getFullYear()} Minimalistic Technology. All rights reserved.</span>
          <span className="footer-attribution">Built with ❤️ in India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
