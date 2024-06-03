import { Svg } from "../../types/types";


export default function TechBaul({ svgs, isVisible }: { svgs: Svg[], isVisible: boolean }) {

    return (
        <article className={`flex flex-wrap ${isVisible ? 'animate-fade-in' : ''}`}>
            {svgs.map((svg, index) => (
                <img
                    key={index}
                    className={`w-12 p-1 bg-white drop-shadow-lg me-2 mb-2 rounded-xl hover:drop-shadow-2xl transform hover:scale-110 transition-transform duration-200 ease-in-out`}
                    src={svg.svg}
                    alt={svg.alt ? svg.alt : ""}
                />
            ))}
        </article>
    )
}