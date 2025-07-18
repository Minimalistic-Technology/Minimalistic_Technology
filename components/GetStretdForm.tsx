// "use client";

// import React, { useRef, useState } from "react";
// import { Mail } from "lucide-react";
// import api from "@/utils/api";

// const GetStartedForm: React.FC = () => {
//   const formRef = useRef<HTMLFormElement | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [service, setService] = useState("");
//   const sendEmail = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const form = formRef.current;
//     if (!form) return;

//     // Basic validation
//     const fullName = form.fullName?.value.trim();
//     const email = form.email?.value.trim();
//     const phone = form.phone?.value.trim();
//     const websiteType = form.websiteType?.value.trim();
//     const selectedService = form.service?.value;

//     if (
//       !fullName ||
//       !email ||
//       !phone ||
//       !websiteType ||
//       !selectedService ||
//       selectedService === ""
//     ) {
//       setError("Kindly fillout the mandatory fields.");
//       return;
//     }

//     const formData = {
//       fullName,
//       email,
//       phone,
//       businessName: form.businessName?.value.trim(),
//       businessDesc: form.businessDesc?.value.trim(),
//       websiteType: form.websiteType?.value.trim(),
//       service: selectedService,
//       existingWebsite: form.existingWebsite?.value.trim(),
//       existingDesc: form.existingDesc?.value.trim(),
//       projectDesc: form.projectDesc?.value.trim(),
//     };

//     try {
//       setLoading(true);
//       setError(null);
//       console.log ("service", selectedService);
//       if (selectedService === "") {
//         setError("Please select a service.");
//         return;
//       }

//       const response = await api.post("/send-email", formData);
//       if (response.status === 200) {
//         console.log("Message sent successfully!");
//         form.reset();
//       } else {
//         throw new Error("Failed to send message.");
//       }
//     } catch (err: any) {
//       console.error("Error occurred while sending:", err.message || err);
//       setError(err.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="bg-[#23272A] text-white py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-5xl font-bold text-center mb-2">
//           Get Started Today
//         </h2>
//         <p className="text-center text-2xl mb-10">
//           Kindly fill this form to get started
//         </p>

//         {error && (
//           <p className="text-red-500 text-center mb-4 font-semibold">{error}</p>
//         )}

//         <form
//           ref={formRef}
//           onSubmit={sendEmail}
//           className="grid grid-cols-1 md:grid-cols-3 gap-6"
//         >
//           {/* Left Column */}
//           <div className="col-span-1 flex flex-col items-center justify-center py-10 text-center">
//             <div className="flex items-center space-x-2 text-green-300">
//               <Mail size={20} />
//               <a
//                 href="https://mail.google.com/mail/?view=cm&fs=1&to=hi@minimalistictechnology.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline"
//               >
//                 hi@minimalistictechnology.com
//               </a>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-8 col-span-2">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Business Info */}
//               <div>
//                 <h3 className="text-2xl font-bold p-3">Business Information</h3>
//                 <div className="grid grid-cols-1 gap-4">
//                   <input
//                     name="fullName"
//                     placeholder="Full Name*"
//                     className="form-input"
//                   />
//                   <input
//                     name="email"
//                     placeholder="Email Address*"
//                     className="form-input"
//                   />
//                   <input
//                     name="phone"
//                     placeholder="Phone Number*"
//                     className="form-input"
//                   />
//                   <input
//                     name="businessName"
//                     placeholder="Business Name"
//                     className="form-input"
//                   />
//                   <textarea
//                     name="businessDesc"
//                     placeholder="Brief Description of Business"
//                     rows={3}
//                     className="form-input"
//                   />
//                 </div>
//               </div>

