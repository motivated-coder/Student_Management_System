import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage'
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import StudentList from './components/StudentList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/welcome' element={<Welcome />}></Route>
          <Route path='/all/students' element={<StudentList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
