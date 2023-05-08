import './App.css'
import Sidebar from "./components/Sidebar"
function App() {

  return (
    <>
      <div className='landing-page'>
      <Sidebar/>  
      <div className="lg:ml-[260px] border-solid border-2 border-sky-500">
         <div className=" h-[100vh] bg-sky-500">
            <h1>Front-end developer</h1>
            <h1>Afaq Ali</h1>
         </div>
      </div>
      </div>
    </>
  )
}

export default App
