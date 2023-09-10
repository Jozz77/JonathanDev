import { useState } from "react";
import { Link } from "react-router-dom";
import PortfolioData from "./PortolioData";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("tab1"); // Set the default active tab

  const [hoveredIndex, setHoveredIndex] = useState(null);
   // Function to toggle the showSection state for a specific index
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
    <div className=" bg-otherBlack text-whiteOther  ">
      <section className="port-head py-12">
        <div className="border-solid border-[6px] border-Secondary w-fit py-2 px-12 mx-auto">
          <h1 className="text-[2rem] text-Secondary font-Montserrat font-bold tracking-[10px] ">
            PORTFOLIO
          </h1>
        </div>
      </section>

      <section className="w-full text-WhiteBoldText ">
      <div className="flex justify-center py-4 mb-4 ">
          <div
            onClick={() => handleTabClick("tab1")}
            className={`cursor-pointer py-4 px-12 ${
              activeTab === "tab1"
                ? "text-whiteOther border-b-[2px] text-[0.9rem] font-Montserrat font-semibold"
                : "text-otherGray border-b-[2px] text-[0.9rem] font-Montserrat font-semibold"
            }`}
          >
            ALL
          </div>
          <div
            onClick={() => handleTabClick("tab2")}
            className={`cursor-pointer py-4 px-12 ${
              activeTab === "tab2"
                ? "text-whiteOther border-b-[2px] text-[0.9rem] font-Montserrat font-semibold"
                : "text-otherGray border-b-[2px] text-[0.9rem] font-Montserrat font-semibold"
            }`}
          >
            PERSONAL PROJECTS
          </div>
          <div
            onClick={() => handleTabClick("tab3")}
            className={`cursor-pointer py-4 px-12 ${
              activeTab === "tab3"
                ? "text-whiteOther border-b-[2px] text-[0.9rem] font-Montserrat font-semibold"
                : "text-otherGray border-b-[2px] text-[0.9rem] font-Montserrat font-semibold"
            }`}
          >
            GROUP PROJECTS
          </div>
        </div>

        {/* tab 1 */}
        {activeTab === "tab1" && (
          <div className="flex flex-wrap">
           {PortfolioData.map((portfolio, index) => {
            const isHovered = index === hoveredIndex;
            return (
              <section
                key={portfolio.id}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="relative w-1/3 group"
              >
                <img src={portfolio.img} className="w-full" alt="" />
                <div
                  className={`absolute flex flex-col items-center font-Montserrat justify-center bg-Secondary bg-opacity-50 bottom-0 right-0 top-0 left-0 bg-white p-4 w-full shadow-md transition-opacity duration-1000 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-[0.7rem] font-semibold">coded</p>
                  <h1 className="text-[1.6rem] font-bold tracking-[5px] mt-1">
                    {portfolio.title}
                  </h1>
                  <p className="text-[0.7rem] font-medium mt-4">
                    {portfolio.description}
                  </p>
                  <Link to="" target="_blank" className="">
                    <button className="border-solid border-black px-4 mt-4 font-semibold py-1 text-[0.85rem] border-r-[3px] border-l-[3px] hover:text-gray hover:border-gray">
                      LIVE SITE
                    </button>
                  </Link>
                </div>
              </section>
            );
          })}

          </div>
        )}

        {/* tab 2 */}
        {activeTab === "tab2" && (
          <div className="p-4 bg-white">Content for Tab 2</div>
        )}

        {/* tab 3 */}
        {activeTab === "tab3" && (
          <div className="p-4 bg-white">Content for Tab 3</div>
        )}
      </section>

      <section className=" text-[1.1rem] font-Montserrat font-semibold text-center py-4 ">
        <p>And many more to come!</p>
      </section>
    </div>
  );
}
