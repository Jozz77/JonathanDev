/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Heading from "../../Components/Heading";
import Seperator from "../../Components/Seperator";
// import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   number: "",
  //   message: "",
  // });

  // const resetForm = () => {
  //   setFormData({
  //     name: "",
  //     email: "",
  //     number: "",
  //     message: "",
  //   });
  //   setErrors({});
  // };

  // const [errors, setErrors] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });

  //   setIsModalOpen(false);
  // };

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!formData.name.trim()) {
  //     newErrors.name = "Please input Your Name";
  //   } else if (formData.name.length < 3) {
  //     newErrors.name = "Name must have at least 3 characters";
  //   }

  //   if (!formData.email.trim()) {
  //     newErrors.email = "Please input Your Email";
  //   } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
  //     newErrors.email = "Please input a valid email";
  //   }

  //   if (!formData.message.trim()) {
  //     newErrors.message = "Please input Your Message";
  //   }

  //   return newErrors;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // setIsModalOpen(true);
  //   const newErrors = validateForm();
  //   if (Object.keys(newErrors).length === 0) {
  //     // No errors, proceed with form submission
  //     setIsLoading(true);

  //     emailjs
  //       .sendForm(
  //         "service_prpkq5j",
  //         "template_0wd8eaa",
  //         e.target,
  //         "zfjNcVHR7ZKlJ9cLQ"
  //       )
  //       .then((result) => {
  //         console.log(result.text);
  //         setIsLoading(false);
  //         setIsModalOpen(true);
  //         resetForm();
  //       })
  //       .catch((error) => {
  //         console.log(error.text);
  //         setIsLoading(false);
  //       });
  //   } else {
  //     // There are errors, update the state with the error messages
  //     setErrors(newErrors);
  //   }
  // };

  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      useClassNames: false,
      animatedClassName: "contact",
      once: false,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

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
        <p className="font-OpenSans text-center pt-4 lg:pt-6 xl:pt-8 text-[0.85rem] ssm:text-[0.9rem] sm:text-base w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto ">
          Discover endless possibilities. Your journey begins with a simple
          message. Let's connect and create something amazing together. Reach
          out to me today and let your ideas come to life.
        </p>
        <div className="pt-8 lg:pt-10 xl:pt-12  ">
          <Seperator />
        </div>

        <div className="py-8 font-OpenSans w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto text-[0.85rem] ssm:text-[0.9rem] sm:text-base lg:py-10 xl:py-12 text-center  ">
          <p>
            Send a message to{" "}
            <a
              className=" hover:text-gray"
              href="mailto:mmadujonathan@gmail.com"
            >
              mmadujonathan@gmail.com
            </a> today!
          </p>
        </div>
      </section>

      {/* <form
        onSubmit={handleSubmit}
        id="contact-form"
        action=""
        className="font-Montserrat bg-none text-Secondary py-8 lg:py-10 xl:py-12 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto "
      >
        <input
          className={`w-full mt-4 text-[0.8rem] sm:text-[0.85rem] lg:text-[0.9rem] placeholder:text-[0.8rem] placeholder:sm:text-[0.85rem] placeholder:lg:text-[0.9rem] focus:border-gray placeholder:text-gray px-[4%] ssm:px-[2%] py-2 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary outline-none ${
            errors.name ? "border-red-500" : ""
          }`}
          type="text"
          name="name"
          placeholder="ENTER YOUR NAME*"
          value={formData.name}
          onChange={handleChange}
        />
        <small className="text-[red]">{errors.name && errors.name}</small>

        <input
          className={`w-full mt-8 xl:mt-10  text-[0.8rem] sm:text-[0.85rem] lg:text-[0.9rem] placeholder:text-[0.8rem] placeholder:sm:text-[0.85rem] placeholder:lg:text-[0.9rem] focus:border-gray placeholder:text-gray px-[4%] ssm:px-[2%] py-2 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary outline-none ${
            errors.email ? "border-red-500" : ""
          }`}
          type="text"
          name="email"
          placeholder="ENTER YOUR EMAIL*"
          value={formData.email}
          onChange={handleChange}
        />
        <small className="text-[red]">{errors.email && errors.email}</small>

        <input
          className="w-full mt-8 xl:mt-10 text-[0.8rem] sm:text-[0.85rem] lg:text-[0.9rem]  placeholder:text-[0.8rem] placeholder:sm:text-[0.85rem] placeholder:lg:text-[0.9rem] focus:border-gray placeholder:text-gray px-[4%] ssm:px-[2%] py-2 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary outline-none "
          type="number"
          name="number"
          placeholder="PHONE NUMBER"
          value={formData.number}
          onChange={handleChange}
        />

        <textarea
          className="w-full mt-8 xl:mt-10 text-[0.8rem] sm:text-[0.85rem] lg:text-[0.9rem] xt-[0.75rem] eholder:ssm:text-[0.8rem] placeholder:sm:text-[0.85rem] placeholder:lg:text-[0.9rem] focus:border-gray placeholder:text-gray px-[2%] pb-16 bg-[transparent] border-solid border-b-[4px] border-l-[4px] border-Secondary resize-none outline-none "
          type="text"
          name="message"
          placeholder="YOUR MESSAGE* "
          value={formData.message}
          onChange={handleChange}
        />
        <small className="text-[red]">{errors.message && errors.message}</small>

        <div className="flex justify-center mt-3 sm:mt-4 xl:mt-6">
          {isLoading ? (
            <button
              disabled=""
              type="button"
              className="border-solid border-[1C64F2] px-6 md:px-8 py-1 md:py-2 text-[0.8rem] ssm:text-[0.9rem] sm:text-base font-bold border-[3px] cursor-not-allowed"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline mr-2 border-solid border-[1C64F2] border-[1px] rounded-full w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              SENDING...
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
        {isModalOpen && (
          <div className="text-[green] text-center text-base sm:text-[1.2rem] lg:text-[1.3rem] font-Montserrat font-bold mt-2 sm:mt-4 ">
            Thank you for submitting!
          </div>
        )}
        {isModalOpen && (
          <div
            className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000054]  flex items-center justify-center
    transition-opacity duration-300 ease-in-out ${
      isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className={` bg-WhiteBoldText rounded-lg shadow-lg p-4
transform scale-100 opacity-100
transition-transform duration-300 ease-in-out ${
                isModalOpen ? "scale-100" : "scale-90"
              } transform-gpu`}
            >
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-4">
                  Thank you for submitting!
                </h2>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </form> */}
    </div>
  );
}
