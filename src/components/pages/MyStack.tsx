import css from "../../public/css.svg"
import html from "../../public/html.svg"
import js from "../../public/js.svg"
import bootstrap from "../../public/bootstrap.svg"
import express from "../../public/express.svg"
import git from "../../public/git.svg"
import github from "../../public/github.svg"
import mongo from "../../public/mongo.svg"
import mysql from "../../public/mysql.svg"
import prisma from "../../public/prisma.svg"
import ts from "../../public/ts.svg"
import tailwind from "../../public/tailwind.svg"
import vercel from "../../public/vercel.svg"
import vscode from "../../public/vscode.svg"
import nest from "../../public/nestjs.svg"
import next from "../../public/next.svg"
import nodejs from "../../public/nodejs.svg"
import react from "../../public/react.svg"
import insomnia from "../../public/insomnia.svg"
import sql from "../../public/sql.svg"
import java from "../../public/java.svg"
import { useRef } from "react"
import "../../styles/About.css"
import { useIntersectionObserver } from '../../hook/IntersectionObserver';
import TechBaul from "../utils/TechBaul"
import { Svg } from "../../types/types"


export default function Stack() {

    const stackRef = useRef(null)
    const isVisible = useIntersectionObserver(stackRef)

    const lenguages: Svg[] = [{ svg: css }, { svg: html }, { svg: js }, { svg: ts }, { svg: nodejs }, { svg: sql }]
    const frameworksAndLibraries: Svg[] = [{ svg: react }, { svg: next }, { svg: express }, { svg: nest }, { svg: tailwind }, { svg: bootstrap }, { svg: prisma }]
    const tools: Svg[] = [{ svg: mysql }, { svg: git }, { svg: github }, { svg: vscode }, { svg: insomnia }, { svg: vercel }]
    const learningNowSvgs: Svg[] = [{ svg: mongo }, { svg: java }]

    return (
        <div ref={stackRef} className="w-1/3 ms-5">
            <div className="h-3/4">
                <h5 className={`text-[#01c38d] text-4xl mb-2 font-semibold p-2 border-animated-right w-full ${isVisible ? 'animate-border-right' : ''}`}>
                    My stack
                </h5>
                <div className="rounded-xl shadow-inner p-1 mb-1 flex flex-col items-center" style={{ border: "white 1px solid" }}>
                    <span className='mb-1 font-medium'>Lenguages</span>
                    <TechBaul isVisible={isVisible} svgs={lenguages} />
                </div>
                <div className="rounded-xl shadow-inner p-1 mb-1 flex flex-col items-center" style={{ border: "white 1px solid" }}>
                    <span className='mb-1 font-medium'>Frameworks and Libraries</span>
                    <TechBaul isVisible={isVisible} svgs={frameworksAndLibraries} />
                </div>
                <div className="rounded-xl shadow-inner p-1 mb-1 flex flex-col items-center" style={{ border: "white 1px solid" }}>
                    <span className='mb-1 font-medium'>Tools, Cloud and Providers</span>
                    <article className={`flex flex-wrap ${isVisible ? 'animate-fade-in' : ''}`}>
                        <TechBaul isVisible={isVisible} svgs={tools} />
                    </article>
                </div>
            </div>
            <div className="h-1/4">
                <h5 className={`text-[#01c38d] text-4xl mb-2 font-semibold p-2 border-animated-right w-full ${isVisible ? 'animate-border-right' : ''}`}>
                    Learning now
                </h5>
                <div className="rounded-xl shadow-inner p-1 mb-1 flex justify-center" style={{ border: "white 1px solid" }}>
                    <article className={`flex flex-wrap ${isVisible ? 'animate-fade-in' : ''}`}>
                        <TechBaul isVisible={isVisible} svgs={learningNowSvgs} />
                    </article>
                </div>
            </div>
        </div>
    )
}
