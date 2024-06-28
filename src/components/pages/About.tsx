import { useRef } from 'react';
import { useIntersectionObserver } from '../../hook/IntersectionObserver';
import "../../styles/About.css"

export default function About() {

    const aboutRef = useRef(null)
    const isVisible = useIntersectionObserver(aboutRef)

    return (
        <div ref={aboutRef} className='w-1/3 me-5'>
            <article className='h-3/4'>
                <h4 className={`text-[#01c38d] text-4xl mb-2 font-semibold p-2 border-animated w-full ${isVisible ? 'animate-border' : ''}`}>
                    Find out who you are hiring
                </h4>
                <p className={`${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'} mb-2`}>
                    I'm Tomas Trujillo, a fullstack developer passionate about learning and embracing challenges. I usually work with TypeScript, React, and NestJS for backend.
                </p>
                <p className={`${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'} mb-2`}>
                    One quality that stands out about me is my ability to be self-taught; This philosophy of effort and continuous learning drives me to achieve my goals without getting stuck. I am currently pursuing a degree in Computer Engineering, which further solidifies my commitment to this field.
                </p>
                <p className={`${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
                    In my free time, I enjoy creating projects that can be useful to others. This not only helps me improve my skills but also allows me to contribute to the community.
                </p>
            </article>
            <div className='h-1/4'>
                <h4 className={`text-[#01c38d] text-4xl mb-2 font-semibold p-2 border-animated w-full ${isVisible ? 'animate-border' : ''}`}>
                    Lenguages
                </h4>
                <div className={`w-full flex ${isVisible ? 'animate-fade-in' : ''}`}>
                    <article className={`bg-white drop-shadow-lg w-1/4 me-5 p-3 rounded-xl text-center hover:drop-shadow-2xl transform hover:scale-110 transition-transform duration-200 ease-in-out `}>
                        <span className='font-medium'>Spanish</span>
                        <p className='font-light'>Native</p>
                    </article>
                    <article className={`bg-white drop-shadow-lg w-1/4 me-5 p-3 rounded-xl text-center hover:drop-shadow-2xl transform hover:scale-110 transition-transform duration-200 ease-in-out`}>
                        <span className='font-medium'>English</span>
                        <p className='font-light'>C1</p>
                    </article>
                    <article className={`bg-white drop-shadow-lg w-1/4 p-3 rounded-xl text-center hover:drop-shadow-2xl transform hover:scale-110 transition-transform duration-200 ease-in-out`}>
                        <span className='font-medium'>German</span>
                        <p className='font-light'>Learning</p>
                    </article>
                </div>
            </div>
        </div>
    );
}
