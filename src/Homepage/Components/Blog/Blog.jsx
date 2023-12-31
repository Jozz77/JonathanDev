import React from "react";
import Heading from "../../../Components/Heading";
import BlogData from "./BlogData";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Button from "../../../Components/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      // initClassName: 'contact', // class applied after initialization
      animatedClassName: "blog-head", // class applied on animation
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      data-aos-once={false}
      id="blog"
      className=" text-WhiteBoldText mt-8 lg:mt-10 xl:mt-12"
    >
      <section className=" py-4 ssm:py-6 lg:py-8 text-Secondary">
        <Heading text="BLOG" />
      </section>

      <section className="hidden lg:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          pagination={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {BlogData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <section className="relative h-full w-3/3 group">
                <img src={blog.img} className="w-full" alt="" />
                <div className="absolute flex flex-col items-center font-Montserrat justify-center bg-Secondary bg-opacity-60 bottom-0 right-0 top-0 left-0 bg-white w-full shadow-md transition-opacity duration-1000">
                  <div className="flex flex-col items-center absolute bottom-[5%] xl:bottom-[10%] px-[2%]">
                    <p className="text-[0.7rem] font-semibold">
                      written by {blog.author}
                    </p>
                    <h1 className="text-[1rem] xl:text-[1.1rem] font-bold text-center mt-2">
                      {blog.title}
                    </h1>
                    <p className="text-[0.75rem] xl:text-[0.8rem] px-[5%] text-center font-medium mt-4">
                      {blog.description}
                    </p>
                    <Link to={blog.link} target="_blank" className="">
                      <Button text="READ MORE" />
                    </Link>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* md section */}
      <section className="hidden sm:block lg:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          pagination={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {BlogData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <section className="relative h-full w-3/3 group">
                <img src={blog.img} className="w-full" alt="" />
                <div className="absolute flex flex-col items-center font-Montserrat justify-center bg-Secondary bg-opacity-60 bottom-0 right-0 top-0 left-0 bg-white w-full shadow-md transition-opacity duration-1000">
                  <div className="flex flex-col items-center absolute bottom-[10%] px-[2%]">
                    <p className="text-[0.7rem] font-semibold">
                      written by {blog.author}
                    </p>
                    <h1 className="text-[0.9rem] md:text-[1rem] xl:text-[1.1rem] font-bold text-center mt-2">
                      {blog.title}
                    </h1>
                    <p className="text-[0.7rem] md:text-[0.75rem] xl:text-[0.8rem] px-[5%] text-center font-medium mt-2 md:mt-4">
                      {blog.description}
                    </p>
                    <Link to={blog.link} target="_blank" className="">
                      <Button text="READ MORE" />
                    </Link>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ssm section */}
      <section className="block sm:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {BlogData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <section className="relative h-full w-3/3 group">
                <img src={blog.img} className="w-full" alt="" />
                <div className="absolute flex flex-col items-center font-Montserrat justify-center bg-Secondary bg-opacity-70 bottom-0 right-0 top-0 left-0 bg-white w-full shadow-md transition-opacity duration-1000">
                  <div className="flex flex-col items-center absolute  ssm:bottom-[10%] bottom-[7%] px-[2%]">
                    <p className="text-[0.7rem] ssm:text-[0.8rem] sm:text-[0.7rem] font-semibold">
                      written by {blog.author}
                    </p>
                    <h1 className="text-[0.9rem] ssm:text-[1rem] sm:text-[0.9rem] md:text-[1rem] xl:text-[1.1rem] font-bold text-center mt-2">
                      {blog.title}
                    </h1>
                    <p className="text-[0.7rem] ssm:text-[0.75rem] sm:text-[0.7rem] md:text-[0.75rem] xl:text-[0.8rem] px-[5%] text-center font-medium mt-2 md:mt-4">
                      {blog.description}
                    </p>
                    <Link to={blog.link} target="_blank" className="">
                      <Button text="READ MORE" />
                    </Link>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
