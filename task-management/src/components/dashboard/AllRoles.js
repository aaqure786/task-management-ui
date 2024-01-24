import React, { useEffect, useState } from 'react'

import {AiOutlineEdit} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const BASE_URL = process.env.REACT_APP_BASE_URL
const AllRoles = () => {
  const [roles, setRoles] = useState([])





  const getData = async (role) => {

    const res = await fetch(`${BASE_URL}/api/perm/get-permission`, {
      method: "GET",
      headers: {
        'Content-Type': 'applicaiton/json',
        'token': localStorage.getItem('token'),
      }
    });
    const response = await res.json()
    if (response) {
      setRoles(response)
      // window.location.reload()
    }


  }
  useEffect(()  =>  {
     getData()
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },)
  return (
    <div>
            <div>
                <h1 className='text-3xl flex items-start ml-10 font-semibold mt-10 '>All Tasks</h1>
                {/* <Link to={"dashboard/addtask"} className='flex w-[12%] ml-[85%] bg-green-300 py-2 my-2 px-1 text-xl font-semibold rounded-xl'>
                <AiOutlinePlus ssize={30} className='mx-1 mt-1' /> Add Tasks
                </Link> */}

                <div className=" mx-[2.5%] w-[95%]  overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className=" py-3 title-font tracking-wider font-medium text-gray-900 text-xl bg-gray-200 rounded-tl rounded-bl">Title</th>
                                <th className=" title-font tracking-wider font-medium text-gray-900 text-xl bg-gray-200 rounded-tr rounded-br">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                roles.map((value, index) => {

                                    return <tr key={index} className='border-b-2 border-gray-400'>
                                        <td className="px-1 py-3">{value.role}</td>

                                        <td className="w-10 flex ">
                                            <Link to={`/dashboard/roles/edit-role/${value.role}`} className='   mx-1 bg-green-500 rounded-xl'><AiOutlineEdit size={30} className='mx-2 mt-1 ' /></Link>
                                        </td>
                                    </tr>
                                    })
                                }


                    </tbody>
                    </table>
                </div>

            </div>
        </div>
  )
}

export default AllRoles