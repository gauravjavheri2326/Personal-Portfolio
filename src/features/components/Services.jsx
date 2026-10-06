import {ArrowUpRight} from 'lucide-react'

const Services = (props) => {
  return (
    <div className={`card font-pop py-5 px-3 mb-5 lg:h-auto md:h-[40vw] h-[70vw] flex flex-col justify-between rounded-md lg:rounded-none lg:items-center lg:flex-row lg:py-3 lg:mb-3.5 xl:py-5 
      ${(props.id+1) % 2 != 0 ?   
      "bg-[linear-gradient(to_bottom_right,#7546e8_20%,#1E202C_85%)] lg:bg-[linear-gradient(to_right,#7546e8_10%,#7546e831_85%)]"
      :   
      "bg-[linear-gradient(to_top_left,#7546e8_20%,#1E202C_85%)] lg:bg-[linear-gradient(to_left,#7546e8_10%,#7546e831_85%)]"
      }
    `}>
        <div className="font-pop-b flex flex-col gap-2 mb-5 lg:mb-0 lg:gap-5 lg:items-center lg:flex-row">
          <div className="h-12 w-12 flex justify-center items-center border-2 rounded-[100%]">{props.id+1}</div>
          <h2 className="lg:text-xl md:text-[6vw] text-[8vw]">{props.title}</h2>
        </div>
        <div className='flex flex-col
         lg:w-100 lg:justify-between lg:flex-row lg:gap-10'>
          <p className="lg:text-sm md:text-[3vw] text-[4vw]
           text-[#bfc0d1] lg:pt-1">{props.info}</p>
          <div>
            <ArrowUpRight size={70} color='#bfc0d1' className='mt-3 lg:hidden' />
            <ArrowUpRight size={40} color='#bfc0d1' className='hidden lg:block' />
          </div>
        </div>
    </div>
  )
}

export default Services