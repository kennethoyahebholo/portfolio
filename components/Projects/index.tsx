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
      name: "Payfi",
      description:
        "Next.js & Tailwind CSS revamp of payfi.ca, a premier rent‑reporting platform. Enabled students to build credit with on‑time rent payments (no credit check), zero platform fees, and rewards programs. Integrated Passage partnership banner (up to CAD 65,000 support), Equifax reporting, and features like realtor matching, Pre‑Rent & Rent Guarantee, bill pay, and tenant portal—all delivered with engaging testimonials and a streamlined 4‑step onboarding flow.",
      technologyStack: "Next.js, Tailwind CSS",
      url: "https://payfi.ca",
    },
    {
      id: 2,
      name: "Ka’bo",
      description:
        "Next.js & Tailwind CSS build of kaabo.co, a student housing marketplace with multilingual support and zero hidden fees. Features include budget‑driven property search, guarantor support for international students, roommate matching, maintenance requests, and rewards for on‑time rent. Includes dynamic blog feeds, tenant & landlord dashboards, and social proof from student testimonials to drive trust and engagement.",
      technologyStack: "Next.js, Tailwind CSS",
      url: "https://kaabo.co",
    },
    {
      id: 3,
      name: "Apapa Local Government",
      description:
        "Next.js & Tailwind CSS site for apapalga.gov.ng—Nigeria’s maritime hub portal. Highlights real‑time stats (population, cargo throughput, revenue), community news & events, service directories (housing, healthcare, permits), e‑government forms, and quick‑link feedback tools. Features “Welcome” message from the Executive Chairman, volunteer sign‑ups, levy payments, and an interactive events calendar to drive civic engagement.",
      technologyStack: "Next.js, Tailwind CSS",
      url: "https://apapa-lg.netlify.app/",
    },
    {
      id: 4,
      name: "Forcythe",
      description:
        "Next.js & Tailwind CSS clone of forcythe.com—showcasing digital product innovation. Includes hero call‑to‑action (‘Book a Call’), service highlights (Idea → Launch), interactive case study carousel, client success stories, and key metrics (projects, clients, team leads). Powered by CMS integrations and optimized for performance, it emphasizes B2B/B2C product strategy, cost efficiency, and quick‑support messaging.",
      technologyStack: "Next.js, Tailwind CSS",
      url: "https://forcythe-bestclone.netlify.app/",
    },
    {
      id: 5,
      name: "Netflix Clone",
      design: NetflixDesign,
      description:
        "The Netflix Clone is a dynamic and user-friendly movie streaming web application that provides an immersive experience for users to explore and watch a wide variety of movies. Built using modern web technologies, including React for the frontend and Firebase for hosting, this project leverages the power of the TMDB API to offer up-to-date information and a vast library of movies. The platform offers multiple movie categories—Netflix Originals, Top Rated, Trending Now, Action, Comedy, Horror, Romance, and Documentaries—ensuring a diverse selection for every taste. Real-time updates from the TMDB API keep users informed with the latest content, and the intuitive UI allows effortless search and discovery. Hosted on Firebase for reliable, scalable access.",
      technologyStack: "React, TMDB API, Firebase",
      url: "https://netflix-clonexp.netlify.app/",
    },
    {
      id: 6,
      name: "LinkedIn Clone",
      design: LinkedInDesign,
      description:
        "A simplified professional networking platform featuring secure authentication, basic user profiles, and a real‑time post feed. Built with React for the frontend and Firebase for auth and data storage, users can sign in or register, customize their profiles, and share updates—fostering community engagement in a LinkedIn‑style newsfeed.",
      technologyStack: "React, Firebase",
      url: "https://linkedin-clone-28da2.web.app/",
    },
    {
      id: 7,
      name: "Tech Time",
      design: TechTimeDesign,
      description:
        "A captivating, responsive landing page for an online course portal, built with React and hosted on Netlify. Features include a hero section, About Us, course showcases, and testimonials—each designed for seamless adaptation across all device sizes and an engaging user journey from first click to call‑to‑action.",
      technologyStack: "React, Netlify",
      url: "https://tech-time-web.netlify.app/",
    },
    {
      id: 8,
      name: "Snap",
      design: SnapDesign,
      description:
        "A minimalist, Frontend Mentor‑inspired landing page showcasing a header and hero section optimized for responsiveness. Built with plain HTML, CSS, and JavaScript, Snap delivers a clean, attention‑grabbing UI that adapts flawlessly to various screen sizes.",
      technologyStack: "HTML, CSS, JavaScript",
      url: "https://delightful-snickerdoodle-9283a7.netlify.app/",
    },
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
            {project.design && (
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
            )}
            <div className="space-y-5 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {project.id} of {projects.length}:
                </span>{" "}
                <a href={project?.url} target="_blank" rel="noreferrer">
                  <span>{project.name}</span>
                </a>
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
