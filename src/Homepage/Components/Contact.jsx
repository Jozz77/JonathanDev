import Heading from "../../Components/Heading";
import Seperator from "../../Components/Seperator";

export default function Contact() {
  return (
    <div id="contact" className="contact pt-8 lg:pt-10 xl:pt-12 ">
      <section>
        <div>
          <Heading text='CONTACT' />
        </div>
        <p className=" font-OpenSans text-center pt-4 lg:pt-6 xl:pt-8 text-base w-[60%] lg:w-[50%] mx-auto ">
          Discover endless possibilities. Your journey begins with a simple
          message. Let's connect and create something amazing together. Reach
          out to me today and let your ideas come to life.
        </p>
        <div className="pt-8 lg:pt-10 xl:pt-12  ">
          <Seperator />
        </div>
      </section>

      <form
        action=""
        className=" font-Montserrat bg-none py-8 lg:py-10 xl:py-12 w-[50%] lg:w-[40%] mx-auto "
      >
        <input
          className="w-full mt-4 text-gray text-[0.85rem] lg:text-[0.9rem] placeholder:text-[0.85rem] placeholder:lg:text-[0.9rem] focus:border-gray placeholder:text-gray px-[2%] py-2 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary outline-none "
          type="text"
          name="name"
          placeholder="ENTER YOUR NAME*"
          id=""
        />

        <input
          className="w-full mt-8 xl:mt-10 text-gray text-[0.85rem] lg:text-[0.9rem] placeholder:text-[0.85rem] placeholder:lg:text-[0.9rem] focus:border-gray placeholder:text-gray px-[2%] py-2 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary outline-none "
          type="text"
          name="email"
          placeholder="ENTER YOUR EMAIL*"
          id=""
        />

        <input
          className="w-full mt-8 xl:mt-10 text-gray text-[0.85rem] lg:text-[0.9rem] placeholder:text-[0.85rem] placeholder:lg:text-[0.9rem] focus:border-gray placeholder:text-gray px-[2%] py-2 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary outline-none "
          type="text"
          name="number"
          placeholder="PHONE NUMBER"
          id=""
        />

        <textarea
          className="w-full mt-8 xl:mt-10 text-gray text-[0.85rem] lg:text-[0.9rem] resize-none placeholder:text-[0.85rem] placeholder:lg:text-[0.9rem] focus:border-gray placeholder:text-gray px-[2%] pb-16 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary outline-none "
          type="text"
          name="name"
          placeholder="YOUR MESSAGE* "
          id=""
        />

        <div className="flex justify-center mt-4 xl:mt-6  ">
          <button className=" border-solid border-black px-8 py-2 text-base font-bold border-[3px] hover:text-gray hover:border-gray  ">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}
