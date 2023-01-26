import React from 'react'
import { motion } from "framer-motion"
import Skills from "./Skills"
// import HtmlLogo from "../../public/svg/icons8-html-5.svg"
// import CssLogo from "../../public/svg/icons8-css3.svg"
// import JavascriptLogo from "../../public/svg/javascript.svg"
// import TypescriptLogo from "../../public/svg/icons8-typescript.svg"
// import ReactLogo from "../../public/svg/icons8-react.svg"
// import TailwindLogo from "../../public/svg/icons8-tailwindcss.svg"
// import SassLogo from "../../public/svg/icons8-sass-avatar.svg"
// import GitLogo from "../../public/svg/icons8-git.svg"
// import FireBaseLogo from "../../public/svg/icons8-firebase.svg"
// import AwsLogo from "../../public/svg/icons8-amazon-web-services.svg"
// import NodeJsLogo from "../../public/svg/icons8-node-js.svg"
// import JiraLogo from "../../public/svg/icons8-jira.svg"

type Props = {}

const codingSkills = [
  {
    id: 1,
    LanguageLogo: "",
    percentage: "80%"
  },
  {
    id: 2,
    LanguageLogo: "",
    percentage: "70%"
  },
  {
    id: 3,
    LanguageLogo: "",
    percentage: "50%"
  },
  {
    id: 4,
    LanguageLogo: "",
    percentage: "50%"
  },
  {
    id: 5,
    LanguageLogo: "",
    percentage: "70%"
  },
  {
    id: 5,
    LanguageLogo: "",
    percentage: "60%"
  },
  {
    id: 5,
    LanguageLogo: "",
    percentage: "60%"
  },
  {
    id: 6,
    LanguageLogo: "",
    percentage: "70%"
  },
  {
    id: 7,
    LanguageLogo: "",
    percentage: "60%"
  },
  {
    id: 8,
    LanguageLogo: "",
    percentage: "50%"
  },
  {
    id: 9,
    LanguageLogo: "",
    percentage: "20%"
  },
  {
    id: 10,
    LanguageLogo: "",
    percentage: "20%"
  },
]
const index = (props: Props) => {
  return (
    <motion.div
    
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5}}

    className='flex relative  flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl-px-6 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
     <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

     <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency proficiency</h3>

     <div className='grid grid-cols-4 xl:grid-cols-7 gap-4 mt-[100px] '>
      {codingSkills.map((skill) => (
        <Skills key={skill.id} {...skill} />
      ))}
     </div>
    </motion.div>
  )
}

export default index