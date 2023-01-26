import React from 'react'

import { motion } from "framer-motion"
import Image from "next/image"
import myFace from "../../public/profile.png"

type Props = {}

function index({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5}}
    className='min-h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
     <h3 
     className='top-24 absolute uppercase tracking-[20px] text-gray-500 text-2xl' 
     >About</h3>
     {/* <br/> */}

     {/* <div className=''> */}
      <motion.div
      initial={{
        x: -100,
        opacity: 0,    
      }}
      transition={{
       duration: 1.2,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='relative mt-[150px] md:mt-0'
      >
      <Image       
      src={myFace}
      className='
      mb-10 
      md:mb-0 
      flex-shrink-0 
      w-36 h-36 
      rounded-full
      object-cover 
      md:rounded-lg 
      md-w-64 
      md:h-96 
      xl:w-[550px] 
      xl:h-[350px]
      '
      alt=''
     />
     </motion.div>

      
     {/* <br /> */}

     <div className='space-y-10 px-0 md:px-10'>
      <h4 className='text-4xl font-semibold'>Here is a{" "}
      <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}background</h4>

      <p className='text-1xl'>
        A Frontend Developer with 2 year+ Enterprise Level Experience Designing and building highly scalable system, across the Technology sectors. A collaborative and customer centric engineer who is ever learning to ensure a greater customer satisfaction in products deliverables.
        <br />
        <br />
        I am a problem solver who is committed to learning, excellence, and tackling oppositions. I am also believing strongly in team spirit, getting each and every person involve to achieve a particular goal.
        Furthermore, I am diligent, which prompts me to pay attention to every detail, with great interest in technology innovations.
        <br />
        <br />
        My immediate goal is to interact fully and work with a large society, growth-oriented organization or institutions dealing with people from all works of life.
      </p>
     </div>
     {/* </div>      */}
    </motion.div>
  )
}

export default index