import { Link } from "react-router-dom";

export default function Work() {
  return (
    <div className="work text-WhiteBoldText flex justify-between px-[5%] py-6 font-OpenSans">
      <section className=" w-[45%] ">
        <h1 className=" text-[1rem] lg:text-[1.15rem] xl:text-[1.2rem] font-bold tracking-[5px] ">SKILLS</h1>
        <p className=" font-Montserrat pt-2 text-[0.85rem] lg:text-[0.9rem] xl:text-[0.95rem]">
          I'm good with HTML, CSS, JavaScript, React JS, Tailwind, SCSS, Git and
          Github etc.
        </p>
      </section>

      <section>
        <hr className=" border-solid border-WhiteBoldText border-[1px] h-full " />
      </section>
      <section className=" w-[45%] ">
        <h1 className=" text-[1rem] lg:text-[1.15rem] xl:text-[1.2rem] font-bold tracking-[2px] ">
          EDUCATION AND CERTIFICATES
        </h1>
        <Link
          to="https://drive.google.com/file/d/1PEdST6H01x2Z7ruWOmYyOUO8fIwtuEo1/view?usp=sharing"
          target="_blank"
          className=" font-Montserrat underline font-semibold hover:text-gray text-[0.85rem] lg:text-[0.9rem] xl:text-[0.95rem]"
        >
          <p className="pt-2 underline-offset-8">HNGi9 Internship</p>
        </Link>
        <Link
          to=""
          target="_blank"
          className=" font-Montserrat font-semibold hover:text-gray underline text-[0.85rem] lg:text-[0.9rem] xl:text-[0.95rem]"
        >
          <p className="pt-2">Zuri I4G Internship</p>
        </Link>
      </section>
    </div>
  );
}
