import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const BASE_URL = process.env.REACT_APP_BASE_URL


const AddorEditRoles = () => {
    const [roles, setRoles] = useState({
        role: "",
        canedit: false,
        canadd: false,
        canview: false,
        candelete: false
      })
      const navigate = useNavigate()
      const parms = useParams()
      const role = parms.role
      const hadlechange = (e) => {
        setRoles({ ...roles, [e.target.name]: e.target.checked  })
      }
      const hadleClick = async (e) => {
        e.preventDefault()
        const result = await fetch(`${BASE_URL}/api/perm/edit-permission/${roles.role}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
          },
          body: JSON.stringify(roles)
        });
        const response = await result.json()
        console.log(response)
        if (response) {
          toast.success('Changes Saved Successfuly', {
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
            navigate("/dashboard/roles")
          }, 1000);
          setRoles({
            role: "",
            canedit: false,
            canadd: false,
            canview: false,
            candelete: false
          })
        }
      }
      const getData = async (role) => {
        
        const res = await fetch(`${BASE_URL}/api/perm/get-permission/${role}`, {
          method: "GET",
          headers: {
            'Content-Type': 'applicaiton/json', 
            'token': localStorage.getItem('token'),
          }
        });
        const response = await res.json()
        if (response) {
          setRoles(response[0])
          // window.location.reload()
        }
    
    
      }
      useEffect(()  =>  {
         getData(role)
       // eslint-disable-next-line react-hooks/exhaustive-deps
      },[role])
     
  return (
    <div>
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
      <div className=' w-full min-h-[70vh] flex flex-col justify-center items-center mt-5  '>
        <div className='flex flex-col h-[500px] justify-start py-10  w-[90%] rounded-xl shadow-2xl shadow-gray-400  bg-slate-100 '>
          <h1 className='text-start mx-[5%]  text-3xl font-semibold  '>Manage Permissions</h1>
          <form className='flex flex-col text-start'>
            <div className='grid grid-cols-1  mt-5  '>
              <div className=' flex flex-col'>
                <label className=' text-xl text-start mb-1  mx-[5%] font-bold'>Role</label>
                <select className=' w-[90%] mx-[5%] px-6 py-2 border-2 rounded-lg focus:outline-none border-gray-600 bg-transparent  ' type='text' onChange={(e)=>{setRoles({...roles, role: e.target.value})}}  value={roles.role} id="role"  >
                  {/* <option value={""}>---Select Role---</option> */}
                  <option value={"Admin"}>Admin</option>

                  <option value={"Manager"}>Manager</option>
                  <option value={"User"}>User</option>

                </select>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                <div className=' flex justify-between mx-5 mt-4'>
                  <label className=' text-xl text-start mb-1  mx-[5%] font-bold'>Can Edit</label>
                  <input className=' w-8 h-8 mx-[5%] px-6 py-2' type='checkbox' onChange={hadlechange} name='canedit' checked={roles.canedit ? true : false } id="canedit" />
                </div>
                <div className=' flex justify-between mx-5 mt-4'>
                  <label className=' text-xl text-start mb-1  mx-[5%] font-bold'>Can Add</label>
                  <input className=' w-8 h-8 mx-[5%] px-6 py-2' type='checkbox' onChange={hadlechange} name='canadd' checked={roles.canadd ? true : false}  id="canadd" />
                </div>
                <div className=' flex justify-between mx-5 mt-4'>
                  <label className=' text-xl text-start mb-1  mx-[5%] font-bold'>Can View</label>
                  <input className=' w-8 h-8 mx-[5%] px-6 py-2' type='checkbox' onChange={hadlechange} name='canview' checked={roles.canview ? true : false} id="canview" />
                </div>
                <div className=' flex justify-between mx-5 mt-4'>
                  <label className=' text-xl text-start mb-1  mx-[5%] font-bold'>Can Delete</label>
                  <input className=' w-8 h-8 mx-[5%] px-6 py-2' type='checkbox' onChange={hadlechange} name='candelete' checked={roles.candelete ? true : false} id="candelete" />
                </div>
              </div>

            </div>


            <button onClick={hadleClick} className='items-start   mx-[5%] w-[20%] text-2xl mt-5 px-3 text-white bg-blue-500 rounded-md py-3 '> Save Changes</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddorEditRoles