import Services from "/src/components/Services"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(ScrollTrigger)

const ServicesSection = (props) => {
  const container = useRef()
  const isTablet = useMediaQuery({
      query: "(max-width: 768px)"
  })
  useGSAP(() => {
    gsap.from("#h1", {
      x: -80,
      opacity: 0,
      duration: .8,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: container.current,
        start: isTablet ? "top 65%": "top 90%",
        // markers: true
      }
    })

    gsap.from("#para", {
      x:100,
      opacity: 0,
      duration: .8,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: container.current,
        start: isTablet ? "top 65%": "top 90%"
      }
    })

    gsap.utils.toArray(".card").forEach((card) => {
      gsap.from(card, {
      opacity: 0,
      scale: 1.02,
      y: 50,
      duration: .5,
      scrollTrigger: {
        trigger: card,
        scrub: 2,
        start: "top 90%",
        end: "top 75%",
      }
      })
    })

    gsap.to(container.current, {
      // width: "80%",
      scaleX: 0.9,
      borderRadius: 50,
      ease: "power1.inOut", 
      scrollTrigger: {
        trigger: container.current,
        start: "bottom 40%",
        scrub: true,
        // markers: true
      }
    })
  }, {scope: container})
  return (
    
    <div ref={container} id="services" className=' bg-black min-h-[70vh] pb-5 lg:pb-0 lg:min-h-screen w-full text-white'>
      <div className='flex overflow-hidden flex-col pl-2 lg:pl-0 pb-10 lg:items-center'>
         <h1 id="h1" className='main-heading mt-5 [-webkit-text-stroke:1px_#7546e8] bg-clip-text text-transparent bg-[linear-gradient(55deg,#7546e8_10%,black_65%)]  lg:mt-8    xl:mt-10 '>My Quality Services</h1>
        <p id="para" className='xl:text-xl lg:text-base md:text-[3.5vw] text-[4vw]  '>Services which will help you to make decision!</p>
      </div>
      <div className='px-5 lg:px-20 xl:px-40'>
        {props.service.map((elem, idx) => {
          return <Services key={idx} id={idx} title={elem.title} info={elem.info} />
        })}
        
      </div>
    </div>
  )
}

export default ServicesSection