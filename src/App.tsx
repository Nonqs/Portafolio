import { useEffect, useState } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import './styles/App.css';
import css from "./public/css.svg"
import html from "./public/html.svg"
import js from "./public/js.svg"

function App() {

  const [spanSelector, setSpanSelector] = useState(1)
  const [timeoutDuration, setTimeoutDuration] = useState(4000)
  const [isSticky, setIsSticky] = useState(false)

  const svgs = [css, html, js]

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Background />

      <div className="flex flex-col h-[100vh] items-center justify-between">
        <div className='flex flex-col items-center mt-40'>
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
        <Navbar isSticky={isSticky} />
        <article className='mb-5 mt-40'>
          <button className="Btn rotate-180">
            <svg height="1.2em" className="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
          </button>
        </article>
      </div>
      <div className='h-[100vh] w-full flex justify-center items-center bg-gray-200' style={{ borderTop: "#01c38d 5px solid", borderBottom: "#01c38d 5px solid" }}>
        <div className='w-1/3 me-5'>
          <article>
            <h4 className='text-[#01c38d] text-4xl font-semibold p-2 border-animated'>Find out who you are hiring</h4>
            <p className=''>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam harum recusandae officiis maxime necessitatibus quaerat ipsa voluptatibus! Dolores totam illo suscipit vero id nulla impedit obcaecati eligendi, amet voluptate!
            </p>
          </article>
          <div className='w-full mt-10'>
            <h4 className='text-[#01c38d] text-4xl font-semibold p-2 border-animated'>We can talk in</h4>
            <div className='w-full flex  mt-5'>
              <article className='bg-white drop-shadow-2xl w-1/4 me-5 p-3 rounded-xl text-center'>
                <span className='font-medium'>Spanish</span>
                <p className='font-light'>Native</p>
              </article>
              <article className='bg-white shadow-inner w-1/4 p-3 rounded-xl text-center'>
                <span className='font-medium'>English</span>
                <p className='font-light'>B2</p>
              </article>
            </div>
          </div>
        </div>
        <div className='w-1/3 ms-5'>
          <div>
            <h5 className='text-[#01c38d] text-4xl font-semibold p-2 border-animated-right'>You don't have to worry, I've got you covered</h5>
            <article className='flex mt-2'>
              {svgs.map(svg => (
                <img className='w-10 p-1 bg-white shadow-inner me-2 rounded-xl hover:drop-shadow-2xl' src={svg} alt="" />
              ))}
            </article>
          </div>
          <div>
            <h5 className='text-[#01c38d] text-4xl font-semibold p-2 border-animated-right'>Learning now</h5>
          </div>
        </div>
      </div >
    </>
  );
}

export default App;
