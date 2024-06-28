export default function Navbar({ isSticky }: {isSticky: boolean}) {
    return (
        <nav className={`w-full md:w-2/3 h-[10vh] bg-gray-100 drop-shadow-2xl rounded-xl flex items-center justify-around ${isSticky ? 'fixed top-0 z-50 md:mt-5' : 'z-50'} navbar-transition`}>
            <a href="#main">
            <h2 className="text-2xl font-extrabold">{"<Tt />"}</h2>
            </a>
            <article>
                <a href="#about">
                <button className="me-6">About me</button>
                </a>
                <a href="#projects">
                <button className="me-6">Projects</button>
                </a>
                <a href="#contact">
                <button>Contact me</button>
                </a>
            </article>
        </nav>
    );
}