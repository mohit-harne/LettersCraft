import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certificate from '../assets/images/certificate.png'

const Slider3 = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false
      };
  return (
    

  <div className='  w-[1400px]'>
  <Slider {...settings}>

  <div className='h-[415px] w-[275px] rounded-[20px] bg-white'>
<img className='h-[314px] w-[275px]' src={certificate} alt='M'/><br/>
<div className='grid justify-center'>
<h1 className='text-[16px] font-medium text-[#101D2E] w-[200px]'>Globalization and Localization Association (GALA)</h1>
</div>
  </div>
  <div className='h-[415px] w-[275px] rounded-[20px] bg-white'>
<img className='h-[314px] w-[275px]' src={certificate} alt='M'/><br/>
<div className='grid justify-center '>
<h1 className='text-[16px] font-medium text-[#101D2E] w-[200px]'>Globalization and Localization Association (GALA)</h1>
</div>
  </div>
  <div className='h-[415px] w-[275px] rounded-[20px] bg-white'>
<img className='h-[314px] w-[275px]' src={certificate} alt='M'/><br/>
<div className='grid justify-center '>
<h1 className='text-[16px] font-medium text-[#101D2E] w-[200px]'>Globalization and Localization Association (GALA)</h1>
</div>
  </div>
  <div className='h-[415px] w-[275px] rounded-[20px] bg-white'>
<img className='h-[314px] w-[275px]' src={certificate} alt='M'/><br/>
<div className='grid justify-center '>
<h1 className='text-[16px] font-medium text-[#101D2E] w-[200px]'>Globalization and Localization Association (GALA)</h1>
</div>
  </div>
  <div className='h-[415px] w-[275px] rounded-[20px] bg-white'>
<img className='h-[314px] w-[275px]' src={certificate} alt='M'/><br/>
<div className='grid justify-center '>
<h1 className='text-[16px] font-medium text-[#101D2E] w-[200px]'>Globalization and Localization Association (GALA)</h1>
</div>
  </div>

 
  
 </Slider>
</div>



  )
}

export default Slider3;


    