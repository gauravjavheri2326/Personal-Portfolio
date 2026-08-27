import heroImg from "/public/assets/Imgs/Hero.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const Right = () => {
  const pRef = useRef()
  const imgRef = useRef()

  useGSAP(() => {
    gsap.from(pRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: "power4.inOut"
    })

    gsap.from(imgRef.current, {
      opacity: 0,
      y: 20,
      duration: 1.2,
      ease: "power4.inOut"
    })
  })
  return (
    <div className='w-full md:min-h-[75vh] min-h-[150vw] mt-10 relative flex justify-center lg:h-screen  xl:w-2/5 lg:w-1.1/3  '>
      <p 
        ref={pRef}
        className="font-pop-light absolute block md:text-[2.4vw] text-[3.5vw] text-center md:w-[70vw] w-80 text-[#b0a9e5] lg:hidden"
      >I'm a creative Web Developer who loves turning ideas into beautiful, responsive, and high-performing websites. I don't just write code - I craft digital experiences that feel smooth, modern, and meaningful. Always pushing to create something better than yesterday.
      </p>
      <img ref={imgRef} className='lg:h-[60vw] lg:w-[35vw] md:h-[60vh] md:w-[60vw] h-100 w-80 object-cover select-none absolute xl:size-auto  bottom-0' src={heroImg} alt="Personal Portfolio" />
    </div>
  )
}

export default Right