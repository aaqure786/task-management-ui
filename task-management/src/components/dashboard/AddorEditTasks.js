import {React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const BASE_URL = process.env.REACT_APP_BASE_URL

const AddorEditTasks = () => {
  const [task, setTask] = useState({title :"",description:"", status:"" })
  const navigate = useNavigate()
  const hadlechange = (e) => {
    setTask({...task, [e.target.name]: e.target.value} )
  }
  const parms = useParams()
  const id = parms.id || 0
  const getData = async ()=>{
    if(id !==0){
       const res = await fetch(`${BASE_URL}/api/task/gettask/${id}`,{
        method:"GET",
        headers:{
          'Content-Type': 'applicaiton/json',
          'token': localStorage.getItem('token'),
        }
       });
       const response = await res.json()
       if(response){
        setTask({title:response['title'],status:response['status'],description:response['description']})
       }
    }
    
  }
  useEffect(() => {
    getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const hadleClick = async (e) => {
    e.preventDefault()
    // console.log(task)
    if(id === 0){
      const {title,description} = task
    const result = await fetch(`${BASE_URL}/api/task/addtask`,{
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      },
      body: JSON.stringify({title,description})
    });
    const response = await result.json()
    console.log(response)
    if(response){
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
          navigate("/dashboard/tasks")
        }, 1000);
        setTask({title :"",description:"" })
    }
    }else if(id !==0){
      console.log("I am Edit")
      const {title,description, status} = task
      console.log(task)
      const result = await fetch(`${BASE_URL}/api/task/edittask/${id}`,{
        method:"PUT",
        headers:{
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
        },
        body: JSON.stringify({title,description, status})
      });
      const response = await result.json()
      console.log(response)
      if(response){
        toast.success('Data Updated Successfuly', {
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
            navigate("/dashboard/tasks")
          }, 1000);
          setTask({title :"",description:"" })
      }
    }
  }
  

  
  
  return (
    <div>
      <div className='flex flex-col items-center'>
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
            <h1 className='text-start mx-[5%]  text-3xl font-semibold  '>{id ? 'Edit': 'Add'}Task Details</h1>
            <form className='flex flex-col text-start'>
              <div className='grid grid-cols-1 mt-5  '>
                <div className=' flex flex-col'>
                  <label className=' text-xl text-start mb-1  mx-[5%] font-bold'>Title</label>
                  <input className=' w-[90%] mx-[5%] px-6 py-2 border-2 rounded-lg focus:outline-none border-gray-600 bg-transparent  ' type='text' onChange={hadlechange} name='title' value={task.title} id="name" placeholder='Title of the task' />
                </div>
                {id ? 
                <div className=' flex flex-col'>
                  <label className=' text-xl text-start mb-1  mx-[5%] font-bold'>Status</label>
                  <select className=' w-[90%] mx-[5%] px-6 py-2 border-2 rounded-lg focus:outline-none border-gray-600 bg-transparent  ' type='text' onChange={hadlechange} name='status' value={task.status} id="status"  >
                  <option value={'In Progress'}>In Progress</option>
                    <option value={'Completed'}>Completed</option>
                    <option value={'Half-Done'}>Half-Done</option>

                  </select>
                </div>
                :""}
              </div>
              
              <div className='grid mt-5 grid-cols-1  '>
                <div className=' flex flex-col'>
                  <label className=' text-xl text-start mb-1  mx-[5%] font-bold'>Description</label>
                  <textarea rows={5} cols={10} className=' w-[90%] mx-[5%] px-6 py-2 border-2 rounded-lg focus:outline-none border-gray-600 bg-transparent  ' type='text' onChange={hadlechange} name='description' value={task.description} id="description" placeholder='Description' />
                </div>
              </div>
              <button onClick={hadleClick} className='items-start   mx-[5%] w-[20%] text-2xl mt-5 px-3 text-white bg-blue-500 rounded-md py-3 '>{id ? 'Update': 'Save'} task</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddorEditTasks