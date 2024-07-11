import { useRef } from "react";
import { useIntersectionObserver } from "../../hook/IntersectionObserver";
import "../../styles/About.css";

export default function About() {
  const aboutRef = useRef(null);
  const isVisible = useIntersectionObserver(aboutRef);

  return (
    <div ref={aboutRef} className="w-full md:w-1/3 me-5">
      <div className="h-3/4 flex flex-col items-center justify-center">
        <h4
          className={`text-[#01c38d] text-xl md:text-4xl mb-2 font-semibold p-2 border-animated w-2/3 md:w-full text-center md:text-left ${
            isVisible ? "animate-border" : ""
          }`}
        >
          Find out who you are hiring
        </h4>
        <article className="w-4/5 md:w-full">
          <p
            className={`${
              isVisible
                ? "text-xs md:text-base opacity-100 transition-opacity duration-1000"
                : "opacity-0"
            } mb-2`}
          >
            I'm Tomas Trujillo, a fullstack developer passionate about learning
            and embracing challenges. I usually work with TypeScript, React, and
            NestJS for backend.
          </p>
          <p
            className={`${
              isVisible
                ? "text-xs md:text-base opacity-100 transition-opacity duration-1000"
                : "opacity-0"
            } mb-2`}
          >
            One quality that stands out about me is my ability to be
            self-taught; This philosophy of effort and continuous learning
            drives me to achieve my goals without getting stuck. I am currently
            pursuing a degree in Computer Engineering, which further solidifies
            my commitment to this field.
          </p>
          <p
            className={`${
              isVisible
                ? "text-xs md:text-base opacity-100 transition-opacity duration-1000"
                : "opacity-0"
            }`}
          >
            In my free time, I enjoy creating projects that can be useful to
            others. This not only helps me improve my skills but also allows me
            to contribute to the community.
          </p>
        </article>
      </div>
      <div className="h-1/4 flex flex-col items-center justify-center">
        <h4
          className={`text-[#01c38d] text-xl md:text-4xl mb-2 font-semibold p-2 border-animated w-2/3 md:w-full text-center md:text-left ${
            isVisible ? "animate-border" : ""
          }`}
        >
          Lenguages
        </h4>
        <div
          className={`w-full flex justify-center ${
            isVisible ? "animate-fade-in" : ""
          }`}
        >
          <article
            className={`bg-white drop-shadow-lg w-1/6 md:w-1/4 me-5 p-3 rounded-xl text-center hover:drop-shadow-2xl transform hover:scale-110 transition-transform duration-200 ease-in-out `}
          >
            <span className="font-medium text-xs md:text-sm">Spanish</span>
            <p className="font-light text-xs md:text-base">Native</p>
          </article>
          <article
            className={`bg-white drop-shadow-lg w-1/6 md:w-1/4 me-5 p-3 rounded-xl text-center hover:drop-shadow-2xl transform hover:scale-110 transition-transform duration-200 ease-in-out`}
          >
            <span className="font-medium text-xs md:text-base">English</span>
            <p className="font-light text-xs md:text-base">C1</p>
          </article>
          <article
            className={`bg-white drop-shadow-lg w-1/6 md:w-1/4 p-3 rounded-xl text-center hover:drop-shadow-2xl transform hover:scale-110 transition-transform duration-200 ease-in-out`}
          >
            <span className="font-medium text-xs md:text-base">German</span>
            <p className="font-light text-xs md:text-base">Learning</p>
          </article>
        </div>
      </div>
    </div>
  );
}
