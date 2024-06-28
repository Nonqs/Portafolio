import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../../styles/Projects.css"
import github from "../../public/svgs/github.svg"
import web from "../../public/svgs/web.svg"
import { Project } from '../../types/types';
import { useIntersectionObserver } from '../../hook/IntersectionObserver';
import { useRef } from 'react';
import TechBaul from './TechBaul';
import Background from './Background';

export default function ProjectAnimation({ projects }: { projects: Project[] }) {

   const projectRef = useRef<HTMLDivElement>(null)
   const isVisible = useIntersectionObserver(projectRef)

   return (
      <section ref={projectRef}>
         {projects.map((project, index) => (
            <div key={index} className={`flex justify-center mb-20 h-[80h] rounded-xl drop-shadow-2xl backdrop-blur-sm  ${isVisible ? ("animate-fade-in") : ("opacity-0")}`} style={{ borderTop: "#01c38d 8px solid" }}>
               <Background />
               {project.github &&
                  (
                     <a className='absolute top-1 left-1 z-50' href={project.github} target="_blank" rel="noopener noreferrer">
                        <div className={`p-1 bg-white border border-black drop-shadow-lg me-2 mb-2 rounded-xl hover:drop-shadow-2xl transform hover:scale-110 transition-transform duration-200 ease-in-out`}>
                           <img className='w-10' src={github} alt="" />
                        </div>
                     </a>
                  )}
               {project.web &&
                  (
                     <a className='absolute top-1 left-16 z-50' href={project.web} target="_blank" rel="noopener noreferrer">
                        <div className={`p-1 bg-white border border-black drop-shadow-lg me-2 mb-2 rounded-xl hover:drop-shadow-2xl transform hover:scale-110 transition-transform duration-200 ease-in-out`}>
                           <img className='w-10' src={web} alt="" />
                        </div>
                     </a>
                  )}
               <div className='flex w-4/7'>
                  <div className="animationContainer">
                     <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={false}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                           rotate: 0,
                           stretch: 0,
                           depth: 100,
                           modifier: 2.5,
                        }}
                        initialSlide={1}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                           nextEl: '.swiper-button-next',
                           prevEl: '.swiper-button-prev',
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container"
                     >
                        {project.images.map(tech => (
                           <SwiperSlide className='flex justify-center' key={tech.alt}>
                              <img className='w-[40rem] shadow-xl' src={tech.svg} alt={tech.alt}/>
                           </SwiperSlide>
                        ))}
                        <div className="slider-controler">
                           <div className="swiper-pagination"></div>
                        </div>
                     </Swiper>
                  </div>
               </div>
               <div className='w-3/7 h-full flex flex-col mt-10 ms-10 me-10'>
                  <article className='flex flex-col mb-5'>
                     <h4 className={`text-[#01c38d] mb-2 text-4xl font-semibold p-2 border-animated-right ${isVisible ? 'animate-border-right' : ''}`}>
                        {project.name}
                     </h4>
                     <span dangerouslySetInnerHTML={{ __html: project.description }}></span>
                  </article>
                  <div className="rounded-xl shadow-inner p-1 flex justify-center bottom-0 border border-gray-200 bg-white">
                     <TechBaul isVisible={isVisible} svgs={project.technologies} />
                  </div>
               </div>

            </div>
         ))}
         <article className='w-full flex flex-col justify-center items-center mb-20'>
            <h4 className={`text-[#01c38d] text-center text-xl p-2 font-thin`}>
               See more on my github
            </h4>
            <a href="https://github.com/Nonqs" target="_blank" rel="noopener noreferrer">
               <div className={`p-1 bg-white border border-black flex justify-center items-center w-28 drop-shadow-lg me-2 mb-2 rounded-xl hover:drop-shadow-2xl transform hover:scale-110 transition-transform duration-200 ease-in-out`}>
                  <img className='w-10' src={github} alt="" />
                  <span>GitHub</span>
               </div>
            </a>
         </article>
      </section >
   );
}
