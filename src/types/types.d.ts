interface Img {
    svg: string
    alt: string
}

export interface Project {
    name: string
    web?: string
    github?: string
    description: string
    technologies: Img[]
}

export interface Svg {
    svg: string
    alt?: string
}