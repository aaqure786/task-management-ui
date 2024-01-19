import React from 'react';
import Sidebar from './Sidebar';
import {Outlet} from 'react-router-dom';
import Navbar1 from './Navbar1';
const Index = () => {
  return (
    <div>
         <div className='overflow-y-hidden'>
            <Navbar1 />
            <div className='flex max-h-[100vh]'>


                <div className='w-[20%] overflow-y-auto'>
                    <Sidebar/>
                </div>
                <div className='w-[80%] overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index