import React from 'react'
import './App.css'
import HeaderNav from './components/HeaderNav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import JobcardCreationScreen from './screens/JobcardCreationScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import JobcardListScreen from './screens/JobcardListScreen'
import EditProfileScreen from './screens/EditProfileScreen'

function App() {
  return (
    <Router>
      <HeaderNav />
      <Routes>
        <Route
          path="/jobcardcreation"
          element={<JobcardCreationScreen />}
          exact
        />
        <Route path="/jobcardList" element={<JobcardListScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/editprofile" element={<EditProfileScreen />} />
      </Routes>
    </Router>
  )
}

export default App
