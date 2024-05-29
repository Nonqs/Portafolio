import { useEffect, useState } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import './styles/App.css';
import PresentationText from './components/PresentationText';
import About from './components/About';
import Stack from './components/MyStack';

function App() {

  const [isSticky, setIsSticky] = useState(false)

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
        <PresentationText />
        <Navbar isSticky={isSticky} />
        <article className='mb-5 mt-40'>
          <button className="Btn rotate-180">
            <svg height="1.2em" className="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
          </button>
        </article>
      </div>

      <div className='h-[100vh] w-full flex justify-center items-center bg-gray-200' style={{ borderTop: "#01c38d 5px solid", borderBottom: "#01c38d 5px solid" }}>
        <About />
        <Stack />
      </div >
    </>
  );
}

export default App;
