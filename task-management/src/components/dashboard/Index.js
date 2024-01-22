import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import {Outlet} from 'react-router-dom';
import Navbar1 from './Navbar1';
const Index = () => {
  const [logged, setLogged] = useState('')

    const getLoggedUser = async () =>{
        const data = {token:localStorage.getItem("token")}
        const res = await fetch(`http://localhost:5001/api/user/getdata`,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await res.json()
        if(result){
            setLogged(result.user)
            
        }
    }
    
    useEffect(() => {
        getLoggedUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
  return (
    <div>
         <div className='overflow-y-hidden'>
            <Navbar1 user={logged}/>
            <div className='flex max-h-[100vh]'>


                <div className='w-[20%] overflow-y-auto'>
                    <Sidebar user={logged}/>
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