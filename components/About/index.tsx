import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import myFace from "../../public/profile.png";

type Props = {};

function index({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="top-24 absolute uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
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
        className="relative mt-[150px] md:mt-0"
      >
        <Image
          src={myFace}
          className="
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
      "
          alt=""
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>

        <p className="text-1xl">
          As a Frontend Engineer with over 4 years of enterprise-level
          experience, I specialize in designing and building highly scalable
          systems across various technology sectors. I am a collaborative and
          customer-centric engineer committed to continuous learning to enhance
          customer satisfaction in product deliverables.
          <br />
          <br />
          I&apos;m a dedicated problem solver with a strong commitment to
          learning and excellence. I believe in the power of teamwork, involving
          everyone to achieve common goals. My diligence and keen interest in
          technology innovations drive my attention to detail.
          <br />
          <br />
          My immediate goal is to collaborate with a diverse and growth-focused
          organization, serving people from all walks of life.
        </p>
      </div>
    </motion.div>
  );
}

export default index;
