import { useRef } from 'react'
import { useParams, Link } from 'react-router'
import { projects } from '../constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText, ScrollTrigger } from 'gsap/all'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ProjectInfo = () => {
  const { projectName } = useParams()

  const project = projects.find(p => p.name === projectName)

   
  const linkContRef = useRef()
  const btnRef = useRef()
  const arrowRef = useRef()

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-[#C8B3F6] underline">Go back to home</Link>
      </div>
    )
  }

  // btn mouse enter animation 
  const btnAnimate1 = () => {
    gsap.to(btnRef.current, {
      columnGap: "2vw"
    })

    gsap.to(arrowRef.current, {
      transform: "rotate(45deg)"
    })
  }
  
  const btnAnimate2 = () => {
    gsap.to(btnRef.current, {
      columnGap: "0.5vw"
    })

    gsap.to(arrowRef.current, {
      transform: "rotate(0deg)"
    })
  }
  

  useGSAP(() => {

    const headingSplit = new SplitText(".project-info #project-name", { type: 'words' })
    const infoParaSplit = new SplitText(".project-info #project-info-para", { type: 'words' })

    const headerTl = new gsap.timeline()

    // heading animation
    headerTl.from(headingSplit.words, {
      yPercent: 100,
      duration: 0.4,
      delay: 0.8,
      stagger: 0.2,
      ease: "circ.out"

    })
    // video container animation
    .from("#vdo-div", {
      scale: 0.7,
      filter: "blur(10px)",
      duration: 0.4,
      ease: "power4.out"
    })

    // responsive scrollTrigger values per breakpoint
    const scrollConfig = {
      // 4K / 2xl (≥2560px)
      "(min-width: 2560px)": { start: "1600 bottom", end: "1160 top" },
      // xl (1280–2559px)
      "(min-width: 1280px) and (max-width: 2559px)": { start: "900 bottom", end: "635 top" },
      // lg (1024–1279px)
      "(min-width: 1024px) and (max-width: 1279px)": { start: "680 bottom", end: "535 top" },
      // md (768–1023px)
      "(min-width: 768px) and (max-width: 1023px)": { start: "500 500", end: "400 top" },
      // sm / mobile (<768px)
      "(max-width: 767px)": { start: "300 350", end: "100 top" },
    }

    Object.entries(scrollConfig).forEach(([query, { start, end }]) => {
      ScrollTrigger.matchMedia({
        [query]: () => {
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: ".project-info",
              start,
              end,
              // markers: true,
              scrub: 1.5
            }
          })

          // information animation
          scrollTl.from(infoParaSplit.words, {
            opacity: 0,
            color: "white",
            filter: "blur(20px)",
            duration: 1,
            stagger: 0.2,
            ease: "circ.out"
          })
        }
      })
    })

    // Parallax effect for project image
    gsap.to("#project-img img", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: "#project-img",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        // markers: true
      }
    })

    // Project link section — pin and reveal animation
    const linkTl = gsap.timeline({
      scrollTrigger: {
        trigger: linkContRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1.5,
        pin: true,
        markers: true,
      }
    })

    linkTl
      .to(".project-info", {
        backgroundColor: "black",
        duration: 0.05,
        ease: "power2.inOut"
      })
      .from("#text1", {
        xPercent: -200,
        duration: 0.1,
        ease: "circ.out"
      })
      .from("#text2", {
        xPercent: 300,
        duration: 0.1,
        ease: "circ.out"
      })
      .from("#text3", {
        xPercent: -200,
        duration: 0.1,
        ease: "circ.out"
      })
      .from(".project-info .primary-btn", {
        opacity: 0,
        duration: 0.1,
        ease: "power1.out"
      })
      
      

      

  }, [])

  return (
    <div className='project-info min-h-screen 2xl:mt-[4vw] xl:mt-[4vw] lg:mt-[5.5vw] md:mt-[9vw] mt-[15vw] 2xl:pt-[1.5vw] xl:pt-[1.5vw] lg:pt-[2.6vw] md:pt-[5vw] pt-[10vw] lg:px-[2.2vw] md:px-[3vw] px-[2vw]'>

      {/* Project Name  */}
      <div className='overflow-hidden flex items-center 2xl:h-[7vw] xl:h-[7vw] lg:h-[7.6vw] md:h-[10vw] h-[12vw] 2xl:mb-[1.5vw] xl:mb-[1.5vw] lg:mb-[2.1vw] md:mb-[2.5vw] mb-[2vw] '>
        <h2 id='project-name' className='font-pop-xb text-[#7546e8] uppercase tracking-tighter 2xl:text-[7.5vw] xl:text-[7.5vw] lg:text-[8vw] md:text-[11vw] text-[11vw]'>{project.name}</h2>
      </div>

      {/* Project IMG or VDO  */}
      <div className='w-full flex justify-center 2xl:h-[40vw] xl:h-[40vw] lg:h-[43vw] md:h-[43vw] h-[48vw]'>
        <div id='vdo-div' className='overflow-hidden lg:rounded-[1vw] md:rounded-[1.5vw] rounded-[3vw] h-full 2xl:w-[80vw] xl:w-[80vw] lg:w-[85vw] md:w-[85vw] w-full'>
          {
            project.vdo ?
            <video 
              src={project.vdo}
              className='h-full w-full object-cover'
              muted 
              playsInline 
              loop
              autoPlay
            ></video>

            :

            <img 
              src={project.img} 
              alt={project.name} 
              className='h-full w-full object-cover'
            />
            
            
          }
        </div>
      </div>

      {/* project info  and img*/}
      <div className='flex  justify-between md:flex-row flex-col 2xl:gap-x-[8vw] xl:gap-x-[8vw] lg:gap-x-[5vw] md:gap-x-[3.5vw] gap-y-[3.5vw] 2xl:mt-[4vw] xl:mt-[4vw] lg:mt-[4.3vw] md:mt-[4.4vw] mt-[8vw] 2xl:px-[2.5vw] xl:px-[2.5vw] lg:px-[2vw] md:px-[2.5vw]'>

        {/* info  */}
        <div className='2xl:w-[60vw] xl:w-[60vw] lg:w-[68vw] md:w-[70vw] w-full'>
          <p id='project-info-para' className='text-[#1E202C] 2xl:text-[1.8vw] xl:text-[1.8vw] lg:text-[1.9vw] md:text-[2.2vw] text-[4.3vw]'>{project.desc}</p>
        </div>

        {/* img  */}
        <div id='project-img' className=' md:rounded-[1vw] rounded-[3vw] overflow-hidden 2xl:w-[35vw] xl:w-[35vw] lg:w-[35vw] md:w-[35vw] w-full 2xl:h-[40vw] xl:h-[40vw] lg:h-[42vw] md:h-[45vw] h-[80vw]'>
          <img 
            src={project.img} 
            alt={project.name}
            
            className='h-full w-full object-cover scale-150 translate-y-20'
          />
        </div>
      </div>

      {/* making reponsive is pending */}
      {/* Site Link  */}
      <div 
        ref={linkContRef} 
        className='h-screen w-full'
      >

          {/* want ot visit text container  */}
          <div className='h-[85%] w-full flex flex-col justify-center items-center leading-[12vw]'>
            <h3 id='text1' className='link-text'>Want</h3>
            <h3 id='text2' className='link-text'>To</h3>
            <h3 id='text3' className='link-text'>Visit</h3>
          </div>

          {/* btn container  */}
          <div className='w-full flex justify-center'>

            <a
              ref={btnRef}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={btnAnimate1}
              onMouseLeave={btnAnimate2}
              className="primary-btn flex items-center justify-center gap-x-[0.5vw] w-[28vw] h-[2.5vw]"
            >


              <span className="text-[1.2vw]">Click Here!</span>
              <ArrowUpRight ref={arrowRef} className="size-[1.5vw]" />
              
            </a>

          </div>
      </div>

      

    </div>
  )
}

export default ProjectInfo