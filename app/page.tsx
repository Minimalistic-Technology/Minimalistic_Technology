"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackgroundGradient } from "../components/BackgroundGradient";
import {
  Cpu,
  Layout,
  Rocket,
  Headset,
  Menu,
  X,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import GetStretdForm from "../components/GetStretdForm";
import { motion } from "framer-motion";

import { Inter } from "next/font/google";
const poppins = Inter({ subsets: ["latin"] });

const testimonials = [
  {
    text: "minimilistic technology not only delivered on time but elevated our entire digital presence. Minimalistic Technology is the real deal..",
    name: "Manan Doshi",
    role: "client,mimimilistic Technology",
    image: "fool.jpg",
  },
  {
    text: "From the first meeting to final deployment, Minimalistic Technology showed unmatched professionalism. Our site now looks and works great.",
    name: "Mahesh Kumar",
    role: "client,mimimilistic Technology ",
    image: "mahesh.jpg",
  },
  {
    text: "Minimalistic Technology brought our concept to life with precision and creativity Their attention to detail and commitment to deadlines made the entire process smooth.",
    name: "Sadhashiv Zore",
    role: "client,mimimilistic Technology ",
    image: "Sadhashiv.jpg",
  },
  {
    text: "The team delivered a fast, secure, and elegant solution that fit perfectly with our goalsCommunication was always clear, timely, and professional.",
    name: "sunny Radhakrishna",
    role: "client,mimimilistic Technology ",
    image: "leone.jpg",
  },
  {
    text: "Working with Minimalistic Technology was a game-changer. Their intuitive design, fast turnaround, and professional approach helped us launch our website without any hassle.",
    name: "Sandip Baranwal",
    role: "client,mimimilistic Technology ",
    image: "majdoor.jpg",
  },
];

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024);
  const [slideWidth, setSlideWidth] = useState(100);
  const pathname = usePathname();
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      const isMobile = width < 640;
      setSlideWidth(isMobile ? 100 : 52); 
      setCardsPerView(isMobile ? 1 : 2);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

 const nextTestimonial = () => {
  setCurrent((prev) => {
    const maxIndex = testimonials.length - cardsPerView;
    return prev < maxIndex ? prev + 1 : prev;
  });
};



  const prevTestimonial = () => {
  setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
};

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Services", path: "/Services" },
  ];

  return (
    <div
      className={`min-h-screen ${poppins.className} bg-[#23272A] text-white`}
    >
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#23272A] text-white p-4">
        <div className="flex justify-between items-center mx-auto">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full bg-[#23272A]"
            />
            <div className="flex flex-col text-[#87C732] text-lg font-bold leading-tight">
              <span>Minimalistic</span>
              <span>Technology</span>
            </div>
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Nav Menu */}
          <nav
            className={`absolute top-full left-0 w-full bg-[#23272A] p-4 space-y-4 
      md:static md:w-auto md:p-0 md:flex md:space-x-6 md:space-y-0 
      ${isOpen ? "block" : "hidden"}`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.name} className="relative group">
                    <Link href={link.path}>
                      <span
                        className={`pb-1 border-b-2 transition-all duration-300 
                    ${
                      isActive
                        ? "text-[#87C732] border-[#87C732]"
                        : "border-transparent text-white group-hover:text-[#87C732] group-hover:border-[#87C732]"
                    }`}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </li>
                );
              })}

              {/* Get Started Button (Mobile) */}
              <li className="md:hidden">
                <a href="#get-started-section">
                  <button className="w-full px-9 py-3 bg-[#7ED957] text-black rounded-md hover:bg-green-500 transition">
                    Get Started
                  </button>
                </a>
              </li>
            </ul>
          </nav>

          {/* Get Started Button (Desktop) */}
          <div className="hidden md:flex space-x-2">
            <Link href="#get-started-section">
              <button className="bg-[#7ED957] text-black font-bold py-3 px-9 rounded-md hover:bg-green-500 transition disabled:opacity-50">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-40 sm:mt-60 px-6 sm:px-16">
        <div className="max-w- text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl sm:text-6xl font-bold"
          >
            Build Websites Effortlessly
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-base sm:text-lg"
          >
            From Idea to Live Website - We Make It Seamless
          </motion.p>

          <div className="text-xs sm:text-sm text-gray-400 mt-4">
            <span>No coding needed</span> | <span>AI powered design</span> |{" "}
            <span>Fast deployment</span>
          </div>
          <Link href="#get-started-section">
            <button className="bg-[#7ED957] hover:bg-green-500 text-black font-bold py-2 px-9 rounded-md mt-6">
              Start Building
            </button>
          </Link>
        </div>

        <div className="rounded flex justify-end w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {" "}
            <Image
              src="/hero.jpg"
              alt="Hero"
              width={500}
              height={400}
              className="rounded-2xl mt-4"
            />
          </motion.div>
        </div>
      </div>

      {/* What We Offer Section */}
      <section className="text-white text-center mt-30 p-8">
        <h2 className="text-4xl font-bold mt-22 mb-6">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-32 gap-8">
          {[
            {
              Icon: Cpu,
              title: "AI Powered Website Builder",
              desc: "Generate layout tailored to your needs",
            },
            {
              Icon: Layout,
              title: "Custom UI/UX Design",
              desc: "Crafted by expert designers",
            },
            {
              Icon: Rocket,
              title: "Fast Deployment",
              desc: "Get your site live in 6 weeks",
            },
            {
              Icon: Headset,
              title: "24/7 Support",
              desc: "Were here whenever you need help",
            },
          ].map((offer, index) => (
            <div key={index} className="flex flex-col items-center">
              <offer.Icon size={40} className="bg-white text-black" />
              <h3 className="text-lg font-semibold mt-2">{offer.title}</h3>
              <p className="text-gray-400 text-sm">{offer.desc}</p>
            </div>
          ))}
        </div>
        <Link href="#get-started-section">
          <button className="mt-30 bg-[#7ED957] hover:bg-green-500 text-black font-bold py-2 px-9 rounded-md">
            Try it Now
          </button>
        </Link>
      </section>

      <section className="mt-17 text-bklack max-w-full text-center px-4">
        <h2 className="text-3xl md:text-3xl mt-20 mb-20 font-bold">
          Pricing Plan
        </h2>

        <div className="bg-[#23272A] min-h-screen flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}

            <div className="bg-[#DAEEBF] text-black rounded-2xl p-8 flex flex-col justify-between shadow-lg transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_#DAEEBF] active:shadow-[0_10px_20px_#DAEEBF] active:-translate-y-1">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Starter</h2>
                <p className="mb-6">
                  Ideal for small businesses and personal brands
                </p>
                <p className="text-4xl font-bold">
                  {" "}
                  ₹1,000<span className="text-sm font-normal">/(One-Time)</span>
                </p>
              </div>
              <Link href="#get-started-section" passHref>
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
            <div className="bg-[#7ED957] text-black rounded-2xl p-8 flex flex-col justify-between relative shadow-lg transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_#7ED957] active:shadow-[0_10px_20px_#7ED957] active:-translate-y-1">
              {" "}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#A9D18E] text-black px-4 py-1 text-sm font-semibold rounded-md">
                Most popular
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Professional</h2>
                <p className="mb-6">Best for growing businesses and startups</p>
                <p className="text-4xl font-bold">
                  {" "}
                  ₹4,000<span className="text-sm font-normal">/month</span>
                </p>
              </div>
              <Link href="#get-started-section" passHref>
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
            <div className="bg-[#DAEEBF] text-black rounded-2xl p-8 flex flex-col justify-between shadow-lg transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_#DAEEBF] active:shadow-[0_10px_20px_#DAEEBF] active:-translate-y-1">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
                <p className="mb-6">
                  For large-scale businesses and custom business
                </p>
                <p className="text-4xl font-bold">
                  {" "}
                  ₹10,000<span className="text-sm font-normal">/month</span>
                </p>
              </div>
              <Link href="#get-started-section" passHref>
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

      <>
        {/* Testimonial Cards*/}
        <section className="bg-[#23272A] text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Testimonials
            </h2>

            {/* Slider Container */}
            <div className="relative overflow-x-auto scrollbar-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out gap-6"
                style={{
                  transform: `translateX(-${current * slideWidth}%)`,
                }}
              >
                {testimonials.map((t, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 flex-shrink-0 box-border bg-white text-gray-900 rounded-2xl p-6 shadow-xl min-h-[200px] hover:shadow-2xl transition-all duration-300 ease-in-out"
                  >
                    <p className="text-lg mb-6 leading-relaxed text-gray-700 italic">
                      “{t.text}”
                    </p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-full border-2 border-green-400 shadow-md object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {t.name}
                        </h4>
                        <span className="text-sm text-white bg-[#87C732] px-2 py-1 rounded-md font-medium break-words max-w-[200px] block">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="text-gray-400 hover:text-white p-3"
              >
                <ArrowLeft className="size-7" />
              </button>
              <button
                onClick={nextTestimonial}
                className="text-gray-400 hover:text-white p-3"
              >
                <ArrowRight className="size-7" />
              </button>
            </div>
          </div>
        </section>
      </>

      {/* Get Started Section */}
      <main id="get-started-section">
        <GetStretdForm />
      </main>

      <footer className="bg-[#23272A] text-gray-300 mt-10">
        <div className="max-w-full mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Minimalistic Technology
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#get-started-section"
                    className="hover:text-white transition"
                  >
                    Book a Service
                  </a>
                </li>
                {/* <li>
                    <a href="#" className="hover:text-white transition">
                      Domain Name
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Support
                    </a>
                  </li> */}
              </ul>
            </div>
          </div>

          {/* <div className="absolute left-0 right-0 border-b-2 border-gray-700"></div> */}
          <div className="text-white text-sm h-6 mt-6">
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
  );
};
export default Home;
