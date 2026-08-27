import { projects } from "../constants"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

const ProjectSlider = () => {
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
    <div ref={slideRef} className="lg:h-screen min-h-screen w-full">
        <div className="h-full w-full flex lg:flex-row flex-col items-center flex-nowrap 2xl:gap-22 lg:gap-20 md:gap-10 gap-10">
            {
                projects.map((project) => {
                    return(
                        <div
                            key={project.name}
                            style={{
                                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                            }}
                            className="project-card bg-[linear-gradient(130deg,#7546E8,#1E202C)] 2xl:h-[80vh] 2xl:w-[36vw] xl:h-[65vh] xl:w-[40vw] lg:h-[58vh] lg:w-[50vw] md:h-150 h-110 w-full flex flex-col 2xl:p-[1vw] xl:p-[1.3vw] lg:p-[1.6vw] md:p-[2vw] p-[2.5vw] 2xl:gap-y-15 lg:gap-y-10 gap-y-8 rounded-md lg:rounded-none"
                            onMouseEnter={onHover}
                            onMouseLeave={onLeave}
                        >
                            <div className="w-full min-h-[70%] rounded-md overflow-hidden relative bg-black">
            
                                <img src={project.img} alt="" className="project-img h-[102%] w-full object-cover absolute z-5"/>
                                <video src={project.vdo} className={`project-video h-[102%] w-full ${project.objectFill === true ? "object-fill" : "object-cover"} absolute`} muted playsInline loop></video>
                               
                            </div>
                            <div className="leading-[2.5vw] text-white">
                                <div className="font-pop-b  2xl:text-[3vw] xl:text-[3.5vw] lg:text-[4vw] md:text-[4.5vw] text-[8.5vw] 2xl:mb-[2vw] lg:mb-[2.5vw] mb-[3vw] ">
                                    <a href={project.link}>
                                        <h2
                                            className="project-heading cursor-pointer"
                                            onMouseEnter={headingHover}
                                            onMouseLeave={headingLeave}
                                        >
                                            {project.name}
                                        </h2>
                                    </a>
                                </div>
                                <div className="leading-[1.2em] 2xl:text-[1em]">
                                    {project.desc}
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