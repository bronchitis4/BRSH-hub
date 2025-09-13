import './App.css'
import LoginForm from './components/login-form/LoginForm'
import RegistrationForm from './components/registration-form/registration-form'
import Sidebar from './components/sidebar/sidebar'
import MainPage from './pages/MainPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
            <MainPage/>
        }/>
        <Route path='/registration' element={
          <RegistrationForm/>
        }/>
        <Route path='/login' element={
          <LoginForm/>
        }/>
      </Routes>
    </Router>
  )
}

export default App
