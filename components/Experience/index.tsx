import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from "../Experience/ExperienceCard"
import PayfiLogo from '../../public/svg/PayfiLogo'
import UseCoinsLogo from "../../public/svg/UseCoinsLogo";
import DspatchLogo from "../../public/svg/DspatchLogo";

type Props = {}

const myExperience = [
  {
    id: 1,
    role: "internship",
    companyName: "PAYFI",
    CompanyLogo: PayfiLogo,
    started_at: "1st November 2022",
    ended_at: "Till Now",
    first_summary: "Clean up merchant frontend codebase to remove redundant codes.",
    second_summary: "SDK single logging activities.",
    third_summary:  "Update the SDK to include user inputting their account number before mono connection",
    fourth_summary: "Payaza integration for collection.",
    fifth_summary: "Updated investyield repayment tenure to 4months",
  },
  {
    id: 2,
    role: "frontend engineer",
    companyName: "USECOINS",
    CompanyLogo: UseCoinsLogo,
    started_at: "1st July 2022",
    ended_at: "Till now",
    first_summary: "Consumed endpoint for finding and listing invoices",
    second_summary: "Created Invoice generation page/form and consumed endpoint. ",
    third_summary: "Worked on implementation of website figma design.",
    fourth_summary: "Create Invoice hosting page.",
    fifth_summary: "Fixed bugs related to the checkout.",
  },
  {
    id: 3,
    role: "internship",
    companyName: "DSpatch",
    CompanyLogo: DspatchLogo,
    started_at: "1st December 2022",
    ended_at: "Till now",
    first_summary: "Footer Component User Interface.",
    second_summary: "About Us Page user interface implementation.",
    third_summary: "Footer Component User Interface.",
    fourth_summary: "About Us Page user interface implementation.",
    fifth_summary: "About Us Page user interface implementation.",
  },
  {
    id: 4,
    role: "Frontend Engineer",
    companyName: "FREELANCER",
    CompanyLogo: DspatchLogo,
    started_at: "27th June 2021",
    ended_at: "Till now",
    first_summary: "Worked with several start-ups.",
    second_summary: "Collaborated with Teams.",
    third_summary: "Built web apps",
    fourth_summary: "******",
    fifth_summary: "******",
  },
]

const index = (props: Props) => {
  return (
    <motion.div    
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5}}

      className='min-h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>

      <h3 className='absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-1xl md:text-2xl'>Experience</h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80     

      mt-[95px]
      '>
        {myExperience.map((experience) => (        
        <ExperienceCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.div>
  )
}

export default index