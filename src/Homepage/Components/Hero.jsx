import { Link } from "react-router-dom";
import Pic from "../Assets/Pic4.svg";
import { PiLinkedinLogoBold, PiTwitterLogoBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="px-[7%] lg:px-[10%] pt-[6rem] lg:pt-[7rem] xl:pt-[8rem] pb-8 lg:pb-10 xl:pb-12 hero flex justify-between items-center ">
      <section className="flex font-Montserrat flex-col w-[50%] lg:w-[45%]  ">
        <p className="text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] font-bold ">Welcome to my portfolio! I'm </p>
        <div className=" mt-4 lg:mt-6 flex text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem]  font-bold ">
          <h1>J</h1>
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: ["onathan Mmadu"],
              }}
            />
          </h1>
        </div>
        <small className="  text-gray  text-[0.9rem] lg:text-[0.95rem] xl:text-[1rem] font-extrabold ">
          Frontend Developer
        </small>
        <Link
          to="https://drive.google.com/file/d/1-2z2oJZV5kgxGq1VcXdhc9zNyvYNSG7i/view?usp=share_link"
          className=" mt-6 lg:mt-8 font-semibold font-Raleway"
          target="_blank"
        >
          <button className=" border-solid border-black px-4 py-2 text-[0.9rem] lg:text-[0.95rem] xl:text-base font-bold border-[3px] hover:text-gray hover:border-gray  ">
            DOWNLOAD CV
          </button>
        </Link>

        <div className="flex pt-8 gap-[4%] xl:gap-[3%] text-[1.4rem] xl:text-[1.5rem] ">
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
      <section className="w-[40%] ">
        <img src={Pic} className="w-full" alt="" />
      </section>
    </div>
  );
}
