import { asceev2 } from "../../assets";
import { musicApi } from "../../assets";

const Projects = () => {
  const projects = [
    {
      title: "ASCEE V2",
      description:
        "The ASCEE V2 project focuses on enhancing the user experience and interface of the " +
        "<a href='https://ascee.org' target='_blank' rel='noopener noreferrer' className='text-[#00ADB5] underline'>ASCEE.ORG site</a>. " +
        "This initiative aims to make the website more intuitive and visually appealing, ensuring that users can easily access and engage with the content. " +
        "Key improvements include a streamlined navigation system, responsive design adjustments, and updated visuals that align with modern web standards.",
      skills: ["Laravel", "Vite", "Tailwind CSS"],
      image: asceev2,
      link: "https://ascee.org",
    },
    {
      title: "Music RESTful API",
      description: `The Music RESTful API is a robust backend service designed to manage music data. It offers dynamic search, create playlist, upload albums and music, with advanced features like secure authentication and authorization for personalized access.
      Users can collaborate on playlists, export the playlist via email, making
      it easy to curate and distribute music collections.`,
      skills: ["Node.js", "HAPI", "Nodemailer", "PostgreSQL", "Postman"],
      image: musicApi,
      link: "https://yourdomain.com/music-api",
    },
  ];

  return (
    <section className="mt-12 flex flex-col items-center">
      <h2 className="section-header">My Projects</h2>
      <div className="flex xla:flex-row flex-col lga:mt-12 mt-8 gap-y-8 gap-x-8 lga:justify-start justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-[#393e46] rounded-lg shadow-md xla:max-w-[33%] w-full"
          >
            <img
              src={project.image}
              alt={`${project.title} Project Showcase`}
              className="w-full h-auto mb-4 aspect-video rounded-tl-lg rounded-tr-lg"
            />
            <div className="text-start px-6 pb-4">
              <h3 className="lga:text-lg text-base font-bold mb-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 "
                >
                  {project.title}
                </a>
              </h3>
              <p
                className="mb-2 text-justify lga:text-base text-sm"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
              <ul className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="text-sm bg-blue-500 text-white rounded px-4 font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
