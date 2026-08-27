
const MainBgCircles = (props) => {
  return (
    <div className="w-full overflow-hidden">
        <div style={
            {
                right:`${props.a}vw`,
                top:`${props.b}vw`,
                height:`${props.s}vw`,
                width:`${props.s}vw`
            }
        } className=' bg-[radial-gradient(circle,#60519b,#111111)] rounded-full border-none absolute'></div>
    </div>
  )
}

export default MainBgCircles