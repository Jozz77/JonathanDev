import { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import Seperator from "../../Components/Seperator";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

export default function Contact() {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      // initClassName: 'contact', // class applied after initialization
      animatedClassName: "contact", // class applied on animation
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  const [isLoading, setIsLoading] = useState(false); // State variable to track loading
  const [isSubmitted, setIsSubmitted] = useState(false); // State variable to submit form

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set isLoading to true when the form is submitted
    setIsLoading(true);

    // Simulate an API call or form submission delay (you can replace this with your actual submission logic)
    setTimeout(() => {
      // After the submission is complete, set isLoading back to false
      setIsLoading(false);
      setIsSubmitted(true);

      // Reset the form or perform any other necessary actions
      console.log("Form submitted!");
    }, 2000); // Simulated 2-second delay
  };

  return (
    <div
      data-aos="zoom-in-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      data-aos-once={false}
      id="contact"
      className="contact pt-8 lg:pt-10 xl:pt-12 "
    >
      <section>
        <div>
          <Heading text="CONTACT" />
        </div>
        <p className=" font-OpenSans text-center pt-4 lg:pt-6 xl:pt-8 text-[0.85rem] ssm:text-[0.9rem] sm:text-base w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto ">
          Discover endless possibilities. Your journey begins with a simple
          message. Let's connect and create something amazing together. Reach
          out to me today and let your ideas come to life.
        </p>
        <div className="pt-8 lg:pt-10 xl:pt-12  ">
          <Seperator />
        </div>
      </section>

      <form
        onSubmit={handleSubmit}
        action=""
        className=" font-Montserrat bg-none text-Secondary py-8 lg:py-10 xl:py-12 w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto "
      >
        <input
          className="w-full mt-4 text-[0.8rem] sm:text-[0.85rem] lg:text-[0.9rem]  placeholder:text-[0.8rem] placeholder:sm:text-[0.85rem] placeholder:lg:text-[0.9rem] focus:border-gray placeholder:text-gray px-[4%] ssm:px-[2%] py-2 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary outline-none "
          type="text"
          name="name"
          placeholder="ENTER YOUR NAME*"
          id=""
        />

        <input
          className="w-full mt-8 xl:mt-10  text-[0.8rem] sm:text-[0.85rem] lg:text-[0.9rem]  placeholder:text-[0.8rem] placeholder:sm:text-[0.85rem] placeholder:lg:text-[0.9rem] focus:border-gray placeholder:text-gray px-[4%] ssm:px-[2%] py-2 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary outline-none "
          type="text"
          name="email"
          placeholder="ENTER YOUR EMAIL*"
          id=""
        />

        <input
          className="w-full mt-8 xl:mt-10 text-[0.8rem] sm:text-[0.85rem] lg:text-[0.9rem]  placeholder:text-[0.8rem] placeholder:sm:text-[0.85rem] placeholder:lg:text-[0.9rem] focus:border-gray placeholder:text-gray px-[4%] ssm:px-[2%] py-2 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary outline-none "
          type="text"
          name="number"
          placeholder="PHONE NUMBER"
          id=""
        />

        <textarea
          className="w-full mt-8 xl:mt-10 text-[0.8rem] sm:text-[0.85rem] lg:text-[0.9rem] xt-[0.75rem] eholder:ssm:text-[0.8rem] placeholder:sm:text-[0.85rem] placeholder:lg:text-[0.9rem] focus:border-gray placeholder:text-gray px-[2%] pb-16 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary resize-none outline-none "
          type="text"
          name="name"
          placeholder="YOUR MESSAGE* "
          id=""
        />

        <div className="flex justify-center mt-3 sm:mt-4 xl:mt-6">
          {isLoading ? (
            <button
              disabled=""
              type="button"
              className="border-solid border-black px-6 md:px-8 py-1 md:py-2 text-[0.8rem] ssm:text-[0.9rem] sm:text-base font-bold border-[3px] cursor-not-allowed"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline mr-2 border-solid border-black border-[1px] rounded-full w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                ></path>
              </svg>
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="border-solid border-black px-6 md:px-8 py-1 md:py-2 text-[0.8rem] ssm:text-[0.9rem] sm:text-base font-bold border-[3px] hover:text-gray hover:border-gray"
            >
              SEND
            </button>
          )}
        </div>
        <div className=" flex justify-center font-bold mt-4 ">
          {isSubmitted && (
            <div>
              Thanks for submitting!!!
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
