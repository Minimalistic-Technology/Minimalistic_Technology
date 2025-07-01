"use client";
import React from 'react'
import Link from 'next/link'
const PricingPlan = () => {
  return (
    <div>
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
    </div>
  )
}

export default PricingPlan
