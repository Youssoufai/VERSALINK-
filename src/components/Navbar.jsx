import React from 'react'
import '../App.css'
const Navbar = () => {
    return (
        <>
            <header
                className='flex justify-between py-7 px-7 items-center'
            >
                <div>
                    <h1
                        className='text-4xl'
                    >Versalink</h1>
                </div>
                <ul
                    className='flex gap-2 font-sans text-xl w-1/3 justify-center'
                    id='nav'
                >
                    <li
                        className='px-5'
                        id='test'
                    >VDI</li>
                    <li
                        className='px-3'
                    >Versalink Post</li>
                    <li
                        className='px-3'
                    >Clothing Brand</li>
                </ul>
                <div

                >
                    <button

                    >Sign up</button>
                </div>
            </header>
        </>
    )
}

export default Navbar