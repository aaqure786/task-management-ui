import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-16 bg-blue-600 text-white flex flex-row  sticky top-0'>
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
            <button className='bg-white mx-5 text-black text-center border rounded-lg px-4 py-1'>Login</button>
            <button className='bg-white mx-5 text-black text-center border rounded-lg px-4 py-1'>Signup</button>

            </div>

        </div>
    )
}

export default Navbar