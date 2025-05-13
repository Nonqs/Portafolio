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
import n8n from "../../public/svgs/n8n.svg";
import figma from "../../public/svgs/figma.svg";
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
    { svg: java },
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
    { svg: mongo },
  ];
  const learningNowSvgs: Svg[] = [{ svg: figma }, { svg: n8n }];

  return (
    <div ref={stackRef} className="w-full md:w-1/3 mt-5 md:mt-0 md:ms-5 h-full">
      <div className=" w-full flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-xl shadow-inner p-1 mb-1 flex flex-col items-center w-4/5 md:w-full bg-gray-200">
            <span className="mb-1 font-medium text-xs md:text-base">
              Lenguages
            </span>
            <TechBaul isVisible={isVisible} svgs={lenguages} />
          </div>
          <div className="rounded-xl shadow-inner p-1 mb-1 flex flex-col items-center w-4/5 md:w-full bg-gray-200">
            <span className="mb-1 font-medium text-xs md:text-base">
              Frameworks and Libraries
            </span>
            <TechBaul isVisible={isVisible} svgs={frameworksAndLibraries} />
          </div>
          <div className="rounded-xl shadow-inner p-1 mb-1 flex flex-col items-center w-4/5 md:w-full bg-gray-200">
            <span className="mb-1 font-medium text-xs md:text-base">
              Tools, Cloud and Providers
            </span>
            <article
              className={`flex flex-wrap ${isVisible ? "animate-fade-in" : ""}`}
            >
              <TechBaul isVisible={isVisible} svgs={tools} />
            </article>
          </div>
          <div className="rounded-xl shadow-inner p-1 mb-1 flex flex-col items-center w-4/5 md:w-full bg-gray-200">
            <span className="mb-1 font-medium text-xs md:text-base">
              Learning now
            </span>
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
