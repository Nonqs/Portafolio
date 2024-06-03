import { useRef } from "react";
import { useIntersectionObserver } from "../../hook/IntersectionObserver";
import ProjectAnimation from "../utils/ProjectAnimation";
import { Project } from "../../types/types";

import insomnia from "../../public/insomnia.svg"
import sql from "../../public/sql.svg"
import java from "../../public/java.svg"

export default function Projects() {
    
    const projectsRef = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(projectsRef);

    const projects: Project[] = [
        {
            name: "Financial Tracker",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, est illum magni quisquam perferendis quam. Error dolore ullam molestias beatae. Facilis eaque dolorem sapiente qui recusandae. Ducimus numquam expedita dolore?",
            technologies: [{svg: insomnia, alt:"insomnia" }, {svg: sql, alt: "sql"}, {svg: java, alt:"java"}]
        },
        {
            name: "Math",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, est illum magni quisquam perferendis quam. Error dolore ullam molestias beatae. Facilis eaque dolorem sapiente qui recusandae. Ducimus numquam expedita dolore?",
            technologies: [{svg: insomnia, alt:"insomnia" }, {svg: sql, alt: "sql"}, {svg: java, alt:"java"}]
        }
    ]

    return (
        <div ref={projectsRef} className="container flex flex-col items-center justify-center">
            <h4 className={`text-[#01c38d] text-center mb-10 text-4xl font-bold p-2 border-animated w-full ${isVisible ? 'animate-border' : ''}`}>
                Projects
            </h4>
            <div className="h-[40vh] w-full mt-10">
                <ProjectAnimation projects={projects}/>
            </div>
        </div>
    );
}

