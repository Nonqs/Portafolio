interface Img {
    svg: string
    alt: string
}

export interface Project {
    name: string
    description: string
    technologies: Img[]
}

export interface Svg {
    svg: string
    alt?: string
}