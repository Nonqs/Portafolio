import { useRef } from "react";
import { useIntersectionObserver } from "../../hook/IntersectionObserver";
import "../../styles/About.css";

export default function About() {
  const aboutRef = useRef(null);
  const isVisible = useIntersectionObserver(aboutRef);

  return (
    <div
      ref={aboutRef}
      className="w-full md:w-1/3 me-5 flex flex-col justify-center"
    >
      <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200">
        <li className="relative -ms-1.5 flex items-start gap-4">
          <span className="size-3 shrink-0 rounded-full bg-[#01c38d]"></span>

          <div className="-mt-2">
            <time className="text-xs/none font-medium text-gray-700"></time>

            <h3 className="text-lg font-bold text-gray-900">
              Freelance Backend Developer
            </h3>

            <p className="mt-0.5 text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              officiis tempora ipsum adipisci tenetur sunt quae exercitationem
              sed pariatur porro!
            </p>
          </div>
        </li>

        <li className="relative -ms-1.5 flex items-start gap-4">
          <span className="size-3 shrink-0 rounded-full bg-[#01c38d]"></span>

          <div className="-mt-2">
            <time className="text-xs/none font-medium text-gray-700">
              10/09/2024
            </time>

            <h3 className="text-lg font-bold text-gray-900">
              Start the Computer Science degree at the UPV
            </h3>

            <p className="mt-0.5 text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              officiis tempora ipsum adipisci tenetur sunt quae exercitationem
              sed pariatur porro!
            </p>
          </div>
        </li>

        <li className="relative -ms-1.5 flex items-start gap-4">
          <span className="size-3 shrink-0 rounded-full bg-[#01c38d]"></span>

          <div className="-mt-2">
            <time className="text-xs/none font-medium text-gray-700">
              15/01/2024
            </time>

            <h3 className="text-lg font-bold text-gray-900">
              Started learning the basics
            </h3>

            <p className="mt-0.5 text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              officiis tempora ipsum adipisci tenetur sunt quae exercitationem
              sed pariatur porro!
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
}
