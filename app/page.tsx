
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




// import GetStretdForm from "../components/GetStretdForm";
// import { Inter } from "next/font/google";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import HeroSection from "@/components/HeroSection";
// import WhatWeOffer from "@/components/WhatWeOffer";
// import PricingPlan from "@/components/PricingPlan";
// import Testimonials from "@/components/Testimonials";

// const poppins = Inter({ subsets: ["latin"] });

// const Home = () => {
//   return (
//     <div>
//       {/* Header/Navbar */}
//       <Navbar></Navbar>
//       <div
//         className={`min-h-screen ${poppins.className} bg-white text-black dark:bg-[#23272A] dark:text-white`}
//       >
//         {/* Hero Section */}
//         <HeroSection />

//         {/* What We Offer Section */}
//         <WhatWeOffer />

//         {/*Pricing Plan*/}
//         <PricingPlan />

//         {/* Testimonial Cards*/}
//         <Testimonials />

//         {/* Get Started Section */}
//         <main id="get-started-section" className="scroll-mt-12">
//           <GetStretdForm />
//         </main>

//         <Footer></Footer>
//       </div>
//     </div>
//   );
// };
// export default Home;
