import topbg from '../assets/images/topbg.png';
import netweb from '../assets/images/netweb.png';
import React from 'react';
import Git1 from '../assets/Git1';
import sgflag from '../assets/images/sgflag.png'
import Slider4 from '../assets/Slider4';
import Tprocess from '../assets/Tprocess';
import Workwithus from '../assets/Workwithus';
import blackDottedline from '../assets/images/blackDottedline.png'
import bluewavebg from '../assets/images/bluewavebg.png'
import Whyletter from '../assets/Whyletter';
import Frequent from '../assets/Frequent';
const CT = () => {
  return (
    <div className='lg:h-[5043px] md:h-[3878px] h-[4273px]'>
      <div className='mt-[-80px] lg:h-[729.33px] h-[1000px] md:h-[620px] overflow-hidden sticky z-20'>
        <img className='w-screen h-[1000px] lg:h-[728.33px] md:h-[620px]' src={topbg} alt='Top Background'/>
        <img className='lg:h-[692px] lg:w-[688px] h-[392px] w-[388px] mt-[-500px] lg:mt-[-730px] lg:ml-[920px] ml-[100px] md:ml-[480px] opacity-[10%]' src={netweb} alt='OverlayImage'/>
      </div>
      <div className='sticky z-20 grid gap-6 lg:mt-[-580px] md:mt-[-620px] lg:scale-100 md:scale-75 scale-75 lg:ml-[180px] md:ml-[-70px] ml-[-30px] mt-[-960px] text-white '>
        <h1 className='text-[48px] font-bold leading-[68.4px] tracking-wider lg:w-[560px] md:w-[400px]'>Certified & Notarised Translations in<br/> <img className='size-[48px] inline' src={sgflag} alt='M'/>&nbsp;Singapore</h1>
        <h1 className='text-[16px] font-normal lg:w-[540px] md:w-[400px]'>If you are moving into Singapore or moving to a different country, there are a wealth of personal documents that you will need translate. </h1>
        <h1 className='text-[16px] font-normal lg:w-[540px] md:w-[400px]'>Embassies, State Court, MOM, MOE, LTA and ACRA. The ICA requires that the translated documents for visa applications are also notarised and authenticated by SAL. We arrange this for you as part of our Certified Translations service.</h1>
        <button className='text-[14px] bg-[#3D65FF] px-4 py-3 rounded-[100px] lg:w-[450px] w-[300px] text-white font-medium'>Personal Documents Translation : $40 only and No GST.</button>
      </div>
      <div className='lg:mt-[-440px] md:mt-[-480px] sticky z-20'><Git1 /></div>
<div className='lg:mt-[100px] md:mt-[00px] mt-[-100px] lg:ml-[180px] md:ml-[0px] ml-[-90px] lg:scale-100 md:scale-90 scale-[60%]'><h1 className='text-[36px] font-medium text-[#101D2E] w-[360px]'>Samples of certified translations</h1><br/>
        <Slider4/></div>
        <div className='lg:h-[1013px] md:h-[620px] h-[420px] lg:mt-[120px] md:mt-[50px] mt-[-50px] '>
  <img className='lg:h-[1013px] md:h-[620px] h-[420px] w-screen ' src={bluewavebg} alt='M'/>
  <div className='lg:mt-[-1020px] md:mt-[-690px] mt-[-590px]'>
  <Workwithus textColor1="#FFFFFF" textcolor2="#FFFFFF" />
  </div>
  </div>
  <div className='lg:mt-[1000px] md:mt-[750px] mt-[50px] h-[0px]'>
  <Tprocess 
  showBackground={false} 
  headingColor='black' 
  dottedlineSrc={blackDottedline} 
/>
  </div>
  <div className='lg:h-[934px] md:h-[820px] h-[820px] lg:mt-[0px] md:mt-[-50px] mt-[920px] '>
  <img className='lg:h-[934px] md:h-[820px] h-[820px] w-screen ' src={bluewavebg} alt='M'/>
  <div className='lg:mt-[-920px] md:mt-[-830px] mt-[-1070px]'>
  <Whyletter textColor="white" />
  </div>
  </div>
  <Frequent/>
    </div>
  )
}

export default CT