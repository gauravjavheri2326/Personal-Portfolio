
import ReactLenis from "lenis/react"
import Navbar from "./features/sections/Navbar.jsx"
import { useRef, useState } from "react"
import { Analytics } from '@vercel/analytics/react'
import { Outlet } from "react-router"
import { ProjectContextProvider } from "./features/project.context.jsx"



function App() {

  const [isActive, setIsActive] = useState(false)





  const lenisRef = useRef()
  return (
    <main className="overflow-x-hidden">
      <ProjectContextProvider>
        <Analytics />
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

          <Outlet />

          {/* <div className="bg-[#bfc0d1] h-screen"></div> */}
        </ReactLenis>
      </ProjectContextProvider>
    </main>
  )
}

export default App
