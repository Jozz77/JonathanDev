/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-scroll";
// import Pic from "../Assets/Pic.webp";
import Pic2 from "../Assets/Jonathan.png";
import { PiLinkedinLogoBold, PiTwitterLogoBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Hero() {

  return (
    <div
      className=" relative hero px-[5%] md:px-[7%] lg:px-[10%] pt-[5rem] md:pt-[6rem] lg:pt-[7rem] xl:pt-[6rem] pb-0 md:pb-0  flex flex-col sm:flex-row justify-between items-center "
    >
      <section className=" sm:flex font-Montserrat flex flex-col w-full md:w-[50%] lg:w-[45%]  ">
        <div className="text-[0.9rem] flex ssm:text-[1rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] font-bold ">
          <p className="">Welcome to my portfolio! I'm</p>
        </div>
        <div className=" mt-3 sm:mt-4 lg:mt-6 text-[1.8rem] ssm:text-[2rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.8rem]  font-bold ">
          <h1>Jonathan Mmadu</h1>
        </div>
        <small className="  text-gray text-[0.8rem] ssm:text-[0.9rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] font-extrabold ">
          A Frontend Developer
        </small>
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          offset={-80} // Desktop offset
          className=" mt-5 sm:mt-6 lg:mt-8 font-semibold font-Raleway"
        >
          <button className=" border-solid border-black px-3 ssm:px-4 sm:px-2 md:px-4 py-1 ssm:py-2 sm:py-1 md:py-2 text-[0.75rem] ssm:text-[0.8rem]  md:text-[0.9rem] lg:text-[0.95rem] xl:text-base font-bold border-[3px] hover:text-gray hover:border-gray  ">
            SEE MY PROJECTS
          </button>
        </Link>

        <div className="flex pt-4 ssm:pt-6 md:pt-8 gap-[5%] md:gap-[4%] xl:gap-[3%] text-[1.3rem] ssm:text-[1.4rem] md:text-[1.5rem] xl:text-[1.5rem] ">
          <NavLink
            to="https://github.com/Jozz77"
            target="_blank"
            className="hover:text-gray "
          >
            <FaGithub />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/jonathan-mmadu-45a714219/"
            target="_blank"
            className="hover:text-gray "
          >
            <PiLinkedinLogoBold />
          </NavLink>
          <NavLink
            to="https://twitter.com/JonathanOnyedi3"
            target="_blank"
            className="hover:text-gray "
          >
            <PiTwitterLogoBold />
          </NavLink>
          <NavLink
            to="mailto:mmadujonathan@gmail.com"
            className="hover:text-gray "
          >
            <MdOutlineMailOutline />
          </NavLink>
        </div>
      </section>

      {/* mobile section starts */}
      <section className="hidden hero-intro overflow-hidden font-Raleway  text-WhiteBoldText px-[5%] py-6 flex-col absolute bottom-0 w-[100%] sm:hidden">
      <div className="text-[0.75rem] flex ssm:text-[0.8rem] font-bold ">
          <p className="">Welcome to my portfolio! I'm</p>
        </div>
        <div className="text-[1.7rem] font-bold ">
          <h1>Jonathan Mmadu</h1>
        </div>
        <small className="  text-[0.75rem] ssm:text-[0.8rem] leading-normal font-extrabold ">
          A Frontend Developer
        </small>
        {/* <Link
          to="portfolio"
          smooth={true}
          duration={500}
          offset={-80} // Desktop offset
          className=" mt-2 font-semibold font-Raleway"
        >
          <button className=" border-solid border-black px-3 ssm:px-4  py-1 ssm:py-2  text-[0.75rem] ssm:text-[0.8rem] font-bold border-[3px] hover:text-gray hover:border-gray  ">
            SEE MY PROJECTS
          </button>
        </Link> */}

        <div className=" absolute right-[5%] top-[50%] translate-y-[-50%] flex flex-col  gap-2 text-[1.3rem]  sm:hidden ">
          <NavLink
            to="https://github.com/Jozz77"
            target="_blank"
            className="hover:text-gray "
          >
            <FaGithub />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/jonathan-mmadu-45a714219/"
            target="_blank"
            className="hover:text-gray "
          >
            <PiLinkedinLogoBold />
          </NavLink>
          <NavLink
            to="https://twitter.com/JonathanOnyedi3"
            target="_blank"
            className="hover:text-gray "
          >
            <PiTwitterLogoBold />
          </NavLink>
          <NavLink
            to="mailto:mmadujonathan@gmail.com"
            className="hover:text-gray "
          >
            <MdOutlineMailOutline />
          </NavLink>
        </div>
      </section>

      
      {/* mobile section ends */}

      <section className="w-[100%] sm:w-[50%] flex items-end mt-5 sm:mt-0 mx-auto sm:mx-0 ">
        <img src={Pic2} className="w-full" alt="" />
      </section>
    </div>
  );
}
