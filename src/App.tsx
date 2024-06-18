import { useEffect, useRef, useState } from 'react';
import Background from './components/utils/Background';
import Navbar from './components/pages/Navbar';
import './styles/App.css';
import PresentationText from './components/pages/PresentationText';
import About from './components/pages/About';
import Stack from './components/pages/MyStack';
import { useIntersectionObserver } from './hook/IntersectionObserver';
import Projects from './components/pages/Projects';
import ContactPage from './components/pages/ContactPage';

function App() {

  const [isSticky, setIsSticky] = useState(false)
  const aboutRef = useRef(null);
  const isVisible = useIntersectionObserver(aboutRef);

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

      <section className="flex flex-col h-[100vh] items-center justify-between">
        <PresentationText />
        <Navbar isSticky={isSticky} />
        <article className='mb-5 mt-52 animate-bounce'>
          <button className="Btn rotate-180">
            <svg height="1.2em" className="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
          </button>
        </article>
      </section>

      <section ref={aboutRef} className='h-[90vh] w-full flex flex-col justify-center items-center bg-gray-200' style={{ borderTop: "#01c38d 8px solid", borderBottom: "#01c38d 8px solid" }}>
        <div className='container'>
          <h2 className={`text-[#01c38d] text-center mb-10 text-4xl font-bold p-2 border-animated w-full ${isVisible ? 'animate-border' : ''}`}>About Me</h2>
        </div>
        <div className="flex w-full justify-center">
          <About />
          <Stack />
        </div>
      </section>

      <section className='h-auto'>
        <div className='w-full flex justify-center mt-10'>
          <Projects />
        </div>
      </section>

      <section className='h-[100vh]  bg-gray-200 ' style={{ borderTop: "#01c38d 8px solid", borderBottom: "#01c38d 8px solid" }}>
        <div className='w-full flex justify-center mt-10'>
          <ContactPage />
        </div>
      </section>
    </>
  );
}

export default App;
