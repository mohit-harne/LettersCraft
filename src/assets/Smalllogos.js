import React from 'react'
import slogo1 from '../assets/images/slogo1.png'
import slogo2 from '../assets/images/slogo2.png'
import slogo3 from '../assets/images/slogo3.png'
import slogo4 from '../assets/images/slogo4.png'
import slogo5 from '../assets/images/slogo5.png'
import slogo6 from '../assets/images/slogo6.png'
const Smalllogos = () => {
  return (
    <div className='justify-center grid grid-flow-col lg:grid-rows-1 md:grid-rows-2 grid-rows-2 lg:mt-[200px] md:mt-[50px] lg:gap-[30px] md:gap-[30px] gap-0 lg:scale-100 md:scale-100 scale-90'>
<img className='h-[66px] w-[177px]' src={slogo1} alt='M'/>
<img className='h-[66px] w-[177px]' src={slogo2} alt='M'/>
<img className='h-[66px] w-[177px]' src={slogo3} alt='M'/>
<img className='h-[66px] w-[177px]' src={slogo4} alt='M'/>
<img className='h-[66px] w-[177px]' src={slogo5} alt='M'/>
<img className='h-[66px] w-[177px]' src={slogo6} alt='M'/>
</div>
  )
}

export default Smalllogos