import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useMediaQuery } from "react-responsive"
import { ScrollTrigger } from "gsap/all"
import ProjectSlider from "../components/ProjectSlider.jsx"


const ProjectSection = () => {
    const isTablet = useMediaQuery({
        query: "(max-width: 1000px)"
    })
    
    useGSAP(() => {
        gsap.from("#project-section .main-heading", {
            xPercent: -80,
            opacity: 0,
            stagger: isTablet ? 0 : 0.15,
            duration: 0.8,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: "#project-section",
                start: isTablet ? "top 80%" : "top 25%",
                // markers: true
            }
        })

        gsap.from("#project-section .main-para", {
            xPercent: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: "#project-section",
                start: isTablet ? "top 80%" : "top 20%",
                // markers: true
            }
        })

        gsap.from("#project-section .project-card", {
            opacity: 0,
            delay: 0.8,
            clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#project-section",
                start: isTablet ? "top 31%" : "top 22%",
                // markers: true
            }
        })
        
    }, [])
  return (
    <section id="project-section">
        <div
            
            className=" min-h-screen flex flex-col lg:flex-row gap-10 2xl:gap-35 xl:gap-30 lg:gap-25  px-2 2xl:px-60 lg:px-30 relative "
        >
            <div className="w-full lg:w-1/2 flex flex-col gap-0 justify-center items-start lg:items-center pt-[5vh] lg:pt-0">   
                <div className="slider-title overflow-x-hidden">
                    <div
                        className="main-heading font-pop-xb text-[#7546e8] overflow-hidden"
                    >
                        Featured
                    </div>
                    <div
                        className="main-heading font-pop-xb text-[#7546e8] overflow-hidden"
                    >
                        Projects
                    </div>
                </div>
                <div className="slider-para overflow-x-hidden">
                    <p className="main-para xl:text-xl lg:text-base  md:text-[3.5vw] text-[3.5vw] font-pop whitespace-nowrap ">A showcase of my skills, creativity and real-world work.</p>
                </div>
            </div>
            <div className="h-full ">
                <ProjectSlider/>
            </div> 

        </div>
    </section>
  )
}

export default ProjectSection