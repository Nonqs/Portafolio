import css from "../public/css.svg"
import html from "../public/html.svg"
import js from "../public/js.svg"
import bootstrap from "../public/bootstrap.svg"
import express from "../public/express.svg"
import git from "../public/git.svg"
import github from "../public/github.svg"
import mongo from "../public/mongo.svg"
import mysql from "../public/mysql.svg"
import prisma from "../public/prisma.svg"
import ts from "../public/ts.svg"
import tailwind from "../public/tailwind.svg"
import vercel from "../public/vercel.svg"
import vscode from "../public/vscode.svg"
import nest from "../public/nestjs.svg"
import next from "../public/next.svg"
import nodejs from "../public/nodejs.svg"
import react from "../public/react.svg"
import { useRef } from "react"
import { useIntersectionObserver } from '../hook/IntersectionObserver';


export default function Stack() {

    const stackRef = useRef(null)
    const isVisible = useIntersectionObserver(stackRef)

    const svgs = [css, html, js, ts, react, next, nodejs, express, nest, git, github, mysql, prisma, tailwind, bootstrap, vercel, vscode]
    const learningNowSvgs = [mongo]

    return (
        <div ref={stackRef} className="w-1/3 ms-5">
            <div className="h-2/3">
                <h5 className={`text-[#01c38d] text-4xl mb-2 font-semibold p-2 border-animated-right w-full ${isVisible ? 'animate-border-right' : ''}`}>
                    My stack
                </h5>
                <article className={`flex flex-wrap ${isVisible ? 'animate-fade-in' : ''}`}>
                    {svgs.map((svg, index) => (
                        <img
                            key={index}
                            className={`w-12 p-1 bg-white shadow-inner me-2 mb-2 rounded-xl hover:drop-shadow-2xl`}
                            src={svg}
                            alt=""
                        />
                    ))}
                </article>
            </div>
            <div className="h-1/3">
                <h5 className={`text-[#01c38d] mb-2 text-4xl font-semibold p-2 border-animated-right ${isVisible ? 'animate-border-right' : ''}`}>
                    Learning now
                </h5>
                <article className={`flex flex-wrap ${isVisible ? 'animate-fade-in' : ''}`}>
                    {learningNowSvgs.map((svg, index) => (
                        <img
                            key={index}
                            className={`w-12 p-1 bg-white shadow-inner me-2 mb-2 rounded-xl hover:drop-shadow-2xl`}
                            src={svg}
                            alt=""
                        />
                    ))}
                </article>
            </div>
        </div>
    )
}
