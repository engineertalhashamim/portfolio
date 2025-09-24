"use client";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import { useDarkMode } from "../context/DarkModeContext";

// type AboutProps = {
//   isDarkMode: boolean;
//   setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
// };

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { isDarkMode } = useDarkMode();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mb-2 text-5xl font-ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            alt="user"
            src={assets.user_image}
            className="w-full rounded-3xl border-[0px] border-gray-100"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-ovo">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {/* {infoList.map((info: any, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl
                           p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-[var(--boxShadow-black)] dark:border-white dark:hover:bg-dark-hover/50 dark:hover:shadow-[var(--boxShadow-white)]"
              >
                <Image
                  alt="title"
                  src={isDarkMode ? info.iconDark : info.icon}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {info.description}
                </p>
              </motion.li>
            ))} */}

            {infoList.map((info, index) => {
              const shortText = info.description.slice(0, 80); // first 80 chars
              const hasMore = info.description.length > 80;

              return (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  className="border-[0.5px] border-gray-400 rounded-xl
                 p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 
                 hover:shadow-[var(--boxShadow-black)] dark:border-white dark:hover:bg-dark-hover/50 
                 dark:hover:shadow-[var(--boxShadow-white)]"
                >
                  <Image
                    alt="title"
                    src={isDarkMode ? info.iconDark : info.icon}
                    className="w-7 mt-3"
                  />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/80">
                    {isExpanded ? info.description : shortText}
                    {hasMore && (
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-pink-600 ml-1 hover:underline"
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </button>
                    )}
                  </p>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 text-gray-700 font-ovo dark:text-white/80"
          >
            Tools I use
          </motion.h4>
          <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border
                            border-gray-400 rounded-lg cursor hover:translate-y-1 duration-500"
              >
                <Image alt="Tool" src={tool} className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default About;
