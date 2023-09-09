import { Link } from "react-router-dom";
import Pic from '../Assets/Pic.png'

export default function Hero() {
  return (
    <div className="px-[10%] pt-[7rem] pb-[2rem] hero flex justify-between items-center ">
        <section className="flex font-Montserrat flex-col w-[45%]  ">
            <p className="text-[1.3rem]  font-bold ">Hi, I am </p>
            <h1 className=" mt-[1.5rem] text-[2.5rem]  font-bold ">Jonathan Mmadu</h1>
            <small className="  text-gray  text-[1rem] font-extrabold ">Frontend Developer</small>
            <Link to="" className="text-[1  rem] mt-[2rem] font-semibold font-Raleway">
                <button className="bg-gray py-3 px-6 rounded-full  ">Download CV</button>
            </Link>
        </section>
        <section className="w-[45%] ">
            <img src={Pic} className="w-full" alt="" />
        </section>
    </div>
  )
}
