import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { useRef } from "react";
import { useMediaQuery } from 'react-responsive'

const NavA = ({a, ids, isActive, setIsActive}) => {
  // console.log(isActive);
  const isTablet = useMediaQuery({
    query: "(max-width: 1000px)"
  })

  const aContRef = useRef()
  useGSAP(() => {
    if(isTablet) {
      if(isActive) {
        const tlDisplay = gsap.timeline()
        tlDisplay.to(aContRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power1.inOut"
        })
        .to(".nav-a", {
          yPercent: -70,
          display: "block",
          opacity: 1,
          duration: 0.7,
          delay: 0.5,
          ease: "power1.inOut"
        }, "<")
        
      }
      if(!isActive) {
        const tlClose = gsap.timeline()
        tlClose.to(".nav-a", {
          yPercent: 100,
          opacity: 0,
        })
        .to(".nav-a", {
          display: "none",
          delay:.2
        })
        .to(aContRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          ease: "power1.inOut"
        }, "-=.5")
      }
    }
  }, [isActive])

  
  return (
    <div 
      ref={aContRef}
      style={{
        clipPath: isTablet  ? "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      }}
      className= "a-cont overflow-hidden lg:overflow-auto border-b border-[#ffffff39] lg:border-0">
        <a
          onClick={() => setIsActive(false)} 
          href={ids}
          className={`nav-a  font-pop block pb-10 w-screen text-center lg:text-[white] translate-y-full lg:translate-y-0 hover:text-[#60519b] lg:opacity-100 lg:pb-0 lg:w-auto lg:block`}
        >
          {a}
        </a>
    </div>
  )
}

export default NavA