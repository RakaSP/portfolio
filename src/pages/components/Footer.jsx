import React from "react";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className="bg-[#393E46] w-full lga:py-8 py-4 flex sm:flex-row flex-col-reverse justify-around items-center text-center relative">
      <p className="mt-2 sm:mt-0 lga:text-base sma:text-sm text-[12px]">
        &copy; 2024 Raka Satya Prasasta. All rights reserved.
      </p>
      <nav className="flex flex-row gap-6 lga:text-lg sma:text-sm text-[12px]">
        <Link
          to="home"
          smooth={true}
          offset={-200}
          duration={800}
          className="cursor-pointer hover:text-[#00B3FF]"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          offset={-100}
          duration={800}
          className="cursor-pointer hover:text-[#00B3FF]"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          offset={-100}
          duration={800}
          className="cursor-pointer hover:text-[#00B3FF]"
        >
          Projects
        </Link>
        <Link
          to="skills"
          smooth={true}
          offset={-100}
          duration={800}
          className="cursor-pointer hover:text-[#00B3FF]"
        >
          Skills
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
