import React from 'react'
import './App.css'
import HeaderNav from './components/HeaderNav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import JobcardCreationScreen from './screens/JobcardCreationScreen'
import Jobcardlist from './screens/Jobcardlist'

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
        <Route path="jobcardlist" element={<Jobcardlist />} />
      </Routes>
    </Router>
  )
}

export default App
