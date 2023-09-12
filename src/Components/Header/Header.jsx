import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="flex bg-Primary z-10 justify-between px-[10%] items-center fixed top-0 w-full py-3 xl:py-4 ">
      <div className="text-[1.7rem] xl:text-[2rem] font-Montserrat font-bold ">
        Jo_Na_Than
      </div>
      <nav className="flex justify-between items-center w-[60%] xl:w-[50%] font-Montserrat font-bold text-[1rem] ">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="hover:text-gray cursor-pointer "
        >
          About me
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          offset={-80}
          className="hover:text-gray cursor-pointer "
        >
          Portfolio
        </Link>
        <Link
          to="blog"
          smooth={true}
          duration={500}
          offset={-80}
          className="hover:text-gray cursor-pointer "
        >
          Blog
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          <button className=" border-solid border-black px-4 py-2 font-bold border-[3px] hover:text-gray hover:border-gray  ">
            CONTACT ME
          </button>
        </Link>
      </nav>
    </header>
  );
}
