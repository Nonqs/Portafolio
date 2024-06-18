import { useEffect, useState } from "react"


export default function PresentationText() {

    const [spanSelector, setSpanSelector] = useState(1)
    const [timeoutDuration, setTimeoutDuration] = useState(4000)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setSpanSelector(prevSelector => (prevSelector % 3) + 1)
          if (spanSelector === 1) {
            setTimeoutDuration(5000)
          } else if (spanSelector === 2) {
            setTimeoutDuration(8000)
          } else {
            setTimeoutDuration(4000)
          }
        }, timeoutDuration)
    
        return () => clearTimeout(timeoutId)
      }, [spanSelector, timeoutDuration])
    

    return (
        <div className='flex flex-col items-center mt-52'>
            <span className="text-[#01c38d] font-semibold text-2xl">Hello there, I am</span>
            <span className='text-black font-extrabold text-3xl'>Tomas Trujillo</span>
            <article className='relative h-10 w-full flex justify-center items-center'>
                {spanSelector === 1 &&
                    <span className='text-[#01c38d] font-semibold text-2xl block font-mono whitespace-nowrap border-r-4 animate-span'>Your Backend Dev</span>
                }
                {spanSelector === 2 &&
                    <span className='text-[#01c38d] text-2xl block font-mono whitespace-nowrap border-r-4 w-[18ch] animate-span2'>Your Fullstack Dev</span>
                }
                {spanSelector === 3 &&
                    <span className='text-[#01c38d] text-2xl block font-mono whitespace-nowrap border-r-4 w-[28ch] animate-span3'>Your Next Software Developer</span>
                }
            </article>
        </div>
    )
}