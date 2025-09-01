import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Services from "./Services";
import Partners from "./Partners";
import Contact from "./Contact";
import About from "./About";
const slides = [
  {
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D",
    title: "Business Loan",
    subtitle: "Empower your business with flexible funding",
  },
  {
    img: "https://cdn.pixabay.com/photo/2024/01/13/09/18/coins-8505363_1280.jpg",
    title: "Personal Loan",
    subtitle: "Quick personal loans for your needs",
  },
  {
    img: "https://cdn.pixabay.com/photo/2018/07/03/12/22/mentor-3513738_1280.jpg",
    title: "Education Loan",
    subtitle: "Invest in your future with education loans",
  },
  {
    img: "https://cdn.pixabay.com/photo/2021/10/07/15/23/real-estate-6688945_1280.jpg",
    title: "Home loan",
    subtitle: "Drive your dream with easy vehicle loans",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/03/19/18/49/auto-financing-2157347_1280.jpg",
    title: "Car loan",
    subtitle: "Make your dream home a reality",
  },
  {
    img: "https://cdn.pixabay.com/photo/2023/08/28/05/36/gold-8218390_1280.jpg",
    title: "Gold Loan",
    subtitle: "Unlock the value of your gold assets",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [current]);

 return (
  <>
    <div
      className="w-full aspect-[16/7] sm:aspect-[16/7] md:aspect-[16/7] max-h-screen relative overflow-hidden flex items-center justify-center"
      aria-label="Hero slider"
      style={{ minHeight: '320px', maxHeight: '100vh' }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 flex items-center justify-center ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
          aria-hidden={index !== current}
        >
          <img
            src={slide.img}
            alt={slide.title + ' background'}
            className="w-full h-full object-cover rounded-2xl shadow-xl transition-all duration-700"
            loading="lazy"
            draggable="false"
          />
          <div className="absolute w-full h-full bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-black/25 backdrop-blur-sm rounded-lg p-3 sm:p-4 max-w-md w-fit shadow-md" style={{ minWidth: '220px', maxWidth: '90vw' }}>
            <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white mb-1 sm:mb-2 tracking-tight leading-tight drop-shadow-lg font-[Poppins,Arial,sans-serif]">
              {slide.title}
            </h1>
            <p className="text-xs sm:text-base md:text-lg text-gray-200 font-medium drop-shadow">
              {slide.subtitle}
            </p>
          </div>

          <button
            className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm sm:text-base font-semibold shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 z-30"
            tabIndex={0}
            onClick={() => navigate('/apply')}
          >
            Apply Now
          </button>
        </div>
      ))}

      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 text-white text-3xl sm:text-4xl z-20 hover:text-green-400 bg-black/30 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        tabIndex={0}
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 text-white text-3xl sm:text-4xl z-20 hover:text-green-400 bg-black/30 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        tabIndex={0}
      >
        <FaArrowRight />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full border-2 border-white ${current === idx ? "bg-green-500" : "bg-white/40"} focus:outline-none focus:ring-2 focus:ring-green-400`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
    <Services />
    <Partners />
     <About/>
      <Contact />
  </>
);

};

export default Home;
