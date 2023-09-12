import Heading from "../../../Components/Heading";
import Seperator from "../../../Components/Seperator";

import Dev from "./Assets/Dev.png";
import Maint from "./Assets/Maint.png";

export default function About() {
  return (
    <div id="about" className="about pb-8 lg:pb-10 xl:pb-12">
      <div className=" pt-8 lg:pt-10 xl:pt-12">
        <Heading text="ABOUT ME" />
      </div>
      <p className=" font-OpenSans text-center pt-6 lg:pt-8 font-medium text-[0.9rem]  lg:text-[0.95rem] xl:text-base w-[60%] mx-auto ">
        I'm Jonathan Mmadu, a Frontend Developer specializing in crafting
        beautiful websites and web applications. With over a year of dedicated
        learning in Front-End technologies, I've found my place in the industry.
        Fluent in spoken and written English, my passion for reading, from
        adventurous tales to captivating mystery novels, is truly satisfying.
      </p>
      <div className="flex justify-center pt-8 lg:pt-10 xl:pt-12 ">
        <p className=" border-solid border-black px-8 py-1 text-[0.9rem]  lg:text-[0.95rem] xl:text-base font-bold   border-r-[3px] border-l-[3px]   ">
          MORE
        </p>
      </div>
      <div className=" pt-8 lg:pt-10 xl:pt-12 ">
        <Seperator />
      </div>

      <section className="flex justify-between px-[10%] lg:px-[15%] pt-10 xl:pt-12  ">
        <div className="w-[47%] xl:w-[45%] relative ">
          <h1 className=" font-Montserrat text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] font-bold tracking-[4px] ">
            DEVELOPMENT
          </h1>
          <p className=" pt-2 font-OpenSans text-[0.85rem] lg:text-[0.9rem] font-base ">
            Drawing from my experience, I possess the capability to proficiently
            engineer websites, whether it's one I've developed myself or one
            provided by you, ensuring they are not only fully functional but
            also responsive in design.
          </p>
          <div className=" w-[10%] lg:w-[12%]  absolute top-0 left-[-10%] ">
            <img className=" w-full" src={Dev} alt="" />
          </div>
        </div>

        <div className="  w-[47%] xl:w-[45%] relative ">
          <h1 className=" font-Montserrat text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] font-bold tracking-[4px] ">
            MAINTENANCE
          </h1>
          <p className="pt-2 font-OpenSans text-[0.9rem] font-base ">
            If any issues arise or if there's a need for enhancements, I am
            well-equipped to implement new features and innovative solutions to
            address them promptly.
          </p>
          <div className=" w-[10%] lg:w-[12%]  absolute top-0 left-[-10%] ">
            <img className=" w-full" src={Maint} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
