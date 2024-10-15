import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="fixed bg-[#222831] top-0 w-full flex items-center justify-center lga:h-16 h-8 z-50">
      <nav className="flex flex-row gap-4 text-[#4F555F] lga:text-lg text-sm xla:text-2xl">
        <Link
          to="home"
          smooth={true}
          offset={0}
          duration={800}
          className="cursor-pointer hover:text-[#00B3FF]"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          offset={0}
          duration={800}
          className="cursor-pointer hover:text-[#00B3FF]"
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          offset={0}
          duration={800}
          className="cursor-pointer hover:text-[#00B3FF]"
        >
          Skills
        </Link>
        <Link
          to="timeline"
          smooth={true}
          offset={0}
          duration={800}
          className="cursor-pointer hover:text-[#00B3FF]"
        >
          Timeline
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
