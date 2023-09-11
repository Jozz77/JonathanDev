import Heading from "../../../Components/Header/Heading";
import Seperator from "../../Assets/Seperator.png";
import Dev from "./Assets/Dev.png";
import Maint from "./Assets/Maint.png";

export default function About() {
  return (
    <div className="about py-20">
      <div>
        <Heading text="ABOUT ME" />
      </div>
      <p className=" font-OpenSans text-center pt-8 text-base w-[50%] mx-auto ">
        I'm Jonathan Mmadu, a Frontend Developer specializing in crafting
        beautiful websites and web applications. With over a year of dedicated
        learning in Front-End technologies, I've found my place in the industry.
        Fluent in spoken and written English, my passion for reading, from
        adventurous tales to captivating mystery novels, is truly satisfying.
      </p>
      <div className="flex justify-center mt-10 ">
        <p className=" border-solid border-black px-8 py-1 text-base font-bold   border-r-[3px] border-l-[3px]   ">
          MORE
        </p>
      </div>
      <div className="w-[13%] pt-12 mx-auto ">
        <img src={Seperator} className="w-full" alt="" />
      </div>

      <section className="flex justify-between px-[15%] mt-16  ">
        <div className="w-[45%] relative ">
          <h1 className=" font-Montserrat text-[1.3rem] font-bold tracking-[4px] ">
            DEVELOPMENT
          </h1>
          <p className=" pt-2 font-OpenSans text-[0.9rem] font-base ">
            Drawing from my experience, I possess the capability to proficiently
            engineer websites, whether it's one I've developed myself or one
            provided by you, ensuring they are not only fully functional but
            also responsive in design.
          </p>
          <div className=" w-[12%] absolute top-0 left-[-10%] ">
            <img className=" w-full" src={Dev} alt="" />
          </div>
        </div>

        <div className="  w-[45%] relative ">
          <h1 className=" font-Montserrat text-[1.3rem] font-bold tracking-[4px] ">
            MAINTENANCE
          </h1>
          <p className="pt-2 font-OpenSans text-[0.9rem] font-base ">
            If any issues arise or if there's a need for enhancements, I am
            well-equipped to implement new features and innovative solutions to
            address them promptly.
          </p>
          <div className=" w-[12%] absolute top-0 left-[-10%] ">
            <img className=" w-full" src={Maint} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
