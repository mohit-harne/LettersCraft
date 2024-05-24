import React from 'react'
import topbg from '../assets/images/topbg.png'
import netweb from '../assets/images/netweb.png'
import Slider1 from '../assets/slider1';
import sgflag from '../assets/images/sgflag.png'
import Tservices from '../assets/Tservices'
import Tprocess from '../assets/Tprocess'
import Workwithus from '../assets/Workwithus'
import Successstory from '../assets/Successstory'
import Slider2 from '../assets/slider2'
import Getintouch from '../assets/Getintouch'
import Smalllogos from '../assets/Smalllogos'

const Home = () => {
  return (<div className='lg:h-[6304px] md:h-[4700px] h-[4855px]'>
    <div className='mt-[-80px]  lg:h-[729.33px] h-[500px] md:h-[510px] overflow-hidden z-0 '>
      <img className='  w-screen h-[500px] lg:h-[728.33px] ' src={topbg} alt='M'/>
      <img className='lg:h-[692px] lg:w-[688px] h-[392px] w-[388px] mt-[-500px] lg:mt-[-730px] lg:ml-[920px] ml-[100px] md:ml-[480px] opacity-[10%]' src={netweb} alt='M'/>
      </div>
      <div className='lg:mt-[-530px] lg:scale-100 md:scale-90 scale-75 lg:ml-[180px] md:ml-[30px] ml-[-30px] mt-[-440px] text-white'>
        <h1 className='text-[48px] font-bold leading-[68.4px] tracking-wider GorditaM'>LetterCrafts</h1> 
        
    <h1 className='lg:w-[460px] md:w-[460px] font-normal text-[16px] Gordita'><br/>Professional translators delivering<span className='font-semibold'> High Quality, Fast & Affordable</span> translation services in <img className='size-[19px] inline' src={sgflag} alt='M'/>&nbsp;Singapore.</h1><br/>
    <button className='Gordita text-[14px] font-medium px-[24px] py-[12px] rounded-[100px] bg-[#3D65FF]'>Learn More →</button>
      </div>
      <div className='lg:ml-[802px] rounded-md md:ml-[320px] ml-[-53px] md:mt-[-80px] lg:mt-[-100px] mt-[-50px] lg:w-auto w-[600px] lg:scale-100 md:scale-75 scale-50  sticky h-[236px] overflow-hidden '>
<Slider1/>
      </div>
 <Smalllogos/>     
<Tservices/>
<Tprocess/>
<Workwithus textColor1="#101D2E" textcolor2="#697587" />
<Successstory/>
<div className='lg:w-[1500px] md:w-[1170px] w-[790px] lg:scale-100 lg:ml-0 scale-[54%] md:scale-75 md:ml-[-170px] ml-[-215px] lg:mt-0 mt-[-150px] md:mt-0'>
<Slider2/>
</div>
<Getintouch/>
<br/><br/><br/><br/><br/>
    </div>
  )
}

export default Home