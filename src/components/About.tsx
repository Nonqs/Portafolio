

export default function About() {
    return (
        <div className='w-1/3 me-5'>
            <article>
                <h4 className='text-[#01c38d] text-4xl font-semibold p-2 border-animated'>Find out who you are hiring</h4>
                <p className=''>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam harum recusandae officiis maxime necessitatibus quaerat ipsa voluptatibus! Dolores totam illo suscipit vero id nulla impedit obcaecati eligendi, amet voluptate!
                </p>
            </article>
            <div className='w-full mt-10'>
                <h4 className='text-[#01c38d] text-4xl font-semibold p-2 border-animated'>We can talk in</h4>
                <div className='w-full flex  mt-5'>
                    <article className='bg-white drop-shadow-2xl w-1/4 me-5 p-3 rounded-xl text-center'>
                        <span className='font-medium'>Spanish</span>
                        <p className='font-light'>Native</p>
                    </article>
                    <article className='bg-white shadow-inner w-1/4 p-3 rounded-xl text-center'>
                        <span className='font-medium'>English</span>
                        <p className='font-light'>B2</p>
                    </article>
                </div>
            </div>
        </div>
    )
}