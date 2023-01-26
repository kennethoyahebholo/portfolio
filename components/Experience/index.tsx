import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from "../Experience/ExperienceCard"
import PayfiLogo from '../../public/svg/PayfiLogo'
import UseCoinsLogo from "../../public/svg/usecoins-light.svg";
import Dspatch from "../../public/svg/dspatch_logo-abu.svg";
import Test from "../../public/svg/logotest.jpg";

type Props = {}

const myExperience = [
  {
    id: 1,
    role: "internship",
    companyName: "PAYFI",
    company_logo: <PayfiLogo />,
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
    company_logo: <UseCoinsLogo />,
    started_at: "1st November 2022",
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
    company_logo: <Dspatch />,
    started_at: "1st November 2022",
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
    company_logo: <PayfiLogo />,
    started_at: "1st November 2022",
    ended_at: "Till now",
    first_summary: "Footer Component User Interface.",
    second_summary: "About Us Page user interface implementation.",
    third_summary: "Summary points",
    fourth_summary: "Summary points",
    fifth_summary: "Summary points",
  },
]

const index = (props: Props) => {
  return (
    <motion.div
    
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5}}

    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>

     <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

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