//               {/* Project Info */}
//               <div>
//                 <h3 className="text-2xl font-bold p-3">Project Information</h3>
//                 <div className="grid grid-cols-1 gap-4">
//                   <input
//                     name="websiteType"
//                     placeholder="Type of Website*"
//                     className="form-input"
//                   />
//                   <select
//                     name="service"
//                     value={service}
//                     onChange={(e) => setService(e.target.value)}
//                     className="form-input"
//                   >
//                     <option
//                       className="bg-[#23272A] text-white"
//                       value=""
//                       disabled
//                     >
//                       Select Service*
//                     </option>
//                     <option
//                       className="bg-[#23272A] text-white"
//                       value="web-design"
//                     >
//                       UI /Ux support
//                     </option>
//                     <option className="bg-[#23272A] text-white" value="erp">
//                       Website development
//                     </option>
//                     <option
//                       className="bg-[#23272A] text-white"
//                       value="ecommerce"
//                     >
//                       Mobile App development{" "}
//                     </option>
//                     <option
//                       className="bg-[#23272A] text-white"
//                       value="ecommerce"
//                     >
//                       Ai /ML support
//                     </option>
//                     <option
//                       className="bg-[#23272A] text-white"
//                       value="ecommerce"
//                     >
//                       Domain support
//                     </option>
//                     <option
//                       className="bg-[#23272A] text-white"
//                       value="ecommerce"
//                     >
//                       other
//                     </option>
//                   </select>
//                   <input
//                     name="existingWebsite"
//                     placeholder="Do you have existing website?"
//                     className="form-input"
//                   />
//                   <textarea
//                     name="existingDesc"
//                     placeholder="If yes, please describe"
//                     rows={1}
//                     className="form-input"
//                   />
//                   <textarea
//                     name="projectDesc"
//                     placeholder="Brief Description of Project"
//                     rows={3}
//                     className="form-input"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center mt-8">
//               <button
//                 type="submit"
//                 className="bg-[#7ED957] text-black font-bold py-3 px-9 rounded-md hover:bg-[#6cc44a] transition disabled:opacity-50"
//                 disabled={loading}
//               >
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default GetStartedForm;

"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail } from "lucide-react";
import api from "@/utils/api";
import emailjs from "emailjs-com";

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

      const templateParams = {
        name: data.fullName,
        email: data.email,
        title: "New Project Inquiry",
        message: `
        Phone: ${data.phone}
        Business Name: ${data.businessName || "-"}
        Business Description: ${data.businessDesc || "-"}
        Website Type: ${data.websiteType}
        Selected Service: ${service}
        Existing Website: ${data.existingWebsite || "-"}
        Existing Description: ${data.existingDesc || "-"}
        Project Description: ${data.projectDesc || "-"}
      `,
      };

      const response = await emailjs.send(
        "service_8vx0ufi",
        "template_g5yjqs9",
        templateParams,
        "xvO8nB8aPPNb7_kkH"
      );

      if (response.status === 200 || response.text === "OK") {
        console.log("Message sent successfully!");
        reset();
        setService("");
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err: any) {
      console.error("Error occurred while sending:", err.message || err);
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
          <div className="space-y-8 col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      className={`form-input ${
                        errors.fullName ? "border-red-500 border" : ""
                      }`}
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
                      className={`form-input ${
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
                      className={`form-input ${
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
                      className="form-input"
                    />
                  </div>

                  <div>
                    <textarea
                      {...register("businessDesc")}
                      placeholder="Brief Description of Business"
                      rows={3}
                      disabled={isSubmitting}
                      className="form-input"
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
                      className={`form-input ${
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
                      {...register("service", {
                        required: "Please select a service",
                      })}
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      disabled={isSubmitting}
                      className={`form-input ${
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
                        Domain support
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
                      className="form-input"
                    />
                  </div>

                  <div>
                    <textarea
                      {...register("existingDesc")}
                      placeholder="If yes, please describe"
                      rows={1}
                      disabled={isSubmitting}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <textarea
                      {...register("projectDesc")}
                      placeholder="Brief Description of Project"
                      rows={3}
                      disabled={isSubmitting}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-[#7ED957] text-black font-bold py-3 px-9 rounded-md hover:bg-green-500 transition disabled:opacity-50"
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
