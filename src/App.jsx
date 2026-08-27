
import ReactLenis from "lenis/react"
import MainBg from "./sections/MainBg.jsx"
import Navbar from "./sections/Navbar.jsx"
import ProjectSection from "./sections/ProjectSection.jsx"
import ServicesSection from "./sections/ServicesSection.jsx"
import { useRef, useState } from "react"


function App() {

  const [isActive, setIsActive] = useState(false)


  const serviceData = [
    {
      title: "Responsiveness",
      info: "Provides responsive website which can fit in any device."
    },
    {
      title: "Punctuality",
      info: "Work completion on time."
    },
    {
      title: "2-Revisions",
      info: "Two revision can be done. We can do 2 corrections in a website for free."
    },
    {
      title: "Animations",
      info: "Build a website with animation. No more that static websites."
    }
  ]

  
  const lenisRef = useRef()
  console.log(lenisRef)
  return (
    <main className="overflow-x-hidden">
      <Navbar
        isActive={isActive}
        setIsActive={setIsActive}
        lenisRef={lenisRef}
      />
      <ReactLenis
        ref={lenisRef}
        root
          options={{
            lerp: 0.01,
            duration: 0.5,
            smoothWheel: true,
            syncTouch: true
          }}  
      >
        <MainBg />
        <ServicesSection service={serviceData} />
        <ProjectSection />
        <div className="bg-[#bfc0d1] h-screen"></div>
      </ReactLenis>
    </main>
  )
}

export default App
