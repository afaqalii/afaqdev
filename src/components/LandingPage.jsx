import AboutMe from './AboutMe'
import ContactUs from './ContactUs'
import ContainerWrapper from './ContainerWrapper'
import Header from './Header'
import MyWork from './MyWork'
import Services from './Services'
import Sidebar from "./Sidebar"
const LandingPage = () => {
  return (
    <div>
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
             title={"What I Do "}
          />
          <ContainerWrapper 
             bgColor={`bg-[--light-black]`} 
             content={<MyWork/>} 
             backgroundTitle={"portfolio"}
             title={"My Work"}
          />
          <ContainerWrapper 
             bgColor={`bg-[--bg-light]`} 
             content={<ContactUs/>} 
             backgroundTitle={"contact"}
             title={"Get In Touch"}
          />
      </div>
      </div>
    </div>
  )
}

export default LandingPage