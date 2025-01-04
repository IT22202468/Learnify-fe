import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './pages/Home'
import CourseDetails from './components/CourseDetails'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
        </Routes>
        </Router>
    </>
  )
}

export default App
