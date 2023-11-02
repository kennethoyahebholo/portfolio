import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../Experience/ExperienceCard";
import PayfiLogo from "../../public/svg/PayfiLogo";
import UseCoinsLogo from "../../public/svg/UseCoinsLogo";
import DspatchLogo from "../../public/svg/DspatchLogo";
import UsafLogo from "../../public/svg/UsafLogo";
import profilePicture1 from "../../public/profile.png";
import profilePicture2 from "../../public/svg/profile_picture.jpg";

type Props = {};

const myExperience = [
  {
    id: 1,
    myFace: profilePicture2,
    role: "software engineer (frontend)",
    companyName: "PAYFI",
    CompanyLogo: PayfiLogo,
    started_at: "1st November 2022",
    ended_at: "Till Now",
    first_summary:
      "Led an extensive codebase refinement initiative, streamlining the merchant frontend application by eliminating redundancy and enhancing efficiency.",
    second_summary:
      "Optimized and updated the SDK using React, improving its performance and functionality.",
    third_summary:
      "Developed user-centric web applications with React, delivering seamless and responsive user experiences.",
    fourth_summary:
      "Updated an intuitive admin dashboard, streamlining administrative operations and data management.",
    fifth_summary:
      "Enhanced Paystack payment gateway for better usage and optimized flow.",
  },
  {
    id: 2,
    myFace: profilePicture1,
    role: "frontend engineer",
    companyName: "USECOINS",
    CompanyLogo: UseCoinsLogo,
    started_at: "1st July 2022",
    ended_at: "Till now",
    first_summary:
      "Consumed endpoints for finding and listing invoices, streamlining the invoice management process.",
    second_summary:
      "Designed and implemented an Invoice generation page/form, integrating it with the necessary endpoints for seamless invoice creation.",
    third_summary:
      "Contributed to the implementation of the website based on Figma designs, ensuring a visually appealing and user-friendly interface.",
    fourth_summary:
      "Developed an Invoice hosting page, providing a platform for accessible and organized invoice storage.",
    fifth_summary:
      "Resolved and fixed bugs related to the checkout process, enhancing the overall user experience.",
  },
  {
    id: 3,
    myFace: profilePicture1,
    role: "frontend engineer",
    companyName: "USAF",
    CompanyLogo: UsafLogo,
    started_at: "1st March 2022",
    ended_at: "Till now",
    first_summary:
      "Led codebase restructuring efforts, optimizing the project's architecture for enhanced performance and maintainability.",
    second_summary:
      "Reviewed and merged developers' code, ensuring code quality and adherence to best practices.",
    third_summary:
      "Took on a leadership role, guiding and coordinating the efforts of the development team to achieve project objectives.",
    fourth_summary: "******",
    fifth_summary: "******",
  },
  {
    id: 4,
    myFace: profilePicture2,
    role: "internship",
    companyName: "DSpatch",
    CompanyLogo: DspatchLogo,
    started_at: "1st December 2022",
    ended_at: "1st March 2023",
    first_summary:
      "Designed and developed the Footer Component User Interface, enhancing website navigation and aesthetics.",
    second_summary:
      "Implemented the user interface for the About Us Page, contributing to an informative and engaging online presence.",
    third_summary: "******",
    fourth_summary: "******",
    fifth_summary: "******",
  },
  {
    id: 5,
    myFace: profilePicture1,
    role: "frontend engineer",
    companyName: "FREELANCER",
    CompanyLogo: DspatchLogo,
    started_at: "27th June 2021",
    ended_at: "Till now",
    first_summary:
      "Collaborated with multiple startups, providing expertise in frontend development and contributing to the success of various projects.",
    second_summary:
      "Worked closely with cross-functional teams, fostering efficient communication and teamwork to deliver high-quality web applications.",
    third_summary:
      "Designed, developed, and maintained web applications, ensuring responsive and user-friendly interfaces that meet client and user expectations.",
    fourth_summary:
      "Utilized cutting-edge technologies and best practices to achieve outstanding results.",
    fifth_summary:
      "Delivered exceptional value and impact in diverse freelance projects.",
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

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80     

      mt-[95px]
      "
      >
        {myExperience.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default index;
