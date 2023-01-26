import React from 'react'
import Image from "next/image"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircle  from "../BackgroundCircle"
import myFace from "../../public/profile.png"
import Link from 'next/link'
import { motion } from "framer-motion"

type Props = {}

function Index({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Ken Oyahebholo",
    "Guy-Who-Loves-Coffee", 
    "<ButLovesToCodeMore />"
  ],
  loop: true,
  delaySpeed: 2000,
  })
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5}}
    // className='flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative'
    className='min-h-screen flex flex-col space-y-8 items-center justify-center text-center'
    >
      <BackgroundCircle />
      <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={myFace} alt="" />
    
      <div 
      className='z-20'
      >
        <h2 className='text-[15px] md:text-[25px] uppercase text-grey-500 pb-2 tracking-[8px] md:tracking-[15px]'>Frontend Engineer</h2>
        <h1 
        className='text-1xl md:text-3xl lg:text-6xl font-semibold px-10'
        >
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A'/>
        </h1>

      <div className='mt-4'>
        <Link
        href={"#about"}>
        <button className='heroButton'>About</button>
        </Link>

        <Link
        href={"#experience"}>
        <button className='heroButton'>Experience</button>
        </Link>

        <Link
        href={"#skills"}>
        <button className='heroButton'>Skills</button>
        </Link>

        <Link
        href={"#projects"}>
        <button className='heroButton'>Projects</button>
        </Link>   
        
      </div>
      </div>           
    </motion.div>
  )
}

export default Index