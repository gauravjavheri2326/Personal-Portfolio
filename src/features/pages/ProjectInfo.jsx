import React from 'react'
import { useParams, Link } from 'react-router'
import { projects } from '../constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { Scale } from 'lucide-react'

const ProjectInfo = () => {
  const { projectName } = useParams()

  const project = projects.find(p => p.name === projectName)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-[#C8B3F6] underline">Go back to home</Link>
      </div>
    )
  }

  useGSAP(() => {

    const headingSplit = new SplitText(".project-info #project-name", { type: 'words' }) 
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

  }, [])

  return (
    <div className='project-info border min-h-screen 2xl:mt-[4vw] xl:mt-[4.5vw] lg:mt-[5.5vw] md:mt-[9vw] mt-[15vw] 2xl:py-[1.5vw] xl:py-[2vw] lg:py-[2.6vw] md:py-[5vw] py-[10vw] lg:px-[2.2vw] md:px-[3vw] px-[2vw]'>

      {/* Project Name  */}
      <div className='overflow-hidden flex items-center 2xl:h-[7vw] xl:h-[7.3vw] lg:h-[7.6vw] md:h-[10vw] h-[12vw] 2xl:mb-[1.5vw] xl:mb-[1.8vw] lg:mb-[2.1vw] md:mb-[2.5vw] mb-[2vw] '>
        <h2 id='project-name' className='font-pop-xb text-[#7546e8] uppercase tracking-tighter 2xl:text-[7.5vw] xl:text-[7.5vw] lg:text-[8vw] md:text-[11vw] text-[11vw]'>{project.name}</h2>
      </div>

      {/* Project IMG or VDO  */}
      <div className='w-full flex justify-center 2xl:h-[40vw] xl:h-[43vw] lg:h-[43vw] md:h-[43vw] h-[48vw]'>
        <div id='vdo-div' className='overflow-hidden lg:rounded-[1vw] md:rounded-[1.5vw] rounded-[3vw] h-full 2xl:w-[80vw] xl:w-[85vw] lg:w-[85vw] md:w-[85vw] w-full'>
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
    </div>
  )
}

export default ProjectInfo