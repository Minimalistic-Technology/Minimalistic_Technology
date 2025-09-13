
import ClientNavbarWrapper from "@/components/ClientNavbar";

import dynamic from "next/dynamic";
// import VisitTracker from "@/components/Visit";


const HeroSection = dynamic(() => import("@/components/HeroSection"));
const WhatWeOffer = dynamic(() => import("@/components/WhatWeOffer"));
const PricingPlan = dynamic(() => import("@/components/PricingPlan")); 
const Testimonials = dynamic(() => import("@/components/ClientTestimonials"));
const GetStartedForm = dynamic(() => import("@/components/ClientGetStarted"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div>
      <ClientNavbarWrapper />
      <div className={`min-h-screen  bg-white text-black dark:bg-[#23272A] dark:text-white`}>
        <HeroSection />
        <WhatWeOffer />
        <PricingPlan />
        <Testimonials />
        <div id="get-started-section">
          <GetStartedForm />
        </div>
        {/* <VisitTracker></VisitTracker> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}


