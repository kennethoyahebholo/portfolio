import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import myFace from "../../public/homepageBusiness.png"

type Props = {}

const Index = (props: Props) => {
 const projects = [{id: 1, project_name: "LinkedIn clone"}, {id: 2, project_name: "Gmail clone"}, {id: 3, project_name: "UPS clone"}, {id: 4, project_name: "Todo App"}, {id: 5, project_name: "UPS clone"}]
  return (
    <motion.div

    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5}}

    className='min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      
     <h3 className='absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-1xl md:text-2xl'>
      Projects
     </h3>

     <div className='relative mt-[5rem] w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
     scrollbar-thin
     
     '>
      {projects.map((project, i) => 
      (
      <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-[20px] md:p-44 min-h-screen' key={i}>
        <motion.div

          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2}}
          viewport={{ once: true }}
          
          className='relative'>
          <Image
          className='
              max-w-[200px]
              md:max-w-[350px]
              mx-auto object-contain'
            src={myFace} alt="">     
          </Image>
          
        </motion.div>
       <div className='space-y-10 md:px-10 max-w-6xl'>
        <h4 className='text-2xl font-semibold text-center'>
         <span className='underline decoration-[#F7AB0A]/50'>Case Study {project.id} of {projects.length}:</span> {project.project_name}
        </h4>

        <p className='text-sm text-center md:text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut repellendus porro veritatis, eligendi sed, accusamus qui voluptate necessitatibus, vel dolores rerum tenetur dolorem eum? Quae possimus provident nisi.</p>
       </div>
      </div>
      ))}
     </div>

     <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}

export default Index