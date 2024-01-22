import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BiChevronDown } from 'react-icons/bi'
import { FaTasks } from "react-icons/fa";
import {  MdDashboard, MdOutlineManageAccounts } from 'react-icons/md'

import { Link } from 'react-router-dom'





const Sidebar = ({user}) => {
  const [tasks, setTasks] = useState(false)
  // const [roles, setRoles] = useState(false)
  return (
    <div className='bg-green-900 min-h-[90vh] py-[50px] w-full flex   flex-col'>
      {/* Dashboard button */}
      <Link to={"dashboard"} className='flex  px-2 py-1 border-b-[2px] mx-1 border-gray-600 active:border-white justify-start'>
        <MdDashboard size={30} style={{ color: "white" }} />
        <h1 className='text-white mt-1 mx-2 text-xl md:text-xl'>Dashboard</h1>

      </Link>
      <div className='flex mx-1 px-2 mt-2 py-1 border-b-[2px]  border-gray-600 active:border-white  justify-start'>
        <Link to={"tasks"} className='flex '>
          <FaTasks size={30} style={{ color: "white" }} />
          <h1 className='text-white mt-1 mx-2 text-xl md:text-xl'>Tasks </h1>
        </Link>
        <motion.h1 animate={tasks ? { rotate: 180 } : { rotate: 0 }} className='text-xl md:text-3xl mt-1 text-white  cursor-pointer '>
           <BiChevronDown onClick={() => { setTasks(!tasks) }} /> 
           </motion.h1>
      </div>
      {tasks && 
        <>
        <Link to={'alltasks'} className='flex w-[90%] ml-5 px-2 mt-2 py-1 border-b-[2px]  border-gray-200 justify-start'>
          
          <h1 className='text-white mt-1 mx-2 text-xl md:text-xl'>All Tasks</h1>
        </Link>
        <Link to={'addtask'} className='flex w-[90%] ml-5 px-2 mt-2 py-1 border-b-[2px]  border-gray-200 justify-start'>
          
          <h1 className='text-white mt-1 mx-2 text-xl md:text-xl'>Add Task</h1>
        </Link>
        </>
        
      }
      {user.role === "Admin" ?
      <div className='flex mx-1 px-2 mt-2 py-1 border-b-[2px]  border-gray-600 active:border-white  justify-start'>
        <Link to={"roles"} className='flex '>
          <MdOutlineManageAccounts size={30} style={{ color: "white" }} />
          <h1 className='text-white mt-1 mx-2 text-xl md:text-xl'>Roles </h1>
        </Link>
        {/* <motion.h1 animate={roles ? { rotate: 180 } : { rotate: 0 }} className='text-xl md:text-3xl mt-1 text-white  cursor-pointer '>
           <BiChevronDown onClick={() => { setRoles(!roles) }} /> 
           </motion.h1> */}
      </div>
      : '' }
      {/* {roles && 
        <>
        <Link to={'alltasks'} className='flex w-[90%] ml-5 px-2 mt-2 py-1 border-b-[2px]  border-gray-200 justify-start'>
          
          <h1 className='text-white mt-1 mx-2 text-xl md:text-xl'>All Tasks</h1>
        </Link>
        <Link to={'addtask'} className='flex w-[90%] ml-5 px-2 mt-2 py-1 border-b-[2px]  border-gray-200 justify-start'>
          
          <h1 className='text-white mt-1 mx-2 text-xl md:text-xl'>Add Task</h1>
        </Link>
        </>
        
      } */}
      
    </div>
  )
}

export default Sidebar