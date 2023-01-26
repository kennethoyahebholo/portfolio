import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"

type Props = {
  directionLeft?: boolean;
  LanguageLogo?: any;
  percentage?: string
}

import MyFace from "../../public/svg/javascript.svg"

const Skills = ({ directionLeft, LanguageLogo, percentage } : Props ) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div

      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      
      initial={{
      x: directionLeft? -100 : 100,
      opacity: 0,
      }}

      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}

      className='relative'>
        <LanguageLogo className='rounded-full border border-gray-500 object-cover w-[70px] h-[70px] md:h-[90px] md:w-[90px] xl:w-[100px] xl:h-[100px] filter group-hover:grayscale transition duration-300 ease-in-out' />
        {/* <Image
     className='rounded-full border border-gray-500 object-cover w-[70px] h-[70px] md:h-[90px] md:w-[90px] xl:w-[100px] xl:h-[100px] filter group-hover:grayscale transition duration-300 ease-in-out'

      src={myFace}
      alt=""
      /> */}
      </motion.div>
     
     <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[70px] h-[70px] md:h-[90px] md:w-[90px] xl:w-[100px] xl:h-[100px] rounded-full z-0'>
      <div className='flex items-center justify-center h-full'>
       <p className='text-2xl font-bold text-black opacity-100'>{percentage}</p>
      </div>
     </div>
    </div>
  )
}

export default Skills