import { useEffect, useState } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {

  const [spanSelector, setSpanSelector] = useState(1)
  const [timeoutDuration, setTimeoutDuration] = useState(4000)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSpanSelector(prevSelector => (prevSelector % 3) + 1)
      if (spanSelector === 1) {
        setTimeoutDuration(6000)
      } else if (spanSelector === 2) {
        setTimeoutDuration(100000)
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
    };

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  return (
    <>
      <Background />

      <div className="flex flex-col h-[100vh] items-center justify-between">
        <div className='flex flex-col items-center mt-40'>
          <span className='text-green-300 font-semibold text-2xl'>Hello there, I am</span>
          <span className='text-white font-extrabold text-3xl'>Tomas Trujillo</span>
          <article>
            {spanSelector === 1 &&
              <span className='text-green-300 font-semibold text-2xl block font-mono whitespace-nowrap border-r-4 w-[17ch] animate-span'>Your next backend</span>
            }
            {spanSelector === 2 &&
              <span className='text-green-300 text-2xl block font-mono whitespace-nowrap border-r-4 w-[19ch] animate-span2'>Your next fullstack</span>
            }
            {spanSelector === 3 &&
              <span className='text-green-300 text-2xl block font-mono whitespace-nowrap border-r-4 w-[28ch] animate-span3'>Your next software developer</span>
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
      <div className='h-[100vh]'>

      </div>
    </>
  );
}

export default App;
