

export default function Button({text}) {
  return (
    <div>
        <button className="border-solid border-black px-3 md:px-4 mt-4 font-semibold py-1 text-[0.75rem] ssm:text-[0.85rem] sm:text-[0.75rem] md:text-[0.85rem] border-[3px] hover:text-gray hover:border-gray">{text} </button>
    </div>
  )
}
