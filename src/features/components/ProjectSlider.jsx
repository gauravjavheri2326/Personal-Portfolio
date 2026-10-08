import { projects } from "../constants/index.js"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"
import { Link } from "react-router"
import { useContext } from "react"
import { ProjectContext } from "../project.context.jsx"

const ProjectSlider = () => {

    const { showBack, setShowBack } = useContext(ProjectContext)

    const slideRef = useRef()
    const isTablet = useMediaQuery({
        query: "(max-width: 1000px)"
    })

    useGSAP(() => {
        const scrollAmmount = slideRef.current.scrollWidth - window.innerWidth
        if(!isTablet) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#project-section',
                    start: "2% top",
                    end: `+=${scrollAmmount + 1300}px`,
                    scrub: true,
                    pin: true,
                    // markers: true
                }
            })
            tl.to(".slider-title", {
                xPercent: -5,
                duration: .2,
                ease: "power3.inOut"
            })
            tl.to(".slider-para", {
                xPercent: 5,
                duration: .2,
                ease: "power3.inOut"
            }, "<")
            tl.to("#project-section", {
                x: `-${scrollAmmount + 1300}px`,
                ease: "power1.inOut"
            })
        }
        
    })

    const onHover = (e) => {
        const img = e.currentTarget.querySelector(".project-img")
        const video = e.currentTarget.querySelector(".project-video")
        gsap.to(img, {
            opacity: 0,
            scale: 1.05,
            ease: "power1.inOut"
        })

        video.play()
    }
    const onLeave = (e) => {
        const img = e.currentTarget.querySelector(".project-img")
        const video = e.currentTarget.querySelector(".project-video")
        gsap.to(img, {
            opacity: 1,
            scale:1,
            ease: "power4.out"
        })
        video.pause()
        video.currentTime = 0
    }

    const headingHover = (e) => {
        const h = e.currentTarget
        gsap.to(h, {
            color:"#C8B3F6"
        })
    }

    const headingLeave = (e) => {
        const h = e.currentTarget
        gsap.to(h, {
            color:"#ffffff"
        })
    }

  return (
    <div ref={slideRef} className="lg:h-screen min-h-screen w-full font-pop">
        <div className="h-full w-full flex lg:flex-row flex-col items-center flex-nowrap 2xl:gap-22 lg:gap-[8vw] md:gap-[8vw] gap-10">
            {
                projects.map((project) => {
                    return(

                        // Preoject Card 
                        <div
                            key={project.name}
                            style={{
                                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                            }}
                            className="project-card bg-[linear-gradient(130deg,#7546E8,#1E202C)] 2xl:h-[75vh] xl:h-[65vh] lg:h-[42vw] md:h-[75vw] h-[95vw] 2xl:w-[36vw] xl:w-[40vw] lg:w-[40vw] md:w-[90vw] w-full flex flex-col 2xl:p-[1vw] xl:p-[1.3vw] lg:p-[1.2vw] md:p-[2vw] p-[2.5vw] 2xl:gap-y-[2vw] lg:gap-y-[2vw] gap-y-[3.5vw] rounded-md lg:rounded-none"
                            onMouseEnter={onHover}
                            onMouseLeave={onLeave}
                        >

                            {/* Prpject IMG & VDO */}
                            <div className="w-full min-h-[70%] rounded-md overflow-hidden relative bg-black">
            
                                <img src={project.img} alt="" className="project-img h-[102%] w-full object-cover absolute z-5"/>
                                <video src={project.vdo} className={`project-video h-[102%] w-full ${project.objectFill === true ? "object-fill" : "object-cover"} absolute`} muted playsInline loop></video>
                               
                            8</div>


                            {/* About project (Project Name & Used Skills) */}
                            <div className="2xl:leading-[1.5vw] xl:leading-[1.2vw] md:leading-[2.5vw] leading-[7vw] text-white">

                                {/* name of project */}
                                <div className="font-pop-b  2xl:text-[3vw] xl:text-[3.5vw] lg:text-[4vw] md:text-[8vw] text-[8.5vw] 2xl:mb-[2vw] lg:mb-[2.5vw] mb-[3vw] ">
                                    <Link 
                                        to={`/project-info/${project.name}`}
                                        onClick={() => setShowBack(true)}
                                    >
                                        <h2
                                            className="project-heading cursor-pointer"
                                            onMouseEnter={headingHover}
                                            onMouseLeave={headingLeave}
                                        >
                                            {project.name}
                                        </h2>
                                    </Link>
                                </div>

                                {/* used skills  */}
                                <div className=" flex flex-wrap 2xl:gap-[1vw] xl:gap-[1vw] lg:gap-[1vw] md:gap-[1.5vw] gap-[1.5vw] min-h-[20%] ">
                                    {
                                        project.skills.map((skill) => {
                                            return (
                                                <div className="bg-[#C8B3F6] text-[#1E202C] rounded-full flex items-center 2xl:text-[1vw] xl:text-[1.2vw] lg:text-[1.5vw] md:text-[2.5vw] text-[3.5vw] 2xl:h-[2.5vw] xl:h-[2.2vw] lg:h-[2.5vw] md:h-[4vw] h-[5.5vw] 2xl:px-[1vw] xl:px-[1vw] lg:px-[1vw] md:px-[2.5vw] px-[2.5vw] ">
                                                    {skill}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                    
                })
            }
            
        </div>
    </div>
  )
}

export default ProjectSlider