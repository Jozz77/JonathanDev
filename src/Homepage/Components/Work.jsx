import { Link } from "react-router-dom";

export default function Work() {
  return (
    <div className="work text-WhiteBoldText flex justify-between px-[5%] py-6 font-OpenSans">
      <section className=" w-[45%] ">
      <h1 className=" text-[1.3rem] font-bold tracking-[5px] ">SKILLS</h1>
      <p className=" font-Montserrat pt-2 text-[0.95rem]">
       I'm good with HTML, CSS, JavaScript, React JS, Tailwind, SCSS, Git and Github etc. 
      </p>
      </section>
      <section className=" w-[45%] ">
      <h1 className=" text-[1.2rem] font-bold tracking-[2px] ">EDUCATION AND CERTIFICATES</h1>
      <Link to="" className=" font-Montserrat mt-2 underline font-medium text-[0.95rem]">
      <p className="mt-2 underline-offset-8">
        Zuri I4G Internship
      </p>
      </Link>
      <Link to="" className=" font-Montserrat font-medium underline text-[0.95rem]">
      <p className="mt-2">
      HNGi9 Internship
      </p>
      </Link>
      </section>
     
    </div>
  );
}
