import Heading from "../../Components/Header/Heading";
import Seperator from "../Assets/Seperator.png";

export default function Contact() {
  return (
    <div className="contact pt-16 pb-4 ">
      <section>
        <div>
          <Heading text='CONTACT' />
        </div>
        <p className=" font-OpenSans text-center pt-8 text-base w-[50%] mx-auto ">
          Discover endless possibilities. Your journey begins with a simple
          message. Let's connect and create something amazing together. Reach
          out to me today and let your ideas come to life.
        </p>
        <div className="w-[13%] pt-4 mx-auto ">
          <img src={Seperator} className="w-full" alt="" />
        </div>
      </section>

      <form
        action=""
        className=" font-Montserrat bg-none py-12 w-[40%] mx-auto "
      >
        <input
          className="w-full mt-4 text-gray text-[0.9rem] placeholder:text-[0.9rem] focus:border-gray placeholder:text-gray px-[2%] py-2 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary outline-none "
          type="text"
          name="name"
          placeholder="ENTER YOUR NAME*"
          id=""
        />

        <input
          className="w-full mt-10 text-gray text-[0.9rem] placeholder:text-[0.9rem] focus:border-gray placeholder:text-gray px-[2%] py-2 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary outline-none "
          type="text"
          name="email"
          placeholder="ENTER YOUR EMAIL*"
          id=""
        />

        <input
          className="w-full mt-10 text-gray text-[0.9rem] placeholder:text-[0.9rem] focus:border-gray placeholder:text-gray px-[2%] py-2 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary outline-none "
          type="text"
          name="number"
          placeholder="PHONE NUMBER"
          id=""
        />

        <textarea
          className="w-full mt-10 text-gray text-[0.9rem] resize-none placeholder:text-[0.9rem] focus:border-gray placeholder:text-gray px-[2%] pb-16 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary outline-none "
          type="text"
          name="name"
          placeholder="YOUR MESSAGE* "
          id=""
        />

        <div className="flex justify-center mt-10    ">
          <button className=" border-solid border-black px-8 py-1 text-base font-bold   border-r-[3px] border-l-[3px] hover:text-gray hover:border-gray  ">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}
