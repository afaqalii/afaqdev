import './App.css'
import AboutMe from './components/AboutMe'
import ContainerWrapper from './components/ContainerWrapper'
import Header from './components/Header'
import MyWork from './components/MyWork'
import Services from './components/Services'
import Sidebar from "./components/Sidebar"
function App() {

  return (
    <>
      <div className='landing-page'>
      <Sidebar/>  
      <div id='main-content' className="lg:ml-[260px]">
        <Header/>
         <ContainerWrapper 
             bgColor={`bg-[--light-black]`} 
             content={<AboutMe/>} 
             backgroundTitle={"about me"}
             title={"Know Me More"}
          />
         <ContainerWrapper 
             bgColor={`bg-[--bg-light]`} 
             content={<Services/>} 
             backgroundTitle={"services"}
             title={"What I Do"}
          />
          <ContainerWrapper 
             bgColor={`bg-[--light-black]`} 
             content={<MyWork/>} 
             backgroundTitle={"portfolio"}
             title={"My Work"}
          />
      </div>
      </div>
    </>
  )
}

export default App
