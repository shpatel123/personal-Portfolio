import React, { useEffect, useRef } from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLenis from "../../utils/useLenis";
import profileImage from "../../assets/img.png";
import resume from "../../assets/shubham.pdf";

const orbitStyles = `
  @keyframes orbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes counter-orbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }
  .orbit-container {
    animation: orbit 25s linear infinite;
  }
  .icon-counter-rotate {
    animation: counter-orbit 25s linear infinite;
  }
`;

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useLenis();
  const sectionRef = useRef(null);

  const techIcons = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", angle: 0 },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", angle: 60 },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", angle: 120 },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", angle: 180 },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", angle: 240 },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", angle: 300 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".orbit-item", {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-4 px-[7vw] md:px-[10vw] lg:px-[14vw] xl:px-[18vw] font-sans mt-16 md:mt-24 lg:mt-32">
      <style>{orbitStyles}</style>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12 lg:gap-16">

        {/* Left Side Content */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-2">Hi, I am</h1>
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4">Shubham Bhalala</h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec]">
            <span className="text-white">I am a </span>
            <ReactTypingEffect text={["Full Stack Developer", "UI/UX Designer"]} speed={100} eraseSpeed={50} />
          </h3>
          <p className="text-base text-gray-400 mb-10 leading-relaxed">
            I specialize in the MERN stack and modern technologies to create seamless user experiences.
          </p>
          <a
            href={resume}
            className="inline-block text-white py-3 px-8 rounded-full font-bold transition transform hover:scale-105"
            style={{ background: "linear-gradient(90deg, #8245ec, #a855f7)", boxShadow: "0 0 30px rgba(130, 69, 236, 0.4)" }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side - Image & Orbit Animation */}
        <div className="md:w-1/2 flex justify-center items-center">
          {/* Main Wrapper: Responsive container sizes */}
          <div className="relative flex items-center justify-center w-[80vw] h-[80vw] max-w-[400px] max-h-[400px]">

            {/* Dashed Orbit Ring */}
            <div className="absolute inset-0 border border-dashed border-gray-700 rounded-full orbit-container">
              {techIcons.map((icon, index) => (
                <div
                  key={index}
                  className="orbit-item absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border border-gray-800 rounded-lg p-1.5 sm:p-2 flex items-center justify-center"
                  style={{
                    top: "50%",
                    left: "50%",
                    // Responsive orbit radius
                    transform: `translate(-50%, -50%) rotate(${icon.angle}deg) 
                               translate(min(40vw, 200px)) 
                               rotate(-${icon.angle}deg)`
                  }}
                >
                  <img
                    src={icon.src}
                    alt="skill"
                    className="icon-counter-rotate w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Profile Photo - Balanced size for mobile vs desktop */}
            <div className="z-10 w-[70%] h-[70%]">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="w-full h-full"
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div className="w-full h-full rounded-full overflow-hidden border-[1px] border-dashed border-gray-800">
                  <img
                    src={profileImage}
                    alt="Shubham"
                    className="w-full h-full object-cover object-center"
                    style={{ transform: "scale(1.05)", transformOrigin: "center" }}
                  />
                </div>
              </Tilt>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;