import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const BASE_URL = process.env.REACT_APP_BASE_URL
const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const hadlechange = (e) => {
    if (e.target.name === "password") {
      setPassword(e.target.value)
    } else if (e.target.name === "user") {
      setUser(e.target.value)
    }
  }
  const hadleClick = async (e) => {
    e.preventDefault();
    const data = { name: user, password: password }
    const result = await fetch(`${BASE_URL}/api/user/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const response = await result.json()
    if (response.status === true) {
      localStorage.setItem("token", response.authToken)
      toast.success('Successfuly logged in', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/dashboard")

      }, 1000);
    }
  }
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className=' w-full  flex flex-col justify-center items-center pt-[90px] pb-[10px] '>

        <div className='flex flex-col h-[500px] justify-center  md:w-[35%] w-[70%] rounded-3xl shadow-2xl shadow-gray-400  bg-black/70 '>

          <h1 className='justify-center text-white text-3xl font-bold  '>Login</h1>
          <label className='mt-5 text-xl text-start text-white mx-[10%] font-bold'>Name</label>
          <input className='mt-5 w-[80%] mx-[10%] focus:outline-none  px-6 py-4 border-b-2 border-white bg-transparent text-white ' type='text' onChange={hadlechange} name='user' value={user} id="user" placeholder='Enter Username' />
          <label className='mt-5 text-xl text-start text-white mx-[10%] font-bold'>Password</label>

          <input className='mt-5  px-6 mx-[10%] focus:outline-none  py-4 w-[80%] border-b-2 border-white bg-transparent text-white ' type='password' placeholder='Enter Password' onChange={hadlechange} name='password' value={password} id="password" />
          <button onClick={hadleClick} className=' text-white  mx-[10%] w-[30%] text-xl mt-5 px-3 bg-green-500 rounded-3xl py-3 '>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login