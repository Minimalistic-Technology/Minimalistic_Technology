"use client";

import React, { useRef, useState } from "react";
import { Mail } from "lucide-react";
import api from "@/utils/api";

const GetStartedForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [service, setService] = useState("");
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    // Basic validation
    const fullName = form.fullName?.value.trim();
    const email = form.email?.value.trim();
    const phone = form.phone?.value.trim();
    const websiteType = form.websiteType?.value.trim();
    const selectedService = form.service?.value;

    if (
      !fullName ||
      !email ||
      !phone ||
      !websiteType ||
      !selectedService ||
      selectedService === ""
    ) {
      setError("Kindly fillout the mandatory fields.");
      return;
    }

    const formData = {
      fullName,
      email,
      phone,
      businessName: form.businessName?.value.trim(),
      businessDesc: form.businessDesc?.value.trim(),
      websiteType: form.websiteType?.value.trim(),
      service: selectedService,
      existingWebsite: form.existingWebsite?.value.trim(),
      existingDesc: form.existingDesc?.value.trim(),
      projectDesc: form.projectDesc?.value.trim(),
    };

    try {
      setLoading(true);
      setError(null);
      console.log ("service", selectedService);
      if (selectedService === "") {
        setError("Please select a service.");
        return;
      }

      const response = await api.post("/send-email", formData);
      if (response.status === 200) {
        console.log("Message sent successfully!");
        form.reset(); // clear fields
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err: any) {
      console.error("Error occurred while sending:", err.message || err);
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#23272A] text-white py-12">
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
          ref={formRef}
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
              {/* Business Info */}
              <div>
                <h3 className="text-2xl font-bold p-3">Business Information</h3>
                <div className="grid grid-cols-1 gap-4">
                  <input
                    name="fullName"
                    placeholder="Full Name*"
                    className="form-input"
                  />
                  <input
                    name="email"
                    placeholder="Email Address*"
                    className="form-input"
                  />
                  <input
                    name="phone"
                    placeholder="Phone Number*"
                    className="form-input"
                  />
                  <input
                    name="businessName"
                    placeholder="Business Name"
                    className="form-input"
                  />
                  <textarea
                    name="businessDesc"
                    placeholder="Brief Description of Business"
                    rows={3}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-2xl font-bold p-3">Project Information</h3>
                <div className="grid grid-cols-1 gap-4">
                  <input
                    name="websiteType"
                    placeholder="Type of Website*"
                    className="form-input"
                  />
                  <select
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="form-input"
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
                    placeholder="Do you have existing website?"
                    className="form-input"
                  />
                  <textarea
                    name="existingDesc"
                    placeholder="If yes, please describe"
                    rows={1}
                    className="form-input"
                  />
                  <textarea
                    name="projectDesc"
                    placeholder="Brief Description of Project"
                    rows={3}
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-[#7ED957] text-black font-bold py-3 px-9 rounded-md hover:bg-[#6cc44a] transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetStartedForm;
