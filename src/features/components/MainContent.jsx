import Left from "./Left"
import Right from "./Right"

const MainContent = () => {
  return (
    <div id="home" className="bg-[#ffffff00] w-full backdrop-blur-xl z-5 sm:h-full lg:min-h-screen xl:px-20 lg:px-[3vw] ">
        <div className="h-full w-full flex flex-col items-center lg:justify-between lg:flex-row xl:gap-10  ">
            <Left />
            <Right />
        </div>
    </div>
  )
}

export default MainContent