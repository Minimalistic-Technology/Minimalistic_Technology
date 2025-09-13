"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail } from "lucide-react";
import api from "@/utils/api";
import emailjs from "emailjs-com";
import axios from "axios";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  businessName?: string;
  businessDesc?: string;
  websiteType: string;
  service: string;
  existingWebsite?: string;
  existingDesc?: string;
  projectDesc?: string;
};

const GetStartedForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [service, setService] = useState("");
  const [error, setError] = useState<string | null>(null);

  // const onSubmit = async (data: FormData) => {
  //   try {
  //     setError(null);
  //     const response = await api.post("/send-email", data);
  //     if (response.status === 200) {
  //       console.log("Message sent successfully!");
  //       reset();
  //       setService("");
  //     } else {
  //       throw new Error("Failed to send message.");
  //     }
  //   } catch (err: any) {
  //     console.error("Error occurred while sending:", err.message || err);
  //     setError(err.message || "Something went wrong.");
  //   }
  // };

  //emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID!);

  const onSubmit = async (data: FormData) => {
    try {
      setError(null);

      // const templateParams = {
      //   name: data.fullName,
      //   email: data.email,
      //   title: "New Project Inquiry",
      //   message: `
      //   Phone: ${data.phone}
      //   Business Name: ${data.businessName || "-"}
      //   Business Description: ${data.businessDesc || "-"}
      //   Website Type: ${data.websiteType}
      //   Selected Service: ${service}
      //   Existing Website: ${data.existingWebsite || "-"}
      //   Existing Description: ${data.existingDesc || "-"}
      //   Project Description: ${data.projectDesc || "-"}
      // `,
      // };
       const body = `
        Name: ${data.fullName}
        Email: ${data.email}
        Phone: ${data.phone}
        Business Name: ${data.businessName || "-"}
        Business Description: ${data.businessDesc || "-"}
        Website Type: ${data.websiteType}
        Selected Service: ${data.service}
        Existing Website: ${data.existingWebsite || "-"}
        Existing Description: ${data.existingDesc || "-"}
        Project Description: ${data.projectDesc || "-"}
      `;

      const response = await api.post(
        "/email/send-email",
        {
          subject: "New Project Inquiry",
          body,
          recipients: ["hi@minimalistictechnology.com"],
          // recipients: ["devanshraghavsn@gmail.com"],
        }
      );

      if (response.status === 200) {
        console.log("Message sent successfully!");
        reset();
        setService("");
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err: any) {
      console.error("Error occurred while sending:", err.message );
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <section className="bg-white text-black dark:bg-[#23272A] dark:text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-2">
          Get Started Today
        </h2>
        <p className="text-center text-2xl mb-10">
          Kindly fill this form to get started
        </p>

        {error && (
          <p className="text-red-500 text-center mb-4 font-semibold">{error}</p>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
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
          <div className="space-y-8 col-span-2 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              {/* Business Info */}
              <div>
                <h3 className="text-2xl font-bold p-3">Business Information</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <input
                      {...register("fullName", {
                        required: "Please fill out your full name",
                      })}
                      placeholder="Full Name*"
                      disabled={isSubmitting}
                      className={` border-[#7ED957] ${
                        errors.fullName ? " border-red-500 " : ""
                      } form-input`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("email", {
                        required: "Please fill out the email address",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                      placeholder="Email Address*"
                      disabled={isSubmitting}
                      className={`form-input border-[#7ED957] ${
                        errors.email ? "border-red-500 border" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("phone", {
                        required: "Please fill out your phone number",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Phone number must be exactly 10 digits",
                        },
                      })}
                      placeholder="Phone Number*"
                      disabled={isSubmitting}
                      className={`form-input border-[#7ED957] ${
                        errors.phone ? "border-red-500 border" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("businessName")}
                      placeholder="Business Name"
                      disabled={isSubmitting}
                      className="form-input border-[#7ED957]"
                    />
                  </div>

                  <div>
                    <textarea
                      {...register("businessDesc")}
                      placeholder="Brief Description of Business"
                      rows={3}
                      disabled={isSubmitting}
                      className="form-input border-[#7ED957]"
                    />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-2xl font-bold p-3">Project Information</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <input
                      {...register("websiteType", {
                        required: "Please specify website type",
                      })}
                      placeholder="Type of Website*"
                      disabled={isSubmitting}
                      className={`form-input border-[#7ED957] ${
                        errors.websiteType ? "border-red-500 border" : ""
                      }`}
                    />
                    {errors.websiteType && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.websiteType.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <select
                      {...register("service", {
                        required: "Please select a service",
                      })}
                      disabled={isSubmitting}
                      className={`form-input border-[#7ED957] ${
                        errors.service ? "border-red-500 border" : ""
                      }`}
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
                      <option
                        className="bg-[#23272A] text-white"
                        value="Website development"
                      >
                        Website development
                      </option>
                      <option
                        className="bg-[#23272A] text-white"
                        value="Mobile App development"
                      >
                        Mobile App development
                      </option>
                      <option
                        className="bg-[#23272A] text-white"
                        value="AI /ML support"
                      >
                        AI /ML support
                      </option>
                      <option
                        className="bg-[#23272A] text-white"
                        value="Domain support"
                      >
                        Domain support
                      </option>
                      <option className="bg-[#23272A] text-white" value="other">
                        Other
                      </option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("existingWebsite")}
                      placeholder="Do you have existing website?"
                      disabled={isSubmitting}
                      className="form-input border-[#7ED957]"
                    />
                  </div>

                  <div>
                    <textarea
                      {...register("existingDesc")}
                      placeholder="If yes, please describe"
                      rows={1}
                      disabled={isSubmitting}
                      className="form-input border-[#7ED957]"
                    />
                  </div>

                  <div>
                    <textarea
                      {...register("projectDesc")}
                      placeholder="Brief Description of Project"
                      rows={3}
                      disabled={isSubmitting}
                      className="form-input border-[#7ED957]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-[#7ED957] cursor-pointer text-black font-bold py-3 px-9 rounded-md hover:bg-green-600 transition disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetStartedForm;
