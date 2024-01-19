import React, { useState } from 'react'
// , 
import { AiOutlineMenu, AiOutlineSetting } from "react-icons/ai"
import { RiAccountBoxFill } from "react-icons/ri"
import { MdOutlineCancel } from "react-icons/md"
import { motion } from "framer-motion"
import { BiChevronDown, BiLogOut } from "react-icons/bi"
import {  useNavigate } from 'react-router-dom'


const Navbar1 = () => {

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    const [menu, setMenu] = useState(false)
    const [cliked, setCliked] = useState(false)
    const pic = "data:image/png;base64,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"
    return (
        <div>

            <div className='flex w-full h-[10vh]    bg-gray-100 z-10     justify-between '>
                <div className='w-[70%] md:w-[23.5%]  flex items-center '>
                    <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 1 }} className='flex w-full bg-gray-300'>
                        <img  src={pic} alt='courier' className='m-2 h-10' />
                        <h1 className='text-2xl mt-2 font-semibold'> Task Management</h1>
                    </motion.div>

                </div>
                <div className='w-[30%] md:w-[66.5%] hidden md:flex items-center '>
                    <h1 className='text-2xl mx-5 font-bold '>Dashboard</h1>
                </div>

                <div className=' w-[10%] lg:w-[5%] md:w-[5%] flex items-center  md:mx-3 lg:mx-3'>
                    <div className='flex lg:hidden md:hidden mx-3'>
                        <AiOutlineMenu onClick={() => { setMenu(!menu) }} className='text-gray-500 cursor-pointer text-4xl' />
                    </div>


                </div>
                <div className='w-[20%]  relative items-center rounded-r-2xl hidden md:flex lg:flex'>
                    <div className='flex justify-between w-full ml-10'>
                        <h1 > <RiAccountBoxFill size={30} /> </h1>

                        <h1 className='text-lg md:text-2xl mx-3  '>Demo</h1>
                        <motion.h1 animate={cliked ? { rotate: 180 } : { rotate: 0 }} className='text-xl md:text-3xl mt-1 cursor-pointer '> <BiChevronDown onClick={() => { setCliked(!cliked) }} /> </motion.h1>

                    </div>
                    {cliked &&
                        <div className='w-full h-[150px] absolute top-20 z-10 right-10 bg-gray-100 justify-center rounded-3xl flex items-start  flex-col'>
                            
                            <button onClick={handleLogout} className='flex mt-2 '>
                                <BiLogOut size={20} className='mx-5 mt-1' />
                                <h1 className='text-xl font-semibold'>Logout</h1>
                            </button>
                        </div>
                    }
                </div>


            </div>
            {menu && <div className='absolute  bg-gray-100 top-0 z-20  flex justify-center w-full h-screen'>

                <div className='mt-10 flex justify-center'>
                    <MdOutlineCancel className='text-2xl cursor-pointer' onClick={() => { setMenu(!menu) }} />
                </div>
                <div className='flex items-center'>
                    <nav>
                        <motion.ul className='flex flex-col items-center '>
                            <div className='flex'>
                                <AiOutlineSetting size={20} className='mx-5 mt-1' />
                                <h1 className='text-xl font-semibold'>Manage Account</h1>
                            </div>
                            <div className='flex mt-2 '>
                                <BiLogOut size={20} className='mx-5 mt-1' />
                                <h1 className='text-xl font-semibold'>Logout</h1>
                            </div>
                        </motion.ul>
                    </nav>
                </div>
            </div>}
        </div>
    )
}

export default Navbar1