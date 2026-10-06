
import {useEffect, useState, useRef} from "react"
import MainBgCircles from "../components/MainBgCircles.jsx"
import MainContent from "../components/MainContent.jsx"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"



const MainBg = () => {

  const [circleVals, setCircleVals] = useState(
    {
      a: 0,
      b: 0,
      s: 0
    },
    {
      a2: 0,
      b2: 0,
      s2: 0
    },

  )
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        // setCircleVals({ a: -50, b: -10, s: 200, a2: 100, b2: 450, s2: 400 })
        setCircleVals({ a: -10, b: 0, s: 60, a2: 15, b2: 120, s2: 120 })
      }
      else if (window.innerWidth <= 1023) {
        setCircleVals({ a: -10, b: -10, s: 70, a2: 30, b2: 80, s2: 100 })
      }
      // else if (window.innerWidth <= 1439){
      //   setCircleVals({ a: -0, b: -0, s: 20, a2: 0, b2: 0, s2: 0 })
      // }
      else{
        setCircleVals({ a: -5, b: -5, s: 30, a2: 60, b2: 25, s2: 50 })
      }
      

    }

    handleResize()

    window.addEventListener("resize", handleResize)
    return 
  }, [])
  

  return (
    <div className='text-white w-full bg-[#1e202c] relative overflow-hidden min-h-screen '>

      <MainBgCircles a={circleVals.a} b={circleVals.b} s={circleVals.s} />
      <MainBgCircles a={circleVals.a2} b={circleVals.b2} s={circleVals.s2} />
      <MainContent/>
    </div>
  )
}

export default MainBg
