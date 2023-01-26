import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from 'next/link'

type Props = {}

function index({}: Props) {
  return (
    <div className='sticky top-0 p-5 flex flex-wrap items-start justify-between w-full mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      className='flex flex-row items-center flex-wrap'>
        {/* Social Icons */}
        <SocialIcon className='hover:opacity-100 opacity-40 cursor-pointer transition-opacity' url="https://www.linkedin.com/in/kennethoyahebholo/" fgColor="grey" bgColor='transparent' target="_blank"/>
        <SocialIcon className='hover:opacity-100 opacity-40 cursor-pointer transition-opacity' url="https://github.com/kennethoyahebholo/" fgColor="grey" bgColor='transparent' target="_blank"/>
        <SocialIcon className='hover:opacity-100 opacity-40 cursor-pointer transition-opacity' url="https://wa.me/2348102718467" fgColor="grey" bgColor='transparent' target="_blank"/>
        <SocialIcon className='hover:opacity-100 opacity-40 cursor-pointer transition-opacity' url="https://www.twitter.com/izzy__ken" fgColor="grey" bgColor='transparent' target="_blank"/>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'>
        <SocialIcon url="#contactMe" className='hover:opacity-100 opacity-40 cursor-pointer transition-opacity' network='email' fgColor="grey" bgColor='transparent'/>
        <Link
        href={"#contactMe"}>
        <p className='uppercase hidden md:inline-flex'>Get In Touch</p>   
        </Link>          
      </motion.div>
    </div>
  )
}

export default index