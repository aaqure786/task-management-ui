import './App.css';
import Home from './components/Home';
import {  Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Index from './components/dashboard/Index';
function App() {
  return (
    <div className="App">
      
      
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Index />} >

          </Route>


        </Routes>
      
    </div>
  );
}

export default App;
