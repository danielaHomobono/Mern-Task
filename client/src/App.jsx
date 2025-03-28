import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import "./index.css";





function App()  {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/tasks' element={<h1>tasks page</h1>} />
        <Route path='/add-tasks' element={<h1> new tasks</h1>} />
        <Route path='/tasks/:id' element={<h1>update tasks</h1>} />
        <Route path='/profile' element={<h1>profile</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App