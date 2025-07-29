"use client";

import { useEffect, useState } from "react";
import api from "../../utils/api"; 
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface Template {
  src: string;
  title: string;
  description: string;
  github: string;
}

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await api.get("/templates");
        setTemplates(res.data);
      } catch (error) {
        console.error("Failed to fetch templates:", error);
      }
    };

    fetchTemplates();
  }, []);

  const totalPages = Math.ceil(templates.length / itemsPerPage);
  const paginatedTemplates = templates.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div> <Navbar />
    <div
      className={`min-h-screen ${poppins.className} bg-white text-black dark:bg-[#23272A] dark:text-white`}
    >
     

      {/* Landing Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full pt-32 px-6 sm:px-16">
        <div className="max-w- text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl sm:text-6xl font-bold mb-4"
          >
            Ready-to-Use <br />
            Website Templates
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-2 text-base sm:text-lg mb-6 dark:text-gray-300 text-gray-600"
          >
            <p>Explore our hand-crafted templates made with clean code,</p>
            <p>smooth animations, and fully responsive designs.</p>
            <p>
              Whether you're a freelancer, startup, or business owner — we've
              got a layout for you.
            </p>
          </motion.div>

          <Link href="#templates">
            <button className="bg-[#7ED957] text-black font-bold py-3 px-9 rounded-md hover:bg-green-500 transition disabled:opacity-50">
              Browse Templates
            </button>
          </Link>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/templateImg.png"
              alt="Templates Preview"
              width={500}
              height={500}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      <h2
        id="templates"
        className="text-4xl font-bold text-center text-[#87C732] mb-10 mt-50"
      >
        Website Templates
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {paginatedTemplates.map((template, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white text-black dark:bg-[#2c3135] dark:text-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="w-full h-[250px] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={template.src}
                  alt={template.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#87C732] mb-2">
                {template.title}
              </h3>
              <p className="dark:text-gray-300 text-gray-600 text-lg mb-4">
                {template.description}
              </p>
            </div>

            <a
              href={template.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#7ED957] text-black font-semibold text-center py-2 px-4 rounded hover:bg-green-500 transition"
            >
              View Code
            </a>
          </motion.div>
        ))}
      </section>

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded bg-[#7ED957] text-black font-bold disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 rounded bg-[#7ED957] text-black font-bold disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <Footer />
    </div>
    </div>
  );
}
