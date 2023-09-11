import Heading from '../../Components/Header/Heading';
import Seperator from '../Assets/Seperator.png'

export default function About() {
  return (
    <div className='about py-20'>
      <div>
        <Heading text="ABOUT ME" />
      </div>
       <p className=' font-OpenSans text-center pt-8 text-base w-[60%] mx-auto '>
       My name is Tomasz Gajda, I'm a third year Applied Computer Science
        student at the AGH University of Science and Technology in Krakow. I
        have been learning Front-End technologies for a year and this time was
        just enough for me to make sure that this is my place in the industry.
        Membership in the science club developed my design skills, which quickly
        turned into a new hobby. I am fluent in English (spoken and written) and
        intermediate Spanish. Apart from designing and programming websites, my
        passion is all kinds of motorsport - from rallies to the very king of
        motorsport - formula 1.
        </p>
        <div className='flex justify-center mt-10 '>
        <button className=" border-solid border-black px-8 py-1 text-base font-bold   border-r-[3px] border-l-[3px] hover:text-gray hover:border-gray  ">EXPLORE</button>
        </div>
        <div className='w-[13%] pt-12 mx-auto '>
        <img src={Seperator} className='w-full' alt="" />
      </div>
    </div>
  );
}
