import React from "react";

import {
  certBackendDicoding,
  certReactHR,
  certCloudDicoding,
  gcsb,
  gcsbCF,
} from "../../assets";
const certifications = [
  {
    title: "Dicoding Cloud Practitioner",
    description:
      "Completed Cloud Practitioner certification by Dicoding Indonesia, demonstrating foundational knowledge of cloud concepts and services.",
    image: certCloudDicoding,
    link: "https://www.dicoding.com/certificates/N9ZO5KN1RPG5",
  },
  {
    title: "Dicoding Fundamental Backend",
    description:
      "Completed Fundamental Backend certification by Dicoding Indonesia, covering essential backend development concepts and practices.",
    image: certBackendDicoding,
    link: "https://www.dicoding.com/certificates/L4PQQ1JEOPO1",
  },
  {
    title: "Google Cloud Foundation Certification",
    description:
      "Certified in cloud engineering with advanced knowledge of GCP services and infrastructure, validating expertise in cloud deployment and management.",
    image: gcsbCF,
    link: "https://www.credly.com/badges/49a20f14-8fba-4dc8-94ee-552957c4e125/public_url",
  },
  {
    title: "Google Cloud Badges",
    description:
      "Earned various badges through practical exercises and assessments, showcasing proficiency in multiple GCP services.",
    image: gcsb,
    link: "https://www.cloudskillsboost.google/public_profiles/ac8de6c8-c67c-4533-8bb3-ae9956620221",
  },
  {
    title: "HackerRank Frontend (React)",
    description:
      "Achieved proficiency in algorithmic problem-solving and frontend development with a focus on React through HackerRank's certification.",
    image: certReactHR,
    link: "https://www.hackerrank.com/certificates/ef4976fea65a",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="mt-12 flex flex-col items-center">
      <h2 className="section-header">Certifications & Badges</h2>
      <div className="flex flex-col gap-4 w-full lga:mt-6 mt-2">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            key={index}
            className="flex flex-row text-start rounded-lg shadow-md w-full bg-[#393e46] hover:bg-[#3e4756]"
            target="_blank"
          >
            <img
              src={cert.image}
              alt={`${cert.title} Certification`}
              className="h-full w-full lga:max-w-[25%] rounded-lg object-contain self-center mr-4 aspect-video"
            />
            <article className="mt-4 pb-2">
              <div>
                <h3 className="lga:text-lg text-base font-bold lga:block hidden">
                  {cert.title}
                </h3>
                <p className="lga:text-sm text-[12px] text-gray-400 lga:block hidden pr-4">
                  {cert.description}
                </p>
              </div>
              <div></div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
