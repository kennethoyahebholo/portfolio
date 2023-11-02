import React from "react";
import { motion } from "framer-motion";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Index = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData, e: any) => {
    e.preventDefault();
    if (
      formData?.email === "" ||
      formData?.message === "" ||
      formData?.name === "" ||
      formData?.subject === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    window.location.href = `mailto:oyahebholokennethizosea@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message}. ${formData.email}`;
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex flex-col text-center w-7xl md:text-left md:max-w-2xl px-10 justify-evenly mx-auto "
    >
      <div className="relative flex flex-col items-center">
        <h3 className="top-24 absolute uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-1xl md:text-2xl text-center">
          Contact
        </h3>

        <div className="flex flex-col space-y-5 mt-[14rem]">
          <h4 className="text-[13px] md:text-[15px] font-semibold text-center">
            I have got just what you need.{" "}
            <span className="decoration-[#F7AB0A]/50 underline">
              Let&apos;s Talk
            </span>
          </h4>

          <div className="space-y-1">
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#F7AB0A]/50 h-6 w-6 animate-pulse" />
              <p className="text-[10px] md:text-[12px]">
                oyahebholokennethizosea@gmail.com
              </p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#F7AB0A]/50 h-6 w-6 animate-pulse" />
              <p className="text-[10px] md:text-[12px]">Lagos, Nigeria.</p>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-full mx-auto"
      >
        <div className="flex space-y-2 md:space-y-0 md:space-x-2 flex-col md:flex-row">
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput w-full"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput w-full"
            type="email"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput"
          type="text"
        />

        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput"
        />

        <button
          type="submit"
          className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default Index;
