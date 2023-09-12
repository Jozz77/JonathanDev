import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { PiLinkedinLogoBold, PiTwitterLogoBold } from 'react-icons/pi';
import { FaGithub } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';


export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div className=' bg-Secondary font-Montserrat pt-8 text-WhiteBoldText flex flex-col justify-center text-center py-8 '>
        <ScrollToTop />
        <section className="flex justify-center pt-8 gap-[2%] lg:gap-[1.5%] text-[1.5rem] ">
            <Link to="https://github.com/Jozz77" target="_blank" className="hover:text-gray ">
                <FaGithub />
            </Link >
            <Link to="https://www.linkedin.com/in/jonathan-mmadu-45a714219/" target="_blank" className="hover:text-gray ">
                <PiLinkedinLogoBold />
            </Link>
            <Link to="https://twitter.com/JonathanOnyedi3" target="_blank" className="hover:text-gray ">
                <PiTwitterLogoBold />
            </Link>
            <Link to="mailto:mmadujonathan@gmail.com" className="hover:text-gray ">
                <MdOutlineMailOutline />
            </Link>
        </section>
        <p className="text-[0.9rem] pt-8 ">@{currentYear} Jo_Na_Than. All Rights Reserved.</p>
    </div>
  )
}
