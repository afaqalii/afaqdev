import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ProjectDetails } from './components/ProjectDetails'
import LandingPage from './components/LandingPage'

function App() {

  return (
    <BrowserRouter>    
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/:projectId' element={<ProjectDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
