import React from 'react'
import { motion } from "framer-motion"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {}

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Index = (props: Props) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:oyahebholokennethizosea@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message}. ${formData.email}`
  };

  return (
    <motion.div
    
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5}}
    
    className='h-screen relative flex flex-col text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='top-24 absolute uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

      <div className='flex flex-col space-y-5 mt-[150px]'>
        <h4 className='text-2xl font-semibold text-center'>
          I have got just what you need.{" "}
          <span className='decoration-[#F7AB0A]/50 underline'>Let&apos;s Talk</span>
        </h4>

        <div className='space-y-1'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A]/50 h-7 w-7 animate-pulse' />
            <p className='text-1xl'>+2348102718467</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A]/50 h-7 w-7 animate-pulse' />
            <p className='text-1xl'>oyahebholokennethizosea@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A]/50 h-7 w-7 animate-pulse' />
            <p className='text-1xl'>+123 Developer Lane</p>
          </div>
      
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
            <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
          </div>
          <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

          <textarea {...register('message')} placeholder='Message' className='contactInput' />

          <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Index