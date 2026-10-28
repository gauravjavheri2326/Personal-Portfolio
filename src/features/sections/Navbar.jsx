import { CircleChevronLeft, Menu, X } from "lucide-react"
import NavA from "../components/NavA.jsx"
import { useContext, useEffect, useRef } from "react"
import { useMediaQuery } from "react-responsive"
import { useGSAP } from "@gsap/react"
import { ProjectContext } from "../project.context.jsx"
import { Link, useNavigate } from "react-router"

import gsap from 'gsap'





const Navbar = ({ isActive, setIsActive, lenisRef  }) => {

  const { showBack, setNavigate } = useContext(ProjectContext)

  const navigate = useNavigate()

  const navRef = useRef()
  const initialHeight = useRef(null)

  useEffect(() => {

    const lenis = lenisRef.current?.lenis

    if (!lenis) return;

    if (!isActive) {
      lenis.start()
    } else {
      lenis.stop()
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

    if (!isTablet) return

    const nav = ".nav-div"
    const navElement = document.querySelector(nav)

    // Capture initial height on first run
    if (!initialHeight.current && navElement) {
      initialHeight.current = getComputedStyle(navElement).height
    }

    if (isActive) {
      gsap.to(nav, {
        height: "100vh",
        delay: 0,
        ease: "expo.inOut",
        duration: 0.8
      })
    } else {
      gsap.to(nav, {
        height: initialHeight.current,
        delay: 0.8,
        ease: "expo.inOut",
        duration: 0.8,
        onComplete: () => {
          // Clear inline height to let Tailwind classes take over
          navElement.style.height = ""
        }
      })
    }

  }, [isActive, isTablet])
  
  return (
    <div 
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      }}
      ref={navRef} 
      className={`${isActive ? " bg-[#00000020]" : " bg-[#ffffff00]"} 2xl:h-[4vw] lg:h-15 md:h-[7vw] h-[14.5vw] nav-div text-white backdrop-blur-sm w-full flex lg:items-center justify-between  px-7  fixed z-50 border-b border-[#ffffff39] lg:bg-[#ffffff00]  lg:px-13 xl:px-20`}
    >
        {/* Logo  */}
        <h1 className="absolute font-pop text-[2.5vh] upper lg:mt-0 mt-[2vh] ">GJ</h1>

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
              className={` ${isActive ? "hidden" : "block"} absolute right-7 lg:hidden mt-[2vh] md:w-[4.5vw] h-[3vh]`}
            >
              <Link
                to={"/"}
                onClick={(e) => {
                  e.preventDefault()

                  setNavigate(true)
                  setTimeout(() => {
                    navigate("/")
                  }, 500)
                } }
              >
                <CircleChevronLeft/>
              </Link>
            </div>


        }

        {/* Links of Navbar */}
        {
          !showBack ?

            <div className=" w-full 2xl:text-[1.1vw] xl:text-[1.1vw] text-[3vh] flex flex-col justify-center items-center gap-10 lg:text-[1rem] lg:gap-8 lg:justify-end lg:flex-row">
              <NavA a="Home" ids="#home" isActive={isActive} setIsActive={setIsActive} />
              <NavA a="Services" ids="#services" isActive={isActive} setIsActive={setIsActive} />
              <NavA a="Project" ids="#project-section" isActive={isActive} setIsActive={setIsActive} />
              <NavA a="Contact Me" ids="#contact" isActive={isActive} setIsActive={setIsActive} />
            </div>

          :

            <div className={`w-full hidden lg:flex lg:justify-end lg:flex-row `}>
              <Link
                to={"/"}
                onClick={(e) => {
                  e.preventDefault()

                  setNavigate(true)
                  setTimeout(() => {
                    navigate("/")
                    setTimeout(() => {
                      document.getElementById("project-section")?.scrollIntoView({
                        behavior: "smooth"
                      })
                    }, 1200)

                  }, 500)
                }}
              >
                <CircleChevronLeft className="hover:text-[#60519b] 2xl:size-[1.5vw] xl:size-[1.3vw]"/>
              </Link>
            </div>

        }
    </div>
  )
}

export default Navbar