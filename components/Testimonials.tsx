"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import api from "../utils/api"; 

const gap = 24; // px

interface Testimonial {
  text: string;
  name: string;
  role: string;
  imageUrl: string; 
}

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const [slideWidth, setSlideWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    api.get("/mt/testimonials").then((res) => {
      setTestimonials(res.data);
    });
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !cardRef.current) return;

      const width = window.innerWidth;
      const isMobile = width < 640;

      const cardWidth = isMobile
        ? containerRef.current.offsetWidth
        : cardRef.current.offsetWidth;
      const gap = isMobile ? 0 : 24;

      setSlideWidth(cardWidth + gap);

      const containerWidth = containerRef.current.offsetWidth;
      const perView = Math.floor(containerWidth / (cardWidth + gap));
      setCardsPerView(perView || 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrent((prev) => {
      const maxIndex = testimonials.length - cardsPerView;
      return prev < maxIndex ? prev + 1 : prev;
    });
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div>
      <section className="bg-white text-black dark:bg-[#23272A] dark:text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>

          {/* Slider Container */}
          <div className="overflow-hidden" ref={containerRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${current * (slideWidth + gap)}px)`,
              }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  ref={index === 0 ? cardRef : null}
                  className="w-full sm:w-[320px] lg:w-[350px] flex-shrink-0 bg-white text-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-gray-700 italic">
                    “{t.text}”
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={t.imageUrl}
                      alt={t.name}
                      loading="lazy"
                      className="w-14 h-14 rounded-full border-2 border-green-400 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t.name}</h4>
                      <span className="text-sm dark:text-white text-black bg-[#87C732] px-2 py-1 rounded-md block">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="text-gray-400 hover:text-black dark:hover:text-white p-3"
            >
              <ArrowLeft className="size-7" />
            </button>
            <button
              onClick={nextTestimonial}
              className="text-gray-400 hover:text-black dark:hover:text-white p-3"
            >
              <ArrowRight className="size-7" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
