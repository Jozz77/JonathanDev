/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Work() {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      // initClassName: 'contact', // class applied after initialization
      animatedClassName: "", // class applied on animation
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos=""
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      data-aos-once={false}
      className="work text-WhiteBoldText flex flex-col sm:flex-row justify-between px-[5%] py-6 font-OpenSans"
    >
      <section className=" w-full sm:w-[47.5%]  md:w-[45%] ">
        <h1 className=" text-[1.05rem] sm:text-[1.1rem] md:text-[1rem] lg:text-[1.15rem] xl:text-[1.2rem] font-extrabold tracking-[3px] sm:tracking-[2px] md:tracking-[5px]] ">
          TECHNICAL SKILLS
        </h1>
        <p className=" font-Montserrat pt-1 sm:pt-1 text-[0.8rem] ssm:text-[0.85rem] sm:text-[0.75rem] md:text-[0.85rem]  lg:text1.1rem] xl:text-[0.95rem]">
        Software engineer and QA tester specializing in React, Next.js, TypeScript, and Node.js. Obsessed with software reliability, end-to-end testing, extreme web performance, and mobile optimization. Experienced in executing exploratory and regression testing, identifying subtle UI/UX edge cases, validating REST APIs, and building resilient web architectures.
        </p>
      </section>

      <section>
        <hr className="hidden sm:block border-solid border-WhiteBoldText border-[1px] h-full " />
      </section>

      <section className="mt-4 sm:mt-0 w-full sm:w-[47.5%]  md:w-[45%] ">
        <h1 className=" text-[1.05rem] sm:text-[1.1rem] md:text-[1rem] lg:text-[1.15rem] xl:text-[1.2rem] font-extrabold tracking-[3px] sm:tracking-[2px] md:tracking-[5px]] ">
          SOFT SKILLS
        </h1>
        <p className=" font-Montserrat pt-1 sm:pt-1 text-[0.8rem] ssm:text-[0.85rem] sm:text-[0.75rem] md:text-[0.85rem]  lg:text-[0.9rem] xl:text-[0.95rem]">
          Brings absolute technical ownership, remote autonomy, and a proactive mindset to fast-paced engineering teams. Grounded in a patient, transparent, and ego-free approach to peer reviews and architectural dialogue—honed through core contributions to global open-source ecosystems like <b >OWASP</b>. Prioritizes clear communication and meticulous documentation to keep distributed cross-functional teams perfectly aligned.
        </p>
      </section>
      {/* <section className="mt-4 sm:mt-0 w-full sm:w-[47.5%]  md:w-[45%] ">
        <h1 className="text-[0.9rem] ssm:text-[1rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.15rem] xl:text-[1.2rem] font-bold tracking-[3px] sm:tracking-[2px] md:tracking-[5px] ">
          EDUCATION AND CERTIFICATES
        </h1>
        <Link
          to="https://drive.google.com/file/d/1PEdST6H01x2Z7ruWOmYyOUO8fIwtuEo1/view?usp=sharing"
          target="_blank"
          className=" font-Montserrat underline font-semibold hover:text-gray text-[0.8rem] ssm:text-[0.85rem] sm:text-[0.75rem] md:text-[0.85rem]  lg:text-[0.9rem] xl:text-[0.95rem]"
        >
          <p className="pt-2 underline-offset-8">HNGi9 Internship</p>
        </Link>

        <p className=" pt-2 font-Montserrat font-semibold  text-[0.8rem] ssm:text-[0.85rem] sm:text-[0.75rem] md:text-[0.85rem]  lg:text-[0.9rem] xl:text-[0.95rem]">
          Zuri I4G Internship
        </p>
      </section> */}
    </div>
  );
}
