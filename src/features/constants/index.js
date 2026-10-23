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
        desc: "An interactive and visually immersive product website inspired by SPYLT Milk, designed to showcase a modern beverage brand through bold typography, vibrant colors, and eye-catching visuals. The website combines creative layouts, smooth GSAP animations, dynamic scroll-triggered effects, and seamless transitions to create an engaging user experience. With responsive design and carefully crafted visual elements, the project focuses on bringing the brand's personality to life while delivering a smooth and memorable browsing experience across different screen sizes.",
        skills: ["React", "Tailwind CSS", "JavaScript", "GSAP", "Lenis"],
        img: spyltImg,
        vdo: spyltVdo,
        objectFill: true,
        link: "https://chug-spylt.netlify.app/"
    },
     {
        name: "Interview Ai",
        desc: "MERN + GenAI app that generates personalized interview reports using a job description, resume, and self-description.",
        skills: ["Mongo DB", "Express JS", "React", "Node JS", "Tailwind CSS", "JavaScript", "JWT", "Gen AI"],
        img: interviewAiImg,
        vdo: null,
        objectFill: true,
        link: "https://interviewreportgenerator-ai.vercel.app/"
    },
    {
        name: "Todo List",
        desc: "A minimal and user-friendly Todo app for managing daily tasks with a smooth and responsive interface, using local storage to persist data.",
        skills: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
        img: todoImg,
        vdo: todoVdo,
        objectFill: false,
        link: "https://todo-gaurav.netlify.app/"
    },
    {
        name: "Gallery Project",
        desc: "A simple and interactive image gallery web app that fetches and displays images dynamically from an API, allowing users to search and explore photos in a clean, responsive interface.",
        skills: ["React", "Unsplash API", "REST API", "Tailwind CSS", "JavaScript"],
        img: galleryImg,
        vdo: galleryVdo,
        objectFill: true,
        link: "https://galleryapiproject.netlify.app/"
    },
    
]

export { projects }