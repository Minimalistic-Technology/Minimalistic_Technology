"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Menu, X } from "lucide-react";
import emailjs from "emailjs-com";

// Optional Google Font (Poppins)
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Get: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const form = e.target;

    const templateParams = {
      name: form.fullName.value,
      email: form.email.value,
      title: "New Project Inquiry",
      message: `
        Phone: ${form.phone.value}
        Business Name: ${form.businessName.value}
        Business Description: ${form.businessDesc.value}
        Website Type: ${form.websiteType.value}
        Selected Service: ${form.service.value}
        Existing Website: ${form.existingWebsite.value}
        Existing Description: ${form.existingDesc.value}
        Project Description: ${form.projectDesc.value}
      `,
    };

    emailjs
      .send("service_pw3837d", "template_2nfoejq", templateParams, "UyZxk9SsnFm5_tP-I")
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred.");
        }
      );
  };

  return (
    


    <div>
            <section className="mt-20 text-white  text-center px-4">
              <h2 className="text-3xl md:text-3xl font-bold">Pricing Plan</h2>
      
              <div className="bg-[#23272A] min-h-screen flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
      
      
      
                <div className="bg-[#DAEEBF] text-black rounded-2xl p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">Starter</h2>
                    <p className="mb-6">Ideal for small businesses and personal brands</p>
                    <p className="text-4xl font-bold"> ₹1000<span className="text-sm font-normal">/(One-Time)</span></p>
                  </div>
                  <Link href="/getstrted" passHref>
                    <button className="bg-[#7ED957] text-white font-semibold py-2 px-4 rounded-md mt-6 w-full">
                      Get Started
                    </button>
                  </Link>
                  <ul className="mt-6 space-y-2 text-md">
                    <li> 5-page custom website</li>
                    <li> Mobile & SEO-friendly design</li>
                    <li> Basic contact form integration</li>
                    <li> Standard hosting (1 year)</li>
                    <li> Email support</li>
                  </ul>
                </div>
      
              {/* Professional Plan */}
              <div className="bg-[#7ED957] text-black rounded-2xl p-8 flex flex-col justify-between relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#A9D18E] text-black px-4 py-1 text-sm font-semibold rounded-md">Most popular</div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Professional</h2>
                  <p className="mb-6">Best for growing businesses and startups</p>
                  <p className="text-4xl font-bold"> ₹4,000<span className="text-sm font-normal">/month</span></p>
                </div>
                <Link href="/getstrted" passHref>
                  <button className="bg-white text-black font-semibold py-2 px-4 rounded-md mt-6 w-full">
                    Get Started
                  </button>
                </Link>
                <ul className="mt-6 space-y-2 text-md">
                  <li> Mobile, SEO, & speed-optimized</li>
                  <li> Blog & social media integration</li>
                  <li> Standard hosting (1 year)</li>
                  <li> 3 months of free maintenance</li>
                  <li> Priority support</li>
                </ul>
              </div>
      
              {/* Enterprise Plan */}
              <div className="bg-[#DAEEBF] text-black rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
                  <p className="mb-6">For large-scale businesses and custom business</p>
                  <p className="text-4xl font-bold"> ₹10,000<span className="text-sm font-normal">/month</span></p>
                </div>
                <Link href="/getstrted" passHref>
                  <button className="bg-[#7ED957] text-white font-semibold py-2 px-4 rounded-md mt-6 w-full">
                    Get Started
                  </button>
                </Link>
                <ul className="mt-6 space-y-2 text-md">
                  <li> E-commerce & custom web applications</li>
                  <li> API integrations & automation</li>
                  <li> Premium hosting (1 year)</li>
                  <li> 6 months of free maintenance</li>
                  <li> Dedicated manager & 24/7 support</li>
                </ul>
              </div>
              </div>
              </div>
            </section>
      <div className={`${poppins.className} bg-[#23272A] min-h-screen text-white`}>
        <header className="fixed top-0 left-0 w-full z-50 bg-[#23272A]/90 backdrop-blur-md  text-white p-4 md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/logo.jpg" alt="LOGO" className="backdrop-blur-2xl" width={40} height={40} />
              <div className="flex flex-col text-[#87C732] text-xl font-bold">
                <span>Minimilistic</span>
                <span>Tecnology</span>
              </div>
            </div>
            <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
          <nav
            className={`absolute top-full left-0 w-full bg-[#23272A]/90 p-4 space-y-4 md:static md:w-auto md:p-0 md:flex md:space-x-6 md:space-y-0 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <li className="hover:text-white cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">
                <Link href="/Services">Services</Link>
              </li>
            </ul>
          </nav>
        </header>
        <section className="bg-[#23272A] text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-2">Get Started Today</h2>
            <p className="text-center text-2xl mb-20">Kindly fill this form to get started</p>
            <form onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="col-span-1 flex flex-col items-center min-h-[50vh] justify-end lg:justify-center text-center">
                <div className="text-[#A8A8A8] text-center">
                  <p>Join 1000+ businesses using Minimalistic Technology to build their dream website.</p>
                  <p className="mt-2">📧 MinimalisticTechnology.com</p>
                  <p>📞 +91 90043 17329</p>
                </div>
              </div>
              {/* Right Column */}
              <div className="space-y-8 col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Business Information */}
                  <div>
                    <h3 className="text-2xl font-bold p-3">Business Information</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <input name="fullName" className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="Full Name*" />
                      <input name="email" className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="Email Address*" />
                      <input name="phone" className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="Phone Number*" />
                      <input name="businessName" className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="Business Name" />
                      <textarea name="businessDesc" className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="Brief Description of Business" rows={3}></textarea>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div>
                    <h3 className="text-2xl font-bold p-3">Project Information</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <input name="websiteType" className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#7ED957] rounded-md" placeholder="Type of Website*" />
                      <select name="service" className="w-full p-3 border border-[#7ED957] bg-transparent text-white rounded-md" defaultValue="">
                        <option className="bg-[#23272A] text-white" value="" disabled>Select Service*</option>
                        <option className="bg-[#23272A] text-white" value="web-design">UI /Ux support</option>
                        <option className="bg-[#23272A] text-white" value="erp">Website development</option>
                        <option className="bg-[#23272A] text-white" value="ecommerce">Mobile App development </option>
                        <option className="bg-[#23272A] text-white" value="ecommerce">Ai /ML support</option>
                        <option className="bg-[#23272A] text-white" value="ecommerce">Domain support</option>
                        <option className="bg-[#23272A] text-white" value="ecommerce">other</option>
                      </select>
                      <input name="existingWebsite" className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="Do you have existing website?" />
                      <textarea name="existingDesc" className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="If yes, please describe" rows={1}></textarea>
                      <textarea name="projectDesc" className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="Brief Description of Project" rows={3}></textarea>
                    </div>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="flex justify-center mt-8">
                  <button type="submit" className="bg-[#7ED957] text-black font-bold py-3 px-9 rounded-md hover:bg-[#6cc44a] transition">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#23272A] text-gray-300">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Minimalistic Technology</h3>
                <ul className="space-y-2">
                  <li className="hover:text-white cursor-pointer"><Link href="/AboutUs">AboutUs</Link></li>
                  <li><a href="#" className="hover:text-white transition">Services</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Services</h3>
                <ul className="space-y-2">
                  <li><a href="/getstrted" className="hover:text-white transition">Book a Service</a></li>
                </ul>
              </div>
            </div>
            {/* <div className="absolute left-0 right-0 border-b-2 border-gray-700"></div> */}
            <div className="text-white text-sm mt-6">
              © 2025 Minimalistic Technology. All Rights Reserved.
            </div>
            <div className="flex space-x-4 justify-end mt-4 mb-5">
              <a
                href="https://x.com/TechMinimalists"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition"
              >
                <FaTwitter size={24} />
              </a>

              <a
                href="https://www.instagram.com/minimalistictechnology?utm_source=qr&igsh=MTRucHg5bm5wNDBnYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition"
              >
                <FaInstagram size={24} />
              </a>

              <a
                href="https://www.linkedin.com/showcase/minimalistictechnology/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Get;