import { Link } from "react-router-dom";
import Heading from "../../../Components/Header/Heading";
import { useState } from "react";
import BlogData from "./BlogData";


export default function Blog() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div className=" bg-Secondary text-WhiteBoldText">
     <section className="blog-head py-8 text-Secondary ">
          <Heading text='BLOG' />
        </section>

        <section className="flex flex-wrap">
        <div className="flex flex-wrap">
          {BlogData.map((blog, index) => {
            const isHovered = index === hoveredIndex;
            return (
              <section
                key={blog.id}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="relative w-1/3 group"
              >
                <img src={blog.img} className="w-full" alt="" />
                <div
                  className={`absolute flex flex-col items-center font-Montserrat justify-center bg-Secondary bg-opacity-50 bottom-0 right-0 top-0 left-0 bg-white p-4 w-full shadow-md transition-opacity duration-1000 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                   <p className="text-[0.7rem] font-semibold">written by  {blog.author} </p>
                  <h1 className="text-[1.1rem] font-bold text-center mt-1">
                    {blog.title}
                  </h1>
                  <p className="text-[0.8rem] px-[5%] text-center font-medium mt-4">
                    {blog.description}
                  </p>
                  <Link to={blog.link} target="_blank" className="">
                    <button className="border-solid border-black px-4 mt-4 font-semibold py-1 text-[0.85rem] border-r-[3px] border-l-[3px] hover:text-gray hover:border-gray">
                      READ MORE
                    </button>
                  </Link>
                </div>
              </section>
            );
          })}
        </div>

        </section>
    </div>
  )
}
