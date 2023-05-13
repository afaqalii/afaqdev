import { FaDesktop, FaPaintBrush, FaPalette, FaPencilRuler } from "react-icons/fa";
import Movix from "./assets/Movix.png"
import YoutubeClone from "./assets/youtubeClone.png"
import onlinestore from "./assets/onlinestore.png"
import lawyers from "./assets/lawyers.png"
import afaqdev from "./assets/afaqdev.png"
import MyAgency from "./assets/MyAgency.png"
import Movix2 from "./assets/Movix-2.png"
import Movix3 from "./assets/Movix-3.png"
import onlinestore2 from "./assets/onlinestore-2.png"
import onlinestore3 from "./assets/onlinestore-3.png"
import lawyers2 from "./assets/lawyers-2.png"
import lawyers3 from "./assets/lawyers-3.png"
import afaqdev2 from "./assets/afaqdev-2.png"
import afaqdev3 from "./assets/afaqdev-3.png"
import afaqdev4 from "./assets/afaqdev-4.png"
import MyAgency2 from "./assets/MyAgency-2.png"
import MyAgency3 from "./assets/MyAgency-3.png"




export const menuItems = [
    {
        item: "home",
        id:"1"
        
    },
    {
        item: "about me",
        id:"2"
    },
    {
        item: "services",
        id:"3"
    },
    // {
    //     item: "resume",
    //     id:"4"
    // },
    {
        item: "portfolio",
        id:"5"
    },
    {
        item: "contact",
        id:"6"
    },

]

export const bioData = [
    {
        title: "Name",
        content:"Afaq Ali",
        id:"7"
    },
    {
        title: "Email",
        content:"afaqali4244@gmail.com",
        id:"8"
    },
    {
        title: "From",
        content:"Peshawar, Pakistan",
        id:"9"
        
    },
]

export const MyServiesData = [
    {
        title: "Web Design",
        content:"I design websites. Make them responsive and user-friendly so that user engagement increases",
        id:"10",
        // icon: <FaDesktop/>,
    },
    {
        title: "Web Apps Design",
        content:"I design websites. Make them responsive and user-friendly so that user engagement increases",
        id:"11",
        // icon: <FaPalette/>
    },
    {
        title: "Website development",
        content:"I design websites. Make them responsive and user-friendly so that user engagement increases",
        id:"12",
        // icon: <FaPencilRuler/>
    },
    {
        title: "Web App development",
        content:"I design websites. Make them responsive and user-friendly so that user engagement increases",
        id:"13",
        // icon: <FaPaintBrush/>
    },
]

export const MyWorkData = [
    {
        title: "Youtube Clone",
        img: YoutubeClone,
        id:"14",
        imageCarousel: [
            YoutubeClone,
            afaqdev2,
            afaqdev3
        ],
        projectInfoTitle: "",
        projectInfo:"Project Info",
        projectDetailsTitle:"Project Details",
        projectDetails:[
            {
                title:"URL",
                content:"youtube-afaqalii.vercel.app",
            },
            {
                title:"Source Code",
                content:"github.com/afaqalii/youtube",
            },
            {
                title:"Technologies",
                content:"React, SCSS, Axios, HTML5",
            },
            {
                title:"Industry",
                content:"Front-end development",
            },
        ],

    },
    {
        title: "Movix",
        img: Movix,
        id:"15",
        imageCarousel: [
            Movix,
            Movix2,
            Movix3
        ],
        projectInfoTitle: "Project Info",
        projectInfo:"This is an IMDB clone. You can search any type of movie watch its trailer the cast and all the ratings details. This project includes lazy loading searching features filtering.",
        projectDetailsTitle:"Project Details",
        projectDetailText:"",
        projectDetails:[
            {
                title:"URL",
                content:"movix-mu.vercel.app",
            },
            {
                title:"Source Code",
                content:"github.com/afaqalii/Movix",
            },
            {
                title:"Technologies",
                content:"React, SCSS, Axios, HTML5",
            },
            {
                title:"Industry",
                content:"Front-end development",
            },
        ],
    },
    {
        title: "Online Store",
        img: onlinestore,
        id:"16",
        imageCarousel: [
            onlinestore,
            onlinestore2,
            onlinestore3
        ],
        projectInfoTitle: "",
        projectInfo:"Project Info",
        projectDetailsTitle:"Project Details",
        projectDetails:[
            {
                title:"URL",
                content:"youtube-afaqalii.vercel.app",
            },
            {
                title:"Source Code",
                content:"github.com/afaqalii/online-store",
            },
            {
                title:"Technologies",
                content:"React, SCSS, Axios, HTML5",
            },
            {
                title:"Industry",
                content:"Front-end development",
            },
        ],
    },
    {
        title: "Law firm",
        img: lawyers,
        id:"17",
        imageCarousel: [
            lawyers,
            lawyers2,
            lawyers3
        ],
        projectInfoTitle: "",
        projectInfo:"Project Info",
        projectDetailsTitle:"Project Details",
        projectDetails:[
            {
                title:"URL",
                content:"afaqalii.github.io/Lawyers",
            },
            {
                title:"Source Code",
                content:"github.com/afaqalii/Lawyers",
            },
            {
                title:"Technologies",
                content:"React, SCSS, Axios, HTML5",
            },
            {
                title:"Industry",
                content:"Front-end development",
            },
        ],
    },
    {
        title: "My Portfolio",
        img: afaqdev,
        id:"18",
        imageCarousel: [
            afaqdev,
            afaqdev2,
            afaqdev3,
            afaqdev4
        ],
        projectInfoTitle: "",
        projectInfo:"Project Info",
        projectDetailsTitle:"Project Details",
        projectDetails:[
            {
                title:"URL",
                content:"afaqdev.vercel.app/",
            },
            {
                title:"Source Code",
                content:"github.com/afaqalii/afaqdev",
            },
            {
                title:"Technologies",
                content:"React, SCSS, Axios, HTML5",
            },
            {
                title:"Industry",
                content:"Front-end development",
            },
        ],
    },
    {
        title: "Apolarity Studios",
        img: MyAgency,
        id:"19",
        imageCarousel: [
            MyAgency,
            MyAgency2,
            MyAgency3
        ],
        projectInfoTitle: "",
        projectInfo:"Project Info",
        projectDetailsTitle:"Project Details",
        projectDetails:[
            {
                title:"URL",
                content:"apolarity-studios.vercel.app/",
            },
            {
                title:"Source Code",
                content:"github.com/afaqalii/MyAgency",
            },
            {
                title:"Technologies",
                content:"HTML5, SCSS, JAVASCRIPT, CSS3 ",
            },
            {
                title:"Industry",
                content:"Front-end development",
            },
            
        ],
    },
]

// export const ProjectsDetails = () => {

// }