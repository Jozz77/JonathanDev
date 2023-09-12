import React from "react";
import Heading from "../../../Components/Header/Heading";
import BlogData from "./BlogData";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Blog() {
  return (
    <div className="bg-Secondary text-WhiteBoldText">
      <section className="blog-head py-8 text-Secondary">
        <Heading text='MY BLOG' />
      </section>

      <section className="">
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          pagination={
           false}
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
                    <p className="text-[0.7rem] font-semibold">written by {blog.author}</p>
                    <h1 className="text-[1.1rem] font-bold text-center mt-2">
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
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
