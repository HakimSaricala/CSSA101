"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import About from "./about";
import Getintouch from "./getintouch";
import { TypeAnimation } from "react-type-animation";
import Modal from "./UI Componemts/Modal";
import { Button } from "./ui/button";
import {
  ArrowUpRightFromSquare,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  NotebookTextIcon,
  TwitterIcon,
} from "lucide-react";
import { Badge } from "./ui/badge";
import Card from "./UI Componemts/ProjectCard";
import expData from "./data/ExpData";
import Project from "./data/ProjectData";
import Skills from "./data/SkillsData";
import { useTheme } from "next-themes";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [Start, setStart] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const openModal = () => setModalOpen(true);
  const openModal2 = () => setModalOpen2(true);
  const closeModal = () => setModalOpen(false);
  const closeModal2 = () => setModalOpen2(false);
  const { theme } = useTheme();

  useEffect(() => {}, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  useEffect(() => {
    if (isModalOpen || isModalOpen2) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen, isModalOpen2]);

  return (
    <div className="px-8 overflow-hidden lg:w-[750px] lg:m-auto z-[-1]">
      {!Start ? (
        ""
      ) : (
        <>
          {/* ============================== Introduction ============================ */}
          <div id="home" className="flex flex-col pt-[120px]">
            <Image
              data-aos="fade-down"
              // src={`/photo-${theme === "light" ? "light" : "dark"}.jpg`}
              src={`/mike.jpg`}
              height={10000}
              width={10000}
              alt={"Profile Photo"}
              className="border rounded-full w-[130px] mb-8 border-[#333] dark:border-white"
            ></Image>
            <div data-aos="fade-right" className="">
              <h1 className="text-3xl font-[700] ">Hakim Saricala</h1>
              <p className="mt-1">
                <TypeAnimation
                  sequence={[
                    "BSIT student",
                    2000,
                    "Full stack developer",
                    2000,
                    "Mobile Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={65}
                  deletionSpeed={85}
                  repeat={Infinity}
                />
              </p>
            </div>
            <h1
              data-aos="fade-left"
              className=" pt-6 text-sm text-[#333] dark:text-[#d8d8d8] leading-[21px] "
            >
              Trying to build a faster web and mobile application. Learning
              about web development and Mobile development.
            </h1>
            <div
              data-aos="fade-up"
              className="flex mt-3 justify-center flex-wrap"
            >
              <Link href={"https://github.com/HakimSaricala"} target="_blank">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="dark:bg-[#333] py-4 mx-2 my-1"
                >
                  <GithubIcon className="w-6 px-1" />
                  <p className="font-[500] text-sm tracking-wide">
                    @HakimSaricala
                  </p>
                  <p className=" text-[11px] px-2 text-gray-500 flex pt-1">
                    Github
                  </p>
                  <ArrowUpRightFromSquare className="h-3 w-3 text-gray-500" />
                </Button>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/hakim-saricala-670724171/"}
                target="_blank"
              >
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="dark:bg-[#333] py-4 mx-2 my-1"
                >
                  <LinkedinIcon className="w-6 px-1" />
                  <p className="font-[500] text-sm tracking-wide">
                    @HakimSaricala
                  </p>
                  <p className=" text-[11px] px-2 text-gray-500 flex pt-1">
                    Linkedin
                  </p>
                  <ArrowUpRightFromSquare className="h-3 w-3 text-gray-500" />
                </Button>
              </Link>
            </div>
          </div>

          {/* ============================== About me ============================ */}

          <div id="about" className=" flex flex-col pt-[14vh]">
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased "
            >
              About Me
            </h1>
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-anchor-placement="top-bottom"
              className="line-clamp- my-3 tracking-[0.3px] "
            >
              Hello! I&apos;m a fourth-year BSIT student at MSEUF, Lucena. Over
              the past few years, I&apos;m trying to learn and develop my skills
              using different frameworks. This portfolio showcases all my school
              works throughout the years . I&apos;m eager to find internships
              opportunities to expand my skills further . Let&apos;s connect and
              create something amazing together!
            </p>
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              className="flex antialiased justify-end text-sky-600 dark:text-sky-500 relative font-bold"
            ></div>

            {isModalOpen && (
              <Modal Heading="About Me" onClose={closeModal}>
                <About />
              </Modal>
            )}
          </div>

          {/* ============================== Skills ============================ */}

          <div id="skills" className="flex flex-col pt-[14vh]">
            <h1
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased "
            >
              Skills
            </h1>
            <div className="my-4">
              {Skills.map((skill, index) => (
                <Badge
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  variant="outline"
                  key={index}
                  className="my-1 mx-1 text-[14px] "
                >
                  <Image
                    src={`/Skills/${skill}.png`}
                    alt={`${skill}`}
                    height={18}
                    width={18}
                    className="mr-2 "
                  />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* ============================== Projects ============================ */}

          <div id="projects" className="flex flex-col pt-[14vh]">
            <h1
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased "
            >
              Projects
            </h1>
            <div
              // data-aos="fade-up"
              // data-aos-anchor-placement="top-bottom"
              className="my-2 rounded-xl bg"
            >
              {!Start ? (
                "loading"
              ) : (
                <div className="flex justify-around flex-wrap">
                  {Project.slice(0, 3).map((project: any, index: any) => (
                    <div
                      className="flex"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      key={index}
                    >
                      <Card
                        Title={project.heading}
                        Description={project.summary}
                        link={project.link}
                        code={project.code}
                        Img={project.img}
                        techUse={project.tech}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ============================== Contact me ============================ */}

          <div id="connect" className="flex flex-col mt-8 ">
            <h1
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl underline decoration-sky-500 dark:decoration-sky-500/80 underline-offset-[5px] decoration-4 tracking-wide antialiased "
            >
              Get in Touch
            </h1>
            <p
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              className="mt-3 text-sm"
            >
              Feel free to reach out to me for any queries or collaborations.
            </p>
            <Getintouch />
            <div className="flex flex-col my-2 rounded-xl items-center">
              <h1
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="m-auto my-4 text-center"
              >
                OR
              </h1>
              <div className="flex">
                <Link href={""}>
                  <Button
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="50"
                    size={"icon"}
                    className="mx-1"
                  >
                    <InstagramIcon />
                  </Button>
                </Link>
                <Link href={""}>
                  <Button
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="100"
                    size={"icon"}
                    className="mx-1"
                  >
                    {" "}
                    <TwitterIcon />{" "}
                  </Button>
                </Link>
                <Link href={""}>
                  <Button
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="150"
                    size={"icon"}
                    className="mx-1"
                  >
                    {" "}
                    <MailIcon />{" "}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* ============================== Footer ============================ */}

          <div className="text-sm border-t-2 pt-4 mt-8 text-center dark:text-[#efefef] text-[#333]">
            <h1 className="text-left sm:text-center ">
              Powered by{" "}
              <Link href={"https://nextjs.org"}>
                <span className="text-sky-600 dark:text-sky-500">Next.js</span>
              </Link>{" "}
              and{" "}
              <Link href={"https://tailwindcss.com"}>
                <span className="text-sky-600 dark:text-sky-500">
                  TailwindCSS
                </span>
              </Link>
              . Hosted on{" "}
              <Link href={"https://vercel.com"}>
                <span className="text-sky-600 dark:text-sky-500">Vercel</span>
              </Link>
              .
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
