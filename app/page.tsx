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
import { useRef } from "react";
import { Inter } from "next/font/google";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const poppins = Inter({ subsets: ["latin"] });
const gap = 24; // px

const testimonials = [
  {
    text: "minimilistic technology not only delivered on time but elevated our entire digital presence. Minimalistic Technology is the real deal..",
    name: "Manan Doshi",
    role: "Client, Minimalistic Technology",
    image: "fool.jpg",
  },
  {
    text: "From the first meeting to final deployment, Minimalistic Technology showed unmatched professionalism. Our site now looks and works great.",
    name: "Mahesh Kumar",
    role: "Client, Minimalistic Technology ",
    image: "mahesh.jpg",
  },
  {
    text: "Minimalistic Technology brought our concept to life with precision and creativity Their attention to detail and commitment to deadlines made the entire process smooth.",
    name: "Sadhashiv Zore",
    role: "Client, Minimalistic Technology ",
    image: "Sadhashiv.jpg",
  },
  {
    text: "The team delivered a fast, secure, and elegant solution that fit perfectly with our goalsCommunication was always clear, timely, and professional.",
    name: "sunny Radhakrishna",
    role: "Client, Minimalistic Technology ",
    image: "leone.jpg",
  },
  {
    text: "Working with Minimalistic Technology was a game-changer. Their intuitive design, fast turnaround, and professional approach helped us launch our website without any hassle.",
    name: "Sandip Baranwal",
    role: "Client, Minimalistic Technology ",
    image: "majdoor.jpg",
  },
];

const Home = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024);
  //const [slideWidth, setSlideWidth] = useState(100);
  const pathname = usePathname();
  //const [cardsPerView, setCardsPerView] = useState(1);
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [slideWidth, setSlideWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !cardRef.current) return;

      const width = window.innerWidth;
      const isMobile = width < 640;

      const cardWidth = isMobile
        ? containerRef.current.offsetWidth
        : cardRef.current.offsetWidth;
      const gap = isMobile ? 0 : 24;

      setSlideWidth(cardWidth + gap);

      const containerWidth = containerRef.current.offsetWidth;
      const perView = Math.floor(containerWidth / (cardWidth + gap));
      setCardsPerView(perView || 1);
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
    { name: "Services", path: "/Services" },
    { name: "Templates", path: "/Templates" },
    { name: "About Us", path: "/AboutUs" },
  ];

  return (
    <div
      className={`min-h-screen ${poppins.className} bg-white text-black dark:bg-[#23272A] dark:text-white
`}
    >
      {/* Header/Navbar */}
      <Navbar></Navbar>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full pt-32 px-6 sm:px-16">
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
            <Image
              src="/hero.jpg"
              alt="Hero"
              width={500}
              height={400}
              className="rounded-2xl mt-4 shadow-2xl dark:shadow-none"
            />
          </motion.div>
        </div>
      </div>

      {/* What We Offer Section */}
      <section className="bg-white text-black dark:bg-[#23272A] dark:text-white text-center mt-30 p-8">
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
              <offer.Icon
                size={40}
                className="bg-white text-black dark:bg-[#23272A] dark:text-white"
              />
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

        <div className="bg-white text-black dark:bg-[#23272A] dark:text-white min-h-screen flex flex-col items-center justify-center p-6">
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
                <button className="bg-white text-black dark:bg-[#23272A] dark:text-white font-semibold py-2 px-4 rounded-md mt-6 w-full">
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
        <section className="bg-white text-black dark:bg-[#23272A] dark:text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Testimonials
            </h2>

            {/* Slider Container */}
            <div className="overflow-hidden" ref={containerRef}>
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{
                  transform: `translateX(-${current * (slideWidth + gap)}px)`,
                }}
              >
                {testimonials.map((t, index) => (
                  <div
                    key={index}
                    ref={index === 0 ? cardRef : null}
                    className="w-full sm:w-[320px] lg:w-[350px] flex-shrink-0 bg-white text-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <p className="text-base sm:text-lg mb-6 leading-relaxed text-gray-700 italic">
                      “{t.text}”
                    </p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-full border-2 border-green-400 object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {t.name}
                        </h4>
                        <span className="text-sm dark:text-white text-black bg-[#87C732] px-2 py-1 rounded-md block">
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
                className="text-gray-400 hover:text-black dark:hover:text-white p-3"
              >
                <ArrowLeft className="size-7" />
              </button>
              <button
                onClick={nextTestimonial}
                className="text-gray-400 hover:text-black dark:hover:text-white p-3"
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

      <Footer></Footer>
    </div>
  );
};
export default Home;
