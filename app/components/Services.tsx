"use client";
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What i offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-ovo"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid [grid-template-columns:var(--gridTemplateColumns-auto)] gap-6 my-10"
      >
        {serviceData.map((data, index) => (
          <motion.div
          whileHover={{scale: 1.05}}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12
            hover:shadow-[var(--boxShadow-black)] hover:bg-light-hover cursor-pointer hover:-translate-y-1 duration-500 dark:hover:bg-dark-hover dark:hover:shadow-[var(--boxShadow-white)]"
          >
            <Image alt="" className="w-10" src={data.icon} />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {data.title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {data.description}
            </p>
            <a
              href={data.link}
              className="flex items-center gap-2 text-sm mt-5"
            >
              Read more{" "}
              <Image alt="" src={assets.right_arrow} className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
