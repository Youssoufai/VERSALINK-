import React from 'react'
import '../App.css'
const Navbar = () => {
    return (
        <>
            <header
                className='flex justify-between p-4 items-center'
            >
                <div>
                    <h1
                        className='text-4xl'
                    >Versalink</h1>
                </div>
                <ul
                    className='flex px-1 font-sans text-xl'
                    id='nav'
                >
                    <li
                        className='px-3'
                    >Home</li>
                    <li
                        className='px-3'
                    >About</li>
                    <li
                        className='px-3'
                    >Contact Us</li>
                    <li
                        className='px-3'
                    >More</li>
                </ul>
                <div>
                    <button>Sign up</button>
                </div>
            </header>
        </>
    )
}

export default Navbar