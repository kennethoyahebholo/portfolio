import React from 'react'
import { motion } from "framer-motion"
import Skills from "./Skills"
import HtmlLogo from "../../public/svg/HtmlLogo"
import CssLogo from "../../public/svg/CssLogo"
import JavascriptLogo from "../../public/svg/JavascriptLogo"
import TypescriptLogo from "../../public/svg/TypescriptLogo"
import ReactLogo from "../../public/svg/ReactLogo"
import TailwindLogo from "../../public/svg/TailwindLogo"
import SassLogo from "../../public/svg/SassLogo"
import GitLogo from "../../public/svg/GitLogo"
import FireBaseLogo from "../../public/svg/FireBaseLogo"
import AwsLogo from "../../public/svg/AwsLogo"
import NodeJsLogo from "../../public/svg/NodeJsLogo"
import JiraLogo from "../../public/svg/JiraLogo"

type Props = {}

const codingSkills = [
  {
    id: 1,
    LanguageLogo: HtmlLogo,
    percentage: "80%"
  },
  {
    id: 2,
    LanguageLogo: CssLogo,
    percentage: "70%"
  },
  {
    id: 3,
    LanguageLogo: JavascriptLogo,
    percentage: "50%"
  },
  {
    id: 4,
    LanguageLogo: TypescriptLogo,
    percentage: "50%"
  },
  {
    id: 5,
    LanguageLogo: ReactLogo,
    percentage: "70%"
  },
  {
    id: 5,
    LanguageLogo: TailwindLogo,
    percentage: "60%"
  },
  {
    id: 5,
    LanguageLogo: SassLogo,
    percentage: "60%"
  },
  {
    id: 6,
    LanguageLogo: GitLogo,
    percentage: "70%"
  },
  {
    id: 7,
    LanguageLogo: FireBaseLogo,
    percentage: "60%"
  },
  {
    id: 8,
    LanguageLogo: JiraLogo,
    percentage: "50%"
  },
  {
    id: 9,
    LanguageLogo: NodeJsLogo,
    percentage: "20%"
  },
  {
    id: 10,
    LanguageLogo: AwsLogo,
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

     <div className='grid grid-cols-2 xl:grid-cols-7 gap-4 mt-[250px] '>
      {codingSkills.map((skill) => (
        <Skills key={skill.id} {...skill} />
      ))}
     </div>
    </motion.div>
  )
}

export default index
