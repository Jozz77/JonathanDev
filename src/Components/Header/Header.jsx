import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileSectionClick = () => {
    setIsOpen(false); // Close the menu when a section link is clicked on mobile
  };

  return (
    <header className="bg-Primary z-10 fixed top-0 w-full py-3 xl:py-4">
      <div className="sm:flex sm:justify-between md:items-center px-[5%] md:px-[7%] lg:px-[10%]">
        <div className="flex items-center justify-between">
          <div className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[2rem] font-Montserrat font-bold ">
            Jo_Na_Than
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform transition-transform ${
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
              : "h-[0] duration-300"
          } sm:flex justify-between items-center w-[65%] md:w-[60%] xl:w-[50%] font-Montserrat font-bold text-[0.85rem] md:text-[0.9rem] lg:text-[1rem] overflow-hidden`}
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
              Portfolio
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
              <button className=" border-solid border-black px-2 md:px-4 py-1 md:py-2 font-bold border-[3px] hover:text-gray hover:border-gray  ">
                CONTACT ME
              </button>
            </Link>
          </div>
          {/* Mobile navigation links */}
          <div className="block sm:hidden">
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
