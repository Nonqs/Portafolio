export function Navbar({ isSticky }) {
    return (
        <nav className={`w-2/3 h-[10vh] bg-white rounded-xl flex items-center justify-around ${isSticky ? 'fixed top-0 z-50 mt-10' : 'z-50'} navbar-transition`}>
            <h2 className="text-2xl font-extrabold">{"<Tt />"}</h2>
            <article>
                <button className="me-6">About me</button>
                <button className="me-6">Projects</button>
                <button>Contact me</button>
            </article>
        </nav>
    );
}