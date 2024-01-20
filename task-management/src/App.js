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
function App() {
  return (
    <div className="App">
      
      
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Registeration />} />

          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Index />} >
          <Route path='tasks' element={<Tasks />} />
          <Route path='roles' element={<Roles />} />

          <Route path='addtask' element={<AddorEditTasks />} />
          <Route path='alltasks' element={<AllTasks />} />

          
            
          </Route>


        </Routes>
      
    </div>
  );
}

export default App;
