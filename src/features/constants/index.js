import spyltImg from "../../../public/assets/Imgs/spylt.png"
import spyltVdo from "../../../public/assets/Vdo/SPYLT Milk.mp4"
import todoImg from "../../../public/assets/Imgs/Todo.png"
import todoVdo from "../../../public/assets/Vdo/Todo.mp4"
import galleryImg from "../../../public/assets/Imgs/Gallery.png"
import galleryVdo from "../../../public/assets/Vdo/Gallery App.mp4"
import interviewAiImg from "../../../public/assets/Imgs/Inteview ai.png"

const projects = [
    {
        name: "SPYLT Milk",
        desc: "An interactive, animation-rich product site that blends bold design with smooth GSAP transitions to create an engaging user experience.",
        img: spyltImg,
        vdo: spyltVdo,
        objectFill: true,
        link: "https://chug-spylt.netlify.app/"
    },
     {
        name: "Interview Ai",
        desc: "MERN + GenAI app that generates personalized interview reports using a job description, resume, and self-description.",
        img: interviewAiImg,
        vdo: null,
        objectFill: true,
        link: "https://interviewreportgenerator-ai.vercel.app/"
    },
    {
        name: "Todo List",
        desc: "A minimal and user-friendly Todo app for managing daily tasks with a smooth and responsive interface, using local storage to persist data.",
        img: todoImg,
        vdo: todoVdo,
        objectFill: false,
        link: "https://todo-gaurav.netlify.app/"
    },
    {
        name: "Gallery Project",
        desc: "A simple and interactive image gallery web app that fetches and displays images dynamically from an API, allowing users to search and explore photos in a clean, responsive interface.",
        img: galleryImg,
        vdo: galleryVdo,
        objectFill: true,
        link: "https://galleryapiproject.netlify.app/"
    },
    
]

export { projects }