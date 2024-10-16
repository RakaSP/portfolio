import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCode,
  faTerminal,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const skillsData = [
  {
    title: "Frontend",
    icon: faCode,
    skills: [
      { name: "React", bgColor: "bg-blue-500" },
      { name: "Vite", bgColor: "bg-purple-500" },
      { name: "Tailwind CSS", bgColor: "bg-teal-500" },
    ],
  },
  {
    title: "Backend",
    icon: faTerminal,
    skills: [
      { name: "Laravel", bgColor: "bg-orange-500" },
      { name: "Node.js", bgColor: "bg-green-600" },
      { name: "HAPI", bgColor: "bg-gray-600" },
      { name: "Express", bgColor: "bg-gray-600" },
      { name: "PostgreSQL", bgColor: "bg-blue-600" },
      { name: "MySQL", bgColor: "bg-red-600" },
      { name: "MongoDB", bgColor: "bg-yellow-600" },
    ],
  },
  {
    title: "Cloud",
    icon: faCloud,
    skills: [
      { name: "Google Cloud", bgColor: "bg-blue-700" },
      { name: "AWS", bgColor: "bg-orange-700" },
      { name: "Terraform", bgColor: "bg-green-700" },
      { name: "Kubernetes", bgColor: "bg-gray-600" },
    ],
  },
  {
    title: "Others",
    icon: faTools,
    skills: [
      { name: "Git", bgColor: "bg-orange-500" },
      { name: "Figma", bgColor: "bg-purple-500" },
      { name: "Postman", bgColor: "bg-orange-500" },
      { name: "Docker", bgColor: "bg-cyan-500" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="mt-12 flex flex-col items-center">
      <h2 className="section-header">My Skills</h2>
      <div className="grid xla:grid-cols-4 mda:grid-cols-2 grid-cols-1 lga:mt-12 mda:mt-8 mt-2 gap-y-2 gap-x-8 justify-center">
        {skillsData.map((skillCategory) => (
          <div
            key={skillCategory.title}
            className="flex flex-col p-4 rounded-lg flex-1  bg-[#393e46] hover:bg-[#3e4756]"
          >
            <div className="flex flex-col items-center mb-2">
              <FontAwesomeIcon
                icon={skillCategory.icon}
                className="mr-2 text-[#00ADB5] lga:h-12 lga:w-12 h-8 w-8"
              />
              <h3 className="lga:text-xl text-lg font-semibold mt-2">
                {skillCategory.title}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2 mt-4">
              {skillCategory.skills.map((skill) => (
                <li
                  key={skill.name}
                  className={`lga:text-sm text-[12px] ${skill.bgColor} text-white rounded-full px-4 font-medium`}
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
