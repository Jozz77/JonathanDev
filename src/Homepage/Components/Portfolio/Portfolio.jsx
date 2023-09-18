import { useState } from "react";
import { Link } from "react-router-dom";
import PortfolioData from "./PortolioData";
import Heading from "../../../Components/Heading";
import Button from "../../../Components/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      // initClassName: 'contact', // class applied after initialization
      animatedClassName: "hero", // class applied on animation
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  const [activeTab, setActiveTab] = useState("tab1"); // Set the default active tab

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      data-aos-once={false}
      id="portfolio"
      className="bg-otherBlack text-whiteOther"
    >
      <section className="port-head bg-WhiteBoldText  py-4 ssm:py-6 lg:py-8 text-Secondary ">
        <Heading text="MY PORTFOLIO" />
      </section>
      <section className="w-full text-WhiteBoldText">
        <div className="flex flex-wrap justify-center py-2 sm:py-4 mb-0 sm:mb-4 ">
          <div
            onClick={() => handleTabClick("tab1")}
            className={`cursor-pointer py-2 sm:py-4 px-6 ssm:px-8 md:px-12 ${
              activeTab === "tab1"
                ? "border-b-2 border-whiteOther transition duration-800 ease-in-out"
                : "border-b-2 text-gray border-gray transition duration-800 ease-in-out"
            } text-[0.8rem] sm:text-[0.9rem] font-Montserrat font-semibold`}
          >
            ALL
          </div>
          <div
            onClick={() => handleTabClick("tab2")}
            className={`cursor-pointer py-2 sm:py-4 px-6 ssm:px-8 md:px-12 ${
              activeTab === "tab2"
                ? "border-b-2 border-whiteOther transition duration-800 ease-in-out"
                : "border-b-2 text-gray border-gray transition duration-800 ease-in-out"
            } text-[0.8rem] sm:text-[0.9rem] font-Montserrat font-semibold`}
          >
            PERSONAL PROJECTS
          </div>
          <div
            onClick={() => handleTabClick("tab3")}
            className={`cursor-pointer py-2 sm:py-4 px-6 ssm:px-8 md:px-12 ${
              activeTab === "tab3"
                ? "border-b-2 border-whiteOther transition duration-800 ease-in-out"
                : "border-b-2 text-gray border-gray transition duration-800 ease-in-out"
            } text-[0.8rem] sm:text-[0.9rem] font-Montserrat font-semibold`}
          >
            GROUP PROJECTS
          </div>
        </div>
      </section>
      <section className="port-body">
        {activeTab === "tab1" && (
          <div className="flex gap-y-1 flex-wrap">
            {PortfolioData.map((portfolio, index) => {
              const isHovered = index === hoveredIndex;
              return (
                <section
                  key={portfolio.id}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="relative w-1/1 sm:w-1/2 lg:w-1/3 group"
                >
                  <img src={portfolio.img} className="w-full" alt="" />
                  <div
                    className={`absolute flex justify-center font-Montserrat  bg-Secondary bg-opacity-10 bottom-0 right-0 top-0 left-0 bg-white p-4 w-full shadow-md transition-opacity duration-1000 ${
                      !isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h1 className="text-[1.2rem] ssm:text-[1.6rem] sm:text-[1.1rem] md:text-[1.6rem] lg:text-[1.4rem] xl:text-[1.6rem] bg-otherBlack opacity-80 px-2 sm:px-4 bottom-[5%] absolute font-bold tracking-[5px] mt-1">
                      {portfolio.title}
                    </h1>
                  </div>
                  <div
                    className={`absolute flex flex-col items-center font-Montserrat justify-center bg-Secondary bg-opacity-80 bottom-0 right-0 top-0 left-0 bg-white p-4 w-full shadow-md transition-opacity duration-1000 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-[0.8rem] ssm:text-[0.8rem] sm:text-[0.7rem] font-semibold">
                      coded
                    </p>
                    <h1 className="text-[1.2rem] ssm:text-[1.6rem] sm:text-[1.1rem] md:text-[1.6rem]  lg:text-[1.4rem] xl:text-[1.6rem] font-bold tracking-[5px] mt-1">
                      {portfolio.title}
                    </h1>
                    <p className="text-[0.8rem] ssm:text-[0.8rem] sm:text-[0.7rem] sm:px-[10%] px-[5%] lg:px-[15%] text-center font-medium mt-2 lg:mt-4">
                      {portfolio.description}
                    </p>
                    <Link to={portfolio.link} target="_blank" className="">
                      <Button text="LIVE SITE" />
                    </Link>
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {activeTab === "tab2" && (
          <div className="flex gap-y-1 flex-wrap">
            {PortfolioData.filter(
              (portfolio) => portfolio.isPersonalProject
            ).map((portfolio, index) => {
              const isHovered = index === hoveredIndex;
              return (
                <section
                  key={portfolio.id}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="relative w-1/1 sm:w-1/2 lg:w-1/3 group"
                >
                  <img src={portfolio.img} className="w-full" alt="" />
                  <div
                    className={`absolute flex justify-center font-Montserrat  bg-Secondary bg-opacity-10 bottom-0 right-0 top-0 left-0 bg-white p-4 w-full shadow-md transition-opacity duration-1000 ${
                      !isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h1 className="text-[1.2rem] ssm:text-[1.6rem] sm:text-[1.1rem] lg:text-[1.4rem] xl:text-[1.6rem] absolute bg-otherBlack opacity-80 px-2 sm:px-4 bottom-[5%] font-bold tracking-[5px] mt-1">
                      {portfolio.title}
                    </h1>
                  </div>
                  <div
                    className={`absolute flex flex-col items-center font-Montserrat justify-center bg-Secondary bg-opacity-80 bottom-0 right-0 top-0 left-0 bg-white p-4 w-full shadow-md transition-opacity duration-1000 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-[0.8rem] ssm:text-[0.8rem] sm:text-[0.7rem] font-semibold">
                      coded
                    </p>
                    <h1 className="text-[1.2rem] ssm:text-[1.6rem] sm:text-[1.1rem] lg:text-[1.4rem] xl:text-[1.6rem] font-bold tracking-[5px] mt-1">
                      {portfolio.title}
                    </h1>
                    <p className="text-[0.8rem] ssm:text-[0.8rem] sm:text-[0.7rem] sm:px-[10%] px-[5%] lg:px-[15%] text-center font-medium mt-2 lg:mt-4">
                      {portfolio.description}
                    </p>
                    <Link to={portfolio.link} target="_blank" className="">
                      <Button text="LIVE SITE" />
                    </Link>
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {activeTab === "tab3" && (
          <div className="flex gap-y-1 flex-wrap">
            {PortfolioData.filter(
              (portfolio) => !portfolio.isPersonalProject
            ).map((portfolio, index) => {
              const isHovered = index === hoveredIndex;
              return (
                <section
                  key={portfolio.id}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="relative w-1/1 sm:w-1/2 lg:w-1/3 group"
                >
                  <img src={portfolio.img} className="w-full" alt="" />
                  <div
                    className={`absolute flex justify-center font-Montserrat  bg-Secondary bg-opacity-10 bottom-0 right-0 top-0 left-0 bg-white p-4 w-full shadow-md transition-opacity duration-1000 ${
                      !isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h1 className="text-[1.2rem] ssm:text-[1.6rem] sm:text-[1.1rem] lg:text-[1.4rem] xl:text-[1.6rem] absolute bg-otherBlack opacity-80 px-2 sm:px-4 bottom-[5%] font-bold tracking-[5px] mt-1">
                      {portfolio.title}
                    </h1>
                  </div>
                  <div
                    className={`absolute flex flex-col items-center font-Montserrat justify-center bg-Secondary bg-opacity-80 bottom-0 right-0 top-0 left-0 bg-white p-4 w-full shadow-md transition-opacity duration-1000 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-[0.8rem] ssm:text-[0.8rem] sm:text-[0.7rem] font-semibold">
                      coded
                    </p>
                    <h1 className="text-[1.2rem] ssm:text-[1.6rem] sm:text-[1.1rem] lg:text-[1.4rem] xl:text-[1.6rem] font-bold tracking-[5px] mt-1">
                      {portfolio.title}
                    </h1>
                    <p className="text-[0.8rem] ssm:text-[0.8rem] sm:text-[0.7rem] sm:px-[10%] px-[5%] lg:px-[15%] text-center font-medium mt-2 lg:mt-4">
                      {portfolio.description}
                    </p>
                    <Link to={portfolio.link} target="_blank" className="">
                      <Button text="LIVE SITE" />
                    </Link>
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </section>

      <section className="text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] font-Montserrat font-semibold text-center py-2 sm:py-4">
        <p>And many more to come!</p>
      </section>
    </div>
  );
}
