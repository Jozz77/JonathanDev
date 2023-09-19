import { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileSectionClick = () => {
    setIsOpen(false); // Close the menu when a section link is clicked on mobile
  };

  return (
    <header className="bg-Primary overflow-hidden z-10 fixed top-0 w-full py-2 sm:py-3 xl:py-4">
      <div className="sm:flex sm:justify-between md:items-center px-[5%] md:px-[7%] lg:px-[10%]">
        <div className="flex items-center justify-between">
          <div className=" text-[1.4rem] cursor-pointer sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[2rem] font-Montserrat font-bold ">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-80} // Desktop offset
            >
              Jo_Na_Than
            </Link>
          </div>
          <div className=" sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 transform transition-transform ${
                  isOpen ? "duration-300 rotate-90" : "duration-1000"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <nav
          className={`${
            isOpen
              ? "h-[100vh] transition-h duration-1000 ease-in-out"
              : " h-0 sm:h-full duration-500"
          } sm:flex justify-between items-center w-full sm:w-[65%] md:w-[70%] xl:w-[60%]  font-Montserrat font-bold text-[0.85rem] md:text-[0.9rem] lg:text-[1rem] overflow-hidden`}
        >
          {/* Desktop navigation links */}
          <div className="hidden sm:flex justify-between items-center w-[100%] font-Montserrat font-bold text-[0.85rem] md:text-[0.9rem] lg:text-[1rem]">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80} // Desktop offset
              className="block text-white hover:text-gray cursor-pointer"
            >
              About me
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-80} // Desktop offset
              className="block text-white hover:text-gray cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              offset={-80} // Desktop offset
              className="block text-white hover:text-gray cursor-pointer"
            >
              Blog
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80} // Desktop offset
              className="block text-white hover:text-gray cursor-pointer"
            >
              Contact Me
            </Link>
            <NavLink
              to="https://drive.google.com/file/d/1-2z2oJZV5kgxGq1VcXdhc9zNyvYNSG7i/view?usp=share_link"
              className="block text-white hover:text-gray cursor-pointer"
            >
              <button className=" border-solid border-black px-2 md:px-4 py-1 md:py-2 font-bold border-[3px] hover:text-gray hover:border-gray  ">
                DOWNLOAD CV
              </button>
            </NavLink>
          </div>
          {/* Mobile navigation links */}
          <div className="flex flex-col pt-12 gap-y-8 justify-center items-center text-[1.1rem] font-Montserrat font-bold sm:hidden">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-50}
              className="block text-white hover:text-gray cursor-pointer"
              onClick={handleMobileSectionClick}
            >
              About me
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-50}
              className="block text-white hover:text-gray cursor-pointer"
              onClick={handleMobileSectionClick}
            >
              Portfolio
            </Link>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              offset={-50}
              className="block text-white hover:text-gray cursor-pointer"
              onClick={handleMobileSectionClick}
            >
              Blog
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              className="block text-white hover:text-gray cursor-pointer"
              onClick={handleMobileSectionClick}
            >
              <button className=" border-solid border-black px-2 md:px-4 py-1 md:py-2 font-bold border-[3px] hover:text-gray hover:border-gray  ">
                CONTACT ME
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
