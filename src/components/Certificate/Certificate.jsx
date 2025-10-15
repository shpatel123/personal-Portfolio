import React, { useState, useEffect, useRef } from "react";
import { certificates } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLenis from "../../utils/useLenis";

gsap.registerPlugin(ScrollTrigger);

const Certificate = () => {
  useLenis();

  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const cardsWrapperRef = useRef([]);
  const modalRef = useRef(null);

  const handleOpenModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  // Animate wrapper divs on scroll
  useEffect(() => {
    gsap.from(cardsWrapperRef.current, {
      opacity: 0,
      y: 50, // transforms are applied to wrapper, inner card handles hover
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsWrapperRef.current[0],
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  // Modal animation
  useEffect(() => {
    if (selectedCertificate && modalRef.current) {
      gsap.from(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [selectedCertificate]);

  return (
    <section
      id="certificate"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATES</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of certifications showcasing my skills, achievements, and
          continuous learning
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          // Wrapper div for GSAP animation
          <div
            key={certificate.id}
            ref={(el) => (cardsWrapperRef.current[index] = el)}
          >
            {/* Actual card with hover effects */}
            <div
              onClick={() => handleOpenModal(certificate)}
              className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300 hover:shadow-purple-500/50 hover:-translate-y-2 cursor-pointer"
            >
              <div className="p-4">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {certificate.title}
                </h3>
                <p className="text-gray-500 mb-2">
                  Issued by: {certificate.issuer}
                </p>
                <p className="text-gray-400 text-sm">Date: {certificate.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedCertificate && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-5xl w-full flex justify-center">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-purple-500 z-50"
            >
              &times;
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full h-auto max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
