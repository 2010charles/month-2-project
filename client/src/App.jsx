import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import login from './pages/Login'
//import Register from './pages/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login'
import Sidebar from './pages/Dashboard';
import Homedashboard from './pages/Homedashboard';
import Teams from './pages/Teams'
import Mytask from './pages/Mytask';
import Profile from './pages/Profile';
import Completed from './pages/Completed';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import AssignTask from './components/assignTask';
import { useContext } from 'react';
import { Context } from './context/userContext/Context';
import NewaddTask from './components/NewaddTask';

function App() {
  const { user } = useContext(Context);
  return (
    <div className="main-page">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {user ? (<Route path='/dashboard' element={<Dashboard />}>
            <Route index element={<Homedashboard />} />
            <Route path='/dashboard/profile' element={<Profile />} />
            <Route path='/dashboard/task' element={<NewaddTask />} />
            <Route path='/dashboard/mytask' element={<Mytask />} />
            <Route path='/dashboard/teams' element={<Teams />} />
            <Route path='/dashboard/assign/:projectId' element={<AssignTask/>} />
            <Route path='/dashboard/completed' element={<Completed />} />
            <Route path='/dashboard/logout' element={<Logout />} />
          </Route>) : (<Route path='/home' element={<Home />} />)}

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
