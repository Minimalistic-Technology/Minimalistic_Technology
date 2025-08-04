"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  imageUrl: string;
}

const Team = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/team`)
      .then((res) => {
        setMembers(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch team data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {/* Header */}
      <Navbar />

      <div
        className={`${poppins.className} flex flex-col min-h-screen bg-white dark:bg-[#23272A] text-[#87C732]`}
      >
        {/* Main Content */}
        <main className="flex-1 pt-28 px-4 md:px-20">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-black mb-4">
              Meet Our Team
            </h1>
            <p className="dark:text-[#fffacd] max-w-2xl mx-auto">
              Our team of passionate leaders and young talents drive innovation
              and excellence every day.
            </p>
          </section>

          {/* Team Grid */}
          <section className="mb-20">
            {loading ? (
              <div className="text-center text-gray-600 dark:text-gray-300">
                Loading team members...
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {members.map((person) => (
                  <div
                    key={person._id}
                    className="bg-white dark:bg-[#23272A] rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-white/50 transform transition duration-300"
                  >
                    <Image
                      src={person.imageUrl}
                      alt={person.name}
                      width={300}
                      height={300}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold dark:text-white text-black">
                        {person.name}
                      </h3>
                      <p className="dark:text-gray-300 text-gray-600 text-sm">
                        {person.position}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Team;
