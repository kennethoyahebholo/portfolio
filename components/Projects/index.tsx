import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LinkedInDesign from "../../public/linkedIn-project.png";
import NetflixDesign from "../../public/neflix-project.png";
import TechTimeDesign from "../../public/tech-time.png";
import SnapDesign from "../../public/snap.png";

type Props = {};

const Index = (props: Props) => {
  const projects = [
    {
      id: 1,
      name: "Netflix clone",
      design: NetflixDesign,
      description:
        "The Netflix Clone is a dynamic and user-friendly movie streaming web application that provides an immersive experience for users to explore and watch a wide variety of movies. Built using modern web technologies, including React for the frontend and Firebase for hosting, this project leverages the power of themoviedb API to offer up-to-date information and a vast library of movies. The platform offers multiple movie categories, including Netflix Originals, top-rated, trending now, action, comedy, horror, romance, and documentaries, ensuring a diverse selection for every taste. Real-time updates from the themoviedb API keep users informed with the latest and most current movie content. The user interface is designed for ease of navigation and a visually appealing experience, allowing users to effortlessly search for and discover their favorite movies. The project is hosted on Firebase, providing reliable and scalable hosting to ensure users can access the platform without interruptions.",
      technologyStack: "React, themoviedb API, Firebase",
      url: "https://netfixclone-1c479.web.app/",
    },
    {
      id: 2,
      name: "LinkedIn clone",
      design: LinkedInDesign,
      description:
        "The LinkedIn Clone is a simplified professional networking platform that focuses on three key features. Built using React for the frontend and Firebase for authentication and data storage, this project enables users to securely sign in, register for new accounts, establish basic user profiles, and make posts. Users can seamlessly sign in to their existing accounts or register for new ones, ensuring a protected login experience. With basic profiles, users can facilitate connections and engagement within the community. They can also share their thoughts, insights, and updates by creating and publishing posts, fostering communication and knowledge sharing, similar to LinkedIn's newsfeed.",
      technologyStack: "React, Firebase",
      url: "https://linkedin-clone-28da2.web.app/",
    },
    {
      id: 3,
      name: "Tech Time",
      design: TechTimeDesign,
      description:
        "The Tech Time Landing Page is a captivating and responsive web portal designed and constructed using React and seamlessly hosted on Netlify. This elegant landing page is divided into distinct sections, including a visually striking hero section that instantly captures visitors' attention, an informative 'About Us' section, a comprehensive showcase of available courses, and a testimonials section that highlights the positive experiences of users. The landing page is adorned with an aesthetically pleasing header and footer, enhancing the overall user experience. The project's meticulous design ensures that it adapts flawlessly to various devices and screen sizes, providing an engaging and user-friendly interface for all visitors.",
      technologyStack: "React and Netlify",
      url: "https://tech-time-web.netlify.app/",
    },
    {
      id: 4,
      name: "Snap",
      design: SnapDesign,
      description:
        "The Snap Landing Page showcases a stunning and responsive design that takes inspiration from Frontend Mentor, known for its top-notch web development challenges. This project is elegantly minimalistic, featuring a header and a hero section that seamlessly adapts to various screen sizes. The hero section, in particular, is a visual masterpiece that captures attention with its clean aesthetics and responsiveness. The 'Snap' landing page reflects your commitment to creating user-friendly and visually appealing web designs. Its simplicity and responsiveness make it an ideal choice for conveying key information efficiently and delivering an exceptional user experience.",
      technologyStack: "Html, Css and JavaScript",
      url: "https://delightful-snickerdoodle-9283a7.netlify.app/",
    },
    // {
    //   id: 5,
    //   name: "Todo App",
    //   design: LinkedInDesign,
    //   description:
    //     "The Netflix Clone is a dynamic and user-friendly movie streaming web application that provides an immersive experience for users to explore and watch a wide variety of movies. Built using modern web technologies, including React for the frontend and Firebase for hosting, this project leverages the power of themoviedb API to offer up-to-date information and a vast library of movies. The platform offers multiple movie categories, including Netflix Originals, top-rated, trending now, action, comedy, horror, romance, and documentaries, ensuring a diverse selection for every taste. Real-time updates from the themoviedb API keep users informed with the latest and most current movie content. The user interface is designed for ease of navigation and a visually appealing experience, allowing users to effortlessly search for and discover their favorite movies. The project is hosted on Firebase, providing reliable and scalable hosting to ensure users can access the platform without interruptions.",
    //   technologyStack: "",
    //   url: "",
    // },
    // {
    //   id: 6,
    //   name: "UPS clone",
    //   design: LinkedInDesign,
    //   description:
    //     "The Netflix Clone is a dynamic and user-friendly movie streaming web application that provides an immersive experience for users to explore and watch a wide variety of movies. Built using modern web technologies, including React for the frontend and Firebase for hosting, this project leverages the power of themoviedb API to offer up-to-date information and a vast library of movies. The platform offers multiple movie categories, including Netflix Originals, top-rated, trending now, action, comedy, horror, romance, and documentaries, ensuring a diverse selection for every taste. Real-time updates from the themoviedb API keep users informed with the latest and most current movie content. The user interface is designed for ease of navigation and a visually appealing experience, allowing users to effortlessly search for and discover their favorite movies. The project is hosted on Firebase, providing reliable and scalable hosting to ensure users can access the platform without interruptions.",
    //   technologyStack: "",
    //   url: "",
    // },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-1xl md:text-2xl">
        Projects
      </h3>

      <div
        className="relative mt-[5rem] w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
     scrollbar-thin
     
     "
      >
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-[20px] md:p-44 min-h-screen"
            key={i}
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                className="
              max-w-[200px]
              md:max-w-[350px]
              mx-auto object-contain"
                src={project.design}
                alt=""
              ></Image>
            </motion.div>
            <div className="space-y-5 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {project.id} of {projects.length}:
                </span>{" "}
                {project.name}
              </h4>

              <p className="text-sm text-center md:text-left">
                {project?.description}{" "}
                <a href={project?.url} target="_blank" rel="noreferrer">
                  <span className="underline decoration-[#F7AB0A]/50 cursor-pointer">
                    click here
                  </span>
                </a>
              </p>

              <h3 className="text-sm text-center md:text-left">
                Technology Stack: {project?.technologyStack}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Index;
