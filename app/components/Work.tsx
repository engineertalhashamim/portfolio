"use client";
import {
  assets,
  workDataMern,
  workDataShopify,
  workDataWordpress,
} from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import { useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";
import { ZoomIn } from "lucide-react";

type workProps = {
  showAll: boolean;
  showAllButton: boolean;
};

type Project = {
  title: string;
  description: string;
  bgImage: string;
  detailDes?: string;
  viewSite?: string;
  viewSource?: string;
};

const Work = ({ showAll, showAllButton }: workProps) => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [loadedImagesLg, setLoadedImagesLg] = useState(false);

  const [showPopup, setshowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [showPopupImg, setshowPopupImg] = useState(false);
  const [selectedProjectImg, setSelectedProjectImg] = useState<Project | null>(
    null,
  );

  const { isDarkMode } = useDarkMode();

  const [activeTab, setActiveTab] = useState("mern");

  const openPopup = (project: Project) => {
    setshowPopup(true);
    setSelectedProject(project);
    console.log("project data...", selectedProject);
  };

  const openPopupImage = (project: Project) => {
    setshowPopupImg(true);
    setSelectedProjectImg(project);
    console.log("project data...", selectedProjectImg);
  };

  const closePopup = () => {
    setshowPopup(false);
    setSelectedProject(null);
  };

  const closePopupImg = () => {
    setshowPopupImg(false);
    setSelectedProjectImg(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full md:px-[12%] px-[8%] md:py-10 pt-26 pb-0 scroll-mt-20 "
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-4xl sm:text-5xl font-ovo"
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-10 font-ovo"
      >
        Welcome to my portfolio! Here you’ll find a selection of projects that
        highlight my skills in front-end and full-stack development.
      </motion.p>

      <div className="w-full">
        {/* --- Tab Buttons --- */}
        <div className="text-[12px] sm:text-[16px] w-full max-w-lg mx-auto flex justify-center gap-3 sm:gap-8 rounded-full px-4 sm:px-12 sm:py-3 py-2 bg-white/50 shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent">
          <button
            className={`cursor-pointer font-ovo ${
              activeTab === "mern" ? "font-bold border-b-2 border-pink-400" : ""
            }`}
            onClick={() => setActiveTab("mern")}
          >
            React / Mern / Next js
          </button>

          <button
            className={`cursor-pointer font-ovo ${
              activeTab === "wordpress"
                ? "font-bold border-b-2 border-pink-400"
                : ""
            }`}
            onClick={() => setActiveTab("wordpress")}
          >
            Wordpress
          </button>

          <button
            className={`cursor-pointer font-ovo ${
              activeTab === "shopify"
                ? "font-bold border-b-2 border-pink-400"
                : ""
            }`}
            onClick={() => setActiveTab("shopify")}
          >
            Shopify
          </button>
        </div>
        {/* --- Tab Content --- */}
        <div className="w-full pt-6 sm:pt-12 rounded-lg">
          {activeTab === "mern" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 dark:text-black"
            >
              {(showAll ? workDataMern : workDataMern.slice(0, 6)).map(
                (project, index) => (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    key={index}
                    className="relative rounded-2xl cursor-pointer group border-4 p-28 border-pink-200 overflow-hidden"
                  >
                    {/* Full image */}
                    {/* <Image
                      src={project.bgImage}
                      alt={project.title}
                      fill
                      className="objectFit-cover" // use "object-cover" if you want crop/fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={index < 2} // optional: speed up first few images
                    /> */}
                    <div className="w-full flex items-center justify-center">
                      {!loadedImages[index] && (
                        <div className="absolute top-18 w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
                      )}
                      <Image
                        src={project.bgImage}
                        alt={project.title}
                        fill
                        className={`objectFit-cover ${loadedImages[index] ? "opacity-100" : "opacity-0"}`} // use "object-cover" if you want crop/fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        priority={index < 2} // optional: speed up first few images
                        onLoad={() =>
                          setLoadedImages((prev) => ({
                            ...prev,
                            [index]: true,
                          }))
                        }
                      />
                    </div>

                    <div className="absolute top-3 right-3 z-10 rounded-full border-1 border-gray-700">
                      <button
                        onClick={() => openPopupImage(project)}
                        className="border rounded-full border-black w-9 aspect-square flex
                        items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300
                        transition cursor-pointer bg-white"
                      >
                        <ZoomIn className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Overlay card */}
                    <div
                      className="bg-white w-10/12 rounded-2xl absolute bottom-5 left-1/2 -translate-x-1/2
       py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-500 border border-black-500"
                    >
                      <div>
                        <h2 className="font-semibold leading-none mb-2">
                          {project.title}
                        </h2>
                        <p className="text-sm text-gray-700">
                          {project.description}
                        </p>
                      </div>
                      <div
                        className="border rounded-full border-black w-9 aspect-square flex
       items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300
       transition"
                      >
                        <Image
                          onClick={() => openPopup(project)}
                          alt="send icon"
                          src={assets.send_icon}
                          className="w-5"
                        />
                      </div>
                    </div>
                  </motion.div>
                ),
              )}
            </motion.div>
          )}
          {activeTab === "wordpress" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-0 gap-5 dark:text-black"
            >
              {(showAll
                ? workDataWordpress
                : workDataWordpress.slice(0, 6)
              ).map((project, index) => (
                // <div className="bg-black/70 p-2 rounded-2xl">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  key={index}
                  className="relative rounded-2xl cursor-pointer group border-4 p-28 border-pink-200 overflow-hidden"
                >
                  {/* Full image */}
                  <Image
                    src={project.bgImage}
                    alt={project.title}
                    fill
                    className="objectFit-cover" // use "object-cover" if you want crop/fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={index < 2} // optional: speed up first few images
                  />

                  <div className="absolute top-3 right-3 z-10 rounded-full border-1 border-gray-700">
                    <button
                      onClick={() => openPopupImage(project)}
                      className="border rounded-full border-black w-9 aspect-square flex
                        items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300
                        transition cursor-pointer bg-white"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </button>
                  </div>

                  <div
                    className="bg-white w-10/12 rounded-2xl absolute bottom-5 left-1/2 -translate-x-1/2
                 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-500 border border-black-500"
                  >
                    <div>
                      <h2 className="font-semibold leading-none mb-2">
                        {project.title}
                      </h2>
                      <p className="text-sm text-gray-700">
                        {project.description}
                      </p>
                    </div>
                    <div
                      className="border rounded-full border-black w-9 aspect-square flex
                     items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300
                     transition"
                    >
                      <Image
                        onClick={() => openPopup(project)}
                        alt=""
                        src={assets.send_icon}
                        className="w-5"
                      />
                    </div>
                  </div>
                </motion.div>
                // </div>
              ))}
            </motion.div>
          )}
          {activeTab === "shopify" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-0 gap-5 dark:text-black"
            >
              {(showAll ? workDataShopify : workDataShopify.slice(0, 6)).map(
                (project, index) => (
                  // <div className="bg-black/70 p-2 rounded-2xl">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    key={index}
                    className="relative rounded-2xl cursor-pointer group border-4 p-28 border-pink-200 overflow-hidden"
                    style={{ backgroundImage: `url(${project.bgImage})` }}
                  >
                    {/* Full image */}
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      fill
                      className="objectFit-cover" // use "object-cover" if you want crop/fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={index < 2} // optional: speed up first few images
                    />

                    <div className="absolute top-3 right-3 z-10 rounded-full border-1 border-gray-700">
                      <button
                        onClick={() => openPopupImage(project)}
                        className="border rounded-full border-black w-9 aspect-square flex
                        items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300
                        transition cursor-pointer bg-white"
                      >
                        <ZoomIn className="w-5 h-5" />
                      </button>
                    </div>

                    <div
                      className="bg-white w-10/12 rounded-2xl absolute bottom-5 left-1/2 -translate-x-1/2
                 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-500 border border-black-500"
                    >
                      <div>
                        <h2 className="font-semibold leading-none mb-2">
                          {project.title}
                        </h2>
                        <p className="text-sm text-gray-700">
                          {project.description}
                        </p>
                      </div>
                      <div
                        className="border rounded-full border-black w-9 aspect-square flex
                     items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300
                     transition"
                      >
                        <Image
                          onClick={() => openPopup(project)}
                          alt=""
                          src={assets.send_icon}
                          className="w-5"
                        />
                      </div>
                    </div>
                  </motion.div>
                  // </div>
                ),
              )}
            </motion.div>
          )}
        </div>
      </div>

      {showPopup && selectedProject && (
        <div className="fixed inset-0 flex justify-center items-center z-50 overflow-y-hidden bg-black/40 backdrop-blur-[12px]">
          <div
            className="bg-white dark:text-whit rounded-4xl max-w-2xl w-full md:py-8 py-4 px-4 sm:px-8 relative mx-4 dark:bg-dark-theme/70 
                    backdrop-blur-3xl border border-white/20"
          >
            <button
              onClick={closePopup}
              className="absolute right-6 md:top-4 top-2 text-gray-500 hover:text-gray-800 dark:hover:text-white md:text-2xl text-[16] cursor-pointer"
            >
              ✕
            </button>
            <h2 className="text-[18px] sm:text-3xl font-bold border-b-[0.5px] dark:border-white/50 border-black/50 md:pb-4 pb:2 mb-4">
              {selectedProject.title}
            </h2>
            <p className="text-[13px] sm:text-[16px] leading-6 sm:leading-8 text-gray-700 bg-lime-300/5 dark:text-gray-300 text-justify dark:bg-pink-300/40 p-4 sm:p-5 rounded-4xl">
              {selectedProject.detailDes}
            </p>

            <div className="flex justify-between md:mt-4 mt-4 gap-6">
              {selectedProject.viewSite ? (
                <Link
                  href={selectedProject.viewSite}
                  target="_black"
                  className="text-[13px] border dark:border-white/50 px-6 sm:px-8 py-1 rounded-full cursor-pointer"
                >
                  Live Demo
                </Link>
              ) : (
                <button
                  disabled
                  className="text-[13px] border border-gray-400 px-6 sm:px-8 py-1 rounded-full cursor-not-allowed opacity-50"
                >
                  Live Demo
                </button>
              )}
              {selectedProject.viewSource ? (
                <Link
                  href={selectedProject.viewSource}
                  target="_black"
                  className="text-[13px] border dark:border-white/50 px-6 sm:px-8 py-1 rounded-full cursor-pointer"
                >
                  Source Code
                </Link>
              ) : (
                <button
                  disabled
                  className="text-[13px] border border-gray-400 px-6 sm:px-8 py-1 rounded-full cursor-not-allowed opacity-50"
                >
                  Source Code
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {showPopupImg && selectedProjectImg && (
        <motion.div className="fixed inset-0 flex justify-center items-center z-50 overflow-y-hidden bg-black/40 backdrop-blur-[12px]">
          <div
            className="bg-white dark:text-whit rounded-4xl max-w-3xl w-full md:py-8 py-2 px-4 sm:px-8 relative mx-4 dark:bg-dark-theme/70 
                    backdrop-blur-3xl border border-white/20"
          >
            <button
              onClick={closePopupImg}
              className="absolute right-6 md:top-4 top-2 text-gray-500 hover:text-gray-800 dark:hover:text-white md:text-2xl text-[16] cursor-pointer"
            >
              ✕
            </button>
            <h2 className="text-[16px] sm:text-3xl font-bold border-b-[0.5px] dark:border-white/50 border-black/50 md:pb-4 pb:2 mb-4">
              {selectedProjectImg.title}
            </h2>
            <Image
              src={selectedProjectImg.bgImage}
              alt={selectedProjectImg.title}
              width={800}
              height={500}
              className="w-full rounded-xl mb-4 md:h-[350px] h-[150px] shadow-sm"
            />
            {/* <div className="relative w-full rounded-xl mb-4 h-[350px] flex items-center justify-center">
              {!loadedImagesLg && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
                </div>
              )}

              <Image
                src={selectedProjectImg.bgImage}
                alt={selectedProjectImg.title}
                width={800}
                height={500}
                className={`object-cover transition-opacity duration-300 ${
                  loadedImagesLg ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setLoadedImagesLg(true)}
              />
            </div> */}
          </div>
        </motion.div>
      )}

      {showAllButton ? (
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          href="/projects"
          className="w-max flex items-center justify-center gap-2 text-gray-700
        border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto mt-12 sm:mb-10
        hover:bg-light-hover duration-500 dark:border dark:border-white dark:text-white dark:hover:bg-dark-hover"
        >
          Show more{" "}
          <Image
            alt="Right arrow"
            src={
              isDarkMode
                ? assets.right_arrow_bold_dark
                : assets.right_arrow_bold
            }
            className="w-4"
          />
        </motion.a>
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default Work;
