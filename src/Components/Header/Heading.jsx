import React from 'react'

export default function Heading({text} ) {
  return (
    <div className="border-solid border-[6px] border-black w-fit py-2 px-12 mx-auto">
          <h1 className="text-[2rem] font-Montserrat font-bold tracking-[13px] ">
            {text}
          </h1>
        </div>
  )
}
