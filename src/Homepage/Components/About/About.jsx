/* eslint-disable react/no-unescaped-entities */
import Heading from "../../../Components/Heading";
import Seperator from "../../../Components/Seperator";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Dev from "./Assets/Dev.png";
import Maint from "./Assets/Maint.png";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";

export default function About() {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      // initClassName: 'contact', // class applied after initialization
      animatedClassName: "hero", // class applied on animation
      once: false, // whether animation should happen only once - while scrolling down
      delay: 200,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="zoom-in-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      data-aos-once={false}
      id="about"
      className="about  pb-8 lg:pb-10 xl:pb-12"
    >
      <div className=" pt-6 md:pt-8 lg:pt-10 xl:pt-12">
        <Heading text="ABOUT ME" />
      </div>
      <p className=" font-OpenSans text-justify sm:text-center pt-4 md:pt-6 lg:pt-8 font-medium text-[0.85rem] ssm:text-[0.9rem] lg:text-[0.95rem] xl:text-base w-[80%] ssm:w-[70%] md:w-[60%] mx-auto ">
      I’m Jonathan Mmadu—a Full-Stack, QA, and AI Solutions Engineer based in Lagos, Nigeria. Over the past 3+ years, I’ve built full-stack web applications, automated testing suites, and AI agent workflows that simplify complex business processes. Outside of code, I’m an avid reader who gets just as much joy out of untangling a mystery novel as I do tracking down a stubborn bug or building an AI workflow. My goal is simple: ship clean, reliable software that actually solves real-world problems.
      </p>
      <div className="flex justify-center pt-6 md:pt-8 lg:pt-10 xl:pt-12 ">
        <p className=" border-solid border-black px-6 sm:px-8 py-1 text-[0.85rem] ssm:text-[0.9rem]  lg:text-[0.95rem] xl:text-base font-bold   border-r-[3px] border-l-[3px]   ">
          MORE
        </p>
      </div>
      <div className=" pt-8 lg:pt-10 xl:pt-12 ">
        <Seperator />
      </div>

      <section className="flex flex-col sm:flex-row flex-wrap items-center sm:items-start sm:justify-between px-[0%] ssm:px-[5%] md:px-[7%] lg:px-[7%] pt-8 sm:pt-10 xl:pt-12  ">
        <div className="w-[80%] ssm:w-[70%] sm:w-[47%] xl:w-[45%] relative ">
          <h1 className=" font-Montserrat uppercase text-[1rem] ssm:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] font-bold tracking-[4px] ">
            Full-Stack & AI Engineering
          </h1>
          <p className=" pt-2 font-OpenSans text-justify sm:text-left text-[0.85rem] md:text-[0.85rem] lg:text-[0.9rem] font-base ">
           Building scalable web applications end-to-end—from Figma-to-code frontend interfaces to Node/Express backend APIs. Experienced in integrating LLM workflows, structured outputs, agentic orchestration, and custom business automation tools.
          </p>
          <div className=" w-[10%] lg:w-[12%]  absolute top-0 left-[-10%] ">
            <img className=" w-full" src={Dev} alt="" />
          </div>
        </div>

         <div className="w-[80%] ssm:w-[70%] sm:w-[47%] xl:w-[45%] relative ">
          <h1 className=" font-Montserrat uppercase text-[1rem] ssm:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] font-bold tracking-[2px] ">
            Quality Assurance & Automation
          </h1>
          <p className=" pt-2 font-OpenSans text-justify sm:text-left text-[0.85rem] md:text-[0.85rem] lg:text-[0.9rem] font-base ">
Ensuring software launches bug-free through rigorous Playwright test automation, exploratory QA, API validation, and edge-case stress testing to keep client platforms crash-free.
          </p>
          <div className=" w-[10%] lg:w-[12%]  absolute top-0 left-[-10%] flex items-center justify-center ">
            <MdOutlinePlaylistAddCheck className="w-full text-gray opacity-30 h-full " style={{ fontSize: "2.5rem" }} />
          </div>
        </div>

        <div className=" w-[80%] hidden ssm:w-[70%] sm:w-[47%] xl:w-[45%] relative ">
          <h1 className=" mt-4 uppercase sm:mt-0 font-Montserrat text-[1rem] ssm:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] font-bold tracking-[4px] ">
            Maintenance & System Optimization
          </h1>
          <p className="pt-2 font-OpenSans text-justify sm:text-left text-[0.85rem] md:text-[0.85rem] font-base ">
            Keeping web platforms fast, secure, and modern. Refactoring legacy logic, optimizing database performance, updating third-party integrations, and patching security vulnerabilities.
          </p>
          <div className=" w-[10%] lg:w-[12%]  absolute top-0 left-[-10%] ">
            <img className=" w-full" src={Maint} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
