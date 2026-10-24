import spyltImg from "../../../public/assets/Imgs/spylt.jpeg"
import spyltVdo from "../../../public/assets/Vdo/SPYLT Milk.mp4"
import todoImg from "../../../public/assets/Imgs/Todo.png"
import todoVdo from "../../../public/assets/Vdo/Todo.mp4"
import galleryImg from "../../../public/assets/Imgs/Gallery.jpeg"
import galleryVdo from "../../../public/assets/Vdo/Gallery App.mp4"
import interviewAiImg from "../../../public/assets/Imgs/Inteview ai.jpeg"

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
        desc: "AI Interview Report Generator is a full-stack web application built using the MERN stack that helps candidates prepare for job interviews through AI-powered analysis. Users can upload their resume, enter a job description, and provide a self-description to generate a personalized interview preparation report. The platform provides a job-match score, technical and behavioral interview questions, skill-gap analysis, and a structured preparation plan. With secure authentication, saved interview reports, it makes interview preparation more focused, efficient, and personalized.",
        skills: ["Mongo DB", "Express JS", "React", "Node JS", "Tailwind CSS", "JavaScript", "JWT", "Gen AI"],
        img: interviewAiImg,
        vdo: null,
        objectFill: true,
        link: "https://interviewreportgenerator-ai.vercel.app/"
    },
    {
        name: "Todo List",
        desc: "A responsive and interactive To-Do List application designed to help users organize daily tasks, manage priorities, and stay productive. It allows users to easily add, update, and delete tasks through a clean and intuitive interface. With localStorage integration, tasks remain saved even after refreshing or reopening the browser, providing a smooth and reliable task management experience.",
        skills: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
        img: todoImg,
        vdo: todoVdo,
        objectFill: false,
        link: "https://todo-gaurav.netlify.app/"
    },
    {
        name: "Gallery Project",
        desc: "An interactive and responsive image gallery web application that fetches and displays high-quality photographs using the Unsplash API. It features a visually appealing layout, dynamically loaded images, and a clean, user-friendly interface for exploring different types of photography. Built with a focus on API integration, asynchronous data fetching, and responsive design, the application provides a smooth browsing experience across different screen sizes while showcasing modern frontend development techniques.",
        skills: ["React", "Unsplash API", "REST API", "Tailwind CSS", "JavaScript"],
        img: galleryImg,
        vdo: galleryVdo,
        objectFill: true,
        link: "https://galleryapiproject.netlify.app/"
    },
    
]

export { projects }