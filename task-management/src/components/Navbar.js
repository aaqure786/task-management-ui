import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full h-16 bg-blue-600 text-white flex flex-row z-10  sticky top-0'>
            <div className='w-1/4 items-center flex justify-center'>
                <h1 className='text-3xl'>Task Management</h1>
            </div>
            <div className='w-2/4 bg-blue-700 flex justify-center items-center'>
            <ul className='flex flow-row text-white text-xl'>
                <li className='mx-4 hover:text-blue-300'>Home</li>
                <li className='mx-4 hover:text-blue-300'>About Us</li>
                <li className='mx-4 hover:text-blue-300'>Contact Us</li>
            </ul>

            </div>
            <div className='w-1/4 bg-blue-700 flex items-center justify-center '>
            <Link to={"/login"}  className='bg-white mx-5 text-black text-center border rounded-lg px-4 py-1'>Login</Link>
            <Link to={"/signup"} className='bg-white mx-5 text-black text-center border rounded-lg px-4 py-1'>Signup</Link>

            </div>

        </div>
    )
}

export default Navbar