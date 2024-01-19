import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import {GrFormView} from 'react-icons/gr'
import { Link } from 'react-router-dom'

const AllTasks = () => {
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
                            <th className=" py-3 title-font tracking-wider font-medium text-gray-900 text-xl bg-gray-200">Description</th>
                            <th className=" py-3 title-font tracking-wider font-medium text-gray-900 text-xl bg-gray-200">Status</th>
                            <th className=" title-font tracking-wider font-medium text-gray-900 text-xl bg-gray-200 rounded-tr rounded-br">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // manager.map((vlaue,index)=>{
                                    
                            //         return 
                                     <tr  className='border-b-2 border-gray-400'>
                                <td className="px-1 py-3"></td>
                                <td className="px-1 py-3"></td>
                                <td className="px-1 py-3"></td>
                                <td className="w-10 flex ">
                                <Link className='   mx-1 bg-green-500 rounded-xl'><GrFormView size={30}  className='mx-2 mt-1 '/></Link>  
                                <Link  className=' w-[50px] bg-blue-500 flex mx-1  rounded-xl px-2 text-2xl py-1'><AiOutlineEdit size={30} /></Link>
                                
                                  
                                
                                </td>
                            </tr>
                            // })
                        }
                       

                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}

export default AllTasks