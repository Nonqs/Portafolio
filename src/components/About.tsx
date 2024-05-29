import { useRef } from 'react';
import { useIntersectionObserver } from '../hook/IntersectionObserver';

export default function About() {

    const aboutRef = useRef(null)
    const isVisible = useIntersectionObserver(aboutRef)

    return (
        <div ref={aboutRef} className='w-1/3 me-5'>
            <article className='h-1/2'>
                <h4 className={`text-[#01c38d] mb-2 text-4xl font-semibold p-2 border-animated ${isVisible ? 'animate-border' : ''}`}>
                    Find out who you are hiring
                </h4>
                <p className={`${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam harum recusandae officiis maxime necessitatibus quaerat ipsa voluptatibus! Dolores totam illo suscipit vero id nulla impedit obcaecati eligendi, amet voluptate!
                </p>
            </article>
            <div className='h-1/2'>
                <h4 className={`text-[#01c38d] text-4xl mb-2 font-semibold p-2 border-animated ${isVisible ? 'animate-border' : ''}`}>
                    We can talk in
                </h4>
                <div className='w-full flex'>
                    <article className={`bg-white drop-shadow-2xl w-1/4 me-5 p-3 rounded-xl text-center ${isVisible ? 'animate-fade-in' : ''}`}>
                        <span className='font-medium'>Spanish</span>
                        <p className='font-light'>Native</p>
                    </article>
                    <article className={`bg-white drop-shadow-2xl w-1/4 me-5 p-3 rounded-xl text-center ${isVisible ? 'animate-fade-in' : ''}`}>
                        <span className='font-medium'>English</span>
                        <p className='font-light'>B2</p>
                    </article>
                    <article className={`bg-white shadow-inner w-1/4 p-3 rounded-xl text-center ${isVisible ? 'animate-fade-in' : ''}`}>
                        <span className='font-medium'>German</span>
                        <p className='font-light'>Learning</p>
                    </article>
                </div>
            </div>
        </div>
    );
}
