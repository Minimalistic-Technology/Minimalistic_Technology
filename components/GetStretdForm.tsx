"use client";

import React from "react";
import { Mail } from "lucide-react";
import emailjs from "emailjs-com";
import api from "@/utils/api";
const GetStartedForm: React.FC = () => {
  // const sendEmail = (e: any) => {
  //   e.preventDefault();

  //   const form = e.target;

  //   const templateParams = {
  //     name: form.fullName.value,
  //     email: form.email.value,
  //     title: "New Project Inquiry",
  //     message: `
  //       Phone: ${form.phone.value}
  //       Business Name: ${form.businessName.value}
  //       Business Description: ${form.businessDesc.value}
  //       Website Type: ${form.websiteType.value}
  //       Selected Service: ${form.service.value}
  //       Existing Website: ${form.existingWebsite.value}
  //       Existing Description: ${form.existingDesc.value}
  //       Project Description: ${form.projectDesc.value}
  //     `,
  //   };

  //   // emailjs
  //   //   .send("service_pw3837d", "template_2nfoejq", templateParams, "UyZxk9SsnFm5_tP-I")
  //   //   .then(
  //   //     () => alert("Message sent successfully!"),
  //   //     () => alert("An error occurred.")
  //   //   );

  // };
  const sendEmail = async (e: any) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      fullName: form.fullName.value,
      email: form.email.value,
      phone: form.phone.value,
      businessName: form.businessName.value,
      businessDesc: form.businessDesc.value,
      websiteType: form.websiteType.value,
      service: form.service.value,
      existingWebsite: form.existingWebsite.value,
      existingDesc: form.existingDesc.value,
      projectDesc: form.projectDesc.value,
    };

    try {

      const response = await api.post("/send-email", formData);
      if (response.status === 200) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      alert("An error occurred while sending.");
      console.error(err);
    }
  };

  return (
    <section className="bg-[#23272A] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-2">
          Get Started Today
        </h2>
        <p className="text-center text-2xl mb-20">
          Kindly fill this form to get started
        </p>
        <form
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Left Column */}
          <div className="col-span-1 flex flex-col items-center justify-center py-10 text-center">
            <div className="flex items-center space-x-2 text-green-300">
              <Mail size={20} />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hi@minimalistictechnology.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                hi@minimalistictechnology.com
              </a>
            </div>
          </div>
          {/* Right Column */}
          <div className="space-y-8 col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Business Information */}
              <div>
                <h3 className="text-2xl font-bold p-3">Business Information</h3>
                <div className="grid grid-cols-1 gap-4">
                  <input
                    name="fullName"
                    className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md"
                    placeholder="Full Name*"
                  />
                  <input
                    name="email"
                    className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md"
                    placeholder="Email Address*"
                  />
                  <input
                    name="phone"
                    className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md"
                    placeholder="Phone Number*"
                  />
                  <input
                    name="businessName"
                    className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md"
                    placeholder="Business Name"
                  />
                  <textarea
                    name="businessDesc"
                    className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md"
                    placeholder="Brief Description of Business"
                    rows={3}
                  ></textarea>
                </div>
              </div>

              {/* Project Information */}
              <div>
                <h3 className="text-2xl font-bold p-3">Project Information</h3>
                <div className="grid grid-cols-1 gap-4">
                  <input
                    name="websiteType"
                    className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-white rounded-md"
                    placeholder="Type of Website*"
                  />
                  <select
                    name="service"
                    className="w-full p-3 border border-[#7ED957] bg-transparent text-white rounded-md"
                    defaultValue=""
                  >
                    <option
                      className="bg-[#23272A] text-white"
                      value=""
                      disabled
                    >
                      Select Service*
                    </option>
                    <option
                      className="bg-[#23272A] text-white"
                      value="web-design"
                    >
                      UI /Ux support
                    </option>
                    <option className="bg-[#23272A] text-white" value="erp">
                      Website development
                    </option>
                    <option
                      className="bg-[#23272A] text-white"
                      value="ecommerce"
                    >
                      Mobile App development{" "}
                    </option>
                    <option
                      className="bg-[#23272A] text-white"
                      value="ecommerce"
                    >
                      Ai /ML support
                    </option>
                    <option
                      className="bg-[#23272A] text-white"
                      value="ecommerce"
                    >
                      Domain support
                    </option>
                    <option
                      className="bg-[#23272A] text-white"
                      value="ecommerce"
                    >
                      other
                    </option>
                  </select>
                  <input
                    name="existingWebsite"
                    className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md"
                    placeholder="Do you have existing website?"
                  />
                  <textarea
                    name="existingDesc"
                    className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md"
                    placeholder="If yes, please describe"
                    rows={1}
                  ></textarea>
                  <textarea
                    name="projectDesc"
                    className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md"
                    placeholder="Brief Description of Project"
                    rows={3}
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-[#7ED957] text-black font-bold py-3 px-9 rounded-md hover:bg-[#6cc44a] transition"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetStartedForm;
