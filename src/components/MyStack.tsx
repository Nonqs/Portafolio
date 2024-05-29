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


export default function Stack() {

    const svgs = [css, html, js, ts, react, next, nodejs, express, nest, git, github, mysql, prisma, tailwind, bootstrap, vercel, vscode]
    const LearningNowSvgs = [mongo]

    return (
        <div className="w-1/3 ms-5">
            <div>
                <h5 className="text-[#01c38d] text-4xl font-semibold p-2 border-animated-right">
                    You don't have to worry, I've got you covered
                </h5>
                <article className="flex flex-wrap mt-2">
                    {svgs.map((svg, index) => (
                        <img
                            key={index}
                            className="w-10 p-1 bg-white shadow-inner me-2 mb-2 rounded-xl hover:drop-shadow-2xl"
                            src={svg}
                            alt=""
                        />
                    ))}
                </article>
            </div>
            <div>
                <h5 className="text-[#01c38d] text-4xl font-semibold p-2 border-animated-right">
                    Learning now
                </h5>
                <article className="flex flex-wrap mt-2">
                    {LearningNowSvgs.map((svg, index) => (
                        <img
                            key={index}
                            className="w-10 p-1 bg-white shadow-inner me-2 mb-2 rounded-xl hover:drop-shadow-2xl"
                            src={svg}
                            alt=""
                        />
                    ))}
                </article>
            </div>
        </div>
    );
}
