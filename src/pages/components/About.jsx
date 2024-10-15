import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center pb-12 border-b border-slate-600"
    >
      <h2 className="lga:text-2xl text-xl font-semibold">About Me</h2>
      <article className="flex flex-row lga:mt-6 mt-4 items-center">
        <FontAwesomeIcon
          icon={faAnglesRight}
          className="lga:text-5xl text-[#00ADB5] lga:block hidden"
        />
        <p className="text-center mx-4 lga:mx-8 lga:text-base text-sm">
          I’m a 5th-semester student at Ahmad Dahlan University, specializing in
          full-stack web development and cloud services. Along with writing
          clean code and crafting intuitive designs, I’ve developed skills in
          cloud technologies. My goal is to build web applications that are both
          functional and visually engaging, while leveraging cloud
          infrastructure to optimize performance and scalability. I am actively
          seeking opportunities to further enhance my skills and contribute to a
          dynamic team.
        </p>

        <FontAwesomeIcon
          icon={faAnglesLeft}
          className="lga:text-5xl lga:block hidden text-[#00ADB5] "
        />
      </article>
    </section>
  );
};

export default About;
