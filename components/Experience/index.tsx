import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../Experience/ExperienceCard";
// import ForcytheLogo from "../../public/svg/ForcytheLogo";
import PayfiLogo from "../../public/svg/PayfiLogo";
// import JasereLogo from "../../public/svg/JasereLogo";
import UseCoinsLogo from "../../public/svg/UseCoinsLogo";
import DspatchLogo from "../../public/svg/DspatchLogo";
// import BlwItLogo from "../../public/svg/BlwItLogo";
// import FreelancerLogo from "../../public/svg/FreelancerLogo";
import profilePicture from "../../public/profile.png";

type Props = {};

const myExperience = [
  {
    id: 1,
    myFace: profilePicture,
    role: "Frontend Developer",
    companyName: "Forcythe",
    // CompanyLogo: ForcytheLogo,
    started_at: "1st February 2025",
    ended_at: "8th May 2025",
    first_summary:
      "Delivered responsive, accessible UIs for DC Innovate and Apapa LGA websites using React/Next.js and Tailwind CSS—aligning with brand guidelines and optimizing across devices.",
    second_summary:
      "Integrated RESTful APIs to enhance Perime, Peripay Merchant, and corporate dashboards—applying state management and performance optimizations for seamless workflows.",
    third_summary:
      "Contributed in agile sprints—leading code reviews, resolving front‑end issues, and collaborating with product teams to align features with roadmaps.",
    fourth_summary:
      "Implemented UI enhancements on forcythe.com and apapalga.netlify.app—ensuring consistent styling and user experience across internal and public sites.",
    fifth_summary:
      "Maintained high code quality standards through ESLint configurations, unit testing, and documentation for better team onboarding.",
  },
  {
    id: 2,
    myFace: profilePicture,
    role: "Software Engineer",
    companyName: "Payfi",
    CompanyLogo: PayfiLogo,
    started_at: "1st November 2022",
    ended_at: "Present",
    first_summary:
      "Crafted and maintained high‑performance web applications using React and Next.js, ensuring fast time‑to‑interactive and responsive layouts.",
    second_summary:
      "Architected and consumed GraphQL queries and mutations to optimize data fetching and boost scalability.",
    third_summary:
      "Built a modular theming system with Tailwind CSS—delivering consistent brand identity and rapid style iterations.",
    fourth_summary:
      "Led Next.js‑driven redesigns of payfi.ca and kaabo.co—applying modern UX/UI principles to elevate user engagement.",
    fifth_summary:
      "Collaborated cross‑functionally in agile environments—troubleshooting complex bugs, prioritizing features, and ensuring on‑time releases.",
  },
  {
    id: 3,
    myFace: profilePicture,
    role: "Software Engineer",
    companyName: "Jasere",
    // CompanyLogo: JasereLogo,
    started_at: "1st April 2024",
    ended_at: "1st February 2025",
    first_summary:
      "Directed and mentored the frontend engineering team—fostering collaboration, code quality, and continuous learning for polished delivery.",
    second_summary:
      "Architected scalable Next.js applications—optimizing performance and enabling seamless feature rollouts.",
    third_summary:
      "Engineered REST API and WebSocket integrations to power real‑time data feeds and interactive interfaces.",
    fourth_summary:
      "Led comprehensive codebase refactoring—eliminating technical debt and codifying best practices.",
    fifth_summary:
      "Spearheaded website redesigns with pixel‑perfect UI components and modern UX principles to elevate brand perception.",
  },
  {
    id: 4,
    myFace: profilePicture,
    role: "Frontend Engineer (Contract)",
    companyName: "UseCoins",
    CompanyLogo: UseCoinsLogo,
    started_at: "1st November 2022",
    ended_at: "4th April 2023",
    first_summary:
      "Built responsive dashboard UIs for invoice management, integrating RESTful endpoints for search, listing, and generation.",
    second_summary:
      "Implemented interactive invoice creation and hosting pages—streamlining billing workflows and data access.",
    third_summary:
      "Translated Figma designs into reusable React components, ensuring pixel‑perfect fidelity and accessibility.",
    fourth_summary:
      "Collaborated in scrum ceremonies—identifying and fixing checkout flow bugs to enhance payment reliability.",
    fifth_summary:
      "Integrated real‑time socket connections to enable live updates and maintain seamless backend communication.",
  },
  {
    id: 5,
    myFace: profilePicture,
    role: "Frontend Developer",
    companyName: "DSpatch",
    CompanyLogo: DspatchLogo,
    started_at: "1st December 2022",
    ended_at: "22nd February 2023",
    first_summary:
      "Architected and built a reusable React Footer component—reinforcing navigation consistency across the site.",
    second_summary:
      "Engineered the ‘About Us’ page UI with responsive, design‑faithful React layouts for an engaging online presence.",
    third_summary:
      "Optimized component performance through lazy loading and code splitting to reduce initial load times.",
    fourth_summary:
      "Collaborated with designers to iterate on UI elements—maintaining alignment with brand guidelines.",
    fifth_summary:
      "Documented styling guidelines and component usage to accelerate future contributor onboarding.",
  },
  {
    id: 6,
    myFace: profilePicture,
    role: "Frontend Engineer (Contract)",
    companyName: "BLW IT Office",
    // CompanyLogo: BlwItLogo,
    started_at: "6th April 2021",
    ended_at: "28th December 2021",
    first_summary:
      "Transformed pixel‑perfect designs into accessible HTML/CSS layouts—optimizing breakpoints for seamless cross‑device UX.",
    second_summary:
      "Led end‑to‑end development of a React/TypeScript web app—leveraging Tailwind CSS for rapid, consistent styling.",
    third_summary:
      "Built secure authentication modules with form validation and session handling for robust user flows.",
    fourth_summary:
      "Designed a state‑driven navigation bar and interactive dashboard components to streamline user interactions.",
    fifth_summary:
      "Constructed a library of reusable UI elements—enabling modular layouts and accelerated feature development.",
  },
  {
    id: 7,
    myFace: profilePicture,
    role: "Frontend Engineer (Freelancer)",
    companyName: "Freelancer",
    // CompanyLogo: FreelancerLogo,
    started_at: "10th August 2020",
    ended_at: "3rd April 2021",
    first_summary:
      "Translated detailed UI/UX designs into modular HTML5/CSS3 layouts—delivering responsive interfaces across devices.",
    second_summary:
      "Architected scalable React applications—integrating RESTful and real‑time APIs for dynamic features.",
    third_summary:
      "Implemented accessible, performant UI components with attention to usability and maintainability.",
    fourth_summary:
      "Optimized front‑end performance through code splitting, caching strategies, and lazy loading.",
    fifth_summary:
      "Managed end‑to‑end project delivery—scoping, development, and client communication for multiple small‑scale projects.",
  },
];

const index = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-1xl md:text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 mt-[95px]">
        {myExperience.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default index;
