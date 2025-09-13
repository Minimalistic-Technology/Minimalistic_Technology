"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const pathName = usePathname();
  return (
    <div>
      <footer className="bg-white text-black dark:bg-[#23272A] dark:text-gray-300 ">
        <div className="max-w-full mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="dark:text-white text:black font-semibold text-lg mb-3">
                Minimalistic Technology
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={pathName === "/AboutUs" ? "/Team" : "/AboutUs"}
                    className="hover:text-black dark:hover:text-white transition hover:underline"
                  >
                    {pathName === "/AboutUs" ? "Our Team" : "About Us"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Services"
                    className="hover:text-black dark:hover:text-white transition hover:underline"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#get-started-section"
                    className="hover:text-black dark:hover:text-white transition hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="dark:text-white text:black dark:hover:text-white font-semibold text-lg mb-3">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#get-started-section"
                    className="dark:hover:text-white transition hover:underline"
                  >
                    Book a Service
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>

          {/* <div className="absolute left-0 right-0 border-b-2 border-gray-700"></div> */}
          <div className="dark:text-white text:black text-sm   text-center">
            © 2025 Minimalistic Technology. All Rights Reserved.
          </div>
          <div className="flex space-x-4 justify-end md:-mt-6 pb-5">
            <a
              href="https://x.com/TechMinimalists"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white text:black dark:hover:text-white transition"
            >
              <FaTwitter size={24} />
            </a>

            <a
              href="https://www.instagram.com/minimalistictechnology?utm_source=qr&igsh=MTRucHg5bm5wNDBnYg=="
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white text:black dark:hover:text-white transition"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.linkedin.com/showcase/minimalistictechnology/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white text:black dark:hover:text-white transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
