import React from 'react'
import workplace from './images/workplace.png'
import card1icon from './images/card1icon.png'
import card2icon from './images/card2icon.png'
import card3icon from './images/card3icon.png'
import card4icon from './images/card4icon.png'
import card5icon from './images/card5icon.png'
import card6icon from './images/card6icon.png'
import card7icon from './images/card7icon.png'
import card8icon from './images/card8icon.png'
import card9icon from './images/card9icon.png'
const Tservices = () => {
  return (
    <div className=' lg:flex-row md:flex-row flex flex-col gap-40 items-center mt-[-140px] justify-center lg:scale-100 lg:mt-[130px] lg:gap-28 md:scale-[85%]  md:mt-[50px] md:gap-12 scale-[58%]'>

<div className='w-[420px] grid grid-flow-row scale-125 lg:scale-100 md:scale-100  gap-[100px] '>
  <div>
    <h1 className='text-[36px] font-medium text-[#101D2E] GorditaM'>Translation Services</h1><br/>
      <h1 className='text-[16px] font-normal text-[#697587] pr-10 tracking-wide Gordita'>Letter Crafts is your partner for over 80 languages. Our team of native translators and industry experts can cater to all your translation needs.</h1>
  </div>
  <img src={workplace} alt='M'/>
</div>
<div className='w-[668px] h-[508px] p-2 grid grid-flow-col grid-cols-3 grid-rows-3 gap-8  justify-center md:gap-[20px] lg:gap-[20px] '>  {/*cards*/}
<div className='lg:w-[209px] p-[33px] flex flex-col justify-center items-center gap-[8px] rounded-[16px] shadow-lg border-[1px] border-gray-100 hover:scale-90 transition-all'>
 <div className='h-[36px] w-[36px] '> <img  src={card1icon} alt='M'/></div>
  <h1 className='text-[#101D2E] text-[16px] font-medium text-center'>Certified translation and notarisation</h1>
</div>

<div className='lg:w-[209px] p-[33px]  flex flex-col justify-center items-center gap-[8px] rounded-[16px] shadow-lg border-[1px] border-gray-100 hover:scale-90 transition-all'>
 <div className='h-[36px] w-[36px] '> <img  src={card2icon} alt='M'/></div>
  <h1 className='text-[#101D2E] text-[16px] font-medium text-center'>Business document translation</h1>
</div>

<div className='lg:w-[209px] p-[33px] flex flex-col justify-center items-center gap-[8px] rounded-[16px] shadow-lg border-[1px] border-gray-100 hover:scale-90 transition-all'>
 <div className='h-[36px] w-[36px] '> <img  src={card3icon} alt='M'/></div>
  <h1 className='text-[#101D2E] text-[16px] font-medium text-center'>Personal document translation</h1>
</div>

<div className='lg:w-[209px] p-[33px] flex flex-col justify-center items-center gap-[8px] rounded-[16px] shadow-lg border-[1px] border-gray-100 hover:scale-90 transition-all'>
 <div className='h-[36px] w-[36px] '> <img  src={card4icon} alt='M'/></div>
  <h1 className='text-[#101D2E] text-[16px] font-medium text-center'>Website and apps translation and localisation</h1>
</div>

<div className='lg:w-[209px] p-[33px] flex flex-col justify-center items-center gap-[8px] rounded-[16px] shadow-lg border-[1px] border-gray-100 hover:scale-90 transition-all'>
 <div className='h-[36px] w-[36px] '> <img  src={card5icon} alt='M'/></div>
  <h1 className='text-[#101D2E] text-[16px] font-medium text-center'>Typesetting and copywriting documents</h1>
</div>

<div className='lg:w-[209px] p-[33px] flex flex-col justify-center items-center gap-[8px] rounded-[16px] shadow-lg border-[1px] border-gray-100 hover:scale-90 transition-all'>
 <div className='h-[36px] w-[36px] '> <img  src={card6icon} alt='M'/></div>
  <h1 className='text-[#101D2E] text-[16px] font-medium text-center'>Marketing translation and transcreation</h1>
</div>

<div className='lg:w-[209px] p-[33px] flex flex-col justify-center items-center gap-[8px] rounded-[16px] shadow-lg border-[1px] border-gray-100 hover:scale-90 transition-all'>
 <div className='h-[36px] w-[36px] '> <img  src={card7icon} alt='M'/></div>
  <h1 className='text-[#101D2E] text-[16px] font-medium text-center'>Business specific translation</h1>
</div>

<div className='lg:w-[209px] p-[33px] flex flex-col justify-center items-center gap-[8px] rounded-[16px] shadow-lg border-[1px] border-gray-100 hover:scale-90 transition-all'>
 <div className='h-[36px] w-[36px] '> <img  src={card8icon} alt='M'/></div>
  <h1 className='text-[#101D2E] text-[16px] font-medium text-center'>Legal document translation</h1>
</div>

<div className='lg:w-[209px] p-[33px] flex flex-col justify-center items-center gap-[8px] rounded-[16px] shadow-lg border-[1px] border-gray-100 hover:scale-90 transition-all'>
 <div className='h-[36px] w-[36px] '> <img  src={card9icon} alt='M'/></div>
  <h1 className='text-[#101D2E] text-[16px] font-medium text-center'>Technical and IT translation</h1>
</div>
  </div>       

</div>
  )
}

export default Tservices