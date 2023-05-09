import './App.css'
import ContainerWrapper from './components/ContainerWrapper'
import Header from './components/Header'
import Sidebar from "./components/Sidebar"
function App() {

  return (
    <>
      <div className='landing-page'>
      <Sidebar/>  
      <div id='main-content' className="lg:ml-[260px]">
         {/* <ContainerWrapper content={<Sidebar/>} backgroundTitle={"Experince"}/> */}
        <Header/>
      </div>
      </div>
    </>
  )
}

export default App
