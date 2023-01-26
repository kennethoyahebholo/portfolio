import React from 'react'
import Image from "next/image"
import myFace from "../../public/profile.png"
import { motion } from "framer-motion"

type Props = {
  role: string,
  companyName: string,
  CompanyLogo: any,
  started_at: string,
  ended_at: string,
  first_summary: string,
  second_summary: string,
  third_summary: string,
  fourth_summary: string,
  fifth_summary: string
}

const ExperienceCard = ({role, companyName, CompanyLogo, started_at, ended_at, first_summary, second_summary, third_summary, fourth_summary, fifth_summary}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 max-w-[220px] md:max-w-[400px] xl:w-[500px] snap-center bg-[#292929] p-6 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
      initial={{
      y: -100,
      opacity: 0
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      >
        <Image
          className='w-20 h-20
          rounded-full
          object-cover
          object-center' 
          src={myFace} alt="" />
          
      </motion.div>     
      <div className='px-0 md:px-10'>
        <h4 className='text-2xl font-light'>{role}</h4>
        <p className='font-bold text-1xl mt-1'>{companyName}</p>
        <div className='flex space-x-2 my-2'>
          <CompanyLogo />
        </div>
        <p className='uppercase py-2 text-gray-300'>{started_at} - {ended_at}</p>

        <ul className='list-disc space-y-4 ml-5 text-sm'>
          <li>{first_summary}</li>
          <li>{second_summary}</li>
          <li>{third_summary}</li>
          <li>{fourth_summary}</li>
          <li>{fifth_summary}</li>
        </ul>
        </div>
    </article>
  )
}

export default ExperienceCard