import React, { useEffect, useRef } from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLenis from "../../utils/useLenis";
import profileImage from "../../assets/img.png";
import resume from "../../assets/shubham.pdf";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useLenis(); // smooth scrolling

  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text elements (except button)
      gsap.from(textRef.current.querySelectorAll(".text-item"), {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate the button separately (slightly delayed)
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate image
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.85,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-4 px-[7vw] md:px-[10vw] lg:px-[14vw] xl:px-[18vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-16 lg:gap-20 xl:gap-24">
        {/* Left Side */}
        <div
          ref={textRef}
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
        >
          <h1 className="text-item text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-item text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Shubham Bhalala
          </h2>

          <h3 className="text-item text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={["Full Stack Developer", "UI/UX Designer"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-item text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a final-year student with hands-on experience in building
            scalable web applications. Skilled in both front-end and back-end
            development, I specialize in the MERN stack and modern technologies
            to create seamless user experiences and efficient solutions.
          </p>

          {/* Resume Button */}
          <a
            ref={buttonRef}
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div
          ref={imageRef}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[26rem] md:h-[26rem] lg:w-[28rem] lg:h-[28rem] xl:w-[30rem] xl:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Shubham Bhalala"
              className="w-full h-full rounded-full object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
