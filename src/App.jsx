import './App.css'
import AboutMe from './components/AboutMe'
import ContainerWrapper from './components/ContainerWrapper'
import Header from './components/Header'
import Sidebar from "./components/Sidebar"
function App() {

  return (
    <>
      <div className='landing-page'>
      <Sidebar/>  
      <div id='main-content' className="lg:ml-[260px]">
        <Header/>
         <ContainerWrapper bgColor={`bg-[--light-black]`} content={<AboutMe/>} backgroundTitle={"About Me"}/>
         <ContainerWrapper bgColor={`bg-[--light-black]`} content={<AboutMe/>} backgroundTitle={"Services"}/>
      </div>
      </div>
    </>
  )
}

export default App
