import {React, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';

const AddorEditTasks = () => {
//   const BASE_URL = process.env.local.REACT_APP_BASE_URL
  const [task, setTask] = useState({title :"",description:"" })
//   const navigate = useNavigate()
  const hadlechange = (e) => {
    setTask({...task, [e.target.name]: e.target.value} )
  }
  const parms = useParams()
  const id = parms.id
  const hadleClick = async (e) => {
    e.preventDefault()
    // console.log(task)
    // const {name, contact, branch, password, address} = task
    // const result = await fetch(`${BASE_URL}/api/task/addtask`,{
    //   method:"POST",
    //   headers:{
    //     'Content-Type': 'application/json',
    //     'token': localStorage.getItem('token')
    //   },
    //   body: JSON.stringify({
    //     name, contact, branch, password, address
    //   })
    // });
    // const response = await result.json()
    // if(response){
    //   toast.success('Data Saved Successfuly', {
    //     position: "top-right",
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     });
    //     setTimeout(() => {
    //       navigate("/dashboard/officetask")
    //     }, 1000);
    //     setTask({title :"",description:"" })
    // }
  }
  

//   useEffect(() => {
//     getBranch();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])
  
  return (
    <div>
      <div className='flex flex-col items-center'>
        {/* <ToastContainer
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
        /> */}
        <div className=' w-full min-h-[70vh] flex flex-col justify-center items-center mt-5  '>
          <div className='flex flex-col h-[500px] justify-start py-10  w-[90%] rounded-xl shadow-2xl shadow-gray-400  bg-slate-100 '>
            <h1 className='text-start mx-[5%]  text-3xl font-semibold  '>{id ? 'Edit': 'Add'}Task Details</h1>
            <form className='flex flex-col text-start'>
              <div className='grid grid-cols-1 mt-5  '>
                <div className=' flex flex-col'>
                  <label className=' text-xl text-start mb-1  mx-[5%] font-bold'>Title</label>
                  <input className=' w-[90%] mx-[5%] px-6 py-2 border-2 rounded-lg focus:outline-none border-gray-600 bg-transparent  ' type='text' onChange={hadlechange} name='title' value={task.name} id="name" placeholder='Title of the task' />
                </div>
                
              </div>
              
              <div className='grid mt-5 grid-cols-1  '>
                <div className=' flex flex-col'>
                  <label className=' text-xl text-start mb-1  mx-[5%] font-bold'>Description</label>
                  <textarea rows={5} cols={10} className=' w-[90%] mx-[5%] px-6 py-2 border-2 rounded-lg focus:outline-none border-gray-600 bg-transparent  ' type='text' onChange={hadlechange} name='description' value={task.address} id="description" placeholder='Description' />
                </div>
              </div>
              <button onClick={hadleClick} className='items-start   mx-[5%] w-[15%] text-2xl mt-5 px-3 text-white bg-blue-500 rounded-md py-3 '>Save task</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddorEditTasks