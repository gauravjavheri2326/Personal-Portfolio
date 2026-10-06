import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import { useRef } from 'react'
import resume from "/Resume.pdf"


const Left = () => {
  const nameRef = useRef()
  const headingRef = useRef()
  const leftBtn = useRef()
  const rightBtn = useRef()
  const pRef = useRef()


  useGSAP(() => {
    const paraSplit = new SplitText('.para' , { type: 'lines'})

    // h1 
    gsap.from(".h1", {
      color: "white",
      y: 280,
      duration: 1.2,
      ease: "power4.inOut"  
    })
    
    // btns 
    gsap.from(leftBtn.current, {
      opacity: 0,
      x: -50,
      duration: 1.2,
      ease: "power4.inOut"  
    })

    gsap.from(rightBtn.current, {
      opacity: 0,
      x: 50,
      duration: 1.2,
      ease: "power4.inOut"  
    })

    //p
    
    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 150,
      duration: .9,
      stagger: 0.07,
      ease: "power4.inOut"  
    })

    //name
    gsap.from(nameRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power4.inOut" 
    })

  }, [])

  
  return (
    <div className='flex flex-col lg:pt-0 md:pt-[20vw] pt-[40vw] justify-center items-center w-full lg:h-screen xl:w-3/5 lg:w-1.9/3  lg:items-start '>
      <div className='overflow-hidden xl:h-9 lg:h-6 md:h-[4vw] h-5'>
        <h2
          ref={nameRef} 
          className='font-pop-light text-center text-[#bfc0d1] xl:text-3xl lg:text-xl md:text-[3vw] text-bases   lg:text-left'
        >
          I am Gaurav
        </h2>
      </div>
      
      <div className="xl:h-23 lg:h-[15vw] md:h-[28.5vw] h-[30vw] overflow-hidden flex xl:mb-10 lg:mb-[.5vw] lg:w-full ">
        <h1 className="h1 font-pop-xb xl:text-left lg:text-start text-center  uppercase  font-extrabold tracking-tight  bg-clip-text text-transparent bg-[linear-gradient(55deg,#7546e8_35%,white_65%)] xl:whitespace-nowrap   xl:text-[6.5em] lg:text-[8vw] md:text-[17vw] text-[17.5vw] xl:leading-none lg:leading-[6.5vw] md:leading-[14vw] leading-[14vw]">Web Developer</h1>
      </div>
      <div className='para'>
        <p
          ref={pRef}
          className="font-pop-light hidden text-sm text-center xl:w-140 lg:w-[50vw] w-80 text-[#b0a9e5] lg:block lg:text-left  lg:text-sm  xl:text-base overflow-hidden text-balance"
        >I'm a creative Web Developer who loves turning ideas intobeautiful, responsive, and high-performing websites.I don't just write code - I craft digital experiences that feel smooth, modern, and meaningful. Always pushing to create something better than yesterday.</p>
        
      </div>
      <div className="flex gap-x-5 mt-8 font-pop uppercase text-xs lg:gap-10 xl:text-base xl:gap-15 ">
        <a href="#project-section">
          <div
            ref={leftBtn}
            className="bg-[linear-gradient(55deg,#7546e8_25%,white_85%)] text-[#1e202c] rounded-full cursor-pointer xl:px-13 xl:py-3 lg:px-11 lg:py-3 md:px-[5vw] md:py-[2vw] px-9 py-3 "
          >
            View My Work
          </div>
        </a>
        <div 
          ref={rightBtn} 
          className=" border border-[#7546e8]  bg-clip-text text-transparent bg-[linear-gradient(200deg,#7546e8_35%,white_75%)]  rounded-full cursor-pointer xl:px-10 xl:py-3 lg:px-7 lg:py-3 md:px-[3vw] md:py-[2vw] px-4 py-3 lg:border"
        >
          <a href={resume} download={"Resume"}>Download Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Left