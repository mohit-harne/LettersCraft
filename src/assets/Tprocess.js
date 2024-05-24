import React from 'react';
import bluewavebg from '../assets/images/bluewavebg.png';
import dottedline from '../assets/images/dottedline.png';
import tpicon1 from '../assets/images/tpicon1.png';
import tpicon2 from '../assets/images/tpicon2.png';
import tpicon3 from '../assets/images/tpicon3.png';
import tpicon4 from '../assets/images/tpicon4.png';
import './assets.css';

const Tprocess = ({ showBackground = true, headingColor = 'white', dottedlineSrc = dottedline }) => {
  return (
    <div className='lg:h-[1013px] md:h-[800px] h-[920px] lg:mt-[120px] md:mt-[50px] mt-[-150px]'>
      {showBackground && (
        <img className='lg:h-[1013px] md:h-[800px] h-[920px] w-screen' src={bluewavebg} alt='M'/>
      )}
      <div className={`lg:mt-[-950px] md:mt-[-850px] ${showBackground ? 'mt-[-1150px]' : 'mt-[-200px]'} lg:scale-100 md:scale-[70%] scale-[60%] ml-[-90px] md:ml-[-150px] lg:ml-[200px] absolute flex flex-col items-start lg:items-center md:items-center`}>
        <h1 className={`text-[36px] lg:my-[32px] md:my-[32px] my-[150px] font-medium tracking-wider`} style={{ color: headingColor }}>
          Translation Process
        </h1>
        <img className='lg:h-[626px] md:h-[626px] h-[800px] lg:ml-0 md:ml-0 ml-[30px]' src={dottedlineSrc} alt='M'/>
        <div className='grid lg:gap-[100px] md:gap-[100px] gap-[200px] lg:mt-[-560px] md:mt-[-560px] mt-[-800px]'>
          <div className='bg-[#3D65FF] rounded-full p-4'><img className='h-[36px] w-[36px]' src={tpicon1} alt='M'/> </div>
          <div className='bg-[#3D65FF] rounded-full p-4'><img className='h-[36px] w-[36px]' src={tpicon2} alt='M'/> </div>
          <div className='bg-[#3D65FF] rounded-full p-4'><img className='h-[36px] w-[36px]' src={tpicon3} alt='M'/> </div>
          <div className='bg-[#3D65FF] rounded-full p-4'><img className='h-[36px] w-[36px]' src={tpicon4} alt='M'/> </div>
        </div>
        <div className='grid lg:grid-flow-col md:grid-flow-col grid-flow-row ml-[110px] lg:ml-0 md:ml-0 lg:mt-[-610px] md:mt-[-610px] mt-[-900px] gap-[140px] md:gap-[200px] lg:gap-[200px]'>
          <div className='grid lg:gap-[190px] md:gap-[190px] gap-[110px] md:mb-[190px] lg:mb-[190px]'>
            <div className='w-[472px] p-6 bg-white rounded-[16px] chat-bubble shadow-lg hover:scale-105 transition-all'>
              <h1 className='text-[16px] font-medium'>Get a quote</h1><br/>
              <h1 className='text-[16px] font-normal pr-10'>Email your documents to <span className='text-[#3D65FF]'>info@lettercrafts.org</span>  or fill up a short <span className='text-[#3D65FF]'>form</span> to get a quote in 30 mins.</h1>
            </div>
            <div className='w-[472px] p-6 bg-white rounded-[16px] chat-bubble shadow-lg hover:scale-105 transition-all'>
              <h1 className='text-[16px] font-medium'>Receive translation</h1><br/>
              <h1 className='text-[16px] font-normal pr-10'>Translated documents can be emailed or delivered to your address.</h1>
            </div>
          </div>
          <div className='grid lg:gap-[190px] md:gap-[190px] gap-[120px] lg:mt-[170px] lg:mb-[20px] md:mt-[170px] md:mb-[20px]'>
            <div className='w-[472px] p-6 bg-white rounded-[16px] chat-bubble2 shadow-lg hover:scale-105 transition-all'>
              <h1 className='text-[16px] font-medium'>We begin translation</h1><br/>
              <h1 className='text-[16px] font-normal pr-10'>Industry experts and native language translators work on your requirements.</h1>
            </div>
            <div className='w-[472px] p-6 bg-white rounded-[16px] chat-bubble2 shadow-lg border-[0.3px] hover:scale-105 transition-all'>
              <h1 className='text-[16px] font-medium'>Post translation support</h1><br/>
              <h1 className='text-[16px] font-normal pr-10'>You are welcome to provide any feedback or ask for corrections. We assure 6 months post project support to all our clients.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tprocess;
