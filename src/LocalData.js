import { FaDesktop, FaPaintBrush, FaPalette, FaPencilRuler } from "react-icons/fa";
import Movix from "./assets/Movix.png"
import YoutubeClone from "./assets/youtubeClone.png"
import onlinestore from "./assets/onlinestore.png"
import lawyers from "./assets/lawyers.png"
import afaqdev from "./assets/afaqdev.png"
import MyAgency from "./assets/MyAgency.png"

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
            Movix,
            MyAgency,
            lawyers
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
            MyAgency,
            lawyers
        ],
        projectInfoTitle: "Project Info",
        projectInfo:"This is an IMDB clone. You can search any type of movie watch its trailer the cast and all the ratings details. This project includes lazy loading searching features filtering.",
        projectDetailsTitle:"Project Details",
        projectDetailText:"",
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
        title: "Online Store",
        img: onlinestore,
        id:"16",
        imageCarousel: [
            Movix,
            MyAgency,
            lawyers
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
        title: "Law firm",
        img: lawyers,
        id:"17",
        imageCarousel: [
            Movix,
            MyAgency,
            lawyers
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
        ],
    },
    {
        title: "My Portfolio",
        img: afaqdev,
        id:"18",
        imageCarousel: [
            Movix,
            MyAgency,
            lawyers
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
        ],
    },
    {
        title: "Apolarity Studios",
        img: MyAgency,
        id:"19",
        imageCarousel: [
            Movix,
            MyAgency,
            lawyers
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
            
        ],
    },
]

// export const ProjectsDetails = () => {

// }