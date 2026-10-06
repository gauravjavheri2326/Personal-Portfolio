import { CircleChevronLeft, Menu, X } from "lucide-react"
import NavA from "../components/NavA.jsx"
import { useContext, useEffect, useRef } from "react"
import { useMediaQuery } from "react-responsive"
import { useGSAP } from "@gsap/react"
import { ProjectContext } from "../project.context.jsx"
import { Link } from "react-router"

import gsap from 'gsap'





const Navbar = ({ isActive, setIsActive, lenisRef  }) => {

  const { showBack, setShowBack } = useContext(ProjectContext)

  const navRef = useRef()
  useEffect(() => {
    
    const lenis = lenisRef.current?.lenis

    if (!lenis) return;

    if (isActive) {
      lenis.stop()
    } else {
      lenis.start()
    }

    document.body.style.overflowY = isActive ? "hidden" : "auto"
    console.log(isActive)
    return () => {
      document.body.style.overflowY = "auto"
    }

  }, [isActive])

  const isTablet = useMediaQuery({
    query: "(max-width: 1000px)"
  })

  useGSAP(() => {
    if(isTablet) {
      if(isActive) {
        gsap.to(".nav-div", {
          height: "100vh",
          ease: "expo.inOut"
        })
      }

      if(!isActive) {
        gsap.to(".nav-div", {
          height: "7vh",
          delay: .8,
          ease: "expo.inOut"
        })
      }
    }
  }, [isActive])
  
  return (
    <div 
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      }}
      ref={navRef} 
      className={`${isActive ? " bg-[#00000020]" : " bg-[#ffffff00]"} h-[7vh] nav-div text-white backdrop-blur-sm w-full flex justify-between  px-7  fixed z-50 border-b border-[#ffffff39] lg:bg-[#ffffff00] lg:h-15 lg:px-13 xl:px-20`}
    >
        {/* Logo  */}
        <h1 className="absolute font-pop text-[2.5vh] upper mt-[2vh]">GJ</h1>

        {/* Menubar for androids */}
        {
          !showBack ?

            <div>
              <Menu
                onClick={() => setIsActive(true)}
                className={` ${isActive ? "hidden" : "block"} absolute right-7 lg:hidden  mt-[2vh] md:w-[4.5vw] h-[3vh]`}
              />
              <X
                onClick={() => setIsActive(false)}
                className={`${isActive ? "block" : "hidden"} absolute right-7 lg:hidden mt-[2vh] h-[3vh]`}
              />
            </div>

          :

            <div
              className={` ${isActive ? "hidden" : "block"} absolute right-7 lg:hidden  mt-[2vh] md:w-[4.5vw] h-[3vh]`}
            >
              <Link
                to={"/"}
                onClick={() => setShowBack(false)}
              >
                <CircleChevronLeft/>
              </Link>
            </div>


        }

        {/* Links of Navbar */}
        {
          !showBack ?

            <div className=" w-full text-[3vh] flex flex-col justify-center items-center gap-10 lg:text-[1rem] lg:gap-8 lg:justify-end lg:flex-row">
              <NavA a="Home" ids="#home" isActive={isActive} setIsActive={setIsActive} />
              <NavA a="Services" ids="#services" isActive={isActive} setIsActive={setIsActive} />
              <NavA a="Project" ids="#project-section" isActive={isActive} setIsActive={setIsActive} />
              <NavA a="Contact Me" ids="#contact" isActive={isActive} setIsActive={setIsActive} />
            </div>

          :

            <div className={`w-full text-[3vh] hidden lg:flex flex-col justify-center items-center gap-10 lg:text-[1rem] lg:gap-8 lg:justify-end lg:flex-row `}>
              <Link 
                to={"/"}
                onClick={() => setShowBack(false)}
              >
                <CircleChevronLeft className="hover:text-[#60519b]"/>
              </Link>
            </div>

        }
    </div>
  )
}

export default Navbar