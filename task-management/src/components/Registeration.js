import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const Registeration = () => {
    const [register, setRegister] = useState({ name: "", role: "", email: "", password: "" })
    const [cpassword, setCpassword] = useState('')
    const [err, setErr] = useState(false)
    const handleChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })

    }
    const navigate = useNavigate()
    const handleClick = async (e) => {

        e.preventDefault()
        if (register.password !== cpassword) {
            setErr(true)
        } else {
            setErr(false)
            console.log(register)
            const result = await fetch(`${BASE_URL}/api/user/adduser`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(register)
            });
            const response = await result.json()
            if (response) {
                toast.success('Data Saved Successfuly', {
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
                    navigate("/login")
                }, 1500);
                setRegister({ name: "", role: "", email: "", password: "" })
                setCpassword("")
            }
        }
    }
    return (
        <div className='w-full flex items-center justify-center'>
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
            <div className='flex flex-col py-5  w-1/3  bg-green-900 rounded-xl my-10 shadow-2xl h-[550px]'>
                <h1 className='text-3xl text-white font-bold'> Signup</h1>

                <form className='flex flex-col justify-start mx-5'>
                    <div className='flex flex-col w-full'>
                        <h1 className='text-white text-start my-2 text-lg  font-bold'>Name:</h1>
                        <input className='focus:outline-none rounded-md w-full px-2 h-10' type='text' value={register.name} name='name' onChange={handleChange} placeholder='Enter your Name' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <h1 className='text-white text-start my-2 text-lg  font-bold'>Email:</h1>
                        <input className='focus:outline-none rounded-md w-full px-2 h-10' type='email' value={register.email} name='email' onChange={handleChange} placeholder='Enter your Name' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <h1 className='text-white text-start my-2 text-lg  font-bold'>Role:</h1>
                        <select className='focus:outline-none rounded-md w-full px-2 h-10' value={register.role} name='role' onChange={handleChange}  >
                            <option value={""}>Select Role</option>

                            <option value={"manager"}>Manager</option>
                            <option value={"user"}>User</option>

                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <h1 className='text-white text-start my-2 text-lg  font-bold'>Password:</h1>
                        <input className='focus:outline-none rounded-md w-full px-2 h-10' type='password' value={register.password} name='password' onChange={handleChange} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <h1 className='text-white text-start my-2 text-lg  font-bold'>Confirm Password:</h1>
                        <input className='focus:outline-none rounded-md w-full px-2 h-10' type='password' value={cpassword} name='cpass' onChange={(e) => { setCpassword(e.target.value) }} />
                    </div>
                    <div className='flex items-center'>
                        <button onClick={handleClick} className='text-start w-[20%] mt-4 bg-blue-500 text-white text-xl px-2 py-1 rounded-md'> Register</button>
                        {err ? <h1 className='text-red-500 mx-5 text-xl'>Password Not matched</h1> : ''}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registeration