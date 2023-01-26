import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from 'next/link'

type Props = {}

function index({}: Props) {
  return (
    <div className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
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
      className='flex flex-row items-center'>
        {/* Social Icons */}
        <SocialIcon url="https://www.linkedin.com/in/kennethoyahebholo/" fgColor="grey" bgColor='transparent' target="_blank"/>
        <SocialIcon url="https://github.com/kennethoyahebholo/" fgColor="grey" bgColor='transparent' target="_blank"/>
        <SocialIcon url="https://wa.me/2348102718467" fgColor="grey" bgColor='transparent' target="_blank"/>
        <SocialIcon url="https://www.twitter.com/izzy__ken" fgColor="grey" bgColor='transparent' target="_blank"/>
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
        <SocialIcon network='email' fgColor="grey" bgColor='transparent'/>
        <Link
        href={"#contactMe"}>
        <p className='uppercase hidden md:inline-flex'>Get In Touch</p>   
        </Link>          
      </motion.div>
    </div>
  )
}

export default index