import css from "../../public/svgs/css.svg";
import html from "../../public/svgs/html.svg";
import js from "../../public/svgs/js.svg";
import bootstrap from "../../public/svgs/bootstrap.svg";
import express from "../../public/svgs/express.svg";
import git from "../../public/svgs/git.svg";
import github from "../../public/svgs/github.svg";
import mongo from "../../public/svgs/mongo.svg";
import mysql from "../../public/svgs/mysql.svg";
import prisma from "../../public/svgs/prisma.svg";
import ts from "../../public/svgs/ts.svg";
import tailwind from "../../public/svgs/tailwind.svg";
import vercel from "../../public/svgs/vercel.svg";
import vscode from "../../public/svgs/vscode.svg";
import nest from "../../public/svgs/nestjs.svg";
import next from "../../public/svgs/next.svg";
import nodejs from "../../public/svgs/nodejs.svg";
import react from "../../public/svgs/react.svg";
import insomnia from "../../public/svgs/insomnia.svg";
import sql from "../../public/svgs/sql.svg";
import java from "../../public/svgs/java.svg";
import vite from "../../public/svgs/vite-svgrepo-com.svg";
import { useRef } from "react";
import "../../styles/About.css";
import { useIntersectionObserver } from "../../hook/IntersectionObserver";
import TechBaul from "../utils/TechBaul";
import { Svg } from "../../types/types";

export default function Stack() {
  const stackRef = useRef(null);
  const isVisible = useIntersectionObserver(stackRef);

  const lenguages: Svg[] = [
    { svg: css },
    { svg: html },
    { svg: js },
    { svg: ts },
    { svg: nodejs },
    { svg: sql },
  ];
  const frameworksAndLibraries: Svg[] = [
    { svg: react },
    { svg: next },
    { svg: express },
    { svg: nest },
    { svg: tailwind },
    { svg: bootstrap },
    { svg: prisma },
  ];
  const tools: Svg[] = [
    { svg: mysql },
    { svg: git },
    { svg: github },
    { svg: vite },
    { svg: vscode },
    { svg: insomnia },
    { svg: vercel },
  ];
  const learningNowSvgs: Svg[] = [{ svg: mongo }, { svg: java }];

  return (
    <div ref={stackRef} className="w-full md:w-1/3 mt-5 md:mt-0 md:ms-5 ">
      <div className="h-3/4 w-full flex flex-col items-center justify-center">
        <h5
          className={`text-[#01c38d] text-xl md:text-4xl mb-2 font-semibold p-2 border-animated-right w-2/3 md:w-full text-center md:text-left ${
            isVisible ? "animate-border-right" : ""
          }`}
        >
          My stack
        </h5>
        <div className="flex flex-col justify-center items-center">
          <div
            className="rounded-xl shadow-inner md:p-1 mb-1 flex flex-col items-center w-4/5 md:w-full"
            style={{ border: "white 1px solid" }}
          >
            <span className="mb-1 font-medium text-xs md:text-base">
              Lenguages
            </span>
            <TechBaul isVisible={isVisible} svgs={lenguages} />
          </div>
          <div
            className="rounded-xl shadow-inner p-1 mb-1 flex flex-col items-center w-4/5 md:w-full"
            style={{ border: "white 1px solid" }}
          >
            <span className="mb-1 font-medium text-xs md:text-base">
              Frameworks and Libraries
            </span>
            <TechBaul isVisible={isVisible} svgs={frameworksAndLibraries} />
          </div>
          <div
            className="rounded-xl shadow-inner p-1 mb-1 flex flex-col items-center w-4/5 md:w-full"
            style={{ border: "white 1px solid" }}
          >
            <span className="mb-1 font-medium text-xs md:text-base">
              Tools, Cloud and Providers
            </span>
            <article
              className={`flex flex-wrap ${isVisible ? "animate-fade-in" : ""}`}
            >
              <TechBaul isVisible={isVisible} svgs={tools} />
            </article>
          </div>
        </div>
      </div>
      <div className="h-1/4 flex flex-col items-center justify-center">
        <h5
          className={`text-[#01c38d] text-xl md:text-4xl mb-2 font-semibold p-2 border-animated-right w-2/3 md:w-full text-center md:text-left ${
            isVisible ? "animate-border-right" : ""
          }`}
        >
          Learning now
        </h5>
        <div className="w-full flex justify-center items-center">
          <div
            className="rounded-xl shadow-inner p-1 mb-1 flex justify-center w-4/5 md:w-full"
            style={{ border: "white 1px solid" }}
          >
            <article
              className={`flex flex-wrap ${isVisible ? "animate-fade-in" : ""}`}
            >
              <TechBaul isVisible={isVisible} svgs={learningNowSvgs} />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
