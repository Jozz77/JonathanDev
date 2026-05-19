/* eslint-disable react/no-unescaped-entities */
import Heading from "../../../Components/Heading";
import Seperator from "../../../Components/Seperator";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Dev from "./Assets/Dev.png";
import Maint from "./Assets/Maint.png";

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
        I’m Jonathan Mmadu, a Fullstack Developer based in Lagos, Nigeria,
        driven by the challenge of building high-performance, secure
        applications. With over 3 years of professional experience evolving from
        frontend foundations to complex full-stack logic, I focus on crafting
        software that runs lean and respects the end-user. Beyond the terminal,
        I’m an avid reader who finds just as much satisfaction untangling a
        complex mystery or adventure novel as I do tracking down a stubborn bug.
        I bring absolute technical ownership to my work, believing that the best
        code is built with a security-first mindset, clear documentation, and a
        completely straightforward, human approach to collaboration.
      </p>
      <div className="flex justify-center pt-6 md:pt-8 lg:pt-10 xl:pt-12 ">
        <p className=" border-solid border-black px-6 sm:px-8 py-1 text-[0.85rem] ssm:text-[0.9rem]  lg:text-[0.95rem] xl:text-base font-bold   border-r-[3px] border-l-[3px]   ">
          MORE
        </p>
      </div>
      <div className=" pt-8 lg:pt-10 xl:pt-12 ">
        <Seperator />
      </div>

      <section className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between px-[0%] ssm:px-[5%] md:px-[7%] lg:px-[7%] pt-8 sm:pt-10 xl:pt-12  ">
        <div className="w-[80%] ssm:w-[70%] sm:w-[47%] xl:w-[45%] relative ">
          <h1 className=" font-Montserrat text-[1rem] ssm:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] font-bold tracking-[4px] ">
            DEVELOPMENT
          </h1>
          <p className=" pt-2 font-OpenSans text-justify sm:text-left text-[0.85rem] md:text-[0.85rem] lg:text-[0.9rem] font-base ">
            I build fast, secure, and highly scalable digital products from the
            ground up. My engineering focus centers on pairing modern frontend
            frameworks like React and Next.js with robust Node.js or Python
            backends, alongside edge-native architectures using Cloudflare
            Workers and HTMX. I don't just build to fulfill a checklist; I
            engineer for extreme optimization, routinely hitting 90+ Lighthouse
            scores so applications load instantly on any device or network
            constraint.
          </p>
          <div className=" w-[10%] lg:w-[12%]  absolute top-0 left-[-10%] ">
            <img className=" w-full" src={Dev} alt="" />
          </div>
        </div>

        <div className=" w-[80%] ssm:w-[70%] sm:w-[47%] xl:w-[45%] relative ">
          <h1 className=" mt-4 sm:mt-0 font-Montserrat text-[1rem] ssm:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] font-bold tracking-[4px] ">
            MAINTENANCE
          </h1>
          <p className="pt-2 font-OpenSans text-justify sm:text-left text-[0.85rem] md:text-[0.85rem] font-base ">
            Software isn't static; it constantly evolves. I approach refactoring
            and system maintenance with deep technical rigor—auditing API
            endpoints, optimizing database structures, and systematically
            eliminating code bloat. Drawing from my experience as a Core
            Contributor to global open-source ecosystems like the OWASP
            Foundation, I am entirely at home navigating large, complex codebases
            to patch security vulnerabilities, implement resilient new features,
            and keep production systems running reliably.
          </p>
          <div className=" w-[10%] lg:w-[12%]  absolute top-0 left-[-10%] ">
            <img className=" w-full" src={Maint} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
