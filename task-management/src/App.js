import './App.css';
import Home from './components/Home';
import {  Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Index from './components/dashboard/Index';
import Tasks from './components/dashboard/Tasks';
import AddorEditTasks from './components/dashboard/AddorEditTasks';
import AllTasks from './components/dashboard/AllTasks';
import Roles from './components/dashboard/Roles';
import Registeration from './components/Registeration';
import AllRoles from './components/dashboard/AllRoles';
import AddorEditRoles from './components/dashboard/AddorEditRoles';
function App() {
  return (
    <div className="App">
      
      
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Registeration />} />

          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Index />} >
          <Route path='tasks' element={<Tasks/>} >
          <Route path='' element={<AllTasks />} />
            
          <Route path='/dashboard/tasks/addtask' element={<AddorEditTasks />} />
          <Route path='/dashboard/tasks/alltasks' element={<AllTasks />} />
          <Route path='/dashboard/tasks/edittask/:id' element={<AddorEditTasks />} />

          </Route>
          <Route path='roles' element={<Roles />} >
          <Route path='' element={<AllRoles />} />
          <Route path='/dashboard/roles/edit-role/:role' element={<AddorEditRoles />} />

          </Route>



          
            
          </Route>


        </Routes>
      
    </div>
  );
}

export default App;
