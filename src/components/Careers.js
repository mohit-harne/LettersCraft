import topbg from '../assets/images/topbg.png';
import netweb from '../assets/images/netweb.png';
import React from 'react';
import deskbg from '../assets/images/deskbg.png'
import tick from '../assets/images/tick.png'
import look1 from '../assets/images/look1.png'
import look2 from '../assets/images/look2.png'
import look3 from '../assets/images/look3.png'
import look4 from '../assets/images/look4.png'
import bluewavebg from '../assets/images/bluewavebg.png';
import dottedline from '../assets/images/dottedline.png';
import tpicon1 from '../assets/images/tpicon1.png';
import tpicon2 from '../assets/images/tpicon2.png';
import linkedin from '../assets/images/linkedin.png'
import fileicon from '../assets/images/fileicon.png'
import '../assets/assets.css';
const Careers = ({ showBackground = true, headingColor = 'white', dottedlineSrc = dottedline }) => {
  return (
    <div className='lg:h-[2410px] md:h-[2300px] h-[2100px]'>
      <div className='mt-[-80px] lg:h-[729.33px] h-[1000px] md:h-[620px] overflow-hidden sticky z-20'>
      <div className='relative'>
  <img className=' w-screen h-[500px] lg:h-[728.33px] ' src={deskbg} alt='TopBackground' />
 <img className='absolute top-0 left-0 w-full h-full opacity-[80%]' src={topbg} alt='OverlayImage' />
</div>
        
        <img className='lg:h-[692px] lg:w-[688px] h-[392px] w-[388px] mt-[-500px] lg:mt-[-730px] lg:ml-[920px] ml-[100px] md:ml-[480px] opacity-[10%]' src={netweb} alt='OverlayImage'/>
      </div>
      <div className='sticky z-20 grid gap-6 lg:mt-[-580px] md:mt-[-620px] lg:scale-100 md:scale-75 scale-[70%] lg:ml-[180px] md:ml-[-70px] ml-[-30px] mt-[-1000px] text-white '>
        <h1 className='text-[48px] font-bold leading-[68.4px] tracking-wider lg:w-[580px] md:w-[400px]'>We are always looking for the best of the best</h1>
        <h1 className='text-[16px] font-normal lg:w-[540px] md:w-[400px]'>Developers, designers, product managers, planners, creatives and operations specialists. Get in touch with us, tell us your interests and skills, and we’ll let you know when a position that fits you opens up</h1>
       <h1 className='text-[24px] font-medium'>Why work with us</h1>
       <div className='grid gap-2'>
       <h1 className='text-[16px] font-medium'><img className='inline h-[24px] w-[24px]' src={tick} alt='M'/>&nbsp;Fair and Transparent</h1>
       <h1 className='text-[16px] font-medium'><img className='inline h-[24px] w-[24px]' src={tick} alt='M'/>&nbsp;Work remotely and strike work life balance</h1>
       <h1 className='text-[16px] font-medium'><img className='inline h-[24px] w-[24px]' src={tick} alt='M'/>&nbsp;Always open to pushing the limits and exploring new technology & ideas .</h1>
       </div>
      </div>
      <div className='grid justify-center lg:mt-[250px] md:mt-[0px] mt-[-150px] gap-10 lg:scale-100 md:scale-90 scale-[65%]'>
        <h1 className='text-[#101D2E] text-[36px] font-medium'>We are constantly looking for</h1>
        <div className='grid grid-flow-col lg:grid-rows-1 md:grid-rows-2 grid-rows-2 gap-[21px] md:gap-x-[100px] lg:gap-x-[21px] justify-center'>
<div className='h-[452px] w-[275px] bg-white rounded-[16px] shadow-md justify-center grid p-2'>
<img className='w-[219px] h-[191px]' src={look1} alt='M'/>
               <div className='w-[200px]'>
<h1 className='text-[#101D2E] text-[24px] font-medium'>Translators</h1> <br/>
<h1 className='text-[#697587] text-[16px] font-normal'>Dapibus eget mi et eu ut tortor ipsum. Volutpat nec fusce mattis consectetur velit sit nunc urna. Id massa.</h1>
                </div>
</div>
<div className='h-[452px] w-[275px] bg-white rounded-[16px] shadow-md justify-center grid p-2'>
<img className='w-[219px] h-[191px]' src={look2} alt='M'/>
               <div className='w-[200px]'>
<h1 className='text-[#101D2E] text-[24px] font-medium'>Industry Bloggers</h1> <br/>
<h1 className='text-[#697587] text-[16px] font-normal'>Dapibus eget mi et eu ut tortor ipsum. Volutpat nec fusce mattis consectetur velit sit nunc urna. Id massa.</h1>
                </div>
</div>
<div className='h-[452px] w-[275px] bg-white rounded-[16px] shadow-md justify-center grid p-2'>
<img className='w-[219px] h-[191px]' src={look3} alt='M'/>
               <div className='w-[200px]'>
<h1 className='text-[#101D2E] text-[24px] font-medium'>Digital Marketing experts</h1> <br/>
<h1 className='text-[#697587] text-[16px] font-normal'>Dapibus eget mi et eu ut tortor ipsum. Volutpat nec fusce mattis consectetur velit sit nunc urna. Id massa.</h1>
                </div>
</div>
<div className='h-[452px] w-[275px] bg-white rounded-[16px] shadow-md justify-center grid p-2'>
<img className='w-[219px] h-[191px]' src={look4} alt='M'/>
               <div className='w-[200px]'>
<h1 className='text-[#101D2E] text-[24px] font-medium'>Social Media Influencers</h1> <br/>
<h1 className='text-[#697587] text-[16px] font-normal'>Dapibus eget mi et eu ut tortor ipsum. Volutpat nec fusce mattis consectetur velit sit nunc urna. Id massa.</h1>
                </div>
</div>
        </div>
      </div>
      <div className='lg:h-[1013px] md:h-[800px] h-[920px] lg:mt-[120px] md:mt-[50px] mt-[-150px]'>
      {showBackground && (
        <img className='lg:h-[1013px] md:h-[800px] h-[920px] w-screen' src={bluewavebg} alt='M'/>
      )}
      <div className={`lg:mt-[-950px] md:mt-[-850px] ${showBackground ? 'mt-[-1150px]' : 'mt-[-200px]'} lg:scale-100 md:scale-[70%] scale-[60%] ml-[-90px] md:ml-[-150px] lg:ml-[200px] absolute flex flex-col items-start lg:items-center md:items-center`}>
        <h1 className={`text-[36px] lg:my-[32px] md:my-[32px] my-[150px] font-medium tracking-wider`} style={{ color: headingColor }}>
        Process for Talent to be onboarded
        </h1>
        <img className='lg:h-[626px] md:h-[626px] h-[800px] lg:ml-0 md:ml-0 ml-[30px]' src={dottedlineSrc} alt='M'/>
        <div className='grid lg:gap-[100px] md:gap-[100px] gap-[200px] lg:mt-[-560px] md:mt-[-560px] mt-[-800px]'>
          <div className='bg-[#3D65FF] rounded-full p-4'><img className='h-[36px] w-[36px]' src={tpicon1} alt='M'/> </div>
          <div className='bg-[#3D65FF] rounded-full p-4'><img className='h-[36px] w-[36px]' src={linkedin} alt='M'/> </div>
          <div className='bg-[#3D65FF] rounded-full p-4'><img className='h-[36px] w-[36px]' src={tpicon2} alt='M'/> </div>
          <div className='bg-[#3D65FF] rounded-full p-4'><img className='h-[36px] w-[36px]' src={fileicon} alt='M'/> </div>
        </div>
        <div className='grid lg:grid-flow-col md:grid-flow-col grid-flow-row ml-[110px] lg:ml-0 md:ml-0 lg:mt-[-610px] md:mt-[-610px] mt-[-900px] gap-[140px] md:gap-[200px] lg:gap-[200px]'>
          <div className='grid lg:gap-[190px] md:gap-[190px] gap-[110px] md:mb-[190px] lg:mb-[190px]'>
            <div className='w-[452px] p-6 bg-white rounded-[16px] chat-bubble shadow-lg hover:scale-105 transition-all'>
              <h1 className='text-[16px] font-medium'>Inbox</h1><br/>
              <h1 className='text-[16px] font-normal pr-10 text-[#697587]'>Email us your CV / Resume <span className='text-[#3D65FF]'>info@lettercarfts.org</span></h1>
            </div>
            <div className='w-[452px] p-6 bg-white rounded-[16px] chat-bubble shadow-lg hover:scale-105 transition-all'>
              <h1 className='text-[16px] font-medium'>NDA</h1><br/>
              <h1 className='text-[16px] font-normal pr-10 text-[#697587]'>Once you are short listed → you will receive an NDA</h1>
            </div>
          </div>
          <div className='grid lg:gap-[190px] md:gap-[190px] gap-[120px] lg:mt-[170px] lg:mb-[20px] md:mt-[170px] md:mb-[20px]'>
            <div className='w-[452px] p-6 bg-white rounded-[16px] chat-bubble2 shadow-lg hover:scale-105 transition-all'>
              <h1 className='text-[16px] font-medium'>LinkedIn</h1><br/>
              <h1 className='text-[16px] font-normal pr-10 text-[#697587]'>Stay connect on our <span className='text-[#697587] font-bold'>LinkedIn</span>  page for job posts and updates</h1>
            </div>
            <div className='w-[452px] p-6 bg-white rounded-[16px] chat-bubble2 shadow-lg border-[0.3px] hover:scale-105 transition-all'>
              <h1 className='text-[16px] font-medium'>Projects</h1><br/>
              <h1 className='text-[16px] font-normal pr-10 text-[#697587]'>Our project managers will then start contacting you on various projects / ideas.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  )
}

export default Careers