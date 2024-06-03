import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../../styles/Projects.css"
import github from "../../public/github.svg"
import { Project } from '../../types/types';
import { useIntersectionObserver } from '../../hook/IntersectionObserver';
import { useRef } from 'react';
import TechBaul from './TechBaul';

export default function ProjectAnimation({ projects }: { projects: Project[] }) {

   const projectRef = useRef<HTMLDivElement>(null)
   const isVisible = useIntersectionObserver(projectRef)

   return (
      <section ref={projectRef}>
         {projects.map((project, index) => (
            <div key={index} className={`flex justify-center mb-20 h-[80h] bg-gray-200 rounded-xl drop-shadow-2xl backdrop-blur-sm  ${isVisible ? ("animate-fade-in") : ("opacity-0")}`} style={{ borderTop: "#01c38d 8px solid", borderBottom: "#01c38d 8px solid" }}>     
               <a className='absolute top-1 left-1 p-1 rounded-xl border border-black shadow-inner' href="">
                  <img className='w-10 opacity-100' src={github} alt="" />
               </a>
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
                        {project.technologies.map(tech => (
                           <SwiperSlide className='flex justify-center' key={tech.alt}>
                              <img src={tech.svg} alt={tech.alt} />
                           </SwiperSlide>
                        ))}
                        <div className="slider-controler">
                           <div className="swiper-pagination"></div>
                        </div>
                     </Swiper>
                  </div>
               </div>
               <div className='w-3/7 h-full flex flex-col mt-10 me-20'>
                  <article className='flex flex-col mb-10'>
                     <h4 className={`text-[#01c38d] mb-2 text-4xl font-semibold p-2 border-animated-right ${isVisible ? 'animate-border-right' : ''}`}>
                        {project.name}
                     </h4>
                     <span>{project.description}</span>
                  </article>
                  <div className="rounded-xl shadow-inner p-1 flex justify-center bottom-0" style={{ border: "white 1px solid" }}>
                     <TechBaul isVisible={isVisible} svgs={project.technologies} />
                  </div>
               </div>

            </div>
         ))}
      </section >
   );
}
