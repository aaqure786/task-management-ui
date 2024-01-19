import React from 'react';
import Sidebar from './Sidebar';
import {Outlet} from 'react-router-dom';
import Navbar1 from './Navbar1';
const Index = () => {
  return (
    <div>
         <div className='overflow-y-hidden'>
            <Navbar1 />
            <div className='flex max-h-[83.5vh]'>


                <div className='w-[25%] overflow-y-auto'>
                    <Sidebar/>
                </div>
                <div className='w-[75%] overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index