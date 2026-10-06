import MainBg from "./MainBg.jsx"
import ProjectSection from "./ProjectSection.jsx"
import ServicesSection from "./ServicesSection.jsx"

const MainPage = () => {

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

  return (
    <>
      
      <MainBg />
      <ServicesSection service={serviceData} />
      <ProjectSection />
    </>
  )
}

export default MainPage