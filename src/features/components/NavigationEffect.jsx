import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useContext } from 'react'
import { ProjectContext } from '../project.context'


const NavigationEffect = () => {

    const { navigate, setNavigate } = useContext(ProjectContext)
    
    useGSAP(() => {
        if(navigate) {
            const tl = gsap.timeline({
                onComplete: () => setNavigate(false)
            })

            tl.to(".navigate-page", {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                duration: .5,
                ease: "circ.in"            
            })
            .to(".navigate-page", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: .4,
                delay: .4,
                ease: "circ.out"
            })
            .to(".navigate-page", {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                duration: 0,
                immediateRender: false
            })

        }
    }, [navigate])

  return (
    <div 
        className={`navigate-page bg-black h-screen  w-full fixed top-0 z-99999 pointer-events-none`}
        style={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
        }}
    ></div>
  )
}

export default NavigationEffect