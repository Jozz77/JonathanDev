import React from 'react'

export default function Heading({text} ) {
  return (
    <div className="border-solid border-[6px] border-black w-fit py-2 px-4 ssm:px-6 lg:px-8 xl:px-12 mx-auto">
          <h1 className="text-[1.1rem] ssm:text-[1.2rem] sm:text-[1.3rem] md:text-[1.6rem]  lg:text-[1.8rem] xl:text-[2rem] font-Montserrat font-bold tracking-[4px] ssm:tracking-[6px] sm:tracking-[10px] md:tracking-[13px]  ">
            {text}
          </h1>
        </div>
  )
}
