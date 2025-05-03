"use client";
import Image from "next/image";
import Link from "next/link";
import { BackgroundGradient } from "../components/BackgroundGradient";
import { Cpu, Layout, Rocket, Headset, Menu, X, ArrowLeft, ArrowRight } from "lucide-react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

// Load Google Fonts: Poppins
import { Inter } from "next/font/google";
const poppins = Inter({ subsets: ["latin"] });

const testimonials = [
  {
    text: "This web app has completely transformed how we manage our deliveries. It’s seamless, efficient, and a game-changer for logistics!",
    name: "Daniel Martins",
    role: "Operations Manager, Swift Logistics Ltd.",
    image: "men.jpg",
  },
  {
    text: "Minimalistic Technology's platform has helped us reduce delays and improve tracking. Our clients love the transparency!",
    name: "Elene Rodriguez",
    role: "Founder, Express Freight",
    image: "women.jpg",
  },
  {
    text: "Minimalistic Technology's platform has helped us reduce delays and improve tracking. Our clients love the transparency!",
    name: "Durgesh Nai",
    role: "Founder, Express Freight",
    image: "men1.jpg",
  },
];

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024);
  const [slideWidth, setSlideWidth] = useState(33.33);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setSlideWidth(windowWidth < 600 ? 100 : windowWidth < 1024 ? 50 : 33.33);
  }, [windowWidth]);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendData = {
      name: formData.Name,
      email: formData.Email,
      message: formData.Message,
    };

    emailjs
      .send("service_pw3837d", "template_2nfoejq", sendData, "UyZxk9SsnFm5_tP-I")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          alert("Message sent successfully!");
          setFormData({ Name: "", Email: "", Message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          alert(`Failed to send message: ${error.text || "Unknown error"}`);
        }
      );
  };

  return (
    <div className={`min-h-screen ${poppins.className} bg-[#23272A] text-white`}>
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#23272A]/90 backdrop-blur-md text-white p-4">
  <div className="flex justify-between items-center max-w-7xl mx-auto">
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

    {/* Hamburger Menu Button (Mobile) */}
    <button
      className="md:hidden"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle Menu"
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>

    {/* Navigation Menu */}
    <nav
      className={`absolute top-full left-0 w-full bg-[#23272A] p-4 space-y-4 
      md:static md:w-auto md:p-0 md:flex md:space-x-6 md:space-y-0 
      ${isOpen ? "block" : "hidden"}`}
    >
      <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <li className="hover:text-green-600 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-green-600 cursor-pointer">
          <Link href="/AboutUs">About Us</Link>
        </li>
        <li className="hover:text-green-600 cursor-pointer">
          <Link href="/Services">Services</Link>
        </li>

        {/* Get Started Button (Mobile Only) */}
        <li className="md:hidden">
          <Link href="/getstrted">
            <button className="w-full px-4 py-2 bg-[#87C732] text-white rounded-lg hover:bg-green-500 transition">
              Get Started
            </button>
          </Link>
        </li>
      </ul>
    </nav>

    {/* Get Started Button (Desktop Only) */}
    <div className="hidden md:flex space-x-2">
      <Link href="/getstrted">
        <button className="px-4 py-2 bg-[#87C732] text-white rounded-lg hover:bg-green-500 transition">
          Get Started
        </button>
      </Link>
    </div>
  </div>
</header>



      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-40 sm:mt-60 px-6 sm:px-16">
        <div className="max-w-xl text-left">
        <h1 className="text-4xl sm:text-6xl font-bold">Build Websites Effortlessly</h1>
          <p className="text-base sm:text-lg">From Idea to Live Website - We Make It Seamless</p>
          <div className="text-xs sm:text-sm text-gray-400 mt-4">
            <span>No coding needed</span> | <span>AI powered design</span> | <span>Fast deployment</span>
          </div>
          <button className="bg-[#87C732] hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg mt-6">
            Start Building
          </button>
        </div>

        <div className="rounded flex justify-end w-full">
          <Image src="/hero.jpg" alt="Hero" width={500} height={400} className="rounded-2xl mt-4" />
        </div>
      </div>

      {/* What We Offer Section */}
      <section className="text-white text-center mt-22 p-8">
        <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { Icon:Cpu, title: "AI Powered Website Builder", desc: "Generate layout tailored to your needs" },
            { Icon:Layout, title: "Custom UI/UX Design", desc: "Crafted by expert designers" },
            { Icon:Rocket, title: "Fast Deployment", desc: "Get your site live in 6 weeks" },
            { Icon:Headset,  title: "24/7 Support", desc: "Were here whenever you need help" },
           ].map((offer, index) => (
            <div key={index} className="flex flex-col items-center">
              <offer.Icon size={40} className="bg-white text-black" />  
              <h3 className="text-lg font-semibold mt-2">{offer.title}</h3>
              <p className="text-gray-400 text-sm">{offer.desc}</p>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-[#87C732] hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg">
          Try it Now
        </button>
      </section>
  
      <section className="mt-17 text-bklack  text-center px-4">
        <h2 className="text-3xl md:text-3xl font-bold">Pricing Plan</h2>

        <div className="bg-[#23272A] min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="bg-[#DAEEBF] text-black rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Starter</h2>
            <p className="mb-6">Ideal for small businesses and personal brands</p>
            <p className="text-4xl font-bold"> ₹1,000 <span className="text-sm font-normal">/(One-Time)</span></p>
          </div>
          <button className="bg-[#7ED957] text-white font-semibold py-2 px-4 rounded-md mt-6">Get Started</button>
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
          <button className="bg-white text-black font-semibold py-2 px-4 rounded-md mt-6">Get Started</button>
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
          <button className="bg-[#7ED957] text-white font-semibold py-2 px-4 rounded-md mt-6">Get Started</button>
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
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-99.99%"
              style={{
                transform: `translateX(-${current * slideWidth}%)`,
                width: `${testimonials.length * slideWidth}%`
              }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[75%] lg:w-3/7 bg-white text-gray-900 rounded-lg p-6 shadow-lg mx-2 shrink-0 h-auto min-h-[180px]"
                >
                  <p className="text-lg mb-4">{t.text}</p>
                  <div className="flex items-center space-x-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="font-semibold">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button onClick={prevTestimonial} className="text-gray-400 hover:text-white p-3">
              <ArrowLeft className="size-7" />
            </button>
            <button onClick={nextTestimonial} className="text-gray-400 hover:text-white p-3">
              <ArrowRight className="size-7" />
            </button>
          </div>
        </div>
      </section> 
                {/* <div className=" mt-7">
            <BackgroundGradient>

            </BackgroundGradient>
          </div> */}
      {/* Form */}
      <section className="bg-[#23272A] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2  className="text-3xl font-bold text-center mb-2">Get Started Today</h2>
          <p className="text-center mb-10">Kindly fill this form to get started</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="col-span-1 flex flex-col items-center min-h-[50vh] justify-end lg:justify-center text-center">
              <div className="text-[#A8A8A8] text-center">
                <p>Join 1000+ businesses using Minimalistic Technology to build their dream website.</p>
                <p className="mt-2">📧 MinimalisticTechnology.com</p>
                <p>📞 +91 90043 17329</p>
              </div>
            </div>
<form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Name"
        placeholder="Full Name"
        value={formData.Name}
        onChange={handleChange}
        required
        className="w-full p-3 border border-[#87C732] bg-transparent text-white placeholder-[#A8A8A8] rounded-md mt-3"
      />
      <input
        type="email"
        name="Email"
        placeholder="Email Address"
        value={formData.Email}
        onChange={handleChange}
        required
        className="w-full p-3 border border-[#87C732] bg-transparent text-white placeholder-[#A8A8A8] rounded-md mt-3"
      />
      <textarea
        name="Message"
        placeholder="Your Message"
        value={formData.Message}
        onChange={handleChange}
        required
         className="w-full p-3 border border-[#87C732] bg-transparent text-white placeholder-[#A8A8A8] rounded-md mt-3 mb-3"
      />
      <button type="submit" className="bg-[#87C732] text-white font-bold py-3 px-9 rounded-md hover:bg-[#6cc44a] transition">Submit</button>
    </form>
         </div>
            </div> 
      </section>
            </>
        <footer className="bg-[#23272A] text-gray-300 mt-10">
          <div className="max-w-6xl mx-auto px-6">
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
                <h3 className="text-white font-semibold text-lg mb-3">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Book a Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Domain Name
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="absolute left-0 right-0 border-b-2 border-gray-700"></div>
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
      }
export default Home;
