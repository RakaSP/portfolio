import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import header from "../assets/header.jpg";
import Certifications from "./components/Certification";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <header className="relative lga:pt-16">
        <div className="relative w-[100vw]">
          <img
            className="w-full h-auto object-cover aspect-video lga:aspect-auto"
            src={header}
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35"></div>
        </div>
        <section
          id="home"
          className="items-center justify-center pt-8 absolute bg-none top-1/2 -translate-y-1/2 left-[15%] z-10"
        >
          <h3 className="whitespace-nowrap text-[#00ADB5] xla:text-5xl lga:text 3xl text-2xl font-semibold">
            Raka Satya Prasasta
          </h3>
          <p className="xla:mt-4 mt-1 lga:whitespace-nowrap w-auto xla:text-3xl lga:text-xl text-lg">
            Full Stack Developer | Cloud Engineer
          </p>
          <div className="flex lga:gap-4 gap-2 lga:mt-2 text-[#00B3FF]">
            <a
              href="https://linkedin.com/in/raka-prasasta/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform transform hover:scale-110 hover:shadow-blue-400"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="cursor-pointer lga:h-6 lga:w-6 xla:w-8 xla:h-8 h-5 w-5"
              />
            </a>
            <a
              href="https://www.instagram.com/rakasp0/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform transform hover:scale-110 hover:shadow-blue-400"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="cursor-pointer lga:h-6 lga:w-6 xla:w-8 xla:h-8 h-5 w-5"
              />
            </a>
            <a
              href="https://github.com/RakaSP/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform transform hover:scale-110 hover:shadow-blue-400"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="cursor-pointer lga:h-6 lga:w-6 xla:w-8 xla:h-8 h-5 w-5"
              />
            </a>
            <a
              href="https://x.com/Raka_SPR"
              target="_blank"
              rel="noreferrer"
              className="transition-transform transform hover:scale-110 hover:shadow-blue-400"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="cursor-pointer lga:h-6 lga:w-6 xla:w-8 xla:h-8 h-5 w-5"
              />
            </a>
          </div>
        </section>
      </header>

      <div className="w-full bg-[#222831] x2la:px-[15%] px-[5%] lga:pb-12 pb-6">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Certifications />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
