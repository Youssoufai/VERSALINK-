import React from 'react'
import '../App.css'
import Banner from '../imgs/banner.webp'
import Bg2 from '../imgs/bg2.avif'
const Hero = () => {
    return (
        <>
            <main className="hero">
                <section
                    className='flex justify-between items-center'
                >
                    <section
                        className='w-3/6 flex flex-col gap-8'
                    >
                        <h1
                            className='text-6xl'
                        >Connecting Possibilites</h1>
                        <h1
                            className='text-6xl'
                        >Empowering Change</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia expedita iusto eius eum harum voluptatum cupiditate perspiciatis maxime dignissimos ab? Omnis praesentium dicta corporis ad architecto quo distinctio molestiae magnam.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias similique voluptas possimus illo. Assumenda ipsa fuga ipsum a, praesentium quibusdam enim voluptate aperiam reprehenderit perferendis corporis dignissimos, sapiente perspiciatis nesciunt?
                        </p>
                    </section>
                    <section
                        className='w-3/6'
                    >
                    </section>
                </section>
            </main>
        </>
    )
}

export default Hero