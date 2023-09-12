import { Link } from "react-router-dom";
import Pic from "../Assets/Pic2.png";
import { PiLinkedinLogoBold, PiTwitterLogoBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="px-[5%] md:px-[7%] lg:px-[10%] pt-[5rem] md:pt-[6rem] lg:pt-[7rem] xl:pt-[8rem] pb-6 md:pb-8 lg:pb-10 xl:pb-12 hero flex flex-col sm:flex-row justify-between items-center ">
      <section className="flex font-Montserrat flex-col w-full md:w-[50%] lg:w-[45%]  ">
        <p className="text-[0.9rem] ssm:text-[1rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] font-bold ">Welcome to my portfolio! I'm </p>
        <div className=" mt-3 sm:mt-4 lg:mt-6 flex text-[1.8rem] ssm:text-[2rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem]  font-bold ">
          <h1>Jo</h1>
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: ["nathan Mmadu"],
              }}
            />
          </h1>
        </div>
        <small className="  text-gray text-[0.8rem] ssm:text-[0.9rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[0.95rem] xl:text-[1rem] font-extrabold ">
          Frontend Developer
        </small>
        <Link
          to="https://drive.google.com/file/d/1-2z2oJZV5kgxGq1VcXdhc9zNyvYNSG7i/view?usp=share_link"
          className=" mt-5 sm:mt-6 lg:mt-8 font-semibold font-Raleway"
          target="_blank"
        >
          <button className=" border-solid border-black px-3 ssm:px-4 sm:px-2 md:px-4 py-1 ssm:py-2 sm:py-1 md:py-2 text-[0.75rem] ssm:text-[0.8rem]  md:text-[0.9rem] lg:text-[0.95rem] xl:text-base font-bold border-[3px] hover:text-gray hover:border-gray  ">
            DOWNLOAD CV
          </button>
        </Link>

        <div className="flex pt-4 ssm:pt-6 md:pt-8 gap-[5%] md:gap-[4%] xl:gap-[3%] text-[1.1rem] ssmtext-[1.2rem] md:text-[1.4rem] xl:text-[1.5rem] ">
          <Link to="https://github.com/Jozz77" target="_blank" className="hover:text-gray ">
            <FaGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/jonathan-mmadu-45a714219/" target="_blank" className="hover:text-gray ">
            <PiLinkedinLogoBold />
          </Link>
          <Link to="https://twitter.com/JonathanOnyedi3" target="_blank" className="hover:text-gray ">
            <PiTwitterLogoBold />
          </Link>
          <Link to="mailto:mmadujonathan@gmail.com" className="hover:text-gray ">
            <MdOutlineMailOutline />
          </Link>
        </div>
      </section>
      <section className="w-[70%] sm:w-[40%] mt-10 sm:mt-0 mx-auto sm:mx-0 ">
        <img src={Pic} className="w-full" alt="" />
      </section>
    </div>
  );
}
