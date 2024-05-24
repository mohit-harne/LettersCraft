import topbg from '../assets/images/topbg.png';
import netweb from '../assets/images/netweb.png';
import React from 'react';
import '../assets/assets.css';
import labbg from '../assets/images/labbg.png'
import Git1 from '../assets/Git1';
import Smalllogos from '../assets/Smalllogos'
import bluewavebg from '../assets/images/bluewavebg.png'
import workinggirl from '../assets/images/workinggirl.png'
import Tprocess from '../assets/Tprocess';
import blackDottedline from '../assets/images/blackDottedline.png'
import Workwithus from '../assets/Workwithus';
import Slider2 from '../assets/slider2';
const IP = () => {
  return (
    <div className='lg:h-[4750px] md:h-[3500px] h-[3400px]'>
      <div className='mt-[-80px] lg:h-[729.33px] h-[1000px] md:h-[620px] overflow-hidden sticky z-20'>
      <div className='relative'>
  <img className=' w-screen h-[500px] lg:h-[728.33px] ' src={labbg} alt='TopBackground' />
 <img className='absolute top-0 left-0 w-full h-full opacity-[80%]' src={topbg} alt='OverlayImage' />
</div>
        
        <img className='lg:h-[692px] lg:w-[688px] h-[392px] w-[388px] mt-[-500px] lg:mt-[-730px] lg:ml-[920px] ml-[100px] md:ml-[480px] opacity-[10%]' src={netweb} alt='OverlayImage'/>
      </div>
      <div className='sticky z-20 grid gap-6 lg:mt-[-560px] md:mt-[-580px] lg:scale-100 md:scale-75 scale-[70%] lg:ml-[180px] md:ml-[-70px] ml-[-30px] mt-[-980px] text-white '>
        <h1 className='text-[48px] font-bold leading-[68.4px] tracking-wider lg:w-[580px] md:w-[400px] w-[500px]'>Lorem ipsum dolor sit amet consectetur. Praesent sit enim.</h1>
        <h1 className='text-[16px] font-normal lg:w-[540px] md:w-[400px]'>Lorem ipsum dolor sit amet consectetur. Sed id nibh faucibus dolor sed. Sit sed justo viverra massa in ut. Ut dignissim turpis egestas faucibus.</h1>
      </div>
      <div className='lg:mt-[-240px] md:mt-[-430px] mt-[-130px] sticky z-20'><Git1/></div>
      <div className='lg:mt-[-80px] md:mt-[-50px] mt-[-50px]'><Smalllogos/></div> 
      <div className='lg:h-[793px] md:h-[700px] h-[680px] lg:mt-[120px] md:mt-[50px] mt-[40px] '>
  <img className='lg:h-[793px] md:h-[700px] h-[680px] w-screen ' src={bluewavebg} alt='M'/>
  <div className='flex lg:flex-row md:flex-row flex-col justify-center lg:items-end md:items-end items-center lg:gap-[160px] md:gap-[10px] text-white lg:mt-[-690px]  md:mt-[-720px] mt-[-830px] lg:scale-100 md:scale-[80%] scale-[60%]'>
  <img className='h-[411px] w-[446px]' src={workinggirl} alt='M'/>
        <div className='w-[590px] grid gap-[50px] '>
          <h1 className='text-[36px] font-medium'>Lorem ipsum dolor sit amet consectetur</h1>
          <h1 className='text-[16px] font-normal'>Lorem ipsum dolor sit amet consectetur. Vitae molestie venenatis pulvinar sed ullamcorper proin non nascetur quis. Aliquam donec sem vitae duis. Est odio massa facilisis nibh nullam nibh turpis odio aenean. Sed porta porta in auctor facilisi elit sed. Fusce viverra fames at aliquam urna vitae.<br/><br/> Et nec tellus ac purus bibendum in. Diam donec ligula amet mauris urna. Ipsum nibh odio cras nec pulvinar consectetur vitae. Suspendisse enim odio sit feugiat tortor sed ornare tellus neque. Sed at nisl vel mattis. Enim pharetra facilisis tempus commodo. Vehicula lacus pellentesque id amet in venenatis quis phasellus. Dui sit est ullamcorper ultrices. Purus placerat placerat senectus eu euismod amet commodo velit. Eu id et mattis nec porta sed nisi sem ultrices. Fames viverra maecenas quis vitae id nisi. Laoreet praesent sapien ultricies aliquet faucibus augue neque sollicitudin.<br/><br/> Mattis et diam sapien nulla at ut condimentum. Fermentum nec faucibus risus mattis hac hendrerit amet. Ipsum sit mus pellentesque volutpat malesuada eu urna. Enim nunc urna molestie pharetra feugiat euismod sed. Porttitor hendrerit arcu sed ac lobortis.</h1>
        </div>
    </div>
  </div>
  <div className='lg:mt-[1000px] md:mt-[750px] mt-[50px] h-[0px]'>
  <Tprocess 
  showBackground={false} 
  headingColor='black' 
  dottedlineSrc={blackDottedline} 
/></div>
<div className='lg:h-[1013px] md:h-[620px] h-[420px] lg:mt-[0px] md:mt-[-50px] mt-[880px] '>
  <img className='lg:h-[1013px] md:h-[620px] h-[420px] w-screen ' src={bluewavebg} alt='M'/>
  <div className='lg:mt-[-1020px] md:mt-[-690px] mt-[-590px]'>
  <Workwithus textColor1="#FFFFFF" textcolor2="#FFFFFF" title="Why they love us" />
  </div>
  </div>
  <div className='lg:w-[1500px] md:w-[1170px] w-[790px] lg:scale-100 lg:ml-0 scale-[54%] md:scale-75 md:ml-[-170px] ml-[-215px] lg:mt-0 mt-[-150px] md:mt-0'>
<Slider2/>
</div>
      </div>
  )
}

export default IP