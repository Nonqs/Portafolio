import { useRef } from "react";
import { useIntersectionObserver } from "../../hook/IntersectionObserver";
import ProjectAnimation from "../utils/ProjectSlider";
import { Project } from "../../types/types";

import css from "../../public/svgs/css.svg";
import mysql from "../../public/svgs/mysql.svg";
import prisma from "../../public/svgs/prisma.svg";
import ts from "../../public/svgs/ts.svg";
import tailwind from "../../public/svgs/tailwind.svg";
import next from "../../public/svgs/next.svg";
import react from "../../public/svgs/react.svg";
import vite from "../../public/svgs/vite-svgrepo-com.svg";
import nest from "../../public/svgs/nestjs.svg";
import mongo from "../../public/svgs/mongo.svg";

import fin1 from "../../public/imgs/fin-1.webp";
import fin2 from "../../public/imgs/fin-2.webp";
import fin3 from "../../public/imgs/fin-3.webp";
import fin4 from "../../public/imgs/fin-4.webp";
import math1 from "../../public/imgs/math-1.webp";
import math2 from "../../public/imgs/math-2.webp";
import math3 from "../../public/imgs/math-3.webp";
import subs1 from "../../public/imgs/subs1.webp";
import subs2 from "../../public/imgs/subs2.webp";
import subs3 from "../../public/imgs/subs3.webp";
import subs4 from "../../public/imgs/subs4.webp";
import chat1 from "../../public/imgs/chat.webp";
import chat2 from "../../public/imgs/chat2.webp";

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(projectsRef);

  const projects: Project[] = [
    {
      name: "FinTrack",
      github: "https://github.com/Nonqs/financial",
      description:
        "Fintrack is a financial tracker where you can effortlessly track all your income and expenses. It allows you to categorize each transaction, allocate them to designated accounts, and categorize your income and expenses depending on where they come from",
      technologies: [
        { svg: ts, alt: "ts logo" },
        { svg: react, alt: "react logo" },
        { svg: next, alt: "next logo" },
        { svg: mysql, alt: "mysql logo" },
        { svg: tailwind, alt: "tailwind logo" },
        { svg: prisma, alt: "prisma logo" },
      ],
      images: [
        { svg: fin1, alt: "img1" },
        { svg: fin2, alt: "img1" },
        { svg: fin3, alt: "img1" },
        { svg: fin4, alt: "img1" },
      ],
    },
    {
      name: "Substancial",
      description:
        "Landing page for Substancial restaurant, in which I worked as co-designer and programmer.<br></br>(In development) ",
      technologies: [
        { svg: vite, alt: "vite logo" },
        { svg: ts, alt: "ts logo" },
        { svg: react, alt: "sql" },
        { svg: css, alt: "java" },
        { svg: tailwind, alt: "tailwind logo" },
      ],
      images: [
        { svg: subs2, alt: "img1" },
        { svg: subs1, alt: "img1" },
        { svg: subs3, alt: "img1" },
        { svg: subs4, alt: "img1" },
      ],
    },
    {
      name: "Math.simple",
      web: "https://mathsimple.netlify.app",
      github: "https://github.com/Nonqs/Math.simple",
      description:
        "Math.simple is a math problem generator. It was planned to help people who want to practice exercise and don't want to search through a lot of worksheets that have no answers or ways to validate their results.<br /><br />The project is in demo; it only generates subtraction, additions, multiplications and division, but my plan is to add new features, from powers and roots to matrixes.",
      technologies: [
        { svg: vite, alt: "vite logo" },
        { svg: ts, alt: "ts logo" },
        { svg: react, alt: "sql" },
        { svg: css, alt: "java" },
      ],
      images: [
        { svg: math1, alt: "img1" },
        { svg: math2, alt: "img1" },
        { svg: math3, alt: "img1" },
      ],
    },
    {
      name: "NestChat",
      github: "https://github.com/Nonqs/realtime-chat",
      description:
        "NestChat is a real-time chat application built using NestJS and Socket.io.",
      technologies: [
        { svg: vite, alt: "vite logo" },
        { svg: ts, alt: "ts logo" },
        { svg: react, alt: "sql" },
        { svg: css, alt: "java" },
        { svg: tailwind, alt: "tailwind" },
        { svg: nest, alt: "nest" },
        { svg: mongo, alt: "mongo" },
      ],
      images: [
        { svg: chat1, alt: "img1" },
        { svg: chat2, alt: "img2" },
      ],
    },
  ];

  return (
    <div
      ref={projectsRef}
      className="container flex flex-col items-center justify-center"
    >
      <h2
        className={`text-[#01c38d] text-center md:mb-10 text-2xl md:text-4xl font-bold p-2 border-animated w-4/5 md:w-full ${
          isVisible ? "animate-border" : ""
        }`}
      >
        Projects
      </h2>
      <div className="h-auto w-full mt-10">
        <ProjectAnimation projects={projects} />
      </div>
    </div>
  );
}